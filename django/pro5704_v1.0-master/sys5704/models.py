from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.utils import timezone


class User(AbstractBaseUser):
    username = models.CharField(max_length=15, primary_key=True, verbose_name='用户账号')
    password = models.CharField(max_length=20, verbose_name='密码')
    name = models.CharField(max_length=10, verbose_name='姓名', blank=True)
    schoolid = models.CharField(max_length=15, verbose_name='学生号', blank=True)
    sex = models.CharField(max_length=5, verbose_name='性别', blank=True)
    birthday = models.CharField(max_length=15,blank=True,verbose_name='生日')
    atschool = models.CharField(max_length=5,verbose_name='是否在校', blank=True)
    major = models.CharField(max_length=30, verbose_name='专业', blank=True)
    avatar = models.ImageField(upload_to='users/', verbose_name='头像', blank=True)
    phone = models.CharField(max_length=11, verbose_name='电话', blank=True)
    qq = models.CharField(max_length=15, blank=True)
    direction = models.CharField(max_length=50, verbose_name='方向', blank=True)
    right = models.CharField(max_length=10, verbose_name='权限', blank=True)
    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username


class Asset(models.Model):
    name = models.CharField(max_length=50, primary_key=True, verbose_name='物资名称')
    amount = models.IntegerField(verbose_name='总数')
    restamount = models.IntegerField(verbose_name='剩余数量')
    issupplies = models.CharField(max_length=5,verbose_name='是否为耗材')
    image = models.ImageField(upload_to="assets/", verbose_name='参考图')
    isstudio = models.CharField(max_length=5,verbose_name='是否为学校资产')
    is_delete = models.IntegerField(default=0,verbose_name="是否被删除")

    def __str__(self):
        return self.name


class Borrowmanage(models.Model):
    amount = models.IntegerField(verbose_name='借阅数目')
    starttime = models.CharField(max_length=15, verbose_name='借阅时间', blank=True, default=timezone.now())
    endtime = models.CharField(max_length=15, verbose_name='归还时间', blank=True)
    borrowuser = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name='借阅人')
    borrowasset = models.ForeignKey(Asset, on_delete=models.DO_NOTHING, verbose_name='借阅物资')

    def __str__(self):
        return self.borrowuser.name + "/" + self.borrowasset.name


class Achievement(models.Model):
    softwarepatent = models.CharField(max_length=300, verbose_name='软件著作', blank=True)
    patent = models.CharField(max_length=300, verbose_name='专利', blank=True)
    competition = models.CharField(max_length=300, verbose_name='竞赛', blank=True)
    paper = models.CharField(max_length=300, verbose_name='论文', blank=True)
    projects = models.CharField(max_length=300, verbose_name='项目', blank=True)
    username = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, verbose_name='用户', )

    def __str__(self):
        return self.username.name


