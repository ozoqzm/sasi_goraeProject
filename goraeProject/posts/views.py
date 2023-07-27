from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly 
from .permissions import IsAuthorOrReadOnly

class PostViewSet(ModelViewSet):
    # #authentication 추가 
    # authentication_classes = [BasicAuthentication, SessionAuthentication]

    #Permission 기능 : isAuthenticated(읽기권한 x) /IsAuthenticatedOrReadOnly
    permission_classes= [IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer) :
        serializer.save(writer=self.request.user)

