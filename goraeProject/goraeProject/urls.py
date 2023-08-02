from django.contrib import admin
from django.urls import path, include, re_path

from django.conf import settings 
from django.conf import urls
from django.conf.urls.static import static

from rest_framework import routers
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# swagger 관련 코드 #
router = routers.DefaultRouter()
schema_view = get_schema_view(
    openapi.Info(
        title="Statchung API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('posts.urls')),
    path('', include('accounts.urls')),

    path('api/', include('sample_swagger.urls')), #swagger url  
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# swagger 관련 코드 
if settings.DEBUG:
    urlpatterns += [
        re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
        re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
        re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    ]