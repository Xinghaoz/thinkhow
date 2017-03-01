from django.conf.urls import include, url
import django.contrib.auth.views
import lovelive.views
from django.conf import settings

##url dispatcher
urlpatterns = [
    url(r'^team214', lovelive.views.game, name='team214'),
    url(r'^game/(?P<room_id>\d+)/$', lovelive.views.game, name='game'),
]
