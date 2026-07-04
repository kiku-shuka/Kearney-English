/* 学習記録・週次振り返り
 * 記録の可視化と、コンサル流 PDCA（Keep / Problem / Try）での週次振り返り。
 * 「やりっぱなし」にせず、学習方法そのものを毎週改善する。
 */
(function () {
  var S = KE.storage;

  function weekKey(d) {
    // ISO 週番号（YYYY-Www）
    var date = d ? new Date(d) : new Date();
    var target = new Date(date.valueOf());
    var dayNr = (date.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = new Date(target.getFullYear(), 0, 4);
    var week = 1 + Math.round(((target - firstThursday) / 86400000 - 3 + ((firstThursday.getDay() + 6) % 7)) / 7);
    return target.getFullYear() + "-W" + ("0" + week).slice(-2);
  }

  KE.views.log = function (el) {
    var logs = S.getLogs();
    var totals = S.moduleTotals();
    var total = S.totalMinutes();

    var allIds = [];
    KE_DATA.sentenceDecks.forEach(function (d) { d.items.forEach(function (i) { allIds.push(i.id); }); });
    KE_DATA.phraseScenes.forEach(function (sc) { sc.items.forEach(function (i) { allIds.push(i.id); }); });
    S.getNotes().forEach(function (n) { allIds.push(n.id); });

    var html = '<h2 class="view-title">📈 学習記録・振り返り</h2>' +
      '<p class="view-desc">記録はすべてこのブラウザの中に保存されます。数字で現在地を確認し、週に一度は「学び方」自体を振り返りましょう。</p>';

    /* サマリータイル */
    html += '<div class="grid grid-4">' +
      tile("累計学習時間", total >= 60 ? (Math.floor(total / 60) + "h" + (total % 60 ? (total % 60) + "m" : "")) : total + "分", "") +
      tile("セッション数", logs.length, "回") +
      tile("学習済みカード", KE.srs.learnedCount(allIds), "枚") +
      tile("定着カード", KE.srs.maturedCount(allIds), "枚") +
      "</div>";

    /* 週次振り返り（KPT） */
    var wk = weekKey();
    var reviews = S.getReviews();
    var thisWeek = reviews.filter(function (r) { return r.week === wk; })[0];
    html += '<div class="card mt-16"><h3>📝 今週の振り返り（' + wk + "）</h3>" +
      '<p class="sub">コンサルの仕事術と同じく、学習も PDCA。今週を 3 つの観点で振り返ると、来週の学習の質が上がります。</p>' +
      '<label class="form-label">Keep — うまくいったこと・続けること</label>' +
      '<textarea id="rev-good" placeholder="例：朝の通勤中に瞬間英作文を毎日できた">' + KE.esc(thisWeek ? thisWeek.good : "") + "</textarea>" +
      '<label class="form-label">Problem — 課題・つまずいたこと</label>' +
      '<textarea id="rev-issue" placeholder="例：シャドーイングでスピードについていけない">' + KE.esc(thisWeek ? thisWeek.issue : "") + "</textarea>" +
      '<label class="form-label">Try — 来週の重点・試すこと</label>' +
      '<textarea id="rev-focus" placeholder="例：再生速度を0.8xに落として完璧に口を回す">' + KE.esc(thisWeek ? thisWeek.focus : "") + "</textarea>" +
      '<div class="mt-16"><button class="btn btn-primary" id="rev-save">振り返りを保存</button></div></div>';

    /* 過去の振り返り */
    var past = reviews.filter(function (r) { return r.week !== wk; });
    if (past.length) {
      html += '<div class="card mt-16"><h3>過去の振り返り</h3><ul class="item-list">';
      past.slice(0, 8).forEach(function (r) {
        html += '<li><div class="li-main"><div class="li-en">' + r.week + '</div><div class="li-ja">' +
          "Keep: " + KE.esc(r.good || "-") + " ｜ Problem: " + KE.esc(r.issue || "-") + " ｜ Try: " + KE.esc(r.focus || "-") + "</div></div></li>";
      });
      html += "</ul></div>";
    }

    /* 最近のセッション */
    html += '<div class="card mt-16"><h3>最近のセッション</h3>';
    if (!logs.length) {
      html += '<p class="empty-note">まだ記録がありません。今日の 1 セッションから始めましょう。</p>';
    } else {
      html += '<div style="overflow-x:auto"><table class="log-table"><thead><tr>' +
        "<th>日付</th><th>メニュー</th><th>時間</th><th>実施</th><th>できた</th></tr></thead><tbody>";
      logs.slice(-15).reverse().forEach(function (l) {
        var m = KE.moduleById(l.module);
        html += "<tr><td>" + l.d + "</td><td>" + (m ? m.icon + " " + m.name : l.module) + "</td>" +
          '<td class="num">' + l.minutes + '分</td><td class="num">' + (l.count || "-") + '</td><td class="num">' + (l.correct || "-") + "</td></tr>";
      });
      html += "</tbody></table></div>";
    }
    html += "</div>";

    /* 音声設定 */
    html += '<div class="card mt-16"><h3>🔊 音声設定</h3>' +
      '<label class="form-label">読み上げ速度（標準 1.0）</label>' +
      '<div class="slider-row"><span class="s-label">速度</span>' +
      '<input type="range" id="rate-range" min="0.6" max="1.4" step="0.1" value="' + S.getSettings().rate + '">' +
      '<span class="s-val" id="rate-val">' + S.getSettings().rate.toFixed(1) + "</span></div>" +
      '<label class="form-label">英語音声</label><select id="voice-select"><option value="">自動（en-US 優先）</option></select>' +
      '<div class="btn-row mt-16"><button class="btn" id="voice-test">🔊 テスト再生</button></div>' +
      '<p class="sub mt-8">利用できる音声は OS・ブラウザに依存します。</p></div>';

    /* データ管理 */
    html += '<div class="card mt-16"><h3>💾 データ管理</h3>' +
      '<p class="sub">学習データはこのブラウザの localStorage のみに保存されています。端末を変えるときはエクスポートしてください。</p>' +
      '<div class="btn-row mt-8">' +
      '<button class="btn" id="export-btn">エクスポート（JSON）</button>' +
      '<label class="btn" style="cursor:pointer">インポート<input type="file" id="import-file" accept=".json" style="display:none"></label>' +
      '<button class="btn" id="reset-btn" style="color:var(--critical)">全データを削除</button></div></div>';

    el.innerHTML = html;

    function tile(label, value, unit) {
      return '<div class="card stat-tile"><div class="stat-label">' + label + '</div>' +
        '<div class="stat-value">' + value + '<span class="stat-unit">' + unit + "</span></div></div>";
    }

    /* 振り返り保存 */
    document.getElementById("rev-save").addEventListener("click", function () {
      var reviews = S.getReviews().filter(function (r) { return r.week !== wk; });
      reviews.unshift({
        week: wk,
        good: document.getElementById("rev-good").value.trim(),
        issue: document.getElementById("rev-issue").value.trim(),
        focus: document.getElementById("rev-focus").value.trim(),
        ts: Date.now()
      });
      S.setReviews(reviews);
      KE.toast("今週の振り返りを保存しました");
    });

    /* 音声設定 */
    var voiceSelect = document.getElementById("voice-select");
    function fillVoices() {
      var current = S.getSettings().voiceURI;
      var opts = '<option value="">自動（en-US 優先）</option>';
      KE.speech.englishVoices().forEach(function (v) {
        opts += '<option value="' + KE.esc(v.voiceURI) + '"' + (v.voiceURI === current ? " selected" : "") + ">" +
          KE.esc(v.name + " (" + v.lang + ")") + "</option>";
      });
      voiceSelect.innerHTML = opts;
    }
    fillVoices();
    setTimeout(fillVoices, 400); // 音声リストの遅延ロード対策

    document.getElementById("rate-range").addEventListener("input", function (e) {
      var v = parseFloat(e.target.value);
      document.getElementById("rate-val").textContent = v.toFixed(1);
      var s = S.getSettings(); s.rate = v; S.setSettings(s);
    });
    voiceSelect.addEventListener("change", function (e) {
      var s = S.getSettings(); s.voiceURI = e.target.value; S.setSettings(s);
    });
    document.getElementById("voice-test").addEventListener("click", function () {
      KE.speech.speak("Thank you for taking the time to meet with us today.");
    });

    /* データ管理 */
    document.getElementById("export-btn").addEventListener("click", function () {
      var blob = new Blob([S.exportAll()], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "kearney-english-backup-" + S.todayStr() + ".json";
      a.click();
      URL.revokeObjectURL(a.href);
    });
    document.getElementById("import-file").addEventListener("change", function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          S.importAll(reader.result);
          KE.toast("データをインポートしました");
          KE.views.log(el);
          KE.updateHeader();
        } catch (err) {
          KE.toast("インポートに失敗：" + err.message);
        }
      };
      reader.readAsText(file);
    });
    document.getElementById("reset-btn").addEventListener("click", function () {
      if (confirm("学習記録・プラン・ノートをすべて削除します。よろしいですか？（元に戻せません）")) {
        S.resetAll();
        KE.toast("すべてのデータを削除しました");
        location.hash = "#/plan";
      }
    });
  };
})();
