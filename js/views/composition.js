/* 瞬間英作文
 * 日本語を見て数秒以内に英語を「口に出す」トレーニング。
 * 出題は SRS が自動で選ぶ：復習期限のカード優先＋新規は 1 日の枠内で少しずつ。
 * コンテンツが蓄積しても、ユーザーが見るのは「今日のセッション」だけ。
 */
(function () {
  var S = KE.storage;
  var TIME_LIMIT = 10; // 秒

  function allDecks() {
    var decks = KE_DATA.sentenceDecks.slice();
    var extra = (KE_DATA.extraSentences || []);
    if (extra.length) {
      decks = decks.concat([{
        id: "extra", name: "週次配信", level: "★★☆",
        description: "毎週自動配信される追加の文", items: extra
      }]);
    }
    return decks;
  }

  function itemById(id) {
    var hit = null;
    allDecks().forEach(function (d) {
      d.items.forEach(function (i) { if (i.id === id) hit = i; });
    });
    return hit;
  }

  function allIds() {
    var ids = [];
    allDecks().forEach(function (d) { d.items.forEach(function (i) { ids.push(i.id); }); });
    return ids;
  }

  KE.views.composition = function (el) {
    renderHome(el);
  };

  function renderHome(el) {
    var ids = allIds();
    var info = KE.srs.sessionInfo(ids);
    var learned = KE.srs.learnedCount(ids);
    var matured = KE.srs.maturedCount(ids);
    var todayNew = Math.min(info.fresh, info.newQuota);

    var html = '<h2 class="view-title">⚡ 瞬間英作文</h2>' +
      '<p class="view-desc">日本語を見たら <strong>' + TIME_LIMIT + ' 秒以内に声に出して</strong>英語にします。今日やるべきカードはアプリが自動で選びます（復習期限のもの優先＋新規は 1 日 8 枚まで）。</p>';

    /* 今日のセッション（メインの入口） */
    html += '<div class="card" style="border-left:3px solid var(--series-1)"><div class="flex-between">' +
      '<div><h3>▶ 今日のセッション</h3>' +
      '<p class="sub">復習期限 <strong>' + info.due + '</strong> 枚 ＋ 新規 <strong>' + todayNew + '</strong> 枚' +
      (info.due === 0 && todayNew === 0 ? ' ｜ 今日の分は完了です 🎉' : "") + "</p></div>" +
      '<button class="btn btn-primary btn-lg" id="today-btn">' +
      (info.due === 0 && todayNew === 0 ? "おかわり（ランダム10枚）" : "はじめる") + "</button></div>" +
      '<p class="sub mt-8">全 ' + ids.length + " 文 ｜ 学習済み " + learned + " ｜ 定着 " + matured + "</p></div>";

    /* デッキ一覧はアーカイブとして折りたたみ */
    html += '<div class="card mt-16"><div class="flex-between" style="cursor:pointer" id="deck-toggle">' +
      '<h3>📦 デッキ別に練習する（アーカイブ）</h3><span class="tag" id="deck-arrow">▼ 開く</span></div>' +
      '<div id="deck-list" style="display:none">';
    allDecks().forEach(function (deck) {
      var dIds = deck.items.map(function (i) { return i.id; });
      html += '<div class="flex-between" style="padding:10px 0;border-bottom:1px solid var(--gridline)">' +
        '<div><strong style="font-size:14px">' + KE.esc(deck.name) + '</strong> <span class="tag">' + deck.level + " ｜ " + dIds.length + "文 ｜ 定着 " + KE.srs.maturedCount(dIds) + "</span>" +
        '<div class="sub">' + KE.esc(deck.description) + "</div></div>" +
        '<button class="btn btn-sm" data-deck="' + deck.id + '">練習</button></div>';
    });
    html += "</div></div>";

    el.innerHTML = html;

    document.getElementById("today-btn").addEventListener("click", function () {
      startSession(el, KE.srs.buildSession(allIds(), 10), "今日のセッション");
    });
    document.getElementById("deck-toggle").addEventListener("click", function () {
      var list = document.getElementById("deck-list");
      var open = list.style.display !== "none";
      list.style.display = open ? "none" : "";
      document.getElementById("deck-arrow").textContent = open ? "▼ 開く" : "▲ 閉じる";
    });
    el.querySelectorAll("[data-deck]").forEach(function (b) {
      b.addEventListener("click", function () {
        var deck = allDecks().filter(function (d) { return d.id === b.getAttribute("data-deck"); })[0];
        var pool = deck.items.map(function (i) { return i.id; }).sort(function () { return Math.random() - 0.5; }).slice(0, 10);
        startSession(el, pool, deck.name);
      });
    });
  }

  function startSession(el, poolIds, label) {
    if (!poolIds.length) {
      // 期限なし・新規枠なし → 学習済みからランダムで自主練
      poolIds = allIds().sort(function () { return Math.random() - 0.5; }).slice(0, 10);
    }
    var pool = poolIds.map(itemById).filter(Boolean);

    var idx = 0, correct = 0;
    var timerId = null;
    KE.sessionTimer.start();

    function stopTimer() {
      if (timerId) { clearInterval(timerId); timerId = null; }
    }

    function showCard() {
      stopTimer();
      KE.speech.stop();
      var item = pool[idx];
      var html = '<div class="practice-stage">' +
        '<div class="practice-progress"><span>' + KE.esc(label) + "</span><span>" + (idx + 1) + " / " + pool.length + "</span></div>" +
        '<div class="timer-track"><div class="timer-fill" id="timer-fill" style="width:100%"></div></div>' +
        '<p class="sub">声に出して英語にしましょう：</p>' +
        '<p class="prompt-ja">' + KE.esc(item.ja) + "</p>" +
        '<div class="btn-row mt-16">' +
        '<button class="btn btn-primary" id="reveal-btn">答えを見る</button>' +
        (KE.speech.recognitionAvailable() ? '<button class="btn" id="mic-btn">🎤 音声で答える</button>' : "") +
        "</div>" +
        '<div id="mic-result"></div>' +
        '<div id="answer-area"></div>' +
        "</div>" +
        '<p class="center mt-8"><a href="#/composition" class="tag">セッションを中断</a></p>';
      el.innerHTML = html;

      // カウントダウン（切れたら自動で答えを表示）
      var remain = TIME_LIMIT * 10;
      var fill = document.getElementById("timer-fill");
      timerId = setInterval(function () {
        remain--;
        fill.style.width = (remain / (TIME_LIMIT * 10)) * 100 + "%";
        if (remain <= TIME_LIMIT * 3) fill.classList.add("warn");
        if (remain <= 0) { reveal(); }
      }, 100);

      document.getElementById("reveal-btn").addEventListener("click", reveal);

      var micBtn = document.getElementById("mic-btn");
      if (micBtn) {
        micBtn.addEventListener("click", function () {
          micBtn.disabled = true;
          micBtn.textContent = "🎤 聞き取り中…";
          KE.speech.recognizeOnce(function (text) {
            var sim = Math.round(KE.speech.similarity(text, item.en) * 100);
            document.getElementById("mic-result").innerHTML =
              '<p class="sub mt-8">あなたの発話：「' + KE.esc(text) + "」（モデル文との一致 " + sim + "%）</p>";
            reveal();
          }, function () {
            document.getElementById("mic-result").innerHTML = '<p class="warn-note mt-8">音声を認識できませんでした。マイクの許可を確認してください。</p>';
            micBtn.disabled = false;
            micBtn.textContent = "🎤 音声で答える";
          });
        });
      }

      function reveal() {
        stopTimer();
        var area = document.getElementById("answer-area");
        if (!area || area.innerHTML) return;
        area.innerHTML = '<div class="answer-area">' +
          '<p class="answer-en">' + KE.esc(item.en) + ' <button class="btn btn-sm btn-icon" id="play-btn" title="読み上げ">🔊</button></p>' +
          (item.note ? '<p class="answer-note">💡 ' + KE.esc(item.note) + "</p>" : "") +
          '<p class="sub mt-8">モデル文を聞いて、もう一度声に出してから自己評価しましょう。</p>' +
          '<div class="grade-row">' +
          '<button class="btn btn-grade-ng" data-g="0">✗ できなかった</button>' +
          '<button class="btn btn-grade-mid" data-g="1">△ あやしい</button>' +
          '<button class="btn btn-grade-ok" data-g="2">○ できた</button>' +
          "</div></div>";
        KE.speech.speak(item.en);
        document.getElementById("play-btn").addEventListener("click", function () {
          KE.speech.speak(item.en);
        });
        area.querySelectorAll("[data-g]").forEach(function (b) {
          b.addEventListener("click", function () {
            var g = parseInt(b.getAttribute("data-g"), 10);
            KE.srs.grade(item.id, g);
            if (g === 2) correct++;
            idx++;
            if (idx < pool.length) showCard();
            else finish();
          });
        });
      }
    }

    function finish() {
      stopTimer();
      var minutes = KE.sessionTimer.minutes();
      S.addLog("composition", minutes, pool.length, correct);
      KE.updateHeader();
      var rate = Math.round(100 * correct / pool.length);
      el.innerHTML = '<div class="practice-stage session-result">' +
        '<div class="big">' + (rate >= 80 ? "🎉" : rate >= 50 ? "👍" : "💪") + "</div>" +
        '<div class="score">' + correct + " / " + pool.length + " 文（" + rate + "%）</div>" +
        '<p class="sub">学習時間 ' + minutes + " 分を記録しました。<br>できなかった文は忘れる前に再出題されます。</p>" +
        '<div class="btn-row mt-16" style="justify-content:center">' +
        '<a class="btn btn-primary" href="#/composition" id="back-btn">セッション一覧へ</a>' +
        '<a class="btn" href="#/dashboard">ホームへ戻る</a></div></div>';
    }

    showCard();
  }
})();
