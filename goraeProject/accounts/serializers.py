from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from posts.models import UserInfo

class UserInfoSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = UserInfo
        fields = '__all__'

class UserSerializer(ModelSerializer) :
    def create(self, validated_data) :
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password'],
            email = validated_data['email'],
        )
        return user

    class Meta :
        model = User
        fields = ['id', 'username', 'password', 'email', ] # swagger에서 '__all__'은 에러남 

class MypageSerializer(ModelSerializer) :
    #user_info = UserInfoSerializer(source='userinfo', read_only=True)
    id = serializers.IntegerField(source='user.id', read_only=True)
    email = serializers.ReadOnlyField(source='user.email')
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = UserInfo
        fields = ['id', 'username', 'email', 'user', 'nickname', 'profile', 'points', 'count',]