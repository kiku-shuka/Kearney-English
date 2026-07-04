/* アプリ本体：ルーティングと共通ヘルパー */
window.KE = window.KE || {};
KE.views = KE.views || {};

/* 学習モジュールのメタ情報（プラン生成・進捗集計で共通利用） */
KE.MODULES = [
  { id: "composition", name: "瞬間英作文", icon: "⚡", desc: "日本語→英語の瞬発力を鍛える", axes: ["speaking", "vocab"] },
  { id: "phrases", name: "型・表現", icon: "📚", desc: "ビジネス頻出の型をストックする", axes: ["vocab"] },
  { id: "prep", name: "PREP構成", icon: "🏗️", desc: "結論ファーストで話を組み立てる", axes: ["structure"] },
  { id: "shadowing", name: "シャドーイング", icon: "🎧", desc: "耳と口を英語のスピードに慣らす", axes: ["listening", "fluency"] },
  { id: "roleplay", name: "ロールプレイ", icon: "🎭", desc: "実際の場面を通しで演じる", axes: ["speaking", "structure"] }
];

KE.AXES = [
  { id: "vocab", label: "語彙・表現" },
  { id: "listening", label: "リスニング" },
  { id: "speaking", label: "瞬発力" },
  { id: "fluency", label: "発音・流暢さ" },
  { id: "structure", label: "構成力" }
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
  window.addEventListener("DOMContentLoaded", function () {
    // 初回訪問（プロフィール未作成）なら診断へ誘導
    if (!location.hash && !KE.storage.getProfile()) {
      location.hash = "#/plan";
    }
    render();
  });
})();
