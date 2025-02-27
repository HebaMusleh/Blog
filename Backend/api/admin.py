
from django.contrib import admin

# Register your models here.
from .models import User,Profile,Category,Post
class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['title']}

admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Category)
admin.site.register(Post,PostAdmin)
