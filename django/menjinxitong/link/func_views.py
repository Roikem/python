from link.models import User


def save_information(person):
    u_name = person['user_name']
    u_pass = person['user_password']
    if User.objects.filter(user_name=u_name):
        user_pass = User.objects.get(user_name=u_name)
        if u_pass == user_pass.user_password:
            return {
                'status': 1,
            }
        else:
            return {
                'status': 0,
            }
    else:
        return {
            'status': 0,
        }


