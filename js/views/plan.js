/* 診断・学習プラン
 * 原典＜本編1＞のサバイバルトライアングル（Mindset × Method × Technique）に基づく設計。
 * 目的（＜導入＞の英語活用 3 シーン）と現在地（ゴールイメージ 5 スキルの自己評価）から、
 * 限られた時間を最も効く練習に配分する。
 * 「憧れを忘れないマインド」のため、英語で何をしたいかを言語化して保存する。
 */
(function () {
  var S = KE.storage;

  /* 原典＜導入＞の「英語活用の 3 シーン」（難易度ピラミッド）に対応 */
  var GOALS = [
    { id: "domestic", title: "国内プロジェクトで英語を活用したい", desc: "英語でのリサーチ・資料作成・プレゼン、グローバル企業クライアントとの議論をこなす", weights: { reading: 3, phrases: 2, prep: 2, composition: 1.5, shadowing: 1.5, roleplay: 1 } },
    { id: "collab", title: "海外オフィスとの協働案件に参画したい", desc: "事前準備のうえで、英語会議で一定時間のディスカッションができるようになる", weights: { shadowing: 3, composition: 2.5, phrases: 2, roleplay: 2, prep: 1.5, reading: 1 } },
    { id: "abroad", title: "海外勤務・出向を目指したい", desc: "海外メンバーと日常的に深いコミュニケーションができるレベルへ", weights: { shadowing: 2.5, roleplay: 2.5, composition: 2, reading: 1.5, phrases: 1.5, prep: 1.5 } }
  ];

  function goalById(id) { return GOALS.filter(function (g) { return g.id === id; })[0] || GOALS[0]; }

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

  KE.views.plan = function (el) {
    var profile = S.getProfile();
    var draft = {
      goal: profile ? profile.goal : "collab",
      dailyMinutes: profile ? profile.dailyMinutes : 30,
      levels: profile ? Object.assign({ research: 3, interview: 2, writing: 3, discussion: 2, presentation: 3 }, profile.levels) : { research: 3, interview: 2, writing: 3, discussion: 2, presentation: 3 },
      target: profile ? profile.target : 4,
      aspiration: profile && profile.aspiration ? profile.aspiration : ""
    };
    // 旧バージョンの軸データが残っていても新 5 軸で描画できるようにする
    KE.AXES.forEach(function (a) { if (!draft.levels[a.id]) draft.levels[a.id] = 3; });

    var html = '<h2 class="view-title">🧭 診断・学習プラン</h2>' +
      '<p class="view-desc">Kearney流の英語習得は <strong>Mindset × Method × Technique</strong> の「サバイバルトライアングル」。' +
      'ここでは目的と現在地から毎日のメニュー（Method）を設計し、あなたの「憧れ」（Mindset）を言語化します。</p>';

    html += '<div class="card"><h3>STEP 1　英語を使う目的（活用シーン）</h3>' +
      '<p class="sub mb-8">コンサルの英語活用は「国内プロジェクト → 海外協働 → 海外勤務」の順に難易度が上がります。目指すシーンを選んでください。</p><div id="goal-list">';
    GOALS.forEach(function (g) {
      html += '<label class="radio-card' + (draft.goal === g.id ? " selected" : "") + '" data-goal="' + g.id + '">' +
        '<input type="radio" name="goal" value="' + g.id + '"' + (draft.goal === g.id ? " checked" : "") + ">" +
        '<span><span class="rc-title">' + g.title + '</span><br><span class="rc-desc">' + g.desc + "</span></span></label>";
    });
    html += "</div></div>";

    html += '<div class="card mt-16"><h3>STEP 2　現在のレベル（ゴールイメージ 5 スキルの自己評価：1=苦手 〜 5=できる）</h3>';
    KE.AXES.forEach(function (a) {
      var v = draft.levels[a.id];
      html += '<div class="slider-row"><span class="s-label" title="' + KE.esc(a.goal) + '">' + a.label + "</span>" +
        '<input type="range" min="1" max="5" step="1" value="' + v + '" data-axis="' + a.id + '">' +
        '<span class="s-val" id="val-' + a.id + '">' + v + "</span></div>";
    });
    html += '<p class="sub mt-8">各スキルのゴール：リサーチ＝時間内に外国語ソースからメモをまとめる ／ インタビュー＝時間内に知りたい回答を得る ／ メール・チャット＝日本語並みの速度で読み書き ／ ディスカッション＝望むタイミングで発言する ／ プレゼン＝簡潔にプレゼンしQA対応。</p>' +
      '<label class="form-label">目標レベル（活用シーンの 3 段階に対応）</label>' +
      '<select id="target-select">' +
      '<option value="3"' + (draft.target === 3 ? " selected" : "") + ">3 — ビジネス文脈の理解・発信が最小限できる（国内プロジェクトの英語活用）</option>" +
      '<option value="4"' + (draft.target === 4 ? " selected" : "") + ">4 — 事前準備の上で一定時間の議論ができる（海外オフィスとの協働）</option>" +
      '<option value="5"' + (draft.target === 5 ? " selected" : "") + ">5 — 海外メンバーと日常的に深く協働できる（海外勤務）</option></select></div>";

    html += '<div class="card mt-16"><h3>STEP 3　1 日に使える学習時間</h3><div class="btn-row" id="minute-btns">';
    [15, 30, 45, 60].forEach(function (m) {
      html += '<button class="btn' + (draft.dailyMinutes === m ? " btn-primary" : "") + '" data-min="' + m + '">' + m + "分</button>";
    });
    html += '</div><p class="sub mt-8">原典いわく、どのトレーニングも「頻度と量」が効きます。短くても毎日続けられる時間で。</p></div>';

    html += '<div class="card mt-16"><h3>STEP 4　憧れメモ（憧れを忘れないマインド）</h3>' +
      '<p class="sub mb-8">英語を使って何をしたいのか、どうなりたいのかをビビッドに書いておきましょう。苦しいときの燃料になります（ホーム画面に表示されます）。</p>' +
      '<textarea id="aspiration-input" placeholder="例：ヘルスケア領域のグローバル案件に参画して、海外の専門家と対等に議論したい">' + KE.esc(draft.aspiration) + "</textarea></div>";

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
        "毎日の実施状況はホーム画面に自動で記録されます。</p></div>";
      box.innerHTML = h;
      if (save) {
        S.setProfile({
          goal: draft.goal, goalLabel: goal.title, dailyMinutes: draft.dailyMinutes,
          levels: draft.levels, target: draft.target, plan: plan,
          aspiration: document.getElementById("aspiration-input").value.trim(),
          createdAt: (profile && profile.createdAt) || Date.now()
        });
        KE.toast("学習プランを保存しました");
      }
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    document.getElementById("generate-btn").addEventListener("click", function () {
      showPlan(generatePlan(draft.goal, draft.dailyMinutes, draft.levels), true);
    });

    // 既存プランがあれば表示しておく（旧目的IDのプランでも表示は可能）
    if (profile && profile.plan) showPlan(profile.plan, false);
  };
})();
