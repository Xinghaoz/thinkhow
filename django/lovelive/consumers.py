from channels import Group
from django.http import HttpResponse
from channels.handler import AsgiHandler
from channels.sessions import channel_session, enforce_ordering
from channels.auth import http_session_user, channel_session_user, channel_session_user_from_http
from lovelive.models import *
import json
import urllib.parse as urlparse
from django.shortcuts import redirect, get_object_or_404

@channel_session
@channel_session_user_from_http
@enforce_ordering(slight=True)
def ws_add(message, room):
    print("in ws_add")
    print("[Adding...] username: ", message.user.username)

    room_id = message.user.property.room

    Group('room-%s' % room_id).add(message.reply_channel)
    message.channel_session['room_id'] = room_id
    message.channel_session['username'] = message.user.username

@channel_session
@channel_session_user
@enforce_ordering(slight=True)
def ws_echo(message):
    if 'room_id' not in message.channel_session:
        print("----------no room id-------------")
        return
    room_id = message.channel_session['room_id']
    print("message is:", message.content['text'])
    print("path is:", message.content['path'])
    the_message = message.content['text']
    the_message = str(the_message).split("##@##")
    type_no = the_message[0]
    # type_no =
    # '0': tell arrival
    # '1': tell game start
    # '2': send everyone my property infos
    # '3': send step
    # '4': send nextToken
    # '5': send isMoving
    # '6': send isProccesing
    # '7': send position, level
    # '8': income[]

    if (type_no == "0") or (type_no == "1"):
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no' : type_no, #simply return and broadcast the type_no
                'username' : message.channel_session['username'],
            }),
        })
    if (type_no == "2"):
        username = the_message[1]
        cash = the_message[2]
        deposit = the_message[3]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username' : username,
                'cash': cash,
                'deposit': deposit,
            }),
        })
    if (type_no == "3"):
        step = the_message[1]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'step' : step,
            }),
        })

    if (type_no == "4"):
        token = the_message[1]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'token' : token,
            }),
        })

    if (type_no == "5"):
        isMoving = the_message[1]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'isMoving' : isMoving,
            }),
        })

    if (type_no == "6"):
        isProcessing = the_message[1]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'isProcessing': isProcessing,
            }),
        })

    if (type_no == "7"):
        x = the_message[1]
        y = the_message[2]
        level = the_message[3]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'x': x,
                'y': y,
                'level': level,
            }),
        })

    if (type_no == "8"):
        token = the_message[1]
        money = the_message[2]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'token': token,
                'money': money,
            }),
        })

    if (type_no == "010"):
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
            }),
        })

    if (type_no == "101"):
        random_index = the_message[1]
        Group('room-%s' % room_id).send({
            'text': json.dumps({
                'type_no': type_no,
                'username': message.channel_session['username'],
                'random_index': random_index,
            }),
        })



@channel_session
@channel_session_user
@enforce_ordering(slight=True)
def ws_disconnect(message): # Connected to websocket.disconnect
    room_id = message.channel_session['room_id']
    Group("room-%s" % room_id).discard(message.reply_channel)
