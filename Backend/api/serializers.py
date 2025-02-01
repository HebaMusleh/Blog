from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from api import models as api_models

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls,user):
        # Call the parent class's get_token method
        token = super().get_token(user)
        token['full_name']=user.full_name
        token['email']=user.email
        token['username']=user.username
        return token

class RegisterSerializer (serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,required=True,validators=[validate_password])
    password2 = serializers.CharField(write_only=True,required=True)

    class Meta:
        model = api_models.User
        fields = ['email','full_name','password','password2']
    
    def validate(self,attr):
        if attr['password'] != attr['password2']:
            raise serializers.ValidationError({
                'password':"password fields didn't match"
            })
        return attr
    
    def create(self, validated_data):
        # Define a method to create a new user based on validated data
        user = api_models.User.objects.create(
            full_name=validated_data['full_name'],
            email=validated_data['email'],
        )
        email_username, mobile = user.email.split('@')
        user.username = email_username

        # Set the user's password based on the validated data
        user.set_password(validated_data['password'])
        user.save()

        # Return the created user
        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = api_models.User
        fields = "__all__"

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model =api_models.Profile
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Category
        fields = ['id','title','image','slug','post_count']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Comment
        fields = "__all__"
    def __init__ (self,*args,**kwargs):
        super(CommentSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        if request and request.method == 'POST':
            self.Meta.depth=0
        else :
            self.Meta.depth=3

class BookMarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Bookmark
        fields = "__all__"
    def __init__ (self,*args,**kwargs):
        super(BookMarkSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        if request and request.method == 'POST':
            self.Meta.depth=0
        else :
            self.Meta.depth=3

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = api_models.Comment
        fields = "__all__"
    def __init__ (self,*args,**kwargs):
        super(NotificationSerializer,self).__init__(*args,**kwargs)
        request = self.context.get('request')
        if request and request.method == 'POST':
            self.Meta.depth=0
        else :
            self.Meta.depth=3

# custom serializer : 
class AuthorSerializer(serializers.Serializer):
    views = serializers.IntegerField(default=0)
    posts = serializers.IntegerField(default=0)
    likes = serializers.IntegerField(default=0)
    bookmarks = serializers.IntegerField(default=0)



