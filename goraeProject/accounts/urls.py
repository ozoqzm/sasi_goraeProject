from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views

user_router = SimpleRouter(trailing_slash=True)
user_router.register('users', views.UserViewSet, basename='users')

userInfo_router = SimpleRouter(trailing_slash=True)
userInfo_router.register('userInfo', views.UserInfoViewSet, basename='userInfo')

mypage_router = SimpleRouter(trailing_slash=True)
mypage_router.register('mypage', views.MypageViewSet, basename='mypage')

urlpatterns = [
    path('', include(user_router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')),
    path('users/<int:user_id>/', include(userInfo_router.urls)),
    path('users/<int:user_id>/userInfo/', include(userInfo_router.urls)), # 특정 사용자 정보 
    path('mypage/<int:userInfo_id>/', include(mypage_router.urls))
]