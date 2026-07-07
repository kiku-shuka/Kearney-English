/* 週次配信コンテンツ（追記専用）
 * 週次の自動ルーチンがこのファイルの各配列に追記する。
 * 手書きの基本データ（sentences.js / phrases.js 等）とは分離されており、
 * ルーチンはこのファイルと daily.js 以外を変更しない。
 * ID 規約: ISO週番号を含める（例: w2628-s01）。既存 ID と衝突しないこと。
 */
window.KE_DATA = window.KE_DATA || {};

/* 瞬間英作文の追加文（sentences.js の items と同スキーマ: {id, ja, en, note}） */
KE_DATA.extraSentences = [];

/* 型・表現の追加（phrases.js の items と同スキーマ: {id, en, ja, tip}） */
KE_DATA.extraPhrases = [];

/* シャドーイングの追加スクリプト（shadowing.js と同スキーマ） */
KE_DATA.extraShadowing = [];

/* PREP の追加お題（prep.js の prepTopics と同スキーマ） */
KE_DATA.extraPrep = [];

/* ロールプレイの追加シナリオ（scenarios.js と同スキーマ） */
KE_DATA.extraScenarios = [];
