from django import forms

from django.contrib.auth.models import User

class StudentForm(forms.Form):
    andrew_id = forms.CharField(max_length = 25)
    first_name = forms.CharField(max_length = 50)
    last_name = forms.CharField(max_length = 50)

class CourseForm(forms.Form):
    course_number = forms.CharField(max_length = 10)
    course_name = forms.CharField(max_length = 50)
    instructor = forms.CharField(max_length = 50)

class RegistrationForm(forms.Form):
    andirew_id = forms.CharField(max_length = 25)
    course_number = forms.CharField(max_length = 10)
