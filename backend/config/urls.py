from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from core.views import PVViewSet, TeamMemberViewSet, PartnerViewSet, ResourceViewSet

router = DefaultRouter()
router.register(r'pvs', PVViewSet) # Changed from posts to pvs
router.register(r'team', TeamMemberViewSet)
router.register(r'partners', PartnerViewSet)
router.register(r'resources', ResourceViewSet)

from django.views.static import serve
from django.urls import re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

# Servir les fichiers media même en production sur Render (car stockage éphémère)
urlpatterns += [
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
