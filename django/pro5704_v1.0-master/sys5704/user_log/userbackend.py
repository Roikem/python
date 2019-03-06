from ..models import User


class MyBackend(object):
    def authenticate(self, username=None, password=None):
        if username is not None and password is not None:
            try:
                user = User.objects.get(username=username)
                #if user.check_password(password):
                if user.password == password:
                    return user
                else:
                    return None
            except User.DoesNotExist:
                return None
        else:
            return None

    def get_user(self, username):

        try:
            return User.objects.get(pk=username)
        except User.DoesNotExist:
            return None

