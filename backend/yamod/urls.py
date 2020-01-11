from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_jwt.views import obtain_jwt_token

from . import views

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('country/options', views.country_option_list),
    path('arm_of_service/list', views.arm_of_service_list),
    path('arm_of_service/create', views.arm_of_service_form_create),
    path('arm_of_service/<int:pk>/get', views.arm_of_service_form_get),
    path('arm_of_service/<int:pk>/update', views.arm_of_service_form_update),
    path('arm_of_service/<int:pk>/delete', views.arm_of_service_delete),

    path('soldier/list', views.soldier_list),
    path('soldier/create', views.soldier_form_create),
    path('soldier/<int:pk>/get', views.soldier_form_get),
    path('soldier/<int:pk>/update', views.soldier_form_update),
    path('soldier/<int:pk>/delete', views.soldier_delete),

    url(r'^api-token-auth/', obtain_jwt_token),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
