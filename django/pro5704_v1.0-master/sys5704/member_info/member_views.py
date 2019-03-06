from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from sys5704.models import *


# @login_required
def members(request):
    if request.method == 'GET':
        d = {'status': True, 'members': [], }
        all_username = User.objects.values_list('username')
        all_user = User.objects.values('avatar', 'name', 'sex', 'major', 'atschool', 'direction')
        for i in all_user:
            if i['avatar'] == '':
                continue
            i['avatar'] = '/static/images/' + i['avatar']

        ach_username = Achievement.objects.values_list('username')
        for index, i in enumerate(all_user):
            ach = {}
            if all_username[index] in ach_username:
                print('ok')
                ach = Achievement.objects.filter(username=all_username[index][0]).values('softwarepatent', 'projects', 'patent', 'paper', 'competition')
            d['members'].append(i)
            if ach != {}:
                d['members'][index]['achievement'] = ach[0]
            else:
                d['members'][index]['achievement'] = ach
        return JsonResponse(d)
