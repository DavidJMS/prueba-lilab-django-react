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
    serializer_class = serializers.StoreHouseModelSerializer
    
    def check_permissions(self, request):
        """
            Check if the request should be permitted.
            Raises an appropriate exception if the request is not permitted.
        """
        total_permissions = self.get_permissions()
        not_permissions = len(total_permissions)
        for permission in total_permissions:
            if not permission.has_permission(request, self):
                not_permissions -=1
            
        if not_permissions == 0:    
            self.permission_denied(
                request,
                message=getattr(permission, 'message', None),
                code=getattr(permission, 'code', None)
            )