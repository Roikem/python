from django.db import models
# Create your models here.


class User(models.Model):
    user_name = models.CharField(max_length=10, verbose_name='用户名')
    user_password = models.CharField(max_length=16, verbose_name='密码')

    def __str__(self):
        return self.user_name


