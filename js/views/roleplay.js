/* 実践ロールプレイ
 * コンサルティングの現場で英語が使われる典型場面（海外オフィスとのコール、
 * 有識者インタビュー、クライアント報告、質疑応答）を通しで演じる。
 * 「学んだ型を実戦で使う」アウトプットの場。
 */
(function () {
  var S = KE.storage;

  KE.views.roleplay = function (el) {
    renderList(el);
  };

  function renderList(el) {
    var html = '<h2 class="view-title">🎭 実践ロールプレイ</h2>' +
      '<p class="view-desc">相手のセリフが音声で流れます。<strong>あなたの番では実際に声に出して</strong>応答してから、モデル回答と比べて自己評価しましょう。英文表示を隠せばリスニングの負荷も上げられます。</p>';

    KE_DATA.scenarios.forEach(function (sc) {
      html += '<div class="card mb-8"><div class="flex-between">' +
        '<div><h3>' + KE.esc(sc.title) + ' <span class="tag">' + sc.level + "</span></h3>" +
        '<p class="sub">' + KE.esc(sc.description) + "</p>" +
        '<p class="sub mt-8">あなたの役：' + KE.esc(sc.userRole) + " ｜ 相手役：" + KE.esc(sc.partnerRole) + "</p></div>" +
        '<button class="btn btn-primary" data-scenario="' + sc.id + '">開始</button></div></div>';
    });

    el.innerHTML = html;
    el.querySelectorAll("[data-scenario]").forEach(function (b) {
      b.addEventListener("click", function () {
        var sc = KE_DATA.scenarios.filter(function (s) { return s.id === b.getAttribute("data-scenario"); })[0];
        startSession(el, sc);
      });
    });
  }

  function startSession(el, sc) {
    var turnIdx = 0, userTurns = 0, okCount = 0;
    var showEn = true;
    KE.sessionTimer.start();

    el.innerHTML = '<div class="practice-stage" style="max-width:720px">' +
      '<div class="practice-progress"><span>' + KE.esc(sc.title) + '</span>' +
      '<label style="display:inline-flex;gap:4px;align-items:center;cursor:pointer">' +
      '<input type="checkbox" id="en-toggle" checked> 相手の英文を表示</label></div>' +
      '<div id="chat-area"></div>' +
      '<div id="action-area" class="mt-16"></div></div>' +
      '<p class="center mt-8"><a href="#/roleplay" class="tag">セッションを中断</a></p>';

    var chat = document.getElementById("chat-area");
    var action = document.getElementById("action-area");

    document.getElementById("en-toggle").addEventListener("change", function (e) {
      showEn = e.target.checked;
      chat.querySelectorAll(".partner-en").forEach(function (p) {
        p.style.display = showEn ? "" : "none";
      });
    });

    function addPartnerBubble(turn) {
      var div = document.createElement("div");
      div.innerHTML = '<div class="bubble-name">' + KE.esc(sc.partnerRole) + '</div>' +
        '<div class="bubble bubble-partner">' +
        '<span class="partner-en"' + (showEn ? "" : ' style="display:none"') + '>' + KE.esc(turn.en) + "</span>" +
        '<span class="bubble-ja partner-ja" style="display:none">' + KE.esc(turn.ja) + "</span>" +
        '<div class="mt-8"><button class="btn btn-sm btn-icon" title="もう一度聞く">🔊</button> ' +
        '<button class="btn btn-sm ja-btn">日本語</button></div></div>';
      chat.appendChild(div);
      div.querySelector(".btn-icon").addEventListener("click", function () { KE.speech.speak(turn.en); });
      div.querySelector(".ja-btn").addEventListener("click", function () {
        var ja = div.querySelector(".partner-ja");
        ja.style.display = ja.style.display === "none" ? "block" : "none";
      });
      KE.speech.speak(turn.en);
      div.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    function addUserBubble(text) {
      var div = document.createElement("div");
      div.innerHTML = '<div class="bubble bubble-user">' + KE.esc(text) + "</div>";
      chat.appendChild(div);
    }

    function nextTurn() {
      action.innerHTML = "";
      if (turnIdx >= sc.turns.length) { finish(); return; }
      var turn = sc.turns[turnIdx];

      if (turn.speaker === "partner") {
        addPartnerBubble(turn);
        turnIdx++;
        var hasNext = turnIdx < sc.turns.length;
        action.innerHTML = '<div class="btn-row"><button class="btn btn-primary" id="next-btn">' +
          (hasNext && sc.turns[turnIdx].speaker === "user" ? "自分の番へ" : "次へ") + "</button></div>";
        document.getElementById("next-btn").addEventListener("click", nextTurn);
      } else {
        userTurns++;
        var hintsHtml = turn.hints.map(function (h) { return '<span class="chip">' + KE.esc(h) + "</span>"; }).join("");
        action.innerHTML = '<div class="task-box"><span class="task-label">🎤 あなたの番</span>' +
          '<p class="task-text">' + KE.esc(turn.task) + "</p>" +
          '<div class="mt-8">' + hintsHtml + "</div>" +
          '<p class="sub mt-8">まず声に出して言ってみてから、モデル回答と比べましょう。</p>' +
          '<div class="btn-row mt-8">' +
          (KE.speech.recognitionAvailable() ? '<button class="btn" id="mic-btn">🎤 音声で答える</button>' : "") +
          '<button class="btn btn-primary" id="model-btn">モデル回答を見る</button></div>' +
          '<div id="mic-result"></div><div id="model-area"></div></div>';

        var micBtn = document.getElementById("mic-btn");
        if (micBtn) {
          micBtn.addEventListener("click", function () {
            micBtn.disabled = true;
            micBtn.textContent = "🎤 聞き取り中…";
            KE.speech.recognizeOnce(function (text) {
              addUserBubble(text);
              var sim = Math.round(KE.speech.similarity(text, turn.model) * 100);
              document.getElementById("mic-result").innerHTML =
                '<p class="sub mt-8">モデル回答との単語一致：' + sim + "%（言い方は一つではないので参考値）</p>";
              micBtn.disabled = false;
              micBtn.textContent = "🎤 もう一度";
            }, function () {
              document.getElementById("mic-result").innerHTML = '<p class="warn-note mt-8">音声を認識できませんでした。</p>';
              micBtn.disabled = false;
              micBtn.textContent = "🎤 音声で答える";
            });
          });
        }

        document.getElementById("model-btn").addEventListener("click", function () {
          document.getElementById("model-area").innerHTML =
            '<div class="answer-area"><p class="answer-en">' + KE.esc(turn.model) +
            ' <button class="btn btn-sm btn-icon" id="model-play">🔊</button></p>' +
            '<p class="answer-note">' + KE.esc(turn.ja) + "</p>" +
            '<p class="sub mt-8">自分の応答はどうでしたか？</p>' +
            '<div class="grade-row">' +
            '<button class="btn btn-grade-ng" data-g="0">✗ 言えなかった</button>' +
            '<button class="btn btn-grade-mid" data-g="1">△ 部分的に</button>' +
            '<button class="btn btn-grade-ok" data-g="2">○ 言えた</button></div></div>';
          KE.speech.speak(turn.model);
          document.getElementById("model-play").addEventListener("click", function () { KE.speech.speak(turn.model); });
          action.querySelectorAll("[data-g]").forEach(function (b) {
            b.addEventListener("click", function () {
              var g = parseInt(b.getAttribute("data-g"), 10);
              if (g === 2) okCount++;
              addUserBubble(turn.model);
              turnIdx++;
              nextTurn();
            });
          });
        });
      }
    }

    function finish() {
      var minutes = KE.sessionTimer.minutes();
      S.addLog("roleplay", minutes, userTurns, okCount);
      KE.updateHeader();
      var rate = userTurns ? Math.round(100 * okCount / userTurns) : 0;
      action.innerHTML = '<div class="session-result">' +
        '<div class="big">' + (rate >= 80 ? "🎉" : rate >= 50 ? "👍" : "💪") + "</div>" +
        '<div class="score">応答 ' + okCount + " / " + userTurns + "（" + rate + "%）</div>" +
        '<p class="sub">シナリオ完走！ ' + minutes + " 分を記録しました。<br>言えなかった表現は「型・表現」のノートに追加しておきましょう。</p>" +
        '<div class="btn-row mt-16" style="justify-content:center">' +
        '<a class="btn btn-primary" href="#/phrases">表現ノートに追加する</a>' +
        '<a class="btn" href="#/roleplay">別のシナリオへ</a>' +
        '<a class="btn" href="#/dashboard">ホームへ</a></div></div>';
    }

    nextTurn();
  }
})();
