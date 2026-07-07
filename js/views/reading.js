/* 速読リーディング
 * Kearney流リーディングメソッド：「簡単な英語をざっくり速く読む」多読・速読。
 * 反復は不要なため、毎朝自動配信される「今日の 5 本」を消化するのが基本動線。
 * 過去の配信とベーシック教材はアーカイブに畳んで、迷いをなくす。
 */
(function () {
  var S = KE.storage;

  function wordCount(text) {
    return text.split(/\s+/).filter(Boolean).length;
  }

  function stats() { return S.get("reading", {}); }
  function saveStats(s) { S.set("reading", s); }
  function readDone() { return S.get("readDone", {}); }

  function dailyDays() {
    var days = (KE_DATA.dailyReading && KE_DATA.dailyReading.days) || [];
    return days.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  }

  function passageById(id) {
    var hit = null;
    dailyDays().forEach(function (d) {
      d.passages.forEach(function (p) { if (p.id === id) hit = p; });
    });
    KE_DATA.readingPassages.forEach(function (p) { if (p.id === id) hit = p; });
    return hit;
  }

  KE.views.reading = function (el) {
    renderList(el);
  };

  function passageRow(p, primary) {
    var words = wordCount(p.text);
    var done = readDone()[p.id];
    var best = stats()[p.id];
    return '<li><div class="li-main"><div class="li-en">' + KE.esc(p.title) +
      (done ? ' <span class="badge-done">✔ 読了</span>' : "") + "</div>" +
      '<div class="li-ja">' + p.level + (p.genre ? " ｜ " + KE.esc(p.genre) : p.theme ? " ｜ " + KE.esc(p.theme) : "") +
      " ｜ 約" + words + "語" + (best ? " ｜ ベスト " + best.bestWpm + " WPM" : "") + "</div></div>" +
      '<button class="btn btn-sm' + (primary && !done ? " btn-primary" : "") + '" data-passage="' + p.id + '">読む</button></li>';
  }

  function renderList(el) {
    var days = dailyDays();
    var today = S.todayStr();
    var html = '<h2 class="view-title">📖 速読リーディング</h2>' +
      '<p class="view-desc">和訳しながら精読するのではなく、<strong>意味を取り違えない前提で、ざっくり速く読む</strong>のがKearney流。読了時間から WPM を計測し、理解度クイズで確認します。リーディングは反復不要 — 毎日新しい文章を読みましょう。</p>';

    /* 今日の配信 */
    var latest = days[0];
    html += '<div class="card" style="border-left:3px solid var(--series-1)">';
    if (latest) {
      var doneCount = latest.passages.filter(function (p) { return readDone()[p.id]; }).length;
      html += '<h3>▶ ' + (latest.date === today ? "今日のリーディング" : "最新の配信（" + latest.date.slice(5).replace("-", "/") + "分）") +
        ' <span class="tag">' + doneCount + " / " + latest.passages.length + " 読了</span></h3>" +
        '<ul class="item-list">';
      latest.passages.forEach(function (p) { html += passageRow(p, true); });
      html += "</ul>";
    } else {
      html += '<h3>▶ 今日のリーディング</h3>' +
        '<p class="sub">毎朝の自動配信が始まると、ここに時事トピックのオリジナルパッセージが 5 本並びます。それまでは下のベーシック教材をどうぞ。</p>';
    }
    html += "</div>";

    /* 過去の配信（直近 7 日、アーカイブ） */
    var past = days.slice(1);
    if (past.length) {
      html += '<div class="card mt-16"><div class="flex-between" style="cursor:pointer" id="past-toggle">' +
        '<h3>📦 過去の配信（' + past.length + ' 日分）</h3><span class="tag" id="past-arrow">▼ 開く</span></div>' +
        '<div id="past-list" style="display:none">';
      past.forEach(function (d) {
        html += '<p class="sub mt-8" style="font-weight:700">' + d.date + '</p><ul class="item-list">';
        d.passages.forEach(function (p) { html += passageRow(p, false); });
        html += "</ul>";
      });
      html += "</div></div>";
    }

    /* ベーシック教材（固定 5 本、アーカイブ） */
    html += '<div class="card mt-16"><div class="flex-between" style="cursor:pointer" id="basic-toggle">' +
      '<h3>📦 ベーシック教材（' + KE_DATA.readingPassages.length + ' 本）</h3><span class="tag" id="basic-arrow">▼ 開く</span></div>' +
      '<ul class="item-list" id="basic-list" style="display:none">';
    KE_DATA.readingPassages.forEach(function (p) { html += passageRow(p, false); });
    html += "</ul></div>";

    html += '<div class="card mt-16"><h3>WPM の目安</h3><p class="sub">' +
      '〜100：じっくり読み ｜ 100〜150：良いペース（まずここを目標に） ｜ 150〜200：速読レベル ｜ ネイティブの平均は 200〜250 と言われます。' +
      '速さだけでなく、クイズ全問正解（＝意味を取り違えない）とセットで伸ばしましょう。</p></div>';

    el.innerHTML = html;

    [["past-toggle", "past-list", "past-arrow"], ["basic-toggle", "basic-list", "basic-arrow"]].forEach(function (t) {
      var toggle = document.getElementById(t[0]);
      if (!toggle) return;
      toggle.addEventListener("click", function () {
        var list = document.getElementById(t[1]);
        var open = list.style.display !== "none";
        list.style.display = open ? "none" : "";
        document.getElementById(t[2]).textContent = open ? "▼ 開く" : "▲ 閉じる";
      });
    });
    el.querySelectorAll("[data-passage]").forEach(function (b) {
      b.addEventListener("click", function () {
        renderReader(el, passageById(b.getAttribute("data-passage")));
      });
    });
  }

  function renderReader(el, p) {
    var words = wordCount(p.text);
    el.innerHTML = '<div class="practice-stage" style="max-width:720px">' +
      '<div class="practice-progress"><span>' + KE.esc(p.title) + "</span><span>約" + words + "語</span></div>" +
      '<p class="sub">準備ができたら「読み始める」を押してください。読み終わったらすぐ「読み終わった」を押します。<br>' +
      "コツ：頭の中で日本語に訳さず、意味のかたまりごとに前から読み進める。</p>" +
      '<div class="center mt-16"><button class="btn btn-primary btn-lg" id="start-btn">読み始める</button></div>' +
      '<div id="read-area"></div></div>' +
      '<p class="center mt-8"><a href="#/reading" class="tag">一覧に戻る</a></p>';

    document.getElementById("start-btn").addEventListener("click", function () {
      var t0 = Date.now();
      KE.sessionTimer.start();
      var area = document.getElementById("read-area");
      var paras = p.text.split(/\n+/).map(function (t) { return "<p style='margin-bottom:10px'>" + KE.esc(t) + "</p>"; }).join("");
      area.innerHTML = '<div style="font-size:16.5px;line-height:1.9;margin-top:14px" lang="en">' + paras + "</div>" +
        '<div class="center mt-16"><span class="tag" id="clock">0:00</span></div>' +
        '<div class="center mt-8"><button class="btn btn-primary btn-lg" id="done-btn">読み終わった</button></div>';
      this.parentNode.style.display = "none";

      var clockId = setInterval(function () {
        var s = Math.floor((Date.now() - t0) / 1000);
        var c = document.getElementById("clock");
        if (c) c.textContent = Math.floor(s / 60) + ":" + ("0" + s % 60).slice(-2);
        else clearInterval(clockId);
      }, 1000);

      document.getElementById("done-btn").addEventListener("click", function () {
        clearInterval(clockId);
        var sec = Math.max(5, Math.round((Date.now() - t0) / 1000));
        var wpm = Math.round(words / (sec / 60));
        renderQuiz(el, p, { sec: sec, wpm: wpm, words: words });
      });
    });
  }

  function renderQuiz(el, p, result) {
    var html = '<div class="practice-stage" style="max-width:720px">' +
      '<div class="practice-progress"><span>' + KE.esc(p.title) + '</span><span>理解度チェック</span></div>' +
      '<p class="sub">本文を見ずに答えましょう。速く読めても意味を取り違えていては本末転倒です。</p>';
    p.quiz.forEach(function (q, qi) {
      html += '<div class="mt-16"><p style="font-weight:700;font-size:14.5px">Q' + (qi + 1) + ". " + KE.esc(q.q) + "</p>";
      q.options.forEach(function (opt, oi) {
        html += '<label class="radio-card" style="margin-top:6px"><input type="radio" name="q' + qi + '" value="' + oi + '"><span>' + KE.esc(opt) + "</span></label>";
      });
      html += "</div>";
    });
    html += '<div class="center mt-16"><button class="btn btn-primary btn-lg" id="check-btn">答え合わせ</button></div><div id="quiz-result"></div></div>';
    el.innerHTML = html;

    document.getElementById("check-btn").addEventListener("click", function () {
      var correct = 0;
      p.quiz.forEach(function (q, qi) {
        var sel = el.querySelector('input[name="q' + qi + '"]:checked');
        if (sel && parseInt(sel.value, 10) === q.answer) correct++;
      });
      var minutes = KE.sessionTimer.minutes();
      S.addLog("reading", minutes, p.quiz.length, correct);

      var st = stats();
      var prev = st[p.id] || { bestWpm: 0, tries: 0 };
      st[p.id] = { bestWpm: Math.max(prev.bestWpm, result.wpm), tries: prev.tries + 1 };
      saveStats(st);
      var done = readDone();
      done[p.id] = true;
      S.set("readDone", done);
      KE.updateHeader();

      var comment;
      if (correct < p.quiz.length) comment = "まずは全問正解を。速さは正確さの上に積み上げます。";
      else if (result.wpm >= 150) comment = "速読レベル！ この調子で語数を増やしていきましょう。";
      else if (result.wpm >= 100) comment = "良いペースです。意味のかたまり読みを続けましょう。";
      else comment = "焦らなくてOK。「和訳せずに前から読む」を意識して再挑戦を。";

      document.getElementById("quiz-result").innerHTML =
        '<div class="session-result"><div class="big">' + (correct === p.quiz.length ? "🎉" : "💪") + "</div>" +
        '<div class="score">' + result.wpm + " WPM ｜ 理解度 " + correct + " / " + p.quiz.length + "</div>" +
        '<p class="sub">' + KE.esc(comment) + "<br>読了 " + Math.floor(result.sec / 60) + "分" + (result.sec % 60) + "秒（約" + result.words + "語）・学習 " + minutes + " 分を記録しました。</p>" +
        '<div class="mt-8" style="background:var(--wash);border-radius:10px;padding:12px 14px;text-align:left"><p class="sub"><strong>大意（日本語）</strong>：' + KE.esc(p.summaryJa) + "</p></div>" +
        '<div class="btn-row mt-16" style="justify-content:center">' +
        '<a class="btn btn-primary" href="#/reading">次のパッセージへ</a>' +
        '<a class="btn" href="#/dashboard">ホームへ</a></div></div>';
      this.style.display = "none";
    });
  }
})();
