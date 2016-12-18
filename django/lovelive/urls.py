from django.conf.urls import include, url
import django.contrib.auth.views
import lovelive.views
from django.conf import settings
from django.contrib import admin

##url dispatcher
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', lovelive.views.first_page, name='first-page'),
    url(r'^error-lovelive', lovelive.views.error_lovelive, name='error-lovelive'),
    url(r'^home', lovelive.views.home, name='home'),
    # url(r'^channel', lovelive.views.channel, name='channel'),
    url(r'^game', lovelive.views.game),
    url(r'^edit-profile', lovelive.views.edit_profile, name='edit-profile'),
    url(r'^get-profile-photo', lovelive.views.get_profile_photo,name='get-profile-photo'),
    url(r'^get-other-profile-photo/(?P<id>\d+)$', lovelive.views.get_other_profile_photo, name='get-other-profile-photo'),
    url(r'^user/password/change/$', lovelive.views.change_password_in_profile, name="change_password_in_profile"),
    url(r'^get-my-initial-property', lovelive.views.get_my_initial_property,name='get-my-initial-property'),
    url(r'^get-my-room-id', lovelive.views.get_my_room_id,name='get-my-room-id'),
    url(r'^result', lovelive.views.result,name='result'),
    url(r'^scoreboard', lovelive.views.scoreboard,name='scoreboard'),
    #------------------------------------ WAIT ROOM PART Begin--------------------------
    url(r'^choose-map', lovelive.views.choose_map,name='choose-map'),
    url(r'^join-room', lovelive.views.join_room,name='join-room'),
    url(r'^check-if-other-user-join-in', lovelive.views.check_if_other_user_join_in, name='check-if-other-user-join-in'),
    url(r'^wait-queue-full-start-game', lovelive.views.wait_queue_full_start_game, name='wait-queue-full-start-game'),
    #------------------------------------ WAIT ROOM PART end--------------------------
    # Route for built-in authentication with our own custom login page
    # url(r'^login$', django.contrib.auth.views.login, {'template_name':'lovelive/log_in_page.html'}, name='login'),
    url(r'^login$', lovelive.views.custom_login, name = 'login'),
    # Route to logout a user and send them back to the login page
    url(r'^logout$', django.contrib.auth.views.logout_then_login, name='logout'),
    url(r'^confirm/(?P<username>.*)/(?P<token>[A-Za-z0-9_-]+)$', lovelive.views.confirm, name='confirm'),
    url(r'^register$', lovelive.views.register, name='register'),

    url(r'^photo/(?P<id>\w+)/$', lovelive.views.get_photo,name="photo"),

    #forgot the password and reset it
    url(r'^user/password/reset/$', lovelive.views.reset_password, name="reset_password"),
    url(r'^user/password/reset/done/$',
        django.contrib.auth.views.password_reset_done, {'template_name' : 'lovelive/password_reset/password_reset_done.html'},),
    url(r'^user/password/reset/(?P<uidb64>[0-9A-Za-z]+)/(?P<token>.+)/$', django.contrib.auth.views.password_reset_confirm,
        {'post_reset_redirect' : '/lovelive/user/password/done/',
         'template_name' : 'lovelive/password_reset/password_reset_confirm.html'},
          name='confirm_password'),
    url(r'^user/password/done/$',
        django.contrib.auth.views.password_reset_complete,
        {'template_name' : 'lovelive/password_reset/password_reset_complete.html'}),

    #change my password in profile
#    url(r'^user/password/change/$', lovelive.views.change_password_in_profile, name="change_password_in_profile"),

]
