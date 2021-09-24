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

class CheckingCredit(serializers.Serializer):

    id = serializers.IntegerField(max_value=None, min_value=None, required=True)
    status = serializers.CharField(max_length=None, min_length=None, required=True)
    
    def validate(self, data):
        try:
            self.credit = Credit.objects.get(id=data["id"])
        except Credit.DoesNotExist:
            return serializers.ValidationError({"id":"This credit does not exist"})
        
        if data.get("status") not in ["aprobado","denegado"]:
            return serializers.ValidationError({"status":"This field has not the correct value"})
        return data

    def create(self, data):
        self.credit.status = data["status"]
        self.credit.save()
        return self.credit