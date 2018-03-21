from django.urls import path
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings

from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('demo',views.landing,name='demo'),
    path('signup', views.signup_view, name='signup'),
    path('login', auth_views.login, {'template_name': 'BE/login.html'},name='login'),
    path('logout', auth_views.logout,{'next_page': '/'}, name='logout'),
    path('loggedin',views.logged_in,name='logged_in'),
    path('input',views.input,name='input'),
    path('inputb',views.partbip,name='inputb'),
    path('parta',views.parta,name='parta'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
