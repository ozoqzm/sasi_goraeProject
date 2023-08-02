from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views

user_router = SimpleRouter(trailing_slash=True)
user_router.register('users', views.UserViewSet, basename='users')
user_router.register('userInfo', views.UserInfoViewSet, basename='userInfo')

urlpatterns = [
    path('', include(user_router.urls)), 
    path('auth/', include('rest_framework.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')),
]