# メッセージをslackに送信するプログラム
# # -*- coding: utf-8 -*-
import requests
import json

# 書き換え部分---------------------------------------------------------------
WEB_HOOK_URL = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
message_text = 'Hello World!'
# -------------------------------------------------------------------------


def notify_slack(txt):
    # txtをメッセージとして送信する
    requests.post(WEB_HOOK_URL, data=json.dumps({
        "text": txt,
    }))


notify_slack(message_text)
