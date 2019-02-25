from django.urls import path, include
from rest_framework import routers
from .api import UserViewSet
from .api import CenterViewSet
from .api import ListViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/centers', CenterViewSet, 'centers')
router.register('api/items', ListViewSet, 'items')
router.register('api/users/lists', ListViewSet, 'items')
router.register('api/centers/lists', ListViewSet, 'items')

urlpatterns = router.urls
