from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import transaction
from django.http import HttpResponse, Http404
# from django.db.models.base  import DoesNotExist
from .models import *
from .forms import *

from mimetypes import guess_type
import re
from itertools import chain
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.views import password_reset, password_reset_confirm
from django.contrib.auth.forms import PasswordResetForm
from datetime import datetime
from django.db import models

# Create your views here.
def home(request):
    context = {}
    login_form = LoginForm()
    post_form = PostForm()
    user = ''
    profile = ''

    # displaying all posts that have been posted in reverse-chronological order (most recent first).
    posts = Post.objects.all().order_by('-timestamp')

    try:
        user = User.objects.get(username=request.user)
        profile = Profile.objects.get(user=user)
    except User.DoesNotExist:
        user = None
        profile = None

    context = {
        'login_form': login_form,
        'post_form': post_form,
        'posts': posts,
        'profile': profile,
    }

    return render(request, 'home.html', context)


def register(request):
    context = {}
    login_form = LoginForm()
    context['login_form'] = login_form

    if request.method == 'GET':
        context['register_form'] = RegistrationForm()
        return render(request, 'register.html', context)

    register_form = RegistrationForm(request.POST)
    context['register_form'] = register_form
    if not register_form.is_valid():
        return render(request, 'register.html', context)

    if request.method == 'POST':
        if not register_form.is_valid():
            print "Register NOT Valid!"
        else:
            username = register_form.cleaned_data.get('username')
            print username
            # register_form.save()
            new_user = User.objects.create_user(username=register_form.cleaned_data['username'],
                                        email=register_form.cleaned_data['email'],
                                        password=register_form.cleaned_data['password'],
                                        first_name=register_form.cleaned_data['first_name'],
                                        last_name=register_form.cleaned_data['last_name'])

            # We need to activate every new user.
            new_user.is_active = False
            new_user.save()

            # Create related profile for this new user
            profile = Profile(user=new_user)
            profile.save()

            token = default_token_generator.make_token(new_user)

            # Send the validation email.
            confirm_message = """
                Welcome to Grumblr!\n
                Please click the link below to verify your email address:\n
                http://%s%s
            """ % (request.get_host(), reverse('confirm', args=(new_user.username, token, )))

            confirm_link = """
                http://%s%s
                """ % (request.get_host(), reverse('confirm', args=(new_user.username, token, )))

            send_mail(subject = "Hello from Grumblr!",
                      message = confirm_message,
                      from_email="admin@grumblr.com",
                      recipient_list = [new_user.email])
            context['username'] = new_user.username
            context['email'] = new_user.email
            context['confirm_message'] = confirm_message
            context['confirm_link'] = confirm_link
            return render(request, 'activation.html', context)

        return redirect('/')
    return render(request, 'register.html', {})

@login_required
def my_logout(request):
    logout(request)
    return redirect('/')

@login_required
def post(request):
    context = {}
    error_msg = []
    context['error_msg'] = error_msg
    print "##POST"

    if request.method == 'POST':
        user = get_object_or_404(User, username=request.user)
        profile = Profile.objects.get(user=user)
        post_form = PostForm(request.POST)
        if post_form.is_valid():
            epoch = datetime.utcfromtimestamp(0)
            now = datetime.now()
            ns_from_epoch = (now - epoch).total_seconds() * 1000000
            new_post = Post(profile=profile,
                            text=post_form.cleaned_data.get('text'),
                            from_epoch = ns_from_epoch)
            new_post.save()

            return redirect('/')
    return render(request, 'home.html', context)


@login_required
def profile(request, username):

    context = {}
    user = get_object_or_404(User, username=username)
    profile = get_object_or_404(Profile, user=user)
    posts = Post.objects.filter(profile=profile).order_by('-timestamp')
    is_following = False

    my_user = get_object_or_404(User, username=request.user)
    my_profile = get_object_or_404(Profile, user=my_user)

    follows = Follow.objects.filter(follower=my_profile)
    for item in follows:
        if profile == item.followee:
            is_following = True
    context = {
        'posts': posts,
        'user': user,
        'profile': profile,
        'viewuser': username,
        'follows': follows,
        'is_following': is_following,
    }
    return render(request, 'profile.html', context)

