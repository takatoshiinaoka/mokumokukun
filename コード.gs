// Discordにメッセージを送る関数
function sendMessageToDiscord() {
  // TENGINEER福岡のDiscordのウェブフックURL
  const discordWebHookURL = PropertiesService.getScriptProperties().getProperty("discordWebHookURL");

  // 現在時刻を取得
  const date = new Date();

  // 14時なら13時50分に通知。13時+1=14時をhoursに代入。
  const hours = date.getHours()+1;

  // 投稿するチャット内容と設定
  const message = {
    "content": "everyone\n"+hours+"時から週末もくもく会始まるよ～ \n毎週土日の14時と20時はボイスチャンネルでもくもく会をしよう！", // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}

// タイマーをセットする関数
function setTrigger(){
  const date = new Date();
  // 曜日を取得（日曜:0,土曜:6）
  const day　= date.getDay();

  //　土日の場合
  if(day==0 || day==6){
    const time1 = new Date();
    time1.setHours(13);
    time1.setMinutes(50);
    ScriptApp.newTrigger('myFunction').timeBased().at(time1).create();

    const time2 = new Date();
    time2.setHours(19);
    time2.setMinutes(50);
    ScriptApp.newTrigger('myFunction').timeBased().at(time2).create();
  }
}
