//raspberrypiが起動したことをslackで通知するプログラム

var { WebClient } = require('@slack/web-api');
var os = require('os');
require('date-utils');

//書き換え部分---------------------------------------------------------------
var API_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
var channel = 'xxxxxxxxxxxxxx';
//-------------------------------------------------------------------------

const notify_slack = async () => {
  var dt = new Date();
  var now = dt.toFormat('YYYY/MM/DD  HH24:MI:SS');
  //const hostname=os.hostname();
  const hostname = '〇〇のraspberrypi';
  text = now + '\n' + hostname + 'が起動しました';
  var client = new WebClient(API_TOKEN);
  var params = {
    channel: channel,
    text: text,
  };
  await client.chat.postMessage(params);
};
notify_slack();
