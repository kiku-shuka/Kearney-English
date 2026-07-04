/* Web Speech API ラッパー
 * - 音声合成（speechSynthesis）: 全ブラウザ内蔵・無料。英文の読み上げに使用。
 * - 音声認識（SpeechRecognition）: 対応ブラウザ（Chrome 等）でのみ有効。
 *   非対応環境では自動的に自己評価モードにフォールバックする。
 */
window.KE = window.KE || {};

KE.speech = (function () {
  var synth = window.speechSynthesis || null;
  var voices = [];
  var currentUtterance = null;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
  }
  if (synth) {
    loadVoices();
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = loadVoices;
    }
  }

  function englishVoices() {
    return voices.filter(function (v) { return /^en([-_]|$)/i.test(v.lang); });
  }

  function pickVoice() {
    var uri = KE.storage.getSettings().voiceURI;
    var evs = englishVoices();
    if (uri) {
      var hit = evs.filter(function (v) { return v.voiceURI === uri; })[0];
      if (hit) return hit;
    }
    // en-US を優先し、なければ任意の英語音声
    return evs.filter(function (v) { return /en[-_]US/i.test(v.lang); })[0] || evs[0] || null;
  }

  function available() { return !!synth; }

  function speak(text, opts) {
    opts = opts || {};
    if (!synth) { if (opts.onend) opts.onend(); return; }
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice();
    if (v) u.voice = v;
    u.lang = (v && v.lang) || "en-US";
    u.rate = opts.rate || KE.storage.getSettings().rate || 1.0;
    u.pitch = 1.0;
    if (opts.onend) u.onend = opts.onend;
    if (opts.onerror) u.onerror = opts.onerror;
    currentUtterance = u; // GC でイベントが失われるのを防ぐため参照を保持
    synth.speak(u);
  }

  function stop() {
    if (synth) synth.cancel();
  }

  function speaking() {
    return synth ? synth.speaking : false;
  }

  /* ---- 音声認識 ---- */

  var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function recognitionAvailable() { return !!Recognition; }

  /* 1 回分の発話を認識して結果を返す。返り値の stop() で中断できる。 */
  function recognizeOnce(onResult, onError, onEnd) {
    if (!Recognition) { if (onError) onError("unsupported"); return null; }
    var rec = new Recognition();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = function (e) {
      var t = e.results[0][0].transcript;
      if (onResult) onResult(t);
    };
    rec.onerror = function (e) { if (onError) onError(e.error); };
    rec.onend = function () { if (onEnd) onEnd(); };
    try { rec.start(); } catch (e) { if (onError) onError("start-failed"); return null; }
    return rec;
  }

  /* 認識結果とモデル英文の単語一致率（0〜1）。ゆるい自己確認用の指標 */
  function similarity(said, model) {
    function norm(s) {
      return s.toLowerCase().replace(/[^a-z0-9' ]/g, " ").split(/\s+/).filter(Boolean);
    }
    var a = norm(said), b = norm(model);
    if (!a.length || !b.length) return 0;
    var setA = {};
    a.forEach(function (w) { setA[w] = true; });
    var hit = b.filter(function (w) { return setA[w]; }).length;
    return hit / b.length;
  }

  /* ---- 録音（シャドーイングの自己確認用・任意機能） ---- */

  function recordingAvailable() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  var recorder = null;
  var chunks = [];

  function startRecording(onReady, onError) {
    if (!recordingAvailable()) { if (onError) onError("unsupported"); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = function (e) { chunks.push(e.data); };
      recorder.start();
      if (onReady) onReady();
    }).catch(function () {
      if (onError) onError("denied");
    });
  }

  function stopRecording(onBlobUrl) {
    if (!recorder) return;
    recorder.onstop = function () {
      var blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
      recorder.stream.getTracks().forEach(function (t) { t.stop(); });
      recorder = null;
      if (onBlobUrl) onBlobUrl(URL.createObjectURL(blob));
    };
    recorder.stop();
  }

  function isRecording() { return !!recorder && recorder.state === "recording"; }

  return {
    available: available, speak: speak, stop: stop, speaking: speaking,
    englishVoices: englishVoices,
    recognitionAvailable: recognitionAvailable, recognizeOnce: recognizeOnce, similarity: similarity,
    recordingAvailable: recordingAvailable, startRecording: startRecording,
    stopRecording: stopRecording, isRecording: isRecording
  };
})();
