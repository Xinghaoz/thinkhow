from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^$', views.about, name='about'),
    url(r'^resume/', views.resume, name='resume'),
    url(r'^skills/', views.skills, name='skills'),
]
