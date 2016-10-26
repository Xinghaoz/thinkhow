from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^get-posts/(?P<from_epoch>\d+)$', views.get_posts),
    url(r'^post/', views.post, name='post'),
    url(r'^add-comment/', views.add_comment, name='add-comment'),
    url(r'^get-comments/(?P<from_epoch>\d+)/$', views.get_comments),
]
