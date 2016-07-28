from django import forms

from .models import SignUp

class ContactForm(forms.Form):
    full_name = forms.CharField(required=False)
    email = forms.EmailField()
    message = forms.CharField()


class SignUpForm(forms.ModelForm):
    class Meta:
        model = SignUp
        fields = ['email', 'full_name']
        #exclude = ['full_name']

    def clean_email(self):
        print self.cleaned_data.get('email')
        email = self.cleaned_data.get('email')
        email_base, provider = email.split("@")
        if not ".edu" in provider:
            raise forms.ValidationError("Please use a valid .edu email address")
        return email

    def clean_full_name(self):
        full_name = self.cleaned_data.get('full_name')
        # Write validation code.
        return full_name
