from django.shortcuts import render, redirect
from register.models import Register, Article
from django.http import Http404
# import hashlib
# Create your views here.


def index(request):
    return redirect('/login/')


def register(request):
    return render(request, 'register/register.html')


def register_handle(request):
    # 接受用户输入的值
    post = request.POST
    u_name = post.get('user_name')
    u_pwd = post.get('pwd')
    u_pwd2 = post.get('pwd2')
    # 判断两次密码是否相同
    if u_pwd != u_pwd2:
        # 执行重定向返回之前的页面
        return redirect('/register/')
    # 判断两次密码是否在指定长度内
    if u_pwd != u_pwd2 or len(u_pwd) < 6 or len(u_pwd) > 20:
        return redirect('/register/')
    # 判断用户是否填写了信息
    if not (u_name and u_pwd and u_pwd2):
        return redirect('/register/')
    # 判断用户名长度
    if len(u_name) < 5 or len(u_name) > 20:
        return redirect('/register/')
    # 验证用户名是否已经存在
    if Register.objects.filter(user_name=u_name):
        return redirect('/register/')
    # 密码加密
    # u_pwd3 = hashlib.md5(u_pwd.encode("gb2312"))
    # 创建对象
    user = Register()
    user.user_name = u_name
    user.user_password = u_pwd
    user.save()
    # 注册成功转到登陆界面
    return redirect('/login/')


def login(request):
    return render(request, 'register/login.html')


def login_handle(request):
    # 接受请求信息
    post = request.POST
    u_name = post.get('user_name')
    u_pwd = post.get('user_pwd')
    # 根据用户名查询对象
    if Register.objects.filter(user_name=u_name):  # 查询结果为一个列表
        users_pwd = Register.objects.get(user_name=u_name)
        if users_pwd.user_password == u_pwd:
            return redirect('/home/')
        else:
            return redirect('/login/')
    else:
        return redirect('/login/')


def home(request):
    post_list = Article.objects.all()  # 获取全部的Article对象
    return render(request, 'blog/home.html', {'post_list': post_list})


def detail(request, id):
    try:
        post = Article.objects.get(id=str(id))
    except Article.DoesNotExist:
        raise Http404
    return render(request, 'blog/post.html', {'post': post})

