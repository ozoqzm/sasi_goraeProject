from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Message

class MessageSerializer(ModelSerializer):
    writer = serializers.ReadOnlyField(source='writer.username')
    class Meta:
        model = Message
        fields = ['id', 'content' , 'image', 'writer', 'receiver']

