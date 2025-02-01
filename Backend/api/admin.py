
from django.contrib import admin

# Register your models here.
from .models import User,Profile,Category,Post

admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Category)
admin.site.register(Post)
