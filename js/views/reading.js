/* 速読リーディング
 * Kearney流リーディングメソッド：難しい文章を頭から和訳するのではなく、
 * 「簡単な英語をざっくり速く読む」能力をまず鍛える。
 * 読了時間から WPM（1 分あたりの語数）を計測し、理解度クイズで
 * 「意味を取り違えていないか」を確認する。
 */
(function () {
  var S = KE.storage;

  function wordCount(text) {
    return text.split(/\s+/).filter(Boolean).length;
  }

  function stats() { return S.get("reading", {}); }
  function saveStats(s) { S.set("reading", s); }

  KE.views.reading = function (el) {
    renderList(el);
  };

  function renderList(el) {
    var st = stats();
    var html = '<h2 class="view-title">📖 速読リーディング</h2>' +
      '<p class="view-desc">和訳しながら精読するのではなく、<strong>意味を取り違えない前提で、ざっくり速く読む</strong>のがKearney流。' +
      '読了までの時間から WPM（words per minute）を計測し、理解度クイズで確認します。目安として 1 日数千〜1 万語の多読が推奨されています。</p>';

    KE_DATA.readingPassages.forEach(function (p) {
      var words = wordCount(p.text);
      var best = st[p.id];
      html += '<div class="card mb-8"><div class="flex-between">' +
        '<div><h3>' + KE.esc(p.title) + ' <span class="tag">' + p.level + " ｜ " + p.theme + " ｜ 約" + words + "語</span></h3>" +
        '<p class="sub">' + (best ? "ベスト " + best.bestWpm + " WPM ｜ 挑戦 " + best.tries + " 回" : "未挑戦") + "</p></div>" +
        '<button class="btn btn-primary" data-passage="' + p.id + '">読む</button></div></div>';
    });

    html += '<div class="card mt-16"><h3>WPM の目安</h3><p class="sub">' +
      '〜100：じっくり読み ｜ 100〜150：良いペース（まずここを目標に） ｜ 150〜200：速読レベル ｜ ネイティブの平均は 200〜250 と言われます。' +
      '速さだけでなく、クイズ全問正解（＝意味を取り違えない）とセットで伸ばしましょう。</p></div>';

    el.innerHTML = html;
    el.querySelectorAll("[data-passage]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = KE_DATA.readingPassages.filter(function (x) { return x.id === b.getAttribute("data-passage"); })[0];
        renderReader(el, p);
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
        '<button class="btn btn-primary" id="retry-btn">もう一度読む</button>' +
        '<a class="btn" href="#/reading">別のパッセージへ</a>' +
        '<a class="btn" href="#/dashboard">ホームへ</a></div></div>';
      this.style.display = "none";
      document.getElementById("retry-btn").addEventListener("click", function () { renderReader(el, p); });
    });
  }
})();
