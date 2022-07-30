function myFunction() {
  // TENGINEER福岡のDiscordのウェブフックURL
  const discordWebHookURL = PropertiesService.getScriptProperties().getProperty("discordWebHookURL");

  // 投稿するチャット内容と設定
  const message = {
    "content": "@everyone20時から週末もくもく会始まるよ～ \n毎週土日の14時と20時はボイスチャンネルでもくもく会をしよう！", // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}
