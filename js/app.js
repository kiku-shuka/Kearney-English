/* アプリ本体：ルーティングと共通ヘルパー */
window.KE = window.KE || {};
KE.views = KE.views || {};

/* 学習モジュールのメタ情報（プラン生成・進捗集計で共通利用）
 * axes は原典＜本編1＞の「英語力習得におけるゴールイメージ」5 スキルに対応 */
KE.MODULES = [
  { id: "reading", name: "速読リーディング", icon: "📖", desc: "簡単な英語をざっくり速く読む", axes: ["research"] },
  { id: "composition", name: "瞬間英作文", icon: "⚡", desc: "日本語→英語の瞬発力を鍛える", axes: ["discussion", "interview"] },
  { id: "phrases", name: "型・表現", icon: "📚", desc: "業界の型をストックし例文を書く", axes: ["writing", "discussion"] },
  { id: "prep", name: "PREP構成", icon: "🏗️", desc: "シンプルな構造で意見を組み立てる", axes: ["presentation", "discussion"] },
  { id: "shadowing", name: "シャドーイング", icon: "🎧", desc: "短いパッセージをそらんじるまで", axes: ["interview", "presentation"] },
  { id: "roleplay", name: "ロールプレイ", icon: "🎭", desc: "覚えた表現を実践の場で使う", axes: ["interview", "discussion"] }
];

/* 原典＜本編1＞のゴールイメージ（コンサルワークで必要な 5 スキル） */
KE.AXES = [
  { id: "research", label: "リサーチ", goal: "一定時間内に外国語ソースからリサーチメモをまとめられる" },
  { id: "interview", label: "インタビュー", goal: "インタビューの時間内で知りたいことの回答を得られる" },
  { id: "writing", label: "メール・チャット", goal: "日本語と変わらない速度で読める・文面を作れる" },
  { id: "discussion", label: "ディスカッション", goal: "望むタイミングで発言のターンを得て意見を述べられる" },
  { id: "presentation", label: "プレゼン", goal: "簡潔かつロジカルにプレゼンし、関連するQAに対応できる" }
];

KE.moduleById = function (id) {
  return KE.MODULES.filter(function (m) { return m.id === id; })[0];
};

/* HTML エスケープ */
KE.esc = function (s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
};

/* トースト表示 */
KE.toast = function (msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(KE._toastTimer);
  KE._toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
};

/* セッション計測（開始〜終了の分数） */
KE.sessionTimer = {
  start: function () { this._t0 = Date.now(); },
  minutes: function () { return Math.max(1, Math.round((Date.now() - this._t0) / 60000)); }
};

/* ヘッダーの連続日数表示を更新 */
KE.updateHeader = function () {
  var el = document.getElementById("header-streak");
  var s = KE.storage.streak();
  var today = KE.storage.todayMinutesByModule();
  var todayMin = 0;
  Object.keys(today).forEach(function (k) { todayMin += today[k]; });
  el.innerHTML = "🔥 連続 <strong>" + s + "</strong> 日 ・ 今日 <strong>" + todayMin + "</strong> 分";
};

/* ルーター */
(function () {
  var DEFAULT = "dashboard";

  function currentRoute() {
    var h = location.hash.replace(/^#\//, "");
    return h && KE.views[h] ? h : DEFAULT;
  }

  function render() {
    KE.speech.stop(); // 画面遷移時に読み上げを止める
    var route = currentRoute();
    var container = document.getElementById("view");
    container.innerHTML = "";
    document.querySelectorAll(".nav-tab").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-route") === route);
    });
    KE.views[route](container);
    KE.updateHeader();
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);

  // 現在と同じルートへのリンク（結果画面 →「一覧へ」等）は hashchange が
  // 発火しないため、明示的に再描画する
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href^="#/"]') : null;
    if (a && a.getAttribute("href") === location.hash) {
      e.preventDefault();
      render();
    }
  });
  window.addEventListener("DOMContentLoaded", function () {
    // 初回訪問（プロフィール未作成）なら診断へ誘導
    if (!location.hash && !KE.storage.getProfile()) {
      location.hash = "#/plan";
    }
    render();
  });
})();
