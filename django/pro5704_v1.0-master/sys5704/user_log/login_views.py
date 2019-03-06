from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.shortcuts import render,redirect,reverse
from django.contrib.auth import authenticate, login
import json
from ..models import User
from django.contrib.auth.decorators import login_required

# @login_required(login_url='/login')
# def login_success(request):
#     return HttpResponse('hello login')


def do_login(req):
    if req.method == 'GET':
        return render(req, 'index.html')


def login_handle(req):
    if req.method =='POST':
        username = req.POST.get('username',)
        password = req.POST.get('password',)

        user = authenticate(req,username=username,password=password)
        if user is not None:
            login(req, user)
            # user_new = User.objects.get(username)
            d = {'status': True, 'name': user.name, 'rights': [user.right]}
            # d = str(d)
            return JsonResponse(d)

        else:
            return JsonResponse({'status': False})
