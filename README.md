## thinkhow


1. It’s important to add __str__() methods to your models, not only for your own convenience when dealing with the interactive prompt, but also because objects’ representations are used throughout Django’s automatically-generated admin.

2. Whenever you create a form that alters data server-side, use method="post".  This tip isn’t specific to Django; it’s just good Web development practice.

3. Always return an HttpResponseRedirect after successfully dealing with POST data.  This prevents data from being posted twice if a user hits the Back button.

## Tutorial 7: (https://docs.djangoproject.com/en/1.9/intro/tutorial07/)
Mainly talking about how to customize the admin page.

` python
list_filter = ['pub_date']
search_fields = ['question_text']
`

How to override admin template:
Change: (/templates/admin/base_site.html are fixed!)
<container>/templates/admin/base_site.html

in (mysite/settings.py):
`python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], # Replace DIR here
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
`

## 07/27/2016
### Post a form
views.py
`python
def <method_name>(request):
    form = <FormName>(request.post or None) # Get the form from POST method
    form.save(commit=False) # Don't save the form to the database
    form.save() # Save the form to the database
`

### Check whether a form is valid or not
forms.py
`python
class FormName():
    def clean_<data_name>(self): # valid data here
    <parameter_name> = self.cleaned_data.get('<parameter_name>') # get the data
    # Do some validation
``

## 07/28/2016
### static file
STATICFILES_DIRS: Where your static files from
STATIC_ROOT: Where your static files to (When running collectstatic)

MEDIA_URL and MEDIA_ROOT: The same as STATIC, but these are about users uploading

### Load static file in template
`html
<link href="{% static 'css/bootstrap.min.css'%}" rel="stylesheet">
`
<link href="{% static '/css/bootstrap.min.css'%}" rel="stylesheet"> is wrong!!
Don't put '/' before css!

### Extend block
in "base.html"
{% extends "home.html" %}
The content in "home.html" will be replaced by that in "base.html".  The tags in "base.html" will be added.

+ Use "{{ block.super }}" to inherit the block and add your own content in the tag.

+ Use "{% include 'htmlblock.html' %}" to include a whole block of codes, which functions like a copy and paste. If in 'htmlblock.html' there are loading static files, you need to put {% load staticfiles %} in the beginning.

## Use crispy-forms
1. Install crispy
`bash
pip install --upgrade django-crispy-forms
`
2. Add "'crispy_forms'," in settings.py.
3. Add "{% load crispy_forms_tags %}" in the ".html" file.
4. Add "{{ form|crispy }}" behind the <form> tag
