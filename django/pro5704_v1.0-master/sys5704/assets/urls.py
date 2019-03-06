from django.urls import path
from sys5704.assets import assets_views

urlpatterns = [
    path("",assets_views.do_assets),
    path("management",assets_views.borrowAsset)
]