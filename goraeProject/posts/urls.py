from rest_framework.routers import SimpleRouter, DefaultRouter
from django.urls import path, include
from .views import MessageViewSet, ReceivedMessageViewSet

#
message_router = DefaultRouter(trailing_slash=True)
message_router.register('messages', MessageViewSet, basename='message')

#
received_router = DefaultRouter(trailing_slash=True)
received_router.register('received', ReceivedMessageViewSet, basename='received')


urlpatterns = [
    path('', include(message_router.urls)),
    
    path('',include(received_router.urls)),
]