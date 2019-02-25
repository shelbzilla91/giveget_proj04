from project_app.models import User
from project_app.models import Center
from project_app.models import List
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from .serializers import CenterSerializer
from .serializers import ListSerializer

# User Viewset
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = UserSerializer

#Center Viewset
class CenterViewSet(viewsets.ModelViewSet):
    queryset = Center.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = CenterSerializer

#Item Viewset
class ListViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = ListSerializer