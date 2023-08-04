from django.contrib.auth.models import User
from posts.models import UserInfo
from .serializers import UserSerializer, UserInfoSerializer, MypageSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response

User = get_user_model()

class LoginView(APIView):
    authentication_classes = [SessionAuthentication]

    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')

        # 사용자 인증
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # 로그인 성공 시 세션 생성
            return Response({'message': '로그인 성공'})
        else:
            return Response({'message': '로그인 실패'}, status=401)
    def get(self, request, format=None):
        # 로그인한 사용자 정보를 보여주는 기능
        if request.user.is_authenticated:
            return Response({'message': '로그인한 사용자: ' + request.user.username})
        else:
            return Response({'message': '로그인하지 않은 사용자'})
        
class LogoutView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        # 로그아웃 시 세션 삭제
        logout(request)
        return Response({'message': '로그아웃 성공'})
    def get(self, request, format=None):
        # 로그아웃 기능과 동일하게 로그인한 사용자 정보를 보여주는 기능
        if request.user.is_authenticated:
            return Response({'message': '로그인한 사용자: ' + request.user.username})
        else:
            return Response({'message': '로그인하지 않은 사용자'})
        

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
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)  
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class MypageViewSet(ModelViewSet):
    serializer_class = MypageSerializer

    def get_queryset(self):
        # 프론트에서 마이페이지 접속시 500에러 -> 해결 
        # user의 id값(정수형)에 user 객체가 
        if not self.request.user.is_authenticated:
            return UserInfo.objects.none()
        return UserInfo.objects.filter(user=self.request.user)