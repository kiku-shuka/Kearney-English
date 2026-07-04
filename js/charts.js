/* SVG チャート描画（外部ライブラリ不使用）
 * 色は CSS カスタムプロパティ（--series-1 等）を参照するため、
 * ライト / ダークモードの切り替えに自動で追従する。
 */
window.KE = window.KE || {};

KE.charts = (function () {

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

  /* 直近 7 日間の学習時間（分）棒グラフ。days: [{date, minutes}] */
  function weekBar(days) {
    var w = 320, h = 150, padL = 30, padB = 22, padT = 14;
    var plotW = w - padL - 8, plotH = h - padT - padB;
    var max = Math.max(30, Math.ceil(Math.max.apply(null, days.map(function (d) { return d.minutes; })) / 15) * 15);
    var slot = plotW / days.length;
    var barW = Math.min(26, slot * 0.55);

    var out = '<svg viewBox="0 0 ' + w + " " + h + '" class="chart" role="img" aria-label="直近7日間の学習時間">';

    // 目盛り（控えめな水平グリッド）
    [0.5, 1].forEach(function (f) {
      var val = Math.round(max * f);
      var y = padT + plotH - plotH * f;
      out += '<line x1="' + padL + '" y1="' + y + '" x2="' + (w - 8) + '" y2="' + y + '" stroke="var(--gridline)" stroke-width="1"/>';
      out += '<text x="' + (padL - 5) + '" y="' + (y + 3.5) + '" text-anchor="end" class="tick">' + val + "</text>";
    });
    // ベースライン
    out += '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (w - 8) + '" y2="' + (padT + plotH) + '" stroke="var(--axis)" stroke-width="1"/>';

    var maxIdx = -1, maxVal = -1;
    days.forEach(function (d, i) { if (d.minutes > maxVal) { maxVal = d.minutes; maxIdx = i; } });

    days.forEach(function (d, i) {
      var x = padL + slot * i + (slot - barW) / 2;
      var bh = max ? (d.minutes / max) * plotH : 0;
      var y = padT + plotH - bh;
      var dow = new Date(d.date + "T00:00:00").getDay();
      var isToday = i === days.length - 1;
      var label = WEEKDAYS[dow];
      var title = "<title>" + esc(d.date) + "：" + d.minutes + "分</title>";

      if (d.minutes > 0) {
        var r = Math.min(4, bh / 2); // データ端のみ丸める
        out += '<path d="M' + x + "," + (y + bh) +
          " L" + x + "," + (y + r) +
          " Q" + x + "," + y + " " + (x + r) + "," + y +
          " L" + (x + barW - r) + "," + y +
          " Q" + (x + barW) + "," + y + " " + (x + barW) + "," + (y + r) +
          " L" + (x + barW) + "," + (y + bh) + ' Z" fill="var(--series-1)">' + title + "</path>";
      }
      // ホバー領域（透明・全高）
      out += '<rect x="' + (padL + slot * i) + '" y="' + padT + '" width="' + slot + '" height="' + plotH + '" fill="transparent">' + title + "</rect>";
      // 値ラベルは最大値の日のみ（選択的直接ラベル）
      if (i === maxIdx && d.minutes > 0) {
        out += '<text x="' + (x + barW / 2) + '" y="' + (y - 4) + '" text-anchor="middle" class="bar-label">' + d.minutes + "</text>";
      }
      out += '<text x="' + (x + barW / 2) + '" y="' + (h - 8) + '" text-anchor="middle" class="tick' + (isToday ? " tick-strong" : "") + '">' + label + "</text>";
    });

    return out + "</svg>";
  }

  /* 12 週間の学習ヒートマップ。days: [{date, minutes}]（84 日、古い順） */
  function heatmap(days) {
    var cell = 12, gap = 3, padL = 20, padT = 6;
    var weeks = Math.ceil(days.length / 7);
    var w = padL + weeks * (cell + gap) + 4;
    var h = padT + 7 * (cell + gap) + 4;

    function levelOf(min) {
      if (min <= 0) return 0;
      if (min < 15) return 1;
      if (min < 30) return 2;
      if (min < 60) return 3;
      return 4;
    }

    var out = '<svg viewBox="0 0 ' + w + " " + h + '" class="chart heatmap-svg" role="img" aria-label="12週間の学習ヒートマップ">';
    // 曜日ラベル（月・水・金のみ表示して控えめに）
    [1, 3, 5].forEach(function (row) {
      out += '<text x="' + (padL - 6) + '" y="' + (padT + row * (cell + gap) + cell - 2) + '" text-anchor="end" class="tick">' + WEEKDAYS[row] + "</text>";
    });

    // 先頭の日付の曜日に合わせて開始位置を調整
    var firstDow = new Date(days[0].date + "T00:00:00").getDay();
    days.forEach(function (d, i) {
      var idx = i + firstDow;
      var col = Math.floor(idx / 7), row = idx % 7;
      var x = padL + col * (cell + gap), y = padT + row * (cell + gap);
      var lv = levelOf(d.minutes);
      var fill = lv === 0 ? "var(--heat-0)" : "var(--heat-" + lv + ")";
      out += '<rect x="' + x + '" y="' + y + '" width="' + cell + '" height="' + cell + '" rx="2.5" fill="' + fill + '"' +
        (lv === 0 ? ' stroke="var(--gridline)" stroke-width="1"' : "") + ">" +
        "<title>" + esc(d.date) + "：" + d.minutes + "分</title></rect>";
    });
    return out + "</svg>";
  }

  /* スキル自己評価レーダー（現在値と目標値の 2 系列）。axes: [{label, current, target}], 5 段階 */
  function radar(axes) {
    var w = 320, h = 250, cx = w / 2, cy = 128, R = 88, MAX = 5;
    var n = axes.length;

    function pt(i, val) {
      var ang = -Math.PI / 2 + (2 * Math.PI * i) / n;
      var r = (val / MAX) * R;
      return [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
    }
    function poly(vals) {
      return vals.map(function (v, i) { return pt(i, v).map(function (c) { return c.toFixed(1); }).join(","); }).join(" ");
    }

    var out = '<svg viewBox="0 0 ' + w + " " + h + '" class="chart" role="img" aria-label="スキル自己評価レーダーチャート">';
    // 目盛りリング
    for (var lv = 1; lv <= MAX; lv++) {
      out += '<polygon points="' + poly(axes.map(function () { return lv; })) + '" fill="none" stroke="var(--gridline)" stroke-width="1"/>';
    }
    // 軸線と軸ラベル
    axes.forEach(function (a, i) {
      var p = pt(i, MAX);
      out += '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0] + '" y2="' + p[1] + '" stroke="var(--gridline)" stroke-width="1"/>';
      var lp = pt(i, MAX + 1.3);
      out += '<text x="' + lp[0] + '" y="' + (lp[1] + 3) + '" text-anchor="middle" class="axis-label">' + esc(a.label) + "</text>";
    });
    // 目標（破線・アクア）
    out += '<polygon points="' + poly(axes.map(function (a) { return a.target; })) + '" fill="none" stroke="var(--series-2)" stroke-width="2" stroke-dasharray="5 4"/>';
    // 現在（塗り・ブルー）
    out += '<polygon points="' + poly(axes.map(function (a) { return a.current; })) + '" fill="var(--series-1)" fill-opacity="0.16" stroke="var(--series-1)" stroke-width="2"/>';
    axes.forEach(function (a, i) {
      var p = pt(i, a.current);
      out += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="var(--series-1)"><title>' + esc(a.label) + "（現在）：" + a.current + "</title></circle>";
    });
    // 凡例（2 系列のため必須）
    out += '<g class="legend">' +
      '<line x1="' + (cx - 92) + '" y1="' + (h - 12) + '" x2="' + (cx - 72) + '" y2="' + (h - 12) + '" stroke="var(--series-1)" stroke-width="2"/>' +
      '<text x="' + (cx - 66) + '" y="' + (h - 8) + '" class="tick">現在</text>' +
      '<line x1="' + (cx + 14) + '" y1="' + (h - 12) + '" x2="' + (cx + 34) + '" y2="' + (h - 12) + '" stroke="var(--series-2)" stroke-width="2" stroke-dasharray="5 4"/>' +
      '<text x="' + (cx + 40) + '" y="' + (h - 8) + '" class="tick">目標</text></g>';
    return out + "</svg>";
  }

  return { weekBar: weekBar, heatmap: heatmap, radar: radar };
})();
