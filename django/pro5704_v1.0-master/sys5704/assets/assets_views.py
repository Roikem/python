from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
import re

from ..models import Asset,Borrowmanage,User
import json

@login_required
def do_assets(req):
    if req.method == 'GET':
        try:
            allassets = Asset.objects.all()
            assets = []
            for asset in allassets:
                name = asset.name
                restamount = asset.restamount
                image = asset.image
                isstudio = asset.isstudio
                is_delete = asset.is_delete

                asset_msg = {
                    'name': name,
                    'restamount': restamount,
                    'image': '/static/images/' + str(image),
                    'isstudio': isstudio
                }
                if is_delete == 0:
                    assets.append(asset_msg)
            resp = {
                'status': True,
                'assets': assets,
            }
            print(str(resp))
            return HttpResponse(json.dumps(resp), content_type="application/json")
        except:
            resp={
                'status': False
            }
            return HttpResponse(json.dumps(resp), content_type="application/json")

    elif req.method =='POST':
        try:
            command = req.POST.get('command')
        except:
            print("There is no command")
            resp = {'status': False}
            return HttpResponse(json.dumps(resp), content_type="application/json")

        if command == 'add':
            name = req.POST.get('name')
            amount = req.POST.get('amount')
            isstudio = req.POST.get('isstudio')
            issupplies = req.POST.get('issupplies')
            # if issupplies_bool in ('true','True','1'):
            #     issupplies = True
            # else:
            #     issupplies = False
            # if isstudio in ('true','True','1'):
            #     type = True
            # else:
            #     type = False
            # image = req.POST.get('image')
            # print("test")

            if 'image' in req.FILES:
                image = req.FILES['image']
                a = re.match(r'^[0-9a-zA-Z\_]+\.(jpg|png|jpeg)$', image.name)
                if a is not None:
                    print('ok')
                    print(image)


            if len(Asset.objects.filter(name=name))==0:
                restamount = amount
                try:
                    Asset.objects.create(name=name,amount=amount,restamount=restamount,issupplies=issupplies,image=image,isstudio=isstudio)
                    resp = {'status':True}
                    return HttpResponse(json.dumps(resp), content_type="application/json")
                except:
                    resp = {'status':False}
                    return HttpResponse(json.dumps(resp), content_type="application/json")
            else:
                try:
                    add_asset = Asset.objects.get(name=name)
                    add_asset.amount = add_asset.amount+int(amount)
                    add_asset.restamount = add_asset.restamount+int(amount)
                    add_asset.is_delete = 0
                    add_asset.save()
                    resp = {'status': True}
                    return HttpResponse(json.dumps(resp), content_type="application/json")
                except:
                    resp = {'status': False}
                    return HttpResponse(json.dumps(resp), content_type="application/json")

        elif command == "reduce":
            try:
                name = req.POST.get('name')
                reduction = req.POST.get('reduction')

                asset = Asset.objects.get(name=name)
                asset.amount = asset.amount - int(reduction)
                asset.restamount = asset.restamount - int(reduction)
                if asset.amount >= 0:
                    asset.save()
                else:
                    resp = {'status': False}
                    return HttpResponse(json.dumps(resp), content_type="application/json")
                resp = {'status':True}
                return HttpResponse(json.dumps(resp), content_type="application/json")
            except:
                resp = {'status':False}
                return HttpResponse(json.dumps(resp), content_type="application/json")

        elif command == "delete":

            try:
                name = req.POST.get('name')
                reduction = req.POST.get('reduction')

                # Asset.objects.get(name=name).delete()
                asset_del = Asset.objects.get(name=name)
                asset_del.is_delete = 1
                asset_del.save()

                resp = {'status': True}
                return HttpResponse(json.dumps(resp), content_type="application/json")
            except:
                resp = {'status': False}
                return HttpResponse(json.dumps(resp), content_type="application/json")


