from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.shortcuts import render,redirect
from django.contrib import auth
# def logout(request):
#     return HttpResponse('hello logout')
from django.contrib.auth.decorators import login_required


@login_required
def do_logout(req):
    auth.logout(req)
    return JsonResponse({'status': True})
