from django.urls import path
from sys5704.member_info import member_views

urlpatterns = [
    path("",member_views.members),
    # path('info/', member_views.members_info)
]