@login_required
def edit_profile(request):
    context = {}
    password_form = ChangePasswordForm()

    if request.method == 'GET':
        user = get_object_or_404(User, username=request.user)
        profile = get_object_or_404(Profile, user=user)

        profile_form = ProfileForm(initial={
                                'bio': profile.bio,
                                'age': profile.age,
                                })

        user_form = UserForm(initial={
                                'username': request.user,
                                'first_name': request.user.first_name,
                                'last_name': request.user.last_name,
                                'email': request.user.email,
                                })
        context = {
            'profile_form': profile_form,
            'user_form': user_form,
            'profile': profile,
            'password_form': ChangePasswordForm(),
        }


        return render(request, 'edit_profile.html', context)

    elif request.method == 'POST':
        user = get_object_or_404(User, username=request.user)
        profile = get_object_or_404(Profile, user=user)

        user_form = UserForm(request.POST, instance=user)
        profile_form = ProfileForm(request.POST, request.FILES, instance=profile)
        # print profile_form.cleaned_data['photo']

        if not profile_form.is_valid() or not user_form.is_valid():
            print "Form is not valid!"
            context['profile_form'] = profile_form
            context['user_form'] = user_form
            context['password_form'] = ChangePasswordForm()
            return render(request, 'edit_profile.html', context)

        profile_form.save()
        user_form.save()

        return redirect(reverse('edit_profile'))
    # return render(request, 'edit_profile.html', context)

@login_required
def get_photo(request, username):

    user = get_object_or_404(User, username=username)
    # user = User.objects.get(username=username)
    profile = get_object_or_404(Profile, user=user)

    photo = profile.get_photo();

    # print "^^^ type =", type(photo)
    # photo = "/Users/Signal/github/xinghaoz/homework/5/grumblr/media/photo/kobe7_hHJRsTM.jpg"
    # if not profile.photo:
    #     photo = 'media/photo/g.jpg'
    # django.db.models.fields.files.ImageFieldFile

    content_type = guess_type(str(photo))
    return HttpResponse(photo, content_type=content_type)

@login_required
def follow(request, viewuser):
    user = get_object_or_404(User, username=viewuser)
    profile = get_object_or_404(Profile, user=user)
    posts = Post.objects.filter(profile=profile).order_by('-timestamp')

    context = {
        'posts': posts,
        'user': user,
        'profile': profile,
        'viewuser': viewuser,
    }

    followee = User.objects.get(username=viewuser)
    follower = User.objects.get(username=request.user)
    profile_ee = Profile.objects.get(user=followee)
    profile_er = Profile.objects.get(user=follower)

    follows = Follow.objects.filter(follower=profile_er)
    for item in follows:
        if profile_ee == item.followee:
            item.delete()
            print "Already followed."
            # return render(request, 'profile.html', context)
            return redirect(reverse('profile', args=(viewuser,)))

    follow = Follow(follower=profile_er, followee=profile_ee)
    follow.save()

    # return render(request, 'profile.html', context)
    return redirect(reverse('profile', args=(viewuser,)))

@login_required
def follow_stream(request):
    context = {}
    form = LoginForm()
    post_form = PostForm()
    user = ''
    profile = ''

    # displaying all posts that have been posted in reverse-chronological order (most recent first).
    posts = []

    try:
        user = User.objects.get(username=request.user)
        profile = get_object_or_404(Profile, user=user)
        follows = Follow.objects.filter(follower=profile)

        for item in follows:
            print "follow:", item.followee
            posts = list(chain(posts, Post.objects.filter(profile=item.followee)))

    except User.DoesNotExist:
        print "NONE!!!!!"
        user = None
        profile = None
    posts.sort(reverse=True)

    context = {
        'form': form,
        'post_form': post_form,
        'posts': posts,
        'profile': profile,
    }

    return render(request, 'home.html', context)


