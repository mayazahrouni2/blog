from django.contrib import admin
from .models import PV, TeamMember, Partner, Resource

admin.site.site_header = "PROJECT REPOSITORY"
admin.site.site_title = "Admin Portal"
admin.site.index_title = "Resource & PV Management"

@admin.register(PV)
class PVAdmin(admin.ModelAdmin):
    list_display = ('title', 'meeting_date', 'created_at')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'content')

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'order')
    list_editable = ('order',)

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')
