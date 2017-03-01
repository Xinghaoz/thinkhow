from django.conf.urls import include, url
import keywords_finder.views

##url dispatcher
urlpatterns = [
    url(r'^keywords_finder', views.keywords_finder, name='keywords_finder'),
]
