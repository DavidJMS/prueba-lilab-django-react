# Django REST Framework
from django.db.models.fields.related import OneToOneField
from rest_framework import serializers

# My Models
from apps.credits.models import Credit

class CreditModelSerializer(serializers.ModelSerializer):

    class Meta:

        model = Credit
        fields = "__all__"

class CreateCreditModelSerializer(serializers.ModelSerializer):

    class Meta:
        
        model = Credit
        fields = ["names","total_debt","qualification_debtor"]
    
    def create(self, data):
        instance = Credit.objects.create(score=0,**data)
        return instance