@login_required
def borrowAsset(req):
    # print(req.POST)
    if req.method == 'POST':
        command = req.POST.get('command')
        if command=="return":
            username = req.POST.get('username')
            # print(username)
            assets = req.POST.get('assets')
            # print(assets)
            assets_res = json.loads(assets)
            # print(type(assets_res[0]))
            for asset in assets_res:
                for (key,value) in asset.items():
                    print(username+";"+key)
                    try:
                        manage = Borrowmanage.objects.get(borrowuser_id=username,borrowasset_id=key)
                        print(str(manage))
                    except:
                        print("There is not borrowuser or borrowasset")
                        resp = {'status': False}
                        return HttpResponse(json.dumps(resp), content_type="application/json")
                    # print(manage.amount)
                    manage.amount = manage.amount - value
                    if manage.amount<0:
                        print("归还数量大于借阅数量!!!")
                        resp = {'status': False}
                        return HttpResponse(json.dumps(resp), content_type="application/json")
                    else:
                        manage.borrowasset.restamount = manage.borrowasset.restamount + value
                        if manage.borrowasset.amount>=manage.borrowasset.restamount :
                            # print(manage.borrowasset.amount)

                            manage.save()
                            manage.borrowasset.save()
                        else:
                            print("被借阅的物资总数小于剩余总数!!!!")
                            resp = {'status': False}
                            return HttpResponse(json.dumps(resp), content_type="application/json")
            print("Success save")
            resp = {'status': True}
            return HttpResponse(json.dumps(resp), content_type="application/json")
        elif command == "borrow":
            username = req.POST.get('username')
            # print(username)
            assets = req.POST.get('assets')
            # print(assets)
            assets_res = json.loads(assets)
            # print(type(assets_res[0]))
            for asset in assets_res:
                for (key, value) in asset.items():
                    print(username + ";" + key)
                    try:
                        print(key)
                        if len(User.objects.filter(username=username))==0:
                            print("所借物资的人不存在")
                            resp = {'status': False}
                            return HttpResponse(json.dumps(resp), content_type="application/json")
                        if len(Asset.objects.filter(name=key))==0:
                            print("所借物资不存在")
                            resp = {'status': False}
                            return HttpResponse(json.dumps(resp), content_type="application/json")
                        if Asset.objects.get(name=key).restamount<value:
                            print("所借物资数量大于剩余数量")
                            resp = {'status': False}
                            return HttpResponse(json.dumps(resp), content_type="application/json")

                        manage = Borrowmanage.objects.get(borrowuser_id=username, borrowasset_id=key)
                        # print(str(manage))
                        manage.amount = manage.amount+value
                        manage.borrowasset.restamount = manage.borrowasset.restamount - value
                        manage.save()
                        manage.borrowasset.save()
                        # except:
                        #     resp = {'status': "false1"}
                        #     return HttpResponse(json.dumps(resp), content_type="application/json")

                    except:
                        
                        Borrowmanage.objects.create(amount=value, borrowuser_id=username,
                                                    borrowasset_id=key)
                        borrow_asset = Borrowmanage.objects.get(borrowuser_id=username, borrowasset_id=key).borrowasset
                        borrow_asset.restamount = borrow_asset.restamount - value
                        borrow_asset.save()
                        # print("There is not borrowuser or borrowasset")

            print("Create Success")
            resp = {'status': True}
            return JsonResponse(resp)
                        # print(manage.amount)
                    # if manage is None:

    elif req.method == 'GET':

        try:
            borrowmanages = Borrowmanage.objects.all()
            borrowlist = []
            for borrowmanage in borrowmanages:
                username = borrowmanage.borrowuser_id
                assetname = borrowmanage.borrowasset_id
                amount = borrowmanage.amount

                user = User.objects.get(username=username)
                name = user.name
                borrow_msg = {
                    'name': name,
                    'assetname': assetname,
                    'amount':amount
                }
                if amount > 0:
                    borrowlist.append(borrow_msg)
            resp = {
                'status': True,
                'assets': borrowlist,
            }
            print(str(resp))
            return HttpResponse(json.dumps(resp), content_type="application/json")
        except:
            resp={
                'status':False
            }
            return HttpResponse(json.dumps(resp), content_type="application/json")


        # resp = {'status': False}
        # return HttpResponse(json.dumps(resp), content_type="application/json")

    # assets:"{stm32:3},{51:10},{nmsl:233}"