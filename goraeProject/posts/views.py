from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer


from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly ,IsAuthenticated
from .permissions import IsAuthorOrReadOnly


class MessageViewSet(ModelViewSet):
    # #authentication 추가 
    # authentication_classes = [BasicAuthentication, SessionAuthentication]

    #Permission 기능 : isAuthenticated(읽기권한 x) /IsAuthenticatedOrReadOnly
    permission_classes= [IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]

   
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    #게시글 생성 
    def perform_create(self, serializer) :
        serializer.save(writer=self.request.user) 

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # 유효성 검사가 성공한 경우에만 편지를 생성
        self.perform_create(serializer)
        #칭찬 보내는 사람 포인트부여
        serializer.instance.writer.userinfo.points += 10
        serializer.instance.writer.userinfo.save()
        #칭찬 받는 사람 카운트 증가 
        receiver = serializer.validated_data.get('receiver') #받은 사람 정보 가져오기
        receiver.userinfo.count += 1
        receiver.userinfo.save()
        # 편지생성
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data) #성공시 헤더로 전달할 값들을 headers에 담기
        return Response(serializer.data,headers=headers) #response로 data, headers 전송 


class ReceivedMessageViewSet(ModelViewSet):
    
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Message.objects.filter(receiver=self.request.user)
        return queryset