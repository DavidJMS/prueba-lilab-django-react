# Django REST Framework
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Permissions
from rest_framework.permissions import (IsAuthenticated,IsAdminUser)

# Serializers
from apps.credits import serializers

# My Models
from apps.credits.models import Credit

# Utils
import datetime as datetime_modules

class CreditViewSet(mixins.ListModelMixin,
                mixins.CreateModelMixin,
                viewsets.GenericViewSet):
    """
        Store House view set.

        Handle CRUD of Store House.
    """

    queryset = Credit.objects.all()
    serializer_class = serializers.CreditModelSerializer
    
    def get_permissions(self):
        """
            Instantiates and returns the list of permissions that this view requires.
        """
        permission_classes:list = []
        # import pdb; pdb.set_trace()
        if self.action in ["list","create"]:
            permission_classes.append(IsAuthenticated)
        else:
            permission_classes.append(IsAdminUser)
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        serializer = serializers.CreateCreditModelSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    @action(detail=False, methods=["post"])
    def checking(self, request, *args, **kwargs):
        serializer = serializers.CheckingCredit(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)