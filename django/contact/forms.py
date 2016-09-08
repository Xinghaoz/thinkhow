from django import forms

from .models import Comment

class CommentForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super(CommentForm, self).__init__(*args, **kwargs)
        # assign a (computed, I assume) default value to the choice field
        self.initial['private'] = 'PUBLIC'
        # you should NOT do this:
        # self.fields['choices_field_name'].initial = 'default value'
    PUBLICITY_CHOICE = (
        ('PUBLIC', 'public'),
        ('PRIVATE', 'private')
    )
    full_name = forms.CharField(required=True)
    email = forms.EmailField()
    comment = forms.CharField(widget=forms.Textarea)
    private = forms.ChoiceField(choices=PUBLICITY_CHOICE, widget=forms.RadioSelect)


class SignUpForm(forms.ModelForm):
    class Meta:
        model = Comment
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
