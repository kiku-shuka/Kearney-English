/* シャドーイング
 * 聞こえた英語を影のように追いかけて発話する、リスニングと
 * 発音・流暢さを同時に鍛える練習。音声はブラウザ内蔵の音声合成を使い、
 * 速度調整・1 文ループ・スクリプト非表示で負荷をコントロールする。
 */
(function () {
  var S = KE.storage;

  var STEPS = [
    { n: 1, label: "リスニング — スクリプトを見ずに全体を聞き、内容を推測する", showText: false, showJa: false },
    { n: 2, label: "マンブリング — 音声に合わせて小さな声でモゴモゴついていく", showText: false, showJa: false },
    { n: 3, label: "スクリプト確認 — 文字と意味を確認し、聞き取れなかった箇所を潰す", showText: true, showJa: true },
    { n: 4, label: "シャドーイング — スクリプトを見ずに、影のように追いかけて発話する", showText: false, showJa: false },
    { n: 5, label: "仕上げ — 文字を見ずに、そらんじられるまで 1 文ずつループで繰り返す", showText: false, showJa: false }
  ];

  KE.views.shadowing = function (el) {
    renderList(el);
  };

  function allScripts() {
    // 配信分（新しいものが配列末尾に追記される）を先頭に
    return (KE_DATA.extraShadowing || []).slice().reverse().concat(KE_DATA.shadowingScripts);
  }

  function doneMap() { return S.get("shadowDone", {}); }

  function doneBadge(id) {
    var d = doneMap()[id];
    if (!d) return "";
    return d.rating === 2 ? ' <span class="badge-done">✔ スラスラ</span>' : ' <span class="tag">△ 練習中</span>';
  }

  /* 今週やるべき 1 本：未仕上げ（スラスラ未達）の中で最も新しいもの */
  function currentScript() {
    var list = allScripts();
    var undone = list.filter(function (s) {
      var d = doneMap()[s.id];
      return !d || d.rating < 2;
    });
    return undone[0] || list[0];
  }

  function renderList(el) {
    var html = '<h2 class="view-title">🎧 シャドーイング</h2>' +
      '<p class="view-desc">Kearney流リスニングメソッドの中心。<strong>1 本を、文字を見ずにそらんじられるまで</strong>徹底的に仕上げます。今週の 1 本に集中し、仕上がったら次へ。</p>';

    var cur = currentScript();
    html += '<div class="card" style="border-left:3px solid var(--series-1)"><div class="flex-between">' +
      '<div><h3>▶ 今週の 1 本：' + KE.esc(cur.title) + ' <span class="tag">' + cur.level + " ｜ " + cur.lines.length + "文</span>" + doneBadge(cur.id) + "</h3>" +
      '<p class="sub">' + KE.esc(cur.description) + "</p></div>" +
      '<button class="btn btn-primary btn-lg" data-script="' + cur.id + '">練習する</button></div></div>';

    /* 過去のスクリプトはライブラリとして折りたたみ */
    html += '<div class="card mt-16"><div class="flex-between" style="cursor:pointer" id="lib-toggle">' +
      '<h3>📦 スクリプトライブラリ（全 ' + allScripts().length + ' 本）</h3><span class="tag" id="lib-arrow">▼ 開く</span></div>' +
      '<div id="lib-list" style="display:none">';
    allScripts().forEach(function (sc) {
      html += '<div class="flex-between" style="padding:10px 0;border-bottom:1px solid var(--gridline)">' +
        '<div><strong style="font-size:14px">' + KE.esc(sc.title) + '</strong> <span class="tag">' + sc.level + " ｜ " + sc.lines.length + "文</span>" + doneBadge(sc.id) +
        '<div class="sub">' + KE.esc(sc.description) + "</div></div>" +
        '<button class="btn btn-sm" data-script="' + sc.id + '">練習</button></div>';
    });
    html += "</div></div>";

    if (!KE.speech.available()) {
      html += '<p class="warn-note mt-8">⚠️ このブラウザは音声合成に対応していないため、音声を再生できません。Chrome / Edge / Safari の利用を推奨します。</p>';
    }

    el.innerHTML = html;
    var toggle = document.getElementById("lib-toggle");
    toggle.addEventListener("click", function () {
      var list = document.getElementById("lib-list");
      var open = list.style.display !== "none";
      list.style.display = open ? "none" : "";
      document.getElementById("lib-arrow").textContent = open ? "▼ 開く" : "▲ 閉じる";
    });
    el.querySelectorAll("[data-script]").forEach(function (b) {
      b.addEventListener("click", function () {
        var sc = allScripts().filter(function (s) { return s.id === b.getAttribute("data-script"); })[0];
        renderPlayer(el, sc);
      });
    });
  }

  function renderPlayer(el, sc) {
    var state = { idx: 0, loop: false, rate: 1.0, step: 1, playToken: 0, playing: false };
    KE.sessionTimer.start();

    function stepConf() { return STEPS[state.step - 1]; }

    var html = '<div class="practice-stage" style="max-width:720px">' +
      '<div class="practice-progress"><span>' + KE.esc(sc.title) + "</span><span>" + sc.level + "</span></div>" +
      '<ol class="step-list" id="step-list">';
    STEPS.forEach(function (st) {
      html += '<li data-step="' + st.n + '" style="cursor:pointer">' + KE.esc(st.label) + "</li>";
    });
    html += "</ol><hr class=\"divider\">" +
      '<div class="btn-row">' +
      '<button class="btn btn-primary" id="play-all">▶ 連続再生</button>' +
      '<button class="btn" id="play-one">🔂 この文だけ</button>' +
      '<button class="btn" id="stop-btn">⏹ 停止</button>' +
      '<button class="btn btn-sm" id="prev-btn">◀ 前の文</button>' +
      '<button class="btn btn-sm" id="next-btn">次の文 ▶</button>' +
      '<label style="font-size:13px;display:inline-flex;align-items:center;gap:4px">速度 ' +
      '<select id="rate-select" style="width:auto">' +
      '<option value="0.6">0.6x</option><option value="0.8">0.8x</option>' +
      '<option value="1" selected>1.0x</option><option value="1.2">1.2x</option></select></label>' +
      '<label style="font-size:13px;display:inline-flex;align-items:center;gap:4px">' +
      '<input type="checkbox" id="loop-check"> 1文ループ</label>' +
      "</div>" +
      '<div id="rec-area" class="mt-8"></div>' +
      '<div id="lines-area" class="mt-16"></div>' +
      '<hr class="divider"><div class="btn-row"><button class="btn btn-primary" id="finish-btn">終了して記録する</button>' +
      '<a class="btn" href="#/shadowing">スクリプト一覧へ</a></div>' +
      '<div id="finish-area"></div></div>';

    el.innerHTML = html;

    function renderSteps() {
      el.querySelectorAll("#step-list li").forEach(function (li) {
        li.classList.toggle("active", parseInt(li.getAttribute("data-step"), 10) === state.step);
      });
    }

    function renderLines() {
      var conf = stepConf();
      var out = "";
      sc.lines.forEach(function (l, i) {
        var active = i === state.idx;
        out += '<div data-line="' + i + '" style="cursor:pointer;padding:7px 10px;border-radius:8px;margin-bottom:2px;' +
          (active ? "background:var(--wash);border-left:3px solid var(--series-1);" : "border-left:3px solid transparent;") + '">' +
          (l.s ? '<span class="tag">' + l.s + "：</span>" : "") +
          (conf.showText || active && false ? "" : "") +
          (conf.showText
            ? '<span style="font-weight:600">' + KE.esc(l.en) + "</span>"
            : '<span style="color:var(--muted)">🔒 （ステップ' + state.step + ' はスクリプト非表示 — 音だけで追いかけましょう）</span>') +
          (conf.showJa && conf.showText ? '<div class="li-ja">' + KE.esc(l.ja) + "</div>" : "") +
          "</div>";
      });
      document.getElementById("lines-area").innerHTML = out;
      el.querySelectorAll("[data-line]").forEach(function (d) {
        d.addEventListener("click", function () {
          state.idx = parseInt(d.getAttribute("data-line"), 10);
          renderLines();
          playCurrent(false);
        });
      });
    }

    function playCurrent(continueAfter) {
      var token = ++state.playToken;
      state.playing = true;
      var line = sc.lines[state.idx];
      KE.speech.speak(line.en, {
        rate: state.rate,
        onend: function () {
          if (token !== state.playToken) return; // 停止・別再生済み
          if (state.loop) {
            setTimeout(function () { if (token === state.playToken) playCurrent(continueAfter); }, 500);
          } else if (continueAfter && state.idx < sc.lines.length - 1) {
            state.idx++;
            renderLines();
            setTimeout(function () { if (token === state.playToken) playCurrent(true); }, 350);
          } else {
            state.playing = false;
          }
        }
      });
    }

    function stopPlay() {
      state.playToken++;
      state.playing = false;
      KE.speech.stop();
    }

    el.querySelectorAll("#step-list li").forEach(function (li) {
      li.addEventListener("click", function () {
        state.step = parseInt(li.getAttribute("data-step"), 10);
        state.loop = state.step === 5 ? true : state.loop;
        document.getElementById("loop-check").checked = state.loop;
        renderSteps();
        renderLines();
      });
    });

    document.getElementById("play-all").addEventListener("click", function () {
      stopPlay();
      playCurrent(true);
    });
    document.getElementById("play-one").addEventListener("click", function () {
      stopPlay();
      playCurrent(false);
    });
    document.getElementById("stop-btn").addEventListener("click", stopPlay);
    document.getElementById("prev-btn").addEventListener("click", function () {
      if (state.idx > 0) { state.idx--; renderLines(); playCurrent(false); }
    });
    document.getElementById("next-btn").addEventListener("click", function () {
      if (state.idx < sc.lines.length - 1) { state.idx++; renderLines(); playCurrent(false); }
    });
    document.getElementById("rate-select").addEventListener("change", function (e) {
      state.rate = parseFloat(e.target.value);
    });
    document.getElementById("loop-check").addEventListener("change", function (e) {
      state.loop = e.target.checked;
    });

    /* 録音（対応ブラウザのみ）：自分の声を聞いてモデルと比べる */
    var recArea = document.getElementById("rec-area");
    if (KE.speech.recordingAvailable()) {
      recArea.innerHTML = '<button class="btn btn-sm" id="rec-btn">🎙 自分の声を録音して確認</button> <span id="rec-audio"></span>';
      document.getElementById("rec-btn").addEventListener("click", function () {
        var btn = this;
        if (KE.speech.isRecording()) {
          KE.speech.stopRecording(function (url) {
            document.getElementById("rec-audio").innerHTML =
              '<audio controls src="' + url + '" style="vertical-align:middle;height:34px"></audio>';
          });
          btn.textContent = "🎙 自分の声を録音して確認";
        } else {
          KE.speech.startRecording(function () {
            btn.textContent = "⏹ 録音を止める（録音中…）";
          }, function () {
            KE.toast("マイクを使用できませんでした");
          });
        }
      });
    }

    document.getElementById("finish-btn").addEventListener("click", function () {
      stopPlay();
      document.getElementById("finish-area").innerHTML =
        '<p class="sub mt-16">今日の仕上がりはどうでしたか？</p>' +
        '<div class="grade-row">' +
        '<button class="btn btn-grade-ng" data-r="0">まだ難しい</button>' +
        '<button class="btn btn-grade-mid" data-r="1">まあまあ</button>' +
        '<button class="btn btn-grade-ok" data-r="2">スラスラ言えた</button></div>';
      el.querySelectorAll("[data-r]").forEach(function (b) {
        b.addEventListener("click", function () {
          var r = parseInt(b.getAttribute("data-r"), 10);
          var minutes = KE.sessionTimer.minutes();
          S.addLog("shadowing", minutes, sc.lines.length, r === 2 ? sc.lines.length : r === 1 ? Math.round(sc.lines.length / 2) : 0);
          // 仕上がり状態を保存（「今週の1本」の選定と一覧のバッジに使う）
          var done = S.get("shadowDone", {});
          done[sc.id] = { rating: Math.max(r, (done[sc.id] || {}).rating || 0), d: S.todayStr() };
          S.set("shadowDone", done);
          KE.updateHeader();
          KE.toast("シャドーイング " + minutes + " 分を記録しました");
          renderList(el);
        });
      });
    });

    renderSteps();
    renderLines();
  }
})();
