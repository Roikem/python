from django.http import JsonResponse,HttpResponse
from sys5704.models import *
import json, re
from django.contrib.auth.decorators import login_required


@login_required
def msg_info(request, username):
    if request.method == 'GET':
        try:
            d = {'status': True}
            user = User.objects.filter(username=username).values('avatar', 'name', 'sex', 'major', 'atschool', 'direction', 'atschool', 'birthday', 'phone', 'schoolid', 'qq')
            user_dict = user[0]
            user_dict['avatar'] = '/static/images/'+user[0]['avatar']
            d['info'] = user_dict
            ach = {}
            ach_username = Achievement.objects.values_list('username')

            if (username,) in ach_username:
                ach = Achievement.objects.filter(username=username).values('softwarepatent', 'patent', 'competition', 'projects', 'paper')
                d['info']['achievement'] = ach[0]

            else:
                d['info']['achievement'] = ach

            return JsonResponse(d)

        except:
            return JsonResponse({'status': False})

    if request.method == 'POST':
        try:
            post = request.POST
            file = request.FILES
            user = User.objects.filter(username=username)[0]
            ach = Achievement.objects.filter(username=username)

            if 'avatar' in file:
                pic = request.FILES['avatar']
                a = re.match(r'^[0-9a-zA-Z\_]+\.(jpg|png|jpeg)$', pic.name)
                if a is not None:
                    user.avatar = pic

            if 'password' in post:
                user.password = post['password']

            if 'name' in post:
                user.name = post['name']

            if 'sex' in post:
                print(post['sex'])
                user.sex = post['sex']

            if 'atschool' in post:
                print(post['atschool'])

                user.atschool = post['atschool']

            if 'major' in post:
                user.major = post['major']

            if 'atschool' in post:
                user.atschool = post['atschool']

            if 'direction' in post:
                user.direction = post['direction']

            if 'birthday' in post:
                user.birthday = post['birthday']

            if 'phone' in post:
                user.phone = post['phone']

            if 'schoolid' in post:
                user.schoolid = post['schoolid']

            if 'qq' in post:
                user.qq = post['qq']

            user.save()

            # if 'achievement[softwarepatent]' in post:
            #
            # if 'achievement[patent]' in post:
            #
            # if 'achievement[competition]' in post:
            #
            # if 'achievement[projects]' in post:
            #
            # if 'achievement[paper]' in post:

            if re.search('achievement', str(post)):
                print('ok')
                if ach.count() == 0:
                    new_achievement = Achievement()
                    new_achievement.username_id = username
                    new_achievement.save()

                new_achievement = Achievement.objects.filter(username=username)[0]
                print(post)

                if 'achievement[softwarepatent]' in post:
                    new_achievement.softwarepatent = post['achievement[softwarepatent]']

                if 'achievement[patent]' in post:
                    new_achievement.patent = post['achievement[patent]']

                if 'achievement[competition]' in post:
                    new_achievement.competition = post['achievement[competition]']

                if 'achievement[projects]' in post:  # 可能是projects
                    # print(post['achievement[projects]'])
                    new_achievement.projects = post['achievement[projects]']
                    # print('omg')

                if 'achievement[paper]' in post:
                    new_achievement.paper = post['achievement[paper]']
                print(new_achievement.projects)
                new_achievement.save()
            return JsonResponse({'status': True})

        except:
            return JsonResponse({'status': False})
