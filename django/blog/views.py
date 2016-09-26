from django.shortcuts import render, redirect, reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import *
import re

# Create your views here.
def home(request):
    context = {}

    # displaying all posts that have been posted in reverse-chronological order (most recent first).
    posts = Post.objects.all().order_by('-timestamp')
    context['posts'] = posts
    return render(request, 'home.html', context)

def register(request):
    if request.method == 'GET':
        return render(request, 'register.html', {})


    if request.method == 'POST':
        username = ''
        email = ''
        first_name = ''
        last_name = ''
        password = ''
        confirm = ''

        context = {}
        error_msg = []
        context['error_msg'] = error_msg


        # In fact, I don't need to check the existence of the input here, because
        # I set all the fields to "required" in the HTML.
        if request.POST.get('username'):
            username = request.POST.get('username')
            # The username should only contain letter, numbers and underscore and the length should be 3~12 characters long!
            if not re.findall('^[a-zA-Z0-9_]{3,12}$', username):
                error_msg.append('Username should only contain letter, numbers and underscore and the length should be 3~12 characters long!')
        else:
            error_msg.append('Please enter the username!')

        if request.POST.get('email'):
            email = request.POST.get('email')
        else:
            error_msg.append('Please enter the email address!')

        if request.POST.get('first_name'):
            first_name = request.POST.get('first_name')
        else:
            error_msg.append('Please enter the First Name!')

        if request.POST.get('last_name'):
            last_name = request.POST.get('last_name')
        else:
            error_msg.append('Please enter the username!')

        if request.POST.get('password'):
            password = request.POST.get('password')
        else:
            error_msg.append('Please enter the password!')

        if request.POST.get('confirm'):
            confirm = request.POST.get('confirm')
        else:
            error_msg.append('Please confirm the password!')

        if password != confirm:
            error_msg.append('The password is different from the comfirm password!')

        # Check whether the user has been registered or not.
        if username and len(User.objects.filter(username=username)) > 0:
            error_msg.append('Username is already taken.')


        if error_msg:
            return render(request, 'register.html', context)


        new_user = User.objects.create_user(username=username,
                                            first_name = first_name,
                                            last_name = last_name,
                                            password=password,
                                            email=email)
        new_user.save()
        new_user = authenticate(username=username,
                                password=password)
        login(request, new_user)

        return redirect('/')


    return render(request, 'register.html', {})

def my_login(request):
    context = {}
    error_msg = []
    context['error_msg'] = error_msg

    if request.method == 'POST':
        username = ''
        password = ''

        if request.POST.get('username'):
            username = request.POST.get('username')
        else:
            error_msg.append('Please enter the username!')

        if request.POST.get('password'):
            password = request.POST.get('password')
        else:
            error_msg.append('Please enter the password!')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                return redirect('/')
        else:
            error_msg.append('Invalid username or password!')


    return render(request, 'login.html', context)

@login_required
def my_logout(request):
    logout(request)
    return redirect('/')

@login_required
def post(request):
    context = {}
    error_msg = []
    context['error_msg'] = error_msg

    if request.method == 'POST':
        username = str(request.user)
        text = request.POST.get('text')

        # In fact, the textarea has already forbidden the input which > 42.
        if len(text) > 42:
            return redirect('/')
        if text:
            new_post = Post.objects.create(username=username, text=text)
            new_post.save()
            return redirect('/')
    return render(request, 'home.html', context)


@login_required
def profile(request, username):

    context = {}
    posts = Post.objects.filter(username=username).order_by('-timestamp')
    user = User.objects.filter(username=username)[0]

    context['posts'] = posts
    context['user'] = user

    return render(request, 'home.html', context)
