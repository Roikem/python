from django.conf.urls import url
from . import views
app_name = 'venapp'
urlpatterns = [
    url(r'^$', views.index, name='index'),

    url(r'^3d/index.html/$', views.menu, name='3d/index.html'),

    url(r'^get_atom/(?P<atom>.*?)/$', views.get_atom, name='get_atom'),

    url(r'^get_activityatom/(?P<activity_atom>.*?)/$', views.get_activityatom, name='activityatom'),

    url(r'^get_pic_activityatom/(?P<pic_activity_atom>.*?)/$', views.get_pic_activityatom, name='get_pic_activityatom'),
]

