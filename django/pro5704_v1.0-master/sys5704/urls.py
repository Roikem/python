from django.conf.urls import include
from django.urls import path
from sys5704.user_log import login_views

urlpatterns = [
    path('assets/', include('sys5704.assets.urls')),
    path('members/', include('sys5704.member_info.urls')),
    path('users/', include('sys5704.my_msg.urls')),
    path('', login_views.do_login),
    path('login',login_views.login_handle)
]