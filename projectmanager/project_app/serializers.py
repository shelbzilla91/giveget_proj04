from rest_framework import serializers
from project_app.models import User
from project_app.models import Center
from project_app.models import List

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = '__all__'

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = '__all__'