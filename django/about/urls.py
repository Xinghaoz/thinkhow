from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^resume/', views.get_resume, name='resume'),
    url(r'^skills/', views.skills, name='skills'),
    url(r'^website/', views.about_website, name='about_website')
]
