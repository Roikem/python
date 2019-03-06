from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from shop.models import *
import json
# from . import func_views


@csrf_exempt
def home(request):
    return render(request, '234/login/login.html')


def index(request):
    return redirect('/home/')


def main(request):
    return render(request, '234/index.html')


def news_type(request):
    return render(request, '234/newsType.html')


def news(request):
    return render(request, '234/news.html')


def link(request):
    return render(request, '234/link.html')


def product(request):
    return render(request, '234/product.html')


def pwd(request):
    return render(request, '234/updatePwd.html')


@csrf_exempt
def login_handle(request):
    try:
        post = request.POST
        u_name = post.get('name')
        u_pwd = post.get('pwd')
        if User.objects.filter(user_name=u_name):
            users_pwd = User.objects.get(user_name=u_name)
            if users_pwd.user_password == u_pwd:
                return JsonResponse({"usr_data": "登录成功", "result": 1})
            else:
                return JsonResponse({"usr_data": "用户名或密码错误", "result": 0})
        else:
            return JsonResponse({"usr_data": "用户名或密码错误", "result": 0})

    except:
        return JsonResponse({"usr_data": "系统错误", "result": 0})


@csrf_exempt
def command(request):
    commands = request.POST.get("command")
    if commands == 'add_good':
        result = add_good(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'add_supplier':
        result = add_supplier(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'add_market':
        result = add_market(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'change_good':
        result = change_good(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'change_supplier':
        result = change_supplier(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'change_market':
        result = change_market(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'delete_good':
        result = delete_good(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'delete_supplier':
        result = delete_supplier(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    elif commands == 'delete_market':
        result = delete_market(json.loads(request.POST.get('data')))
        return JsonResponse(result, safe=False)
    else:
        return JsonResponse({
            'status': 1,
            'error': 'no command',
        })


@csrf_exempt
def add_good(data):
    try:
        good_list = Good(
            good_name=data['good_name'],
            supplier=data['supplier'],
            add_time=data['add_time'],
            inventory=data['inventory'],
            unit_price=data['unit_price'],
        )
        good_list.save()
        return {'status': 0}
    except:
        return {'status': 1}


@csrf_exempt
def add_supplier(data):
    try:
        supplier_list = Supplier(
            good_name=data['good_name'],
            supplier_name=data['supplier_name'],
            contact=data['contact'],
            num=data['num'],
            price=data['price'],
            time=data['time'],
        )
        supplier_list.save()
        return {'status': 0}
    except:
        return {'status': 1}


@csrf_exempt
def add_market(data):
    try:
        market_list = Market(
            good_name=data['good_name'],
            object1=data['object1'],
            contact=data['contact'],
            num=data['num'],
            price=data['price'],
            place=data['place'],
        )
        market_list.save()
        return {'status': 0}
    except:
        return {'status': 1}


@csrf_exempt
def delete_good(data):
    good_name = data['good_name']
    Good.objects.filter(good_name=good_name).delete()
    return {
        'status': 0,
    }


@csrf_exempt
def delete_supplier(data):
    good_name = data['good_name']
    Supplier.objects.filter(good_name=good_name).delete()
    return {
        'status': 0,
    }


@csrf_exempt
def delete_market(data):
    good_name = data['good_name']
    Market.objects.filter(good_name=good_name).delete()
    return {
        'status': 0,
    }


@csrf_exempt
def change_good(data):
    try:
        good_name1 = data['id']
        Good.objects.filter(good_name=good_name1).delete()
        good_list = Good(
            good_name=data['good_name'],
            supplier=data['supplier'],
            add_time=data['add_time'],
            inventory=data['inventory'],
            unit_price=data['unit_price'],
        )
        good_list.save()
        return {'status': 0}
    except:
        return {'status': 1}


@csrf_exempt
def change_supplier(data):
    try:
        good_name1 = data['id']
        Supplier.objects.filter(good_name=good_name1).delete()
        supplier_list = Supplier(
            good_name=data['good_name'],
            supplier_name=data['supplier_name'],
            contact=data['contact'],
            num=data['num'],
            price=data['price'],
            time=data['time'],
        )
        supplier_list.save()
        return {'status': 0}
    except:
        return {'status': 1}


@csrf_exempt
def change_market(data):
    try:
        good_name1 = data['id']
        Market.objects.filter(good_name=good_name1).delete()
        market_list = Market(
            good_name=data['good_name'],
            object1=data['object1'],
            contact=data['contact'],
            num=data['num'],
            price=data['price'],
            place=data['place'],
        )
        market_list.save()
        return {'status': 0}
    except:
        return {'status': 1}


@csrf_exempt
def get_good(request):
    try:
        json_information = {'status': True, 'information': []}
        list_length = len(Good.objects.values())

        for i in range(0, list_length):
            good_all = Good.objects.values()[i]
            json_information['information'].append(good_all)

        json_information['list_length'] = list_length
        return JsonResponse(json_information)
    except:
        return JsonResponse({'static': 'error'})


@csrf_exempt
def get_supplier(request):
    try:
        json_information = {'status': True, 'information': []}
        list_length = len(Supplier.objects.values())

        for i in range(0, list_length):
            good_all = Supplier.objects.values()[i]
            json_information['information'].append(good_all)

        json_information['list_length'] = list_length
        return JsonResponse(json_information)
    except:
        return JsonResponse({'static': 'error'})


@csrf_exempt
def get_market(request):
    try:
        json_information = {'status': True, 'information': []}
        list_length = len(Market.objects.values())

        for i in range(0, list_length):
            good_all = Market.objects.values()[i]
            json_information['information'].append(good_all)

        json_information['list_length'] = list_length
        return JsonResponse(json_information)
    except:
        return JsonResponse({'static': 'error'})

