from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=10, verbose_name='用户名')
    user_password = models.CharField(max_length=16, verbose_name='密码')

    def __str__(self):
        return self.user_name


class Good(models.Model):
    good_name = models.CharField(max_length=20, verbose_name='商品名称', blank=True)
    supplier = models.CharField(max_length=30, verbose_name='供应商', blank=True)
    add_time = models.CharField(max_length=30, verbose_name='入库时间', blank=True)
    inventory = models.CharField(max_length=30, verbose_name='库存', blank=True)
    unit_price = models.CharField(max_length=30, verbose_name='商品单价', blank=True)


class Supplier(models.Model):
    good_name = models.CharField(max_length=20, verbose_name='商品名称', blank=True)
    supplier_name = models.CharField(max_length=30, verbose_name='代理商名称', blank=True)
    contact = models.CharField(max_length=30, verbose_name='联系方式', blank=True)
    num = models.CharField(max_length=30, verbose_name='数量', blank=True)
    price = models.CharField(max_length=30, verbose_name='商品价值', blank=True)
    time = models.CharField(max_length=30, verbose_name='出库时间', blank=True)


class Market(models.Model):
    good_name = models.CharField(max_length=20, verbose_name='商品名称', blank=True)
    object1 = models.CharField(max_length=30, verbose_name='销售对象', blank=True)
    contact = models.CharField(max_length=30, verbose_name='联系方式', blank=True)
    num = models.CharField(max_length=30, verbose_name='数量', blank=True)
    price = models.CharField(max_length=30, verbose_name='销售金额', blank=True)
    place = models.CharField(max_length=30, verbose_name='配送地点', blank=True)





