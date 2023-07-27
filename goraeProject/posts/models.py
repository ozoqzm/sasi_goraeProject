from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model) :
    content = models.TextField()
    image = models.ImageField(null=True)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self) :
        return self.id


class UserInfo(models.Model) :
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # 닉네임
    nickname = models.CharField(max_length=14)
    # 프로필 사진 
    profile = models.ImageField(null=True)
    point = models.IntegerField(null=True)
    # 칭찬 메시지 받을 때마다 카운트
    count = models.IntegerField(null=True)
