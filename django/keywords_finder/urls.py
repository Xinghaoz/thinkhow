from django.conf.urls import include, url
from . import views

##url dispatcher
urlpatterns = [
    url(r'^keywords_finder', views.keywords_finder, name='keywords_finder'),
    url(r'^get_keywords', views.get_keywords, name='get_keywords'),
]
