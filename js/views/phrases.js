/* 型・表現ストック
 * 「その場で英文を組み立てる」のではなく「使える型を大量にストックし、
 * そのまま出す」のがビジネス英語の近道。シーン別の頻出表現に加え、
 * 実務で出会った表現を自分のノートに追加して同じ仕組みで回せる。
 */
(function () {
  var S = KE.storage;

  function allReviewItems() {
    var items = [];
    KE_DATA.phraseScenes.forEach(function (sc) {
      sc.items.forEach(function (i) {
        items.push({ id: i.id, ja: i.ja, en: i.en, tip: i.tip, scene: sc.name });
      });
    });
    S.getNotes().forEach(function (n) {
      items.push({ id: n.id, ja: n.ja, en: n.en, tip: n.tip || "", scene: "表現ノート" });
    });
    return items;
  }

  KE.views.phrases = function (el) {
    renderHome(el);
  };

  function renderHome(el) {
    var items = allReviewItems();
    var ids = items.map(function (i) { return i.id; });
    var due = KE.srs.dueIds(ids).length;
    var learned = KE.srs.learnedCount(ids);
    var matured = KE.srs.maturedCount(ids);

    var html = '<h2 class="view-title">📚 型・表現トレーニング</h2>' +
      '<p class="view-desc">Kearney流ライティング／スピーキングメソッドの土台。<strong>パターンごとに使われる表現をストックし、すぐ取り出して組み合わせられる</strong>状態をつくります。日本語を見て型が即座に出るか試し、間隔反復で定着。業務やドラマで出会った表現は自分のノートに追加し、<strong>実際に例文を書いて</strong>使える形にしましょう。</p>';

    html += '<div class="card"><div class="flex-between">' +
      '<div><h3>今日の復習</h3><p class="sub">全 ' + ids.length + " 表現 ｜ 学習済み " + learned + " ｜ 定着 " + matured + "</p>" +
      '<p class="mt-8">' + (due ? '<strong style="color:var(--series-1)">復習期限のカードが ' + due + " 枚あります</strong>" : "今日の復習はありません。新しい表現を覚えましょう。") + "</p></div>" +
      '<button class="btn btn-primary" id="review-btn">' + (due ? "復習をはじめる" : "ランダムに10枚") + "</button></div></div>";

    /* シーン別ブラウズ */
    html += '<h3 class="mt-16 mb-8" style="font-size:15px">シーン別に覚える</h3>';
    KE_DATA.phraseScenes.forEach(function (sc) {
      var scIds = sc.items.map(function (i) { return i.id; });
      var scDue = KE.srs.dueIds(scIds).length;
      html += '<div class="card mb-8"><div class="flex-between" style="cursor:pointer" data-toggle="' + sc.id + '">' +
        "<h3>" + sc.icon + " " + KE.esc(sc.name) + ' <span class="tag">' + sc.items.length + "表現" + (scDue ? "・要復習" + scDue : "") + "</span></h3>" +
        '<span class="tag" id="arrow-' + sc.id + '">▼ 開く</span></div>' +
        '<ul class="item-list" id="list-' + sc.id + '" style="display:none">';
      sc.items.forEach(function (i) {
        html += '<li><div class="li-main"><div class="li-en">' + KE.esc(i.en) + '</div><div class="li-ja">' + KE.esc(i.ja) +
          (i.tip ? " ｜ 💡 " + KE.esc(i.tip) : "") + "</div></div>" +
          '<button class="btn btn-sm btn-icon" data-say="' + KE.esc(i.en) + '" title="読み上げ">🔊</button></li>';
      });
      html += "</ul></div>";
    });

    /* 表現ノート */
    var notes = S.getNotes();
    html += '<h3 class="mt-16 mb-8" style="font-size:15px">✍️ 表現ノート（自分のストック）</h3>' +
      '<div class="card"><p class="sub">実際の会議やオンライン英会話で出会った「使いたい表現」を追加しましょう。復習カードに自動で加わります。</p>' +
      '<label class="form-label">英語表現</label><input type="text" id="note-en" placeholder="例：Let me circle back on that.">' +
      '<label class="form-label">意味（日本語）</label><input type="text" id="note-ja" placeholder="例：その件は後で戻って確認します">' +
      '<label class="form-label">メモ（任意）</label><input type="text" id="note-tip" placeholder="例：会議で宿題を持ち帰るときの定番">' +
      '<label class="form-label">この表現を使った自分の例文（任意・推奨）</label><input type="text" id="note-ex" placeholder="例：Let me circle back on the pricing issue tomorrow.">' +
      '<p class="sub">ストックした表現は「実際に例文を書いてみる」ことで初めて使える形になります。</p>' +
      '<div class="mt-16"><button class="btn btn-primary" id="note-add">ノートに追加</button></div>';
    if (notes.length) {
      html += '<ul class="item-list mt-16">';
      notes.forEach(function (n) {
        html += '<li><div class="li-main"><div class="li-en">' + KE.esc(n.en) + '</div><div class="li-ja">' + KE.esc(n.ja) +
          (n.tip ? " ｜ 💡 " + KE.esc(n.tip) : "") +
          (n.ex ? '<br>✍️ ' + KE.esc(n.ex) : "") + "</div></div>" +
          '<button class="btn btn-sm btn-icon" data-say="' + KE.esc(n.en) + '">🔊</button>' +
          '<button class="btn btn-sm" data-del="' + n.id + '">削除</button></li>';
      });
      html += "</ul>";
    }
    html += "</div>";

    el.innerHTML = html;

    document.getElementById("review-btn").addEventListener("click", function () {
      startReview(el);
    });
    el.querySelectorAll("[data-toggle]").forEach(function (h) {
      h.addEventListener("click", function () {
        var id = h.getAttribute("data-toggle");
        var list = document.getElementById("list-" + id);
        var open = list.style.display !== "none";
        list.style.display = open ? "none" : "";
        document.getElementById("arrow-" + id).textContent = open ? "▼ 開く" : "▲ 閉じる";
      });
    });
    el.querySelectorAll("[data-say]").forEach(function (b) {
      b.addEventListener("click", function () { KE.speech.speak(b.getAttribute("data-say")); });
    });
    document.getElementById("note-add").addEventListener("click", function () {
      var en = document.getElementById("note-en").value.trim();
      var ja = document.getElementById("note-ja").value.trim();
      var tip = document.getElementById("note-tip").value.trim();
      var ex = document.getElementById("note-ex").value.trim();
      if (!en || !ja) { KE.toast("英語表現と意味の両方を入力してください"); return; }
      var notes = S.getNotes();
      notes.unshift({ id: "note-" + Date.now(), en: en, ja: ja, tip: tip, ex: ex, createdAt: Date.now() });
      S.setNotes(notes);
      KE.toast("表現ノートに追加しました");
      renderHome(el);
    });
    el.querySelectorAll("[data-del]").forEach(function (b) {
      b.addEventListener("click", function () {
        S.setNotes(S.getNotes().filter(function (n) { return n.id !== b.getAttribute("data-del"); }));
        renderHome(el);
      });
    });
  }

  function startReview(el) {
    var items = allReviewItems();
    var dueIds = KE.srs.dueIds(items.map(function (i) { return i.id; }));
    var pool = items.filter(function (i) { return dueIds.indexOf(i.id) !== -1; });
    if (!pool.length) pool = items.slice();
    pool = pool.sort(function () { return Math.random() - 0.5; }).slice(0, 10);

    var idx = 0, correct = 0;
    KE.sessionTimer.start();

    function showCard() {
      KE.speech.stop();
      var item = pool[idx];
      el.innerHTML = '<div class="practice-stage">' +
        '<div class="practice-progress"><span>' + KE.esc(item.scene) + "</span><span>" + (idx + 1) + " / " + pool.length + "</span></div>" +
        '<p class="sub">この場面、英語の「型」で言えますか？ 声に出してから答え合わせ：</p>' +
        '<p class="prompt-ja">' + KE.esc(item.ja) + "</p>" +
        '<div class="btn-row mt-16"><button class="btn btn-primary" id="reveal-btn">答えを見る</button></div>' +
        '<div id="answer-area"></div></div>' +
        '<p class="center mt-8"><a href="#/phrases" class="tag">セッションを中断</a></p>';

      document.getElementById("reveal-btn").addEventListener("click", function () {
        var area = document.getElementById("answer-area");
        area.innerHTML = '<div class="answer-area">' +
          '<p class="answer-en">' + KE.esc(item.en) + ' <button class="btn btn-sm btn-icon" id="play-btn">🔊</button></p>' +
          (item.tip ? '<p class="answer-note">💡 ' + KE.esc(item.tip) + "</p>" : "") +
          '<div class="grade-row">' +
          '<button class="btn btn-grade-ng" data-g="0">✗ できなかった</button>' +
          '<button class="btn btn-grade-mid" data-g="1">△ あやしい</button>' +
          '<button class="btn btn-grade-ok" data-g="2">○ できた</button></div></div>';
        KE.speech.speak(item.en);
        document.getElementById("play-btn").addEventListener("click", function () { KE.speech.speak(item.en); });
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
      });
    }

    function finish() {
      var minutes = KE.sessionTimer.minutes();
      S.addLog("phrases", minutes, pool.length, correct);
      KE.updateHeader();
      var rate = Math.round(100 * correct / pool.length);
      el.innerHTML = '<div class="practice-stage session-result">' +
        '<div class="big">' + (rate >= 80 ? "🎉" : rate >= 50 ? "👍" : "💪") + "</div>" +
        '<div class="score">' + correct + " / " + pool.length + " 表現（" + rate + "%）</div>" +
        '<p class="sub">学習時間 ' + minutes + " 分を記録しました。</p>" +
        '<div class="btn-row mt-16" style="justify-content:center">' +
        '<button class="btn btn-primary" id="again-btn">もう 1 セット</button>' +
        '<a class="btn" href="#/phrases">表現一覧へ</a>' +
        '<a class="btn" href="#/dashboard">ホームへ</a></div></div>';
      document.getElementById("again-btn").addEventListener("click", function () { startReview(el); });
    }

    showCard();
  }
})();
