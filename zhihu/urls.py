from django.conf.urls import url
from . improt views

urlpatterns = [
    url(r'^$', views.read, name='read'),
]
