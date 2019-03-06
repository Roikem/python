# -*-coding:
from django.conf.urls import url
from . import views
app_name = 'register'
urlpatterns = [
    url(r'^$', views.index),

    url(r'^login/$', views.login, name='login'),

    url(r'^register/$', views.register, name='register'),

    url(r'^register_handle/$', views.register_handle, name='register_handle'),

    url(r'^login_handle/$', views.login_handle, name='login_handle'),

    url(r'^detail/(?P<id>\d+)/$', views.detail, name="detail"),

    url(r'^home/$', views.home, name="home"),
]
