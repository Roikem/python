from django.contrib import admin
from sys5704.models import *


class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'name', 'major','direction', 'phone', 'birthday', 'atschool']
    list_filter = ['atschool',]
    search_fields = ['username', 'name', 'major','direction',  'phone', 'atschool']


class AssetAdmin(admin.ModelAdmin):
    list_display = ['name', 'restamount', 'amount', 'issupplies', 'isstudio']
    list_filter = ['issupplies', 'isstudio',]
    search_fields = ['name']


class BorrowmanageAdmin(admin.ModelAdmin):
    list_display = ['borrowuser', 'borrowasset', 'amount', 'starttime', 'endtime']
    search_fields = ['borrowuser__name', 'borrowuser__username', 'borrowasset__name', 'starttime', 'endtime']


class AchievementAdmin(admin.ModelAdmin):
    list_display = ['username', 'paper', 'competition', 'softwarepatent', 'projects']
    search_fields = ['username__name', 'username__username', 'paper', 'competition', 'softwarepatent', 'projects']


admin.site.register(User, UserAdmin)
admin.site.register(Asset, AssetAdmin)
admin.site.register(Borrowmanage, BorrowmanageAdmin)
admin.site.register(Achievement, AchievementAdmin)