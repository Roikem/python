from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import json
from link.models import User
# from . import func_views


@csrf_exempt
def index(request):
    return render(request, 'link/index.html')


@csrf_exempt
def login_handle(request):
    # request_type = request.POST['type']
    # if request_type == 'save_information':
    #     result = func_views.save_information(json.loads(request.POST['person']))
    #     return JsonResponse(result)
    # else:
    #     return JsonResponse({
    #         'status': 0,
    #         'error': 'error',
    #     })
    if request.method == 'POST':
        try:
            post = request.POST
            u_name = post.get('user_name')
            u_pwd = post.get('user_password')
            if User.objects.filter(user_name=u_name):
                users_pwd = User.objects.get(user_name=u_name)
                if users_pwd.user_password == u_pwd:
                    return HttpResponse(json.dumps({"usr_data": "登录成功", "result": 1}), content_type='application/json')
                else:
                    return HttpResponse(json.dumps({"usr_data": "用户名或密码错误", "result": 0}), content_type='application/json')
            else:
                return HttpResponse(json.dumps({"usr_data": "用户名或密码错误", "result": 0}), content_type='application/json')

        except:
            return HttpResponse(json.dumps({"usr_data": "系统错误", "result": 0}))


@csrf_exempt
def test(request):
    post = request.POST
    type = post['type']
    person = json.loads(post['person'])
    if type == '123':
        if person['user_name'] == 'root':
            return JsonResponse(1, safe=False)
        else:
            return JsonResponse(0, safe=False)
    else:
        return JsonResponse(0, safe=False)



def receive(request):
    with open('static/a.json', 'r+') as file:
        result = json.load(file)
    return JsonResponse(result)

