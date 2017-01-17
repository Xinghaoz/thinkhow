from django.shortcuts import render, redirect, get_object_or_404
from django.core.urlresolvers import reverse
from django.http import HttpResponse, Http404
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.db import transaction
from django.contrib.auth.forms import AuthenticationForm
from django.utils import timezone

# import time
import datetime
from datetime import tzinfo, timedelta, datetime
import pytz

from django.core import serializers
import json
# Decorator to use built-in authentication system
from django.contrib.auth.decorators import login_required

# Used to create and manually log in a user
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate

from django.contrib.auth.views import password_reset, password_reset_confirm, login
from django.contrib.auth.forms import PasswordResetForm
#Helper function to guess a MIME type from a file name
from mimetypes import guess_type
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator


from lovelive.models import *
from lovelive.forms import *


def game(request, room_id):
    context = {}
    context['room_id'] = room_id
    return render(request, 'lovelive/game.html', context)
