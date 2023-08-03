from django.shortcuts import render
from django.contrib.auth.models import User
from posts.models import UserInfo
from .serializers import UserSerializer, UserInfoSerializer, MypageSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, permissions

class UserViewSet(ModelViewSet) :
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserInfoViewSet(ModelViewSet) :
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer

    @action(detail=True, methods=['gets'])
    def get_user_all(self, request, pk=None) :
        userInfo = self.get_object()
        userInfo_all = userInfo.set_userInfo.all()
        serializer = UserInfoSerializer(userInfo_all, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)  
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class MypageViewSet(ModelViewSet):
    serializer_class = UserInfoSerializer
    def get_queryset(self):
        userInfo = UserInfo.objects.filter(user=self.request.user)
        return userInfo