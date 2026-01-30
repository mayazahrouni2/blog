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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
