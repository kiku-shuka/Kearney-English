/* 間隔反復（Spaced Repetition）
 * SM-2 を簡略化した 3 段階評価（できなかった / あやしい / できた）。
 * 「覚えた表現を忘れる直前に復習する」ことで定着効率を最大化する。
 */
window.KE = window.KE || {};

KE.srs = (function () {
  var S = KE.storage;

  function getCard(id) {
    var srs = S.getSrs();
    return srs[id] || { ease: 2.3, interval: 0, due: S.todayStr(), reps: 0, lapses: 0 };
  }

  /* grade: 0 = できなかった, 1 = あやしい, 2 = できた */
  function grade(id, g) {
    var srs = S.getSrs();
    var c = getCard(id);
    c.reps += 1;
    if (g === 0) {
      c.lapses += 1;
      c.interval = 0; // 今日のセッション内で再登場させ、明日また出す
      c.ease = Math.max(1.3, c.ease - 0.2);
    } else if (g === 1) {
      c.interval = Math.max(1, Math.round(c.interval * 1.2)) || 1;
      c.ease = Math.max(1.3, c.ease - 0.05);
    } else {
      if (c.interval === 0) c.interval = 1;
      else if (c.interval === 1) c.interval = 3;
      else c.interval = Math.round(c.interval * c.ease);
      c.ease = Math.min(2.8, c.ease + 0.03);
    }
    c.due = S.todayStr(c.interval === 0 ? 1 : c.interval);
    srs[id] = c;
    S.setSrs(srs);
    return c;
  }

  /* 与えられたカード ID 群のうち、今日復習すべきもの（新規含む）を返す */
  function dueIds(allIds) {
    var srs = S.getSrs();
    var today = S.todayStr();
    return allIds.filter(function (id) {
      var c = srs[id];
      return !c || c.due <= today;
    });
  }

  /* 学習済み（1 回以上出題した）カード数 */
  function learnedCount(allIds) {
    var srs = S.getSrs();
    return allIds.filter(function (id) { return srs[id] && srs[id].reps > 0; }).length;
  }

  /* 定着済み（間隔が 7 日以上に伸びた）カード数 */
  function maturedCount(allIds) {
    var srs = S.getSrs();
    return allIds.filter(function (id) { return srs[id] && srs[id].interval >= 7; }).length;
  }

  /* ---- 新規カードの 1 日あたり導入制限（全モジュール共通の枠） ---- */

  var NEW_CAP = 8;

  function newQuota() {
    var q = S.get("newCount", {});
    return q.d === S.todayStr() ? Math.max(0, NEW_CAP - (q.n || 0)) : NEW_CAP;
  }

  function consumeNew(n) {
    var today = S.todayStr();
    var q = S.get("newCount", {});
    if (q.d !== today) q = { d: today, n: 0 };
    q.n += n;
    S.set("newCount", q);
  }

  function shuffle(a) {
    return a.slice().sort(function () { return Math.random() - 0.5; });
  }

  /* 今日のセッションを組む：復習期限のカード優先 → 空きに新規（1 日 8 枚まで）。
   * コンテンツがいくら蓄積しても、ユーザーに見えるのは「今日の 1 セッション」だけになる。 */
  function buildSession(allIds, limit) {
    limit = limit || 10;
    var srsMap = S.getSrs();
    var today = S.todayStr();
    var due = [], fresh = [];
    allIds.forEach(function (id) {
      var c = srsMap[id];
      if (!c || !c.reps) fresh.push(id);
      else if (c.due <= today) due.push(id);
    });
    var take = shuffle(due).slice(0, limit);
    if (take.length < limit) {
      var allow = Math.min(newQuota(), limit - take.length);
      var newly = shuffle(fresh).slice(0, allow);
      consumeNew(newly.length);
      take = take.concat(newly);
    }
    return take;
  }

  /* セッション情報（開始前の表示用） */
  function sessionInfo(allIds) {
    var srsMap = S.getSrs();
    var today = S.todayStr();
    var due = 0, fresh = 0;
    allIds.forEach(function (id) {
      var c = srsMap[id];
      if (!c || !c.reps) fresh++;
      else if (c.due <= today) due++;
    });
    return { due: due, fresh: fresh, newQuota: newQuota() };
  }

  return {
    getCard: getCard, grade: grade, dueIds: dueIds,
    learnedCount: learnedCount, maturedCount: maturedCount,
    buildSession: buildSession, sessionInfo: sessionInfo
  };
})();
