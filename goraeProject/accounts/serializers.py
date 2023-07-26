from django.contrib.auth.models import User
from rest_framework import serializers
from posts.models import UserInfo

class UserSerializer(serializers.ModelSerializer) :
    def create(self, validated_data) :
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password'],
            email = validated_data['email'],
        )
        return user
    class Meta :
        model = User 
        fields = ['id', 'username', 'password', 'email']
        

class UserInfoSerializer(serializers.ModelSerializer) :
    user = serializers.ReadOnlyField(source='user.username')
    class Meta : 
        model = UserInfo
        fields = ['username', 'nickname','profile']
        #dept = 1
    