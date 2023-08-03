from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

class UserInfo(models.Model) :
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # 닉네임
    nickname = models.CharField(max_length=14, null=True)
    # 프로필 사진 
    profile = models.ImageField(null=True)
    points = models.IntegerField(default = 0, null=True)
    # 칭찬 메시지 받을 때마다 카운트
    count = models.IntegerField(default = 0, null=True)
    
    def __str__(self):
        return self.user.username 


class Message(models.Model) :
    content = models.TextField()
    image = models.ImageField(null=True)
    writer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='writer', null=True) #보내는사람
    receiver = models.ForeignKey(User, on_delete=models.CASCADE,null=True, related_name='received_user')
    points = models.IntegerField(default=0) #포인트 필드
    count = models.IntegerField(default=0) # 카운트 필드 
    annonymous = models.IntegerField(default=0) # default = 0 익명x
    def str(self) :
        return self.id

