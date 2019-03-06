# -*- coding:utf-8 -*-
from __future__ import unicode_literals
# 将模块中显式出现的所有字符串转为unicode类型,unicode为统一码
from django.db import models
# Create your models here.


class Register(models.Model):
    user_name = models.CharField(max_length=20)
    user_password = models.CharField(max_length=20)

    class Meta:
        verbose_name = '账户密码'
        verbose_name_plural = '账户密码'


class Message(models.Model):
    user_true_name = models.CharField(max_length=20)
    user_email = models.EmailField()
    user_telephone_number = models.CharField(max_length=11)
    user_student_number = models.CharField(max_length=12)

    def __str__(self):
        return self.user_true_name
        # default,blank是python层面的约束，不影响数据库表结构

    class Meta:
        verbose_name = '用户信息'
        verbose_name_plural = '用户信息'


class Article(models.Model):
    title = models.CharField(u"博客标题", max_length=100)  # 博客标题
    category = models.CharField(u"博客标签", max_length=50, blank=True)  # 博客标签
    pub_date = models.DateTimeField(u"发布日期", auto_now_add=True, editable=True)  # 博客发布日期
    update_time = models.DateTimeField(u'更新时间', auto_now=True, null=True)
    content = models.TextField(blank=True, null=True)  # 博客文章正文

    def __unicode__(self):
        return self.title

    class Meta:
        # 按时间下降排序
        ordering = ['-pub_date']
        verbose_name = "文章"
        verbose_name_plural = "文章"
