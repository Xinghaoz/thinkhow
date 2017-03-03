from django.conf.urls import include, url
from keywords_finder import views

##url dispatcher
urlpatterns = [
    url(r'^keywords_finder', views.keywords_finder, name='keywords_finder'),
]
