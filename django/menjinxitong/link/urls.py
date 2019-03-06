from django.conf.urls import url
from . import views
app_name = 'link'
urlpatterns = [
    url(r'^$', views.index),

    url(r'^login_handle/$', views.login_handle, name='login_handle'),

    url(r'^receive/$', views.receive, name='receive'),
]