# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from apps.credits import views

router = DefaultRouter()

router.register(r'credits', views.CreditViewSet, basename='credit')

urlpatterns = [
    path('', include(router.urls)),
]