from django.urls import path, include
from rest_framework import routers
from .api import UserViewSet
from .api import CenterViewSet
from .api import CenterListViewSet
from .api import UserListViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/centers', CenterViewSet, 'centers')
router.register('api/centerlist', CenterListViewSet, 'centerlists')
router.register('api/userlist', UserListViewSet, 'lists')


urlpatterns = router.urls
