/* PREP 構成ドリル
 * コンサルタントの話し方の核＝「結論ファースト」。
 * Point → Reason → Example → Point の型に沿って 60〜90 秒で
 * 意見を組み立てる練習。構造は言語力を補う最強の武器になる。
 */
(function () {
  var S = KE.storage;

  var STARTERS = {
    point: ["I think ...", "In my opinion, ...", "I believe ...", "My answer is yes/no, because ..."],
    reason: ["This is because ...", "The main reason is ...", "Because ..."],
    example: ["For example, ...", "For instance, ...", "In my case, ..."],
    point2: ["That's why ...", "So overall, ...", "Therefore, ..."]
  };

  var BLOCKS = [
    { key: "point", tag: "P", label: "Point（結論）", ph: "まず結論を一文で言い切る" },
    { key: "reason", tag: "R", label: "Reason（理由）", ph: "なぜそう考えるのか" },
    { key: "example", tag: "E", label: "Example（具体例）", ph: "数字や自分の経験など、具体的な例" },
    { key: "point2", tag: "P", label: "Point（再結論）", ph: "もう一度結論で締める" }
  ];

  KE.views.prep = function (el) {
    renderList(el);
  };

  function allTopics() {
    return KE_DATA.prepTopics.concat(KE_DATA.extraPrep || []);
  }

  function topicById(id) {
    return allTopics().filter(function (t) { return t.id === id; })[0];
  }

  function renderList(el) {
    var answered = {};
    S.getPrepAnswers().forEach(function (a) { answered[a.topicId] = (answered[a.topicId] || 0) + 1; });

    var html = '<h2 class="view-title">🏗️ PREP 構成ドリル</h2>' +
      '<p class="view-desc"><strong>P</strong>oint（結論）→ <strong>R</strong>eason（理由）→ <strong>E</strong>xample（例）→ <strong>P</strong>oint（再結論）の型で意見を組み立てます。まず声に出して 60〜90 秒で話し、その後に書いて整理すると効果的です。「伝えたいことを事前に文字に落とす」練習は、そのまま実践のテクニック（スピーキング依存を減らす）になります。</p>';

    /* Kearney流：英語コミュニケーション 3 つのテクニック */
    html += '<div class="card mb-8"><h3>🛠 実践の 3 テクニック（このドリルで鍛えるもの）</h3><ul class="item-list">';
    KE_DATA.techniques.forEach(function (t) {
      html += '<li><div class="li-main"><div class="li-en" style="font-size:13.5px">' + KE.esc(t.name) + '</div><div class="li-ja">' + KE.esc(t.desc) + "</div></div></li>";
    });
    html += "</ul></div>";

    /* 今週の時事お題（週次配信の最新 3 題）。配信がなければランダム挑戦が主役 */
    var extras = (KE_DATA.extraPrep || []).slice().reverse().slice(0, 3);
    if (extras.length) {
      html += '<div class="card" style="border-left:3px solid var(--series-1)"><h3>▶ 今週のお題（時事）</h3><ul class="item-list">';
      extras.forEach(function (t) {
        html += '<li><div class="li-main"><div class="li-en">' + KE.esc(t.ja) + '</div><div class="li-ja">' + KE.esc(t.en) + "</div></div>" +
          (answered[t.id] ? '<span class="badge-done">✔ 済</span>' : "") +
          '<button class="btn btn-sm btn-primary" data-topic="' + t.id + '">挑戦</button></li>';
      });
      html += "</ul></div>";
    }

    html += '<div class="card' + (extras.length ? " mt-16" : "") + '"><div class="flex-between"><div><h3>ランダムなお題に挑戦</h3>' +
      '<p class="sub">本番の会議で「意見は？」と振られる状況を再現します。</p></div>' +
      '<button class="btn btn-primary" id="random-btn">お題を引く</button></div></div>';

    /* 全お題はアーカイブとして折りたたみ */
    html += '<div class="card mt-16"><div class="flex-between" style="cursor:pointer" id="topic-toggle">' +
      '<h3>📦 お題アーカイブ（全 ' + allTopics().length + ' 題）</h3><span class="tag" id="topic-arrow">▼ 開く</span></div>' +
      '<ul class="item-list" id="topic-list" style="display:none">';
    allTopics().forEach(function (t) {
      html += '<li><div class="li-main"><div class="li-en">' + KE.esc(t.ja) + '</div><div class="li-ja">' + KE.esc(t.en) + "</div></div>" +
        (answered[t.id] ? '<span class="badge-done">✔ ' + answered[t.id] + "回</span>" : "") +
        '<button class="btn btn-sm" data-topic="' + t.id + '">挑戦</button></li>';
    });
    html += "</ul></div>";

    var history = S.getPrepAnswers();
    if (history.length) {
      html += '<div class="card mt-16"><h3>これまでの回答（' + history.length + '件）</h3><ul class="item-list">';
      history.slice(0, 5).forEach(function (a) {
        var topic = topicById(a.topicId);
        html += '<li><div class="li-main"><div class="li-en">' + KE.esc(topic ? topic.ja : a.topicId) + "</div>" +
          '<div class="li-ja">' + new Date(a.ts).toLocaleDateString("ja-JP") + " ｜ セルフチェック " + a.checks + " / 5 ｜ " +
          KE.esc((a.texts.point || "").slice(0, 40)) + "…</div></div></li>";
      });
      html += "</ul></div>";
    }

    el.innerHTML = html;
    document.getElementById("random-btn").addEventListener("click", function () {
      var pool = allTopics();
      renderPractice(el, pool[Math.floor(Math.random() * pool.length)]);
    });
    document.getElementById("topic-toggle").addEventListener("click", function () {
      var list = document.getElementById("topic-list");
      var open = list.style.display !== "none";
      list.style.display = open ? "none" : "";
      document.getElementById("topic-arrow").textContent = open ? "▼ 開く" : "▲ 閉じる";
    });
    el.querySelectorAll("[data-topic]").forEach(function (b) {
      b.addEventListener("click", function () {
        renderPractice(el, topicById(b.getAttribute("data-topic")));
      });
    });
  }

  function renderPractice(el, topic) {
    KE.sessionTimer.start();
    var html = '<div class="practice-stage" style="max-width:720px">' +
      '<span class="kicker">PREP Drill</span>' +
      '<p class="prompt-ja">' + KE.esc(topic.ja) + "</p>" +
      '<p class="sub">' + KE.esc(topic.en) + ' <button class="btn btn-sm btn-icon" id="topic-play">🔊</button></p>' +
      '<div class="mt-8"><button class="btn btn-sm" id="timer-btn">⏱ 90 秒スピーキングを開始</button>' +
      '<div class="timer-track" style="display:none" id="timer-track"><div class="timer-fill" id="timer-fill" style="width:100%"></div></div></div>' +
      '<hr class="divider"><p class="sub mb-8">話した内容を PREP の型で書き出して整理しましょう（英語で）：</p>';

    BLOCKS.forEach(function (b) {
      html += '<div class="prep-block"><span class="prep-tag">' + b.tag + "</span> <strong style=\"font-size:13px\">" + b.label + "</strong>" +
        '<div class="mt-8" style="margin-bottom:6px">';
      STARTERS[b.key].forEach(function (st) {
        html += '<span class="chip" data-starter="' + b.key + '" data-text="' + KE.esc(st.replace(" ...", " ")) + '" style="cursor:pointer">' + KE.esc(st) + "</span>";
      });
      html += '</div><textarea id="prep-' + b.key + '" placeholder="' + KE.esc(b.ph) + '"></textarea></div>';
    });

    html += '<div class="btn-row"><button class="btn" id="sample-btn">模範解答を見る</button></div>' +
      '<div id="sample-area"></div>' +
      '<hr class="divider"><h3 style="font-size:14px">セルフチェック</h3><div id="checklist">';
    KE_DATA.prepChecklist.forEach(function (c) {
      html += '<label style="display:flex;gap:8px;align-items:center;padding:5px 0;font-size:13.5px;cursor:pointer">' +
        '<input type="checkbox" data-check="' + c.id + '"> ' + KE.esc(c.label) + "</label>";
    });
    html += '</div><div class="btn-row mt-16"><button class="btn btn-primary" id="save-btn">保存して終了</button>' +
      '<a class="btn" href="#/prep">中断する</a></div></div>';

    el.innerHTML = html;

    document.getElementById("topic-play").addEventListener("click", function () { KE.speech.speak(topic.en); });

    var timerId = null;
    document.getElementById("timer-btn").addEventListener("click", function () {
      var track = document.getElementById("timer-track");
      var fill = document.getElementById("timer-fill");
      track.style.display = "";
      this.disabled = true;
      var remain = 900;
      if (timerId) clearInterval(timerId);
      timerId = setInterval(function () {
        remain--;
        fill.style.width = (remain / 900) * 100 + "%";
        if (remain <= 150) fill.classList.add("warn");
        if (remain <= 0) {
          clearInterval(timerId);
          KE.toast("90 秒経過。ここまでで一区切りです");
        }
      }, 100);
    });

    el.querySelectorAll("[data-starter]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var ta = document.getElementById("prep-" + chip.getAttribute("data-starter"));
        ta.value = chip.getAttribute("data-text") + ta.value;
        ta.focus();
      });
    });

    document.getElementById("sample-btn").addEventListener("click", function () {
      var s = topic.sample;
      var full = s.point + " " + s.reason + " " + s.example + " " + s.point2;
      document.getElementById("sample-area").innerHTML =
        '<div class="prep-sample mt-8">' +
        '<p><span class="prep-tag-mini">P</span>' + KE.esc(s.point) + "</p>" +
        '<p><span class="prep-tag-mini">R</span>' + KE.esc(s.reason) + "</p>" +
        '<p><span class="prep-tag-mini">E</span>' + KE.esc(s.example) + "</p>" +
        '<p><span class="prep-tag-mini">P</span>' + KE.esc(s.point2) + "</p>" +
        '<button class="btn btn-sm mt-8" id="sample-play">🔊 通しで聞く</button></div>';
      document.getElementById("sample-play").addEventListener("click", function () {
        KE.speech.speak(full);
      });
    });

    document.getElementById("save-btn").addEventListener("click", function () {
      if (timerId) clearInterval(timerId);
      var texts = {};
      BLOCKS.forEach(function (b) { texts[b.key] = document.getElementById("prep-" + b.key).value.trim(); });
      var checks = el.querySelectorAll("#checklist input:checked").length;
      if (!texts.point && !texts.reason) {
        KE.toast("Point か Reason のどちらかは書いてから保存しましょう");
        return;
      }
      var answers = S.getPrepAnswers();
      answers.unshift({ topicId: topic.id, texts: texts, checks: checks, ts: Date.now() });
      S.setPrepAnswers(answers);
      var minutes = KE.sessionTimer.minutes();
      S.addLog("prep", minutes, 1, checks >= 5 ? 1 : 0);
      KE.updateHeader();
      KE.toast("回答を保存しました（" + minutes + "分）");
      renderList(el);
    });
  }
})();
