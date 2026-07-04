/* ホーム（ダッシュボード）
 * 今日やるべきメニューと、学習の蓄積を可視化する。
 * 「記録が見える → 続く → 伸びる」の好循環をつくるための画面。
 */
(function () {
  var S = KE.storage;

  function allCardIds() {
    var ids = [];
    KE_DATA.sentenceDecks.forEach(function (d) { d.items.forEach(function (i) { ids.push(i.id); }); });
    KE_DATA.phraseScenes.forEach(function (sc) { sc.items.forEach(function (i) { ids.push(i.id); }); });
    S.getNotes().forEach(function (n) { ids.push(n.id); });
    return ids;
  }

  KE.views.dashboard = function (el) {
    var profile = S.getProfile();
    var html = "";

    if (!profile) {
      html += '<div class="card center" style="padding:40px 20px">' +
        '<div style="font-size:44px">🧭</div>' +
        '<h2 class="view-title">まずは学習プランをつくりましょう</h2>' +
        '<p class="view-desc">Kearney流メソッドは「目的から逆算した学習設計」から始まります。<br>1 分で終わる診断で、あなた専用の 1 日メニューを作成します。</p>' +
        '<a class="btn btn-primary btn-lg" href="#/plan">診断をはじめる</a></div>';
      el.innerHTML = html;
      return;
    }

    var streak = S.streak();
    var todayByModule = S.todayMinutesByModule();
    var todayTotal = 0;
    Object.keys(todayByModule).forEach(function (k) { todayTotal += todayByModule[k]; });
    var total = S.totalMinutes();
    var due = KE.srs.dueIds(allCardIds()).length;

    html += '<h2 class="view-title">🏠 ホーム</h2>' +
      '<p class="view-desc">目的：' + KE.esc(profile.goalLabel) + '（<a href="#/plan">プランを見直す</a>）</p>';

    /* 統計タイル */
    html += '<div class="grid grid-4">' +
      tile("連続学習", streak, "日") +
      tile("今日の学習", todayTotal, "分") +
      tile("累計学習", total >= 60 ? Math.floor(total / 60) : total, total >= 60 ? "時間" + (total % 60 ? (total % 60) + "分" : "") : "分") +
      tile("復習期限カード", due, "枚") +
      "</div>";

    /* 今日のメニュー */
    html += '<div class="card mt-16"><h3>📋 今日のメニュー（1 日 ' + profile.dailyMinutes + ' 分プラン）</h3>';
    var allDone = true;
    profile.plan.forEach(function (p) {
      var m = KE.moduleById(p.module);
      var done = (todayByModule[p.module] || 0) >= p.minutes;
      if (!done) allDone = false;
      var progress = Math.min(todayByModule[p.module] || 0, p.minutes);
      html += '<a class="menu-item" href="#/' + m.id + '">' +
        '<span class="menu-check ' + (done ? "done" : "todo") + '">' + (done ? "✔" : "○") + "</span>" +
        '<span class="menu-name">' + m.icon + " " + m.name +
        (done ? ' <span class="badge-done">完了</span>' : "") + "</span>" +
        '<span class="menu-min">' + progress + " / " + p.minutes + "分</span></a>";
    });
    if (allDone && todayTotal > 0) {
      html += '<p class="center mt-8" style="font-size:14px">🎉 今日のメニューをすべて達成しました！</p>';
    }
    html += "</div>";

    /* チャート群 */
    var week = S.minutesByDay(7);
    html += '<div class="grid grid-2 mt-16">';
    html += '<div class="card"><h3>直近 7 日間の学習時間（分）</h3>' + KE.charts.weekBar(week) + "</div>";

    var axes = KE.AXES.map(function (a) {
      return { label: a.label, current: profile.levels[a.id] || 1, target: profile.target };
    });
    html += '<div class="card"><h3>スキル自己評価</h3>' + KE.charts.radar(axes) +
      '<p class="sub center">診断で更新できます（1〜5 の 5 段階）</p></div>';
    html += "</div>";

    /* ヒートマップ */
    html += '<div class="card mt-16"><h3>学習の継続（直近 12 週間）</h3><div class="heatmap-wrap">' +
      KE.charts.heatmap(S.minutesByDay(84)) + "</div>" +
      '<div class="heat-legend">少 ' +
      '<span class="swatch" style="background:var(--heat-1)"></span>' +
      '<span class="swatch" style="background:var(--heat-2)"></span>' +
      '<span class="swatch" style="background:var(--heat-3)"></span>' +
      '<span class="swatch" style="background:var(--heat-4)"></span> 多</div></div>';

    /* モジュール別の累計 */
    var totals = S.moduleTotals();
    var maxMin = 1;
    KE.MODULES.forEach(function (m) { if (totals[m.id]) maxMin = Math.max(maxMin, totals[m.id].minutes); });
    html += '<div class="card mt-16"><h3>メニュー別の累計学習時間</h3>';
    KE.MODULES.forEach(function (m) {
      var t = totals[m.id] || { minutes: 0, sessions: 0 };
      html += '<div class="progress-row"><div class="progress-head"><span>' + m.icon + " " + m.name +
        '</span><span class="val">' + t.minutes + "分・" + t.sessions + "回</span></div>" +
        '<div class="progress-track"><div class="progress-fill" style="width:' + Math.round(100 * t.minutes / maxMin) + '%"></div></div></div>';
    });
    html += "</div>";

    el.innerHTML = html;

    function tile(label, value, unit) {
      return '<div class="card stat-tile"><div class="stat-label">' + label + '</div>' +
        '<div class="stat-value">' + value + '<span class="stat-unit">' + unit + "</span></div></div>";
    }
  };
})();
