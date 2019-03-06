from django.urls import path
from sys5704.my_msg import my_msg_views
from django.urls import re_path

urlpatterns = [
    re_path(r"^(?P<username>\S+)/info$", my_msg_views.msg_info)
]