from project_app.models import User
from project_app.models import Center
from project_app.models import CenterList
from project_app.models import UserList
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from .serializers import CenterSerializer
from .serializers import CenterListSerializer
from .serializers import UserListSerializer

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
class CenterListViewSet(viewsets.ModelViewSet):
    queryset = CenterList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = CenterListSerializer

class UserListViewSet(viewsets.ModelViewSet):
    queryset = UserList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = UserListSerializer