def confirm(request, username, token):
    context = {}
    try:
        new_activated_user = User.objects.get(username=username)
    except User.DoesNotExist:
        context['error'] = 'This user is not exist'
        return render(request, 'activation.html', context)
    token_2 = default_token_generator.make_token(new_activated_user)
    if new_activated_user.is_active == True:
        return redirect(reverse('home'))
    else:
        if token_2 == token:
            new_activated_user.is_active = True
            new_activated_user.save()
        else:
            context['error'] = "Token didn't match!"
            return render(request, 'activation.html', context)

    login(request, new_activated_user)
    return redirect('/')

def reset_password(request):
    context = {}
    email = ''
    if request.method == "POST":
        if request.POST.get('email'):
            email = request.POST.get('email')
            print "$$$", len(email)
            if len(email) > 20:
                error = """
                Email too long
                (For some reason, it will make the server crash, so we forbid it now.
                Sorry for the inconvenience!)
                """
                context['error'] = error
                return render(request, 'accounts/password_reset_form_fail.html', context)

            users = User.objects.filter(email=email)
            for user in users:
                token = default_token_generator.make_token(user)
                reset_message = """
                    You just request to reset your password by your email.\n
                    Please click the link below to verify your email address:\n
                    http://%s%s
                    [This is the part remaining to be implemented!]
                    \n
                    If this is not your operation, just ignore this email.
                """ % (request.get_host(), reverse('confirm', args=(user.username, token, )))


                send_mail(subject = "Reset password in Grumblr.",
                          message = reset_message,
                          from_email="admin@grumblr.com",
                          recipient_list = [email])
        if users:
            return password_reset(request,
                template_name='accounts/password_reset_form.html',
                email_template_name='accounts/password_reset_email.html',
                password_reset_form=PasswordResetForm,
                token_generator=default_token_generator,
                post_reset_redirect=reverse('reset_done'))
        else:
            error = "Email doesn't exist!"
            context['error'] = error
            return render(request, 'accounts/password_reset_form_fail.html', context)


    return password_reset(request,
        template_name='accounts/password_reset_form.html',
        email_template_name='accounts/password_reset_email.html',
        password_reset_form=PasswordResetForm,
        token_generator=default_token_generator,
        post_reset_redirect=reverse('reset_done'))

@login_required
def change_password(request):
    form = ChangePasswordForm(request.POST)
    if not form.is_valid():
        user = get_object_or_404(User, username=request.user)
        profile = get_object_or_404(Profile, user=user)
        profileform = ProfileForm(instance=profile)
        context = {'profileform' : profileform,
                   'form' : form, }
        return render(request, 'edit_profile.html', context)

    user = request.user
    password = form.cleaned_data['password']
    user.set_password(password)
    user.save()
    login(request, user)
    return redirect('/')

@login_required
def get_posts(request, from_epoch):
    context = {}

    posts = Post.objects.filter(from_epoch__gt=from_epoch)
    context['posts'] = posts.order_by('from_epoch')

    return render(request, 'posts.json', context, content_type='application/json')

@login_required
def add_comment(request):
    if request.method == 'POST':
        user = get_object_or_404(User, username=request.user)
        profile = get_object_or_404(Profile, user=user)

        if profile and request.POST.get('comment') and request.POST.get('comment_id'):
            comment = request.POST.get('comment')
            comment_id = request.POST.get('comment_id')
            epoch = datetime.utcfromtimestamp(0)
            now = datetime.now()
            ns_from_epoch = (now - epoch).total_seconds() * 1000000

            new_comment = Comment(comment_id=comment_id,
                                  author=profile,
                                  comment=comment,
                                  from_epoch = ns_from_epoch,
                                  );
            new_comment.save();
        return redirect('/')
    return redirect('/')

@login_required
def get_comments(request, from_epoch):
    context = {}

    comments = Comment.objects.filter(from_epoch__gt=from_epoch);
    context['comments'] = comments.order_by('from_epoch')

    return render(request, 'comments.json', context, content_type='application/json')
