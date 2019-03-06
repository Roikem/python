# -*- coding:utf-8 -*-
from django.contrib import admin
from register.models import Register, Message, Article


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date')
# 在admin里横向显示


admin.site.register(Register)
admin.site.register(Message)
admin.site.register(Article, ArticleAdmin)
