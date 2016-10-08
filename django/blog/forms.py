from django import forms
from .models import *

from django.contrib.auth.models import User

# class RegistrationForm(forms.Form):
class RegistrationForm(forms.ModelForm):
    confirm = forms.CharField(max_length = 25, widget=forms.PasswordInput(attrs={
        'placeholder': "Comfirm Password",
    }))
    class Meta:
        model = User
        fields = ['username', 'password', 'confirm', 'first_name', 'last_name', 'email']
        widgets = {
            'username': forms.TextInput(attrs={
                'placeholder': "Username",
            }),
            'password': forms.PasswordInput(attrs={
                'placeholder': "Password",
            }),
            'first_name': forms.TextInput(attrs={
                'placeholder': "Firstname",
            }),
            'last_name': forms.TextInput(attrs={
                'placeholder': "Lastname",
            }),
            'email': forms.EmailInput(attrs={
                'placeholder': "Email",
            }),
        }

        # username = forms.CharField(max_length=20)
        # email = forms.EmailField()
        # first_name = forms.CharField(max_length=25)
        # last_name = forms.CharField(max_length=25)
        # password = forms.CharField(max_length = 25, widget=forms.PasswordInput())

    def clean(self):
        cleaned_data = super(RegistrationForm, self).clean()

        password = cleaned_data.get('password')
        confirm = cleaned_data.get('confirm')

        if password and confirm and password != confirm:
            raise forms.ValidationError('Password did not match')

        return cleaned_data

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if User.objects.filter(username__exact=username):
            raise forms.ValidationError('Username is already existed!')
        return username

class LoginForm(forms.Form):
    username = forms.CharField(max_length=25, widget=forms.TextInput(
            attrs={
                'placeholder': "Username",
            }))
    password = forms.CharField(max_length=25, widget=forms.PasswordInput(
            attrs={
                'placeholder': "Password",
            }))

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['text']
        widgets = {
            'text': forms.Textarea(attrs={
                'placeholder': "New post (< 42 characters)",
                'class': 'post-text',
            })
        }

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        exclude = ('user',)
        # fields = ['first_name', 'last_name', 'email', 'bio', 'photo']
        widgets = {
            'photo': forms.FileInput(),
            'bio': forms.TextInput(attrs={
                'class': 'edit-profile-input',
            }),
        }

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')
        widgets = {
            'username': forms.TextInput(attrs={
                'readonly': True,
                'class': 'edit-profile-input',
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'edit-profile-input',
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'edit-profile-input',
            }),
            'email': forms.EmailInput(attrs={
                'class': 'edit-profile-input',
            }),
        }

class ChangePasswordForm(forms.Form):
    password = forms.CharField(max_length = 25,
                                widget = forms.PasswordInput(attrs={
                                    'placeholder': 'Password'}),)
    confirm = forms.CharField(max_length = 25,
                                widget = forms.PasswordInput(attrs={
                                    'placeholder': 'Confirm Password'}),)

    def clean(self):
        cleaned_data = super(ChangePasswordForm, self).clean()
        return cleaned_data
    def clean_password2(self):
        password = self.cleaned_data.get('password')
        confirm = self.cleaned_data.get('confirm')
        if password and confirm and password != confirm:
            raise forms.ValidationError("Passwords did not match.")
