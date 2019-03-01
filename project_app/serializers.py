from rest_framework import serializers
from project_app.models import User
from project_app.models import Center
from project_app.models import UserList
from project_app.models import CenterList

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserList
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    userlists = UserListSerializer(many=True, read_only =True)
    class Meta:
        model = User
        fields = '__all__'

class CenterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CenterList
        fields = '__all__'

class CenterSerializer(serializers.ModelSerializer):
    lists = CenterListSerializer(many=True, read_only=True)
    class Meta:
        model = Center
        fields = '__all__'

