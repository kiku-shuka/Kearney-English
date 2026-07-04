/* localStorage による永続化と学習記録の集計
 * すべてのデータはブラウザ内（localStorage）にのみ保存される。
 */
window.KE = window.KE || {};
KE.views = KE.views || {}; // 各ビューはこのオブジェクトに自身を登録する（app.js より先に読み込まれるためここで初期化）

KE.storage = (function () {
  var PREFIX = "kearneyEnglish.";

  function get(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      /* 容量超過などは黙って無視（学習は継続できる） */
    }
  }

  function remove(key) {
    localStorage.removeItem(PREFIX + key);
  }

  function todayStr(offsetDays) {
    var d = new Date();
    if (offsetDays) d.setDate(d.getDate() + offsetDays);
    var m = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);
    return d.getFullYear() + "-" + m + "-" + day;
  }

  /* ---- 学習ログ ---- */

  function getLogs() {
    return get("logs", []);
  }

  /* module: 機能ID, minutes: 学習時間(分), count: こなした数, correct: できた数 */
  function addLog(module, minutes, count, correct) {
    var logs = getLogs();
    logs.push({
      d: todayStr(),
      ts: Date.now(),
      module: module,
      minutes: Math.max(1, Math.round(minutes)),
      count: count || 0,
      correct: correct || 0
    });
    set("logs", logs);
  }

  function minutesByDay(nDays) {
    var logs = getLogs();
    var map = {};
    logs.forEach(function (l) { map[l.d] = (map[l.d] || 0) + l.minutes; });
    var out = [];
    for (var i = nDays - 1; i >= 0; i--) {
      var d = todayStr(-i);
      out.push({ date: d, minutes: map[d] || 0 });
    }
    return out;
  }

  function totalMinutes() {
    return getLogs().reduce(function (a, l) { return a + l.minutes; }, 0);
  }

  function moduleTotals() {
    var map = {};
    getLogs().forEach(function (l) {
      if (!map[l.module]) map[l.module] = { minutes: 0, sessions: 0, count: 0, correct: 0 };
      map[l.module].minutes += l.minutes;
      map[l.module].sessions += 1;
      map[l.module].count += l.count;
      map[l.module].correct += l.correct;
    });
    return map;
  }

  function todayMinutesByModule() {
    var t = todayStr();
    var map = {};
    getLogs().forEach(function (l) {
      if (l.d === t) map[l.module] = (map[l.module] || 0) + l.minutes;
    });
    return map;
  }

  /* 連続学習日数（今日学習していなければ昨日までの連続を数える） */
  function streak() {
    var days = {};
    getLogs().forEach(function (l) { days[l.d] = true; });
    var n = 0;
    var start = days[todayStr()] ? 0 : 1;
    for (var i = start; ; i++) {
      if (days[todayStr(-i)]) n++;
      else break;
    }
    return n;
  }

  /* ---- プロフィール・学習プラン ---- */

  function getProfile() { return get("profile", null); }
  function setProfile(p) { p.updatedAt = Date.now(); set("profile", p); }

  /* ---- SRS カード状態 ---- */

  function getSrs() { return get("srs", {}); }
  function setSrs(s) { set("srs", s); }

  /* ---- 表現ノート ---- */

  function getNotes() { return get("notes", []); }
  function setNotes(n) { set("notes", n); }

  /* ---- PREP 回答履歴 ---- */

  function getPrepAnswers() { return get("prepAnswers", []); }
  function setPrepAnswers(a) { set("prepAnswers", a); }

  /* ---- 週次振り返り ---- */

  function getReviews() { return get("reviews", []); }
  function setReviews(r) { set("reviews", r); }

  /* ---- 設定 ---- */

  function getSettings() { return get("settings", { rate: 1.0, voiceURI: "" }); }
  function setSettings(s) { set("settings", s); }

  /* ---- エクスポート / インポート / リセット ---- */

  var KEYS = ["logs", "profile", "srs", "notes", "prepAnswers", "reviews", "settings"];

  function exportAll() {
    var out = { app: "kearney-english", exportedAt: new Date().toISOString(), data: {} };
    KEYS.forEach(function (k) { out.data[k] = get(k, null); });
    return JSON.stringify(out, null, 2);
  }

  function importAll(json) {
    var obj = JSON.parse(json);
    if (!obj || obj.app !== "kearney-english" || !obj.data) {
      throw new Error("このアプリのエクスポートファイルではありません");
    }
    KEYS.forEach(function (k) {
      if (obj.data[k] !== null && obj.data[k] !== undefined) set(k, obj.data[k]);
    });
  }

  function resetAll() {
    KEYS.forEach(remove);
  }

  return {
    get: get, set: set, todayStr: todayStr,
    getLogs: getLogs, addLog: addLog, minutesByDay: minutesByDay,
    totalMinutes: totalMinutes, moduleTotals: moduleTotals,
    todayMinutesByModule: todayMinutesByModule, streak: streak,
    getProfile: getProfile, setProfile: setProfile,
    getSrs: getSrs, setSrs: setSrs,
    getNotes: getNotes, setNotes: setNotes,
    getPrepAnswers: getPrepAnswers, setPrepAnswers: setPrepAnswers,
    getReviews: getReviews, setReviews: setReviews,
    getSettings: getSettings, setSettings: setSettings,
    exportAll: exportAll, importAll: importAll, resetAll: resetAll
  };
})();
