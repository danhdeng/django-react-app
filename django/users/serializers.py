from rest_framework import serializers
from .models import NewUser

class CustomUserSerializer(serializers.ModelSerializer):
    email =serializers.EmailField(required=True)
    user_name =serializers.CharField(required=True)
    password =serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = NewUser
        fields =(
            'email',
            'user_name',
            'password',
        )
        extra_kwargs={'password':{'write_only':True}}

        def create(self, vaidated_data):
            password=vaidated_data.data.pop('password', None)
            #if all the fileds are the same, we can use the following
            instance=self.Meta.model(**vaidated_data)
            if password is not None:
                instance.set_password(password)
                instance.save()
                return instance

        