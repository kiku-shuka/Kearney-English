/* 診断・学習プラン
 * Kearney流の出発点：「なんとなく勉強する」のではなく、
 * 目的から逆算して課題を特定し、限られた時間を最も効く練習に配分する。
 */
(function () {
  var S = KE.storage;

  var GOALS = [
    { id: "meeting", title: "会議で発言できるようになりたい", desc: "英語会議で意見を言い、議論に参加する", weights: { composition: 3, phrases: 2.5, prep: 2, shadowing: 1.5, roleplay: 2 } },
    { id: "listening", title: "電話会議を聞き取れるようになりたい", desc: "海外オフィスとのコールで内容を正確に理解する", weights: { shadowing: 4, phrases: 1.5, composition: 1.5, roleplay: 1, prep: 1 } },
    { id: "versant", title: "スピーキングテスト（VERSANT等）対策", desc: "採用・昇格で使われるテストのスコアを上げる", weights: { composition: 3.5, prep: 2.5, shadowing: 2, phrases: 1.5, roleplay: 1 } },
    { id: "global", title: "海外メンバーと信頼関係を築きたい", desc: "雑談も含め、対等に協働できる関係をつくる", weights: { phrases: 2.5, roleplay: 2.5, shadowing: 2, composition: 2, prep: 1 } }
  ];

  function goalById(id) { return GOALS.filter(function (g) { return g.id === id; })[0]; }

  /* 目的の重み × 弱点ブーストで 1 日の学習時間を配分する */
  function generatePlan(goalId, dailyMinutes, levels) {
    var goal = goalById(goalId);
    var weighted = KE.MODULES.map(function (m) {
      var gaps = m.axes.map(function (a) { return 5 - (levels[a] || 3); });
      var avgGap = gaps.reduce(function (x, y) { return x + y; }, 0) / gaps.length;
      return { id: m.id, w: (goal.weights[m.id] || 1) * (1 + 0.25 * avgGap) };
    });
    var sum = weighted.reduce(function (a, b) { return a + b.w; }, 0);
    // 5 分刻みで配分し、端数は重みの大きい順に調整
    var items = weighted.map(function (x) {
      return { module: x.id, minutes: Math.round((dailyMinutes * x.w / sum) / 5) * 5, w: x.w };
    }).filter(function (x) { return x.minutes >= 5; });
    items.sort(function (a, b) { return b.w - a.w; });
    var diff = dailyMinutes - items.reduce(function (a, b) { return a + b.minutes; }, 0);
    while (diff >= 5 && items.length) { items[0].minutes += 5; diff -= 5; }
    while (diff <= -5 && items.length) {
      var last = items[items.length - 1];
      if (last.minutes > 5) { last.minutes -= 5; diff += 5; } else { items.pop(); }
    }
    return items.map(function (x) { return { module: x.module, minutes: x.minutes }; });
  }

  function weakestAxis(levels) {
    var min = 6, id = null;
    KE.AXES.forEach(function (a) {
      if ((levels[a.id] || 3) < min) { min = levels[a.id] || 3; id = a.id; }
    });
    return KE.AXES.filter(function (a) { return a.id === id; })[0];
  }

  function axisLabel(id) {
    var a = KE.AXES.filter(function (x) { return x.id === id; })[0];
    return a ? a.label : id;
  }

  KE.views.plan = function (el) {
    var profile = S.getProfile();
    var draft = {
      goal: profile ? profile.goal : "meeting",
      dailyMinutes: profile ? profile.dailyMinutes : 30,
      levels: profile ? Object.assign({}, profile.levels) : { vocab: 3, listening: 3, speaking: 2, fluency: 3, structure: 3 },
      target: profile ? profile.target : 4
    };

    var html = '<h2 class="view-title">🧭 診断・学習プラン</h2>' +
      '<p class="view-desc">Kearney流の第一歩は「目的の明確化」と「課題の特定」。目的と現在地を入力すると、限られた時間で最も効果が出る 1 日のメニューを設計します。</p>';

    html += '<div class="card"><h3>STEP 1　英語を使う目的（ゴール）</h3><div id="goal-list">';
    GOALS.forEach(function (g) {
      html += '<label class="radio-card' + (draft.goal === g.id ? " selected" : "") + '" data-goal="' + g.id + '">' +
        '<input type="radio" name="goal" value="' + g.id + '"' + (draft.goal === g.id ? " checked" : "") + ">" +
        '<span><span class="rc-title">' + g.title + '</span><br><span class="rc-desc">' + g.desc + "</span></span></label>";
    });
    html += "</div></div>";

    html += '<div class="card mt-16"><h3>STEP 2　現在のレベル（自己評価：1=苦手 〜 5=得意）</h3>';
    KE.AXES.forEach(function (a) {
      var v = draft.levels[a.id];
      html += '<div class="slider-row"><span class="s-label">' + a.label + "</span>" +
        '<input type="range" min="1" max="5" step="1" value="' + v + '" data-axis="' + a.id + '">' +
        '<span class="s-val" id="val-' + a.id + '">' + v + "</span></div>";
    });
    html += '<label class="form-label">目標レベル（全スキル共通）</label>' +
      '<select id="target-select">' +
      '<option value="3"' + (draft.target === 3 ? " selected" : "") + ">3 — 会議で困らないレベル</option>" +
      '<option value="4"' + (draft.target === 4 ? " selected" : "") + ">4 — 議論をリードできるレベル</option>" +
      '<option value="5"' + (draft.target === 5 ? " selected" : "") + ">5 — ネイティブと対等なレベル</option></select></div>";

    html += '<div class="card mt-16"><h3>STEP 3　1 日に使える学習時間</h3><div class="btn-row" id="minute-btns">';
    [15, 30, 45, 60].forEach(function (m) {
      html += '<button class="btn' + (draft.dailyMinutes === m ? " btn-primary" : "") + '" data-min="' + m + '">' + m + "分</button>";
    });
    html += '</div><p class="sub mt-8">短くても毎日続けることが最重要。まずは無理のない時間で。</p></div>';

    html += '<div class="center mt-16"><button class="btn btn-primary btn-lg" id="generate-btn">学習プランを作成する</button></div>' +
      '<div id="plan-result" class="mt-16"></div>';

    el.innerHTML = html;

    /* イベント */
    el.querySelectorAll("#goal-list .radio-card").forEach(function (c) {
      c.addEventListener("click", function () {
        draft.goal = c.getAttribute("data-goal");
        el.querySelectorAll("#goal-list .radio-card").forEach(function (x) { x.classList.remove("selected"); });
        c.classList.add("selected");
        c.querySelector("input").checked = true;
      });
    });
    el.querySelectorAll('input[type="range"]').forEach(function (r) {
      r.addEventListener("input", function () {
        var axis = r.getAttribute("data-axis");
        draft.levels[axis] = parseInt(r.value, 10);
        document.getElementById("val-" + axis).textContent = r.value;
      });
    });
    el.querySelector("#target-select").addEventListener("change", function (e) {
      draft.target = parseInt(e.target.value, 10);
    });
    el.querySelectorAll("#minute-btns .btn").forEach(function (b) {
      b.addEventListener("click", function () {
        draft.dailyMinutes = parseInt(b.getAttribute("data-min"), 10);
        el.querySelectorAll("#minute-btns .btn").forEach(function (x) { x.classList.remove("btn-primary"); });
        b.classList.add("btn-primary");
      });
    });

    function showPlan(plan, save) {
      var goal = goalById(draft.goal);
      var weak = weakestAxis(draft.levels);
      var top = KE.moduleById(plan[0].module);
      var box = document.getElementById("plan-result");
      var h = '<div class="card"><span class="kicker">Your Plan</span><h3 class="mt-8">1 日 ' + draft.dailyMinutes + " 分の推奨メニュー</h3>";
      plan.forEach(function (p) {
        var m = KE.moduleById(p.module);
        h += '<a class="menu-item" href="#/' + m.id + '"><span class="menu-check todo">' + m.icon + '</span>' +
          '<span class="menu-name">' + m.name + '<br><span class="tag">' + m.desc + "</span></span>" +
          '<span class="menu-min">' + p.minutes + "分</span></a>";
      });
      h += '<hr class="divider"><p class="sub">📌 <strong>設計の考え方</strong>：目的「' + goal.title + "」の達成に効く練習を重み付けし、自己評価が低い「" +
        weak.label + "」に関わるメニューを増やしています。最重点は<strong>" + top.icon + " " + top.name + "</strong>。" +
        "プランは毎日のホーム画面に表示され、実施状況が自動で記録されます。</p></div>";
      box.innerHTML = h;
      if (save) {
        S.setProfile({
          goal: draft.goal, goalLabel: goal.title, dailyMinutes: draft.dailyMinutes,
          levels: draft.levels, target: draft.target, plan: plan,
          createdAt: (profile && profile.createdAt) || Date.now()
        });
        KE.toast("学習プランを保存しました");
      }
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    document.getElementById("generate-btn").addEventListener("click", function () {
      showPlan(generatePlan(draft.goal, draft.dailyMinutes, draft.levels), true);
    });

    // 既存プランがあれば表示しておく
    if (profile && profile.plan) showPlan(profile.plan, false);
  };
})();
