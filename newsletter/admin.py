from django.contrib import admin
from .models import SignUp
from .forms import SignUpForm

# Register your models here.
class SignUpAdmin(admin.ModelAdmin):
    #model = SignUp
    list_display = ('email', 'full_name', 'timestamp')
    form = SignUpForm

admin.site.register(SignUp, SignUpAdmin)
