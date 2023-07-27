from django.shortcuts import render
from django.contrib.auth.models import User
from posts.models import UserInfo
from .serializers import UserSerializer, UserInfoSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response

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
    
    def perform_create(self, serializer) :
        serializer.save(user=self.request.user)