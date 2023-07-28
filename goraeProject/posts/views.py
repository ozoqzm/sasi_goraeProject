from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly 
from .permissions import IsAuthorOrReadOnly

class MessageViewSet(ModelViewSet):
    # #authentication 추가 
    # authentication_classes = [BasicAuthentication, SessionAuthentication]

    #Permission 기능 : isAuthenticated(읽기권한 x) /IsAuthenticatedOrReadOnly
    permission_classes= [IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]

    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def perform_create(self, serializer) :
        serializer.save(writer=self.request.user)

