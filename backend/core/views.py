from rest_framework import viewsets
from .models import PV, TeamMember, Partner, Resource
from .serializers import PVSerializer, TeamMemberSerializer, PartnerSerializer, ResourceSerializer

class PVViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PV.objects.all().order_by('-created_at')
    serializer_class = PVSerializer
    lookup_field = 'slug'

class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.all().order_by('order')
    serializer_class = TeamMemberSerializer

class PartnerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer

class ResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Resource.objects.all().order_by('-uploaded_at')
    serializer_class = ResourceSerializer
