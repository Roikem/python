from django.conf.urls import url
from . import views
app_name = 'shop'
urlpatterns = [
    url(r'^$', views.index),

    url(r'^home/$', views.home, name='home'),

    url(r'^main/$', views.main, name='main'),

    url(r'^main/product.html/$', views.product, name='main/product.html'),

    url(r'^main/news.html/$', views.news, name='main/news.html'),

    url(r'^main/newsType.html/$', views.news_type, name='main/newsType.html'),

    url(r'^main/link.html/$', views.link, name='main/link.html'),

    url(r'^main/updatePwd.html/$',views.pwd, name='main/updatePwd.html'),

    url(r'^login_handle/$', views.login_handle, name='login_handle'),

    url(r'^get_good/$', views.get_good, name='get_good'),

    url(r'^command/$', views.command, name='command'),

    url(r'^delete_good/$', views.delete_good, name='delete_good'),

    url(r'^add_good/$', views.add_good, name='add_good'),

    url(r'^add_supplier/$', views.add_supplier, name='add_supplier'),

    url(r'^add_market/$', views.add_market, name='add_market'),

    url(r'^delete_supplier/$', views.delete_supplier, name='delete_supplier'),

    url(r'^delete_market/$', views.delete_market, name='delete_market'),

    url(r'^get_supplier/$', views.get_supplier, name='get_supplier'),

    url(r'^get_market/$', views.get_market, name='get_market'),
]
