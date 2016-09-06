# from django.contrib import admin
# from .models import SignUp
# from .forms import SignUpForm
#
# # Register your models here.
# class SignUpAdmin(admin.ModelAdmin):
#     #model = SignUp
#     list_display = ('email', 'full_name', 'timestamp')
#     form = SignUpForm
#
# admin.site.register(SignUp, SignUpAdmin)


from django.contrib import admin
from .models import Comment
from .forms import CommentForm

# Register your models here.
class CommentAdmin(admin.ModelAdmin):
    #model = SignUp
    list_display = ('email', 'full_name', 'comment', 'timestamp')
    # form = CommentForm

admin.site.register(Comment, CommentAdmin)
