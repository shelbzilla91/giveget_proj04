from django.urls import path, include
from rest_framework import routers
from .api import UserViewSet
from .api import CenterViewSet
from .api import CenterListViewSet
from .api import UserListViewSet

router = routers.DefaultRouter()
router.register('api/users/:userId', UserViewSet, 'users')
router.register('api/centers', CenterViewSet, 'centers')
router.register('api/centers/id/centerlist', CenterListViewSet, 'centerlists')
router.register('api/users/:userId/userlist', UserListViewSet, 'lists')


urlpatterns = router.urls
