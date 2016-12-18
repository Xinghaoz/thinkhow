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



def first_page(request):

    context = {}
    try:
        user_temp = User.objects.get(username = request.user.username)
    except ObjectDoesNotExist:
        context = {'user' : True}
    return render(request, 'lovelive/first_page.html', context)

def custom_login(request):
    if request.user.is_authenticated():
        return redirect(reverse('home'))
    else:
        if request.method == 'GET':
            form = AuthenticationForm()
            return render(request, 'lovelive/log_in_page.html', {'form': form})
        else:
            form = AuthenticationForm(data=request.POST)
            if form.is_valid():
                login(request, form.get_user())
                return redirect(reverse('home'))
            else:
                return render(request, 'lovelive/log_in_page.html', {'form': form})

@login_required
def home(request):
    me = User.objects.get(username=request.user.username)
    myproperty = get_object_or_404(Property, owner=request.user)
    myprofile = get_object_or_404(Profile, owner=request.user)
    context = {
        'myprofile' : myprofile,
        'myproperty' : myproperty,
        'me' : me,
    }
    return render(request, 'lovelive/home_page.html', context)


@login_required
@transaction.atomic
def edit_profile(request):
    profile_to_edit = get_object_or_404(Profile, owner=request.user)


    if request.method == 'GET':
        profileform = ProfileForm(instance=profile_to_edit)  # Creates form from the
        context = {'profileform' : profileform,         # existing profile.
                   'changepasswordform' : ChangePasswordForm(), }
        return render(request, 'lovelive/edit_profile.html', context)

    new_profile = ProfileForm(request.POST, request.FILES, instance=profile_to_edit)

    if not new_profile.is_valid():
        context = {'profileform' : new_profile,}
        return render(request, 'lovelive/edit_profile.html', context)

    new_profile.save()
    return redirect(reverse('home'))

@login_required
@transaction.atomic
def change_password_in_profile(request):
    changepasswordform = ChangePasswordForm(request.POST)
    if not changepasswordform.is_valid():
        profile_to_edit = get_object_or_404(Profile, owner=request.user)
        profileform = ProfileForm(instance=profile_to_edit)  # Creates form from the
        context = {'profileform' : profileform,         # existing profile.
                   'changepasswordform' : changepasswordform, }
        return render(request, 'lovelive/edit_my_profile.html', context)
    user_change_password = request.user
    password_to_be_set = changepasswordform.cleaned_data['password1']
    user_change_password.set_password(password_to_be_set)
    user_change_password.save()
    login(request, user_change_password)
    return redirect(reverse('home'))

@login_required
def get_profile_photo(request):
    profile_get_photo = get_object_or_404(Profile, owner=request.user)
    if not profile_get_photo.picture:
        raise Http404
    content_type = guess_type(profile_get_photo.picture.name)
    return HttpResponse(profile_get_photo.picture, content_type=content_type)

@login_required
def get_other_profile_photo(request, id):
    print("get photo")
    other_user = User.objects.get(id = id)
    print("get photo")
    profile_get_photo = get_object_or_404(Profile, owner=other_user)
    print("get photo")
    if not profile_get_photo.picture:
        raise Http404
    content_type = guess_type(profile_get_photo.picture.name)
    print("get photo")
    return HttpResponse(profile_get_photo.picture, content_type=content_type)

@transaction.atomic
def register(request):
    context = {}
    # Just display the registration form if this is a GET request
    if request.method == 'GET':
        context['registrationform'] = RegistrationForm()
        return render(request, 'lovelive/register_page.html', context)
    registrationform = RegistrationForm(request.POST)
    context['registrationform'] = registrationform

    if not registrationform.is_valid():
        return render(request, 'lovelive/register_page.html', context)

    new_user = User.objects.create_user(username=registrationform.cleaned_data['username'], \
                                        email=registrationform.cleaned_data['email1'], \
                                        password=registrationform.cleaned_data['password1'])
    new_user.is_active = False
    new_user.save()
    #create a blank profile
    new_profile = Profile(owner=new_user)
    new_profile.save()
    #create a blank my property
    new_myproperty = Property(owner=new_user)
    new_myproperty.save()

    #token
    token = default_token_generator.make_token(new_user)

    #email_body
    email_body = """
        Welcome to lovelive, click the link below to verify your email address:
        http://%s%s
    """ % (request.get_host(), reverse('confirm', args=(new_user.username, token, )))
    #

    send_mail(subject = "verify your email",
              message = email_body,
              from_email="lovelive-regis-service@lovelive.com",
              recipient_list = [new_user.email])

    context['username'] = new_user.username
    context['email'] = new_user.email
    context['verification_error'] = 0
    return render(request, 'lovelive/wait_to_be_activated.html', context)

@transaction.atomic
def confirm(request, username, token):
    context = {}
    try:
        new_activated_user = User.objects.get(username=username)
    except User.DoesNotExist:
        context['verification_error'] = 1
        return render(request, 'lovelive/wait_to_be_activated.html', context)
    token_2 = default_token_generator.make_token(new_activated_user)
    if new_activated_user.is_active == True:
        return redirect(reverse('home'))
    else:
        if token_2 == token:
            new_activated_user.is_active = True
            new_activated_user.save()
        else:
            context['verification_error'] = 1
            return render(request, 'lovelive/wait_to_be_activated.html', context)

    # Logs in & redirects
    login(request, new_activated_user)
    # redirect to home
    return redirect('/lovelive/home')

