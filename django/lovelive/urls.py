from django.conf.urls import include, url
import django.contrib.auth.views
import lovelive.views
from django.conf import settings

##url dispatcher
urlpatterns = [
    # url(r'^$', lovelive.views.first_page, name='first-page'),
    # url(r'^error-lovelive', lovelive.views.error_lovelive, name='error-lovelive'),
    # url(r'^home', lovelive.views.home, name='home'),
    # url(r'^channel', lovelive.views.channel, name='channel'),
    url(r'^team214', lovelive.views.game, name='team214'),
    url(r'^game/(?P<room_id>\d+)/$', lovelive.views.game, name='game'),
    # url(r'^edit-profile', lovelive.views.edit_profile, name='edit-profile'),
    # url(r'^get-profile-photo', lovelive.views.get_profile_photo,name='get-profile-photo'),
    # url(r'^get-other-profile-photo/(?P<id>\d+)$', lovelive.views.get_other_profile_photo, name='get-other-profile-photo'),
    # url(r'^user/password/change/$', lovelive.views.change_password_in_profile, name="change_password_in_profile"),
    # url(r'^get-my-initial-property', lovelive.views.get_my_initial_property,name='get-my-initial-property'),
    # url(r'^get-my-room-id', lovelive.views.get_my_room_id,name='get-my-room-id'),
    # url(r'^result', lovelive.views.result,name='result'),
    # url(r'^scoreboard', lovelive.views.scoreboard,name='scoreboard'),

    # #------------------------------------ WAIT ROOM PART Begin--------------------------
    # url(r'^choose-map', lovelive.views.choose_map,name='choose-map'),
    # url(r'^join-room', lovelive.views.join_room,name='join-room'),
    # url(r'^check-if-other-user-join-in', lovelive.views.check_if_other_user_join_in, name='check-if-other-user-join-in'),
    # url(r'^wait-queue-full-start-game', lovelive.views.wait_queue_full_start_game, name='wait-queue-full-start-game'),
    # #------------------------------------ WAIT ROOM PART end--------------------------
    #
    # url(r'^photo/(?P<id>\w+)/$', lovelive.views.get_photo,name="photo"),
    #

    #change my password in profile
#    url(r'^user/password/change/$', lovelive.views.change_password_in_profile, name="change_password_in_profile"),

]
