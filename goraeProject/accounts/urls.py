from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views

user_router = SimpleRouter(trailing_slash=True)
user_router.register('users', views.UserViewSet, basename='users')
user_router.register('userInfo', views.UserInfoViewSet, basename='userInfo')
user_router.register('mypage', views.MypageViewSet, basename='mypage')

urlpatterns = [
    path('', include(user_router.urls)), 
    path('auth/', include('rest_framework.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')),
    # 로그인, 로그아웃 기능 직접 구현 
    #path('signup/', views.SignupView.as_view(), name='signup'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
]