@login_required
def get_photo(request,id):
    role = get_object_or_404(PlayRole, id = id)
    if not role.role_picture:
        raise Http404
    content_type = guess_type (role.role_picture.name)
    return HttpResponse(role.role_picture, content_type = content_type)

@transaction.atomic
def reset_password(request):

    return password_reset(request,
            template_name='lovelive/password_reset/password_reset_form.html',
            email_template_name='lovelive/password_reset/password_reset_email.html',
            password_reset_form=PasswordResetForm,
            token_generator=default_token_generator,
            post_reset_redirect='/lovelive/user/password/reset/done/')

@login_required
def scoreboard(request):
    me = User.objects.get(username=request.user)
    all_users_scores = Property.objects.order_by('total_score')
    first_50_users_scores = all_users_scores[0:49]
    context={'me' : me,
            'first_50_users_scores' : first_50_users_scores,
            }
    return render(request, 'lovelive/scoreboard.html', context)

@login_required
def wait_for_other_user(request):
    return render(request, 'lovelive/waiting.html')

@login_required
def game(request):
    return render(request, 'lovelive/game.html', {})
@login_required
def get_my_initial_property(request):
    try:
        myproperty = get_object_or_404(Property, owner=request.user)
    except:
        return redirect(reverse('error-lovelive'))
    context = { "username" : request.user.username,
                "cash" : myproperty.cash,
                "deposit" : myproperty.deposit,
                }
    print("context", context)
    return render(request, 'lovelive/my_initial_property.json', context, content_type="application/json")

@login_required
def get_my_room_id(request):
    try:
        myproperty = get_object_or_404(Property, owner=request.user)
    except:
        return redirect(reverse('error-lovelive'))
    context = { "my_room_id" : myproperty.room,
                }
    print("context", context)
    return render(request, 'lovelive/my_room_id.json', context, content_type="application/json")

@login_required
def result(request):
    if not 'result_cash' in request.POST or not request.POST['result_cash'] or \
       not 'result_deposit' in request.POST or not request.POST['result_deposit']:
        print("result wrong")
        return redirect(reverse('error-lovelive'))
    else:
        myproperty = get_object_or_404(Property, owner = request.user)
        myproperty.cash = request.POST['result_cash']
        myproperty.deposit = request.POST['result_deposit']
        myproperty.save()
    return HttpResponse("")
#------------------------------------ WAIT ROOM PART Begin--------------------------
@login_required
def choose_map(request):
    context={ 'username' : request.user.username,

    }
    return render(request, 'lovelive/choose_map.html', context)

@login_required
@transaction.atomic
def join_room(request):
    try:
        print("join room")
        room_all = Room.objects.all()
        i = 0
        while(room_all[i].state == 3): # the room is full
            i = i + 1
            if (i > 30): #maximum room number of 30
                return redirect(reverse('error-lovelive'))
        print("i", i)
        room_join = room_all[i]
        if request.user.property.room == i:
            print("user has already join in")
            return redirect(reverse('check-if-other-user-join-in'))
        else:
            request.user.property.room = i
            request.user.property.save()
            print("request.user.property.room", request.user.property.room)

        if room_join.state == 0:
            room_join.player_1 = request.user.username
            room_join.state = 1
        elif room_join.state == 1:
            room_join.player_2 = request.user.username
            room_join.state = 2
        elif room_join.state == 2:
            room_join.player_3 = request.user.username
            room_join.state = 3
            #game should begin now
        else:
            #something wrong
            return redirect(reverse('error-lovelive'))
        room_join.save()
        print("room_join", room_join)
        return redirect(reverse('check-if-other-user-join-in'))
    except:
        # if the wait queue has no been created
        return redirect(reverse('error-lovelive'))
    return redirect(reverse('check-if-other-user-join-in'))

@login_required
@transaction.atomic
def check_if_other_user_join_in(request):
    print("now check if other user join in")
    players = []
    try:
        room_id = request.user.property.room + 1
        print("roomid", room_id)
        room_now = get_object_or_404(Room, id=room_id)
        begin_status = 0
        if room_now.state >= 1:
            player1_username = room_now.player_1
            player1 = get_object_or_404(User, username = player1_username)
            players.append(player1)
            if room_now.state >= 2:
                player2_username = room_now.player_2
                player2 = get_object_or_404(User, username = player2_username)
                players.append(player2)
                if room_now.state >= 3:
                    player3_username = room_now.player_3
                    player3 = get_object_or_404(User, username = player3_username)
                    players.append(player3)
                    begin_status = 1
                    print("now check if other user join in ---- last person... game starting now... redirecting to starting game...")
        print("now check if other user join in ---- begin status:", begin_status)
        print("now check if other user join in ---- players:", players)
        context = {'players' : players,
                   'begin_status' : begin_status,}
    except ObjectDoesNotExist:
        return redirect(reverse('error-lovelive'))
    return render(request, 'lovelive/wait_queue.json', context, content_type="application/json")

@login_required
@transaction.atomic
def wait_queue_full_start_game(request):
    # try:
    #     waitqueue_now = get_object_or_404(WaitQueue, id=1)
    #     print(waitqueue_now)
    #     return HttpResponse("begin")
    # except:
    #     return redirect(reverse('error-lovelive'))
    return HttpResponse("test")

#------------------------------------ WAIT ROOM PART End--------------------------
def error_lovelive(request):
    return HttpResponse("error")
