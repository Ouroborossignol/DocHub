from rest_framework import viewsets

from users.serializers import UserSerializer
from users.models import User


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.filter(netid="")
    serializer_class = UserSerializer
    lookup_field = 'netid'