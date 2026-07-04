/* 瞬間英作文
 * 日本語を見て数秒以内に英語を「口に出す」トレーニング。
 * 知っている英語を「使える英語」に変える、スピーキングの土台づくり。
 * 出題は間隔反復（SRS）で管理され、忘れかけた文が優先的に出る。
 */
(function () {
  var S = KE.storage;
  var TIME_LIMIT = 10; // 秒

  KE.views.composition = function (el) {
    renderDeckList(el);
  };

  function deckIds(deck) {
    return deck.items.map(function (i) { return i.id; });
  }

  function renderDeckList(el) {
    var html = '<h2 class="view-title">⚡ 瞬間英作文</h2>' +
      '<p class="view-desc">日本語を見たら <strong>' + TIME_LIMIT + ' 秒以内に声に出して</strong>英語にします。頭で考えるのではなく、口が勝手に動くまで反復するのがポイント。結果は間隔反復（SRS）で管理され、忘れる直前に再出題されます。</p>';

    KE_DATA.sentenceDecks.forEach(function (deck) {
      var ids = deckIds(deck);
      var due = KE.srs.dueIds(ids).length;
      var learned = KE.srs.learnedCount(ids);
      var matured = KE.srs.maturedCount(ids);
      html += '<div class="card mb-8"><div class="flex-between">' +
        '<div><h3>' + KE.esc(deck.name) + ' <span class="tag">' + deck.level + "</span></h3>" +
        '<p class="sub">' + KE.esc(deck.description) + "</p>" +
        '<p class="sub mt-8">全 ' + ids.length + " 文 ｜ 学習済み " + learned + " ｜ 定着 " + matured +
        (due ? ' ｜ <strong style="color:var(--series-1)">今日の復習 ' + due + " 文</strong>" : " ｜ 今日の復習なし") + "</p></div>" +
        '<button class="btn btn-primary" data-deck="' + deck.id + '">はじめる</button>' +
        "</div></div>";
    });

    el.innerHTML = html;
    el.querySelectorAll("[data-deck]").forEach(function (b) {
      b.addEventListener("click", function () {
        startSession(el, b.getAttribute("data-deck"));
      });
    });
  }

  function startSession(el, deckId) {
    var deck = KE_DATA.sentenceDecks.filter(function (d) { return d.id === deckId; })[0];
    var due = KE.srs.dueIds(deckIds(deck));
    var pool;
    if (due.length) {
      pool = deck.items.filter(function (i) { return due.indexOf(i.id) !== -1; });
    } else {
      // 復習期限がなければ全文からランダムに出題（追い込み練習）
      pool = deck.items.slice();
    }
    // シャッフルして最大 10 文
    pool = pool.sort(function () { return Math.random() - 0.5; }).slice(0, 10);

    var idx = 0, correct = 0, results = [];
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
        '<div class="practice-progress"><span>' + KE.esc(deck.name) + "</span><span>" + (idx + 1) + " / " + pool.length + "</span></div>" +
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
            results.push({ id: item.id, g: g });
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
        '<p class="sub">学習時間 ' + minutes + " 分を記録しました。<br>できなかった文は明日また出題されます。</p>" +
        '<div class="btn-row mt-16" style="justify-content:center">' +
        '<button class="btn btn-primary" id="again-btn">もう 1 セット</button>' +
        '<a class="btn" href="#/dashboard">ホームへ戻る</a></div></div>';
      document.getElementById("again-btn").addEventListener("click", function () {
        startSession(el, deckId);
      });
    }

    showCard();
  }
})();
