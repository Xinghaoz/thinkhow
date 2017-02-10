from django.conf.urls import include, url
import django.contrib.auth.views
from . import views
from django.conf import settings

##url dispatcher
urlpatterns = [
    url(r'^crawler/', views.crawler, name='crawler'),
]
