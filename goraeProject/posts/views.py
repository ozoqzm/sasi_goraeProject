from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer

from rest_framework import status
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
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # 포인트부여
        receiver = serializer.validated_data.get('receiver') #받은 사람 정보 가져오기
        receiver.userinfo.points = receiver.userinfo.points + 10 
        receiver.userinfo.save()

        # 편지생성
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
