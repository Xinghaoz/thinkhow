## Some tips for Django

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
2. Add "'crispy_forms'," and "CRISPY_TEMPLATE_PACK = 'bootstrap3'" in settings.py.
3. Add "{% load crispy_forms_tags %}" in the ".html" file.
4. Add "{{ form|crispy }}" behind the <form> tag

## 07/29/2016
### Apply "django-registration-redux" (https://django-registration-redux.readthedocs.io/en/latest/quickstart.html#quickstart)
1. Install
`bash
pip install django-registration-redux
`

2. In "settings.py"
Add:
  'django.contrib.sites',
  'registration', #should be immediately above 'django.contrib.auth'
in INSTALLED_APPS

ADD:
# Django registration redux settings
  ACCOUNT_ACTIVATION_DAYS = 7
  REGISTRATION_AUTO_LOGIN = True
  SITE_ID = 1
  LOGIN_REDIRECT_URL = '/'
in the very last

3. In "navibar.html" change to this:
`html
<li><a href="{% url 'auth_logout' %}">Logout</a></li>
<!-- <li class="active"><a href="./">Static top <span class="sr-only">(current)</span></a></li> -->
{% else %}
<li><a href="{% url 'auth_login' %}">Login</a></li>
<li><a href="{% url 'registration_register' %}">Register</a></li>
`

## 07/30/2016
### How to make text align center?
+ Make the whole class align center.
`html
<style>
.lead {
    text-align:center;
}
</style>
`
That's not good because you might use lead some where else and don't want it to align center.

+ Create our own text-align-center class and Add it to "custom.css"
`html
<style>
.text-align-center {
    text-align:center;
}
`
In this way, you can add self-defined class text-align-center when you want the content to be aligned center.

### Use queryset to operate the models
https://docs.djangoproject.com/en/1.9/ref/models/querysets/
https://www.codingforentrepreneurs.com/projects/srvup-membership/
1. In "view.py"
Add:
`python
if request.user.is_authenticated() and request.user.is_staff: # If the user is admin, it is "staff"
    context = {
        'queryset': # Some queryset
    }
`

## 07/31/2016
### Setup production environment.
1. Create a new folder called "settings" in in configuration folder.
2. In "settings" folder, create "init.py", "base.py", "local.py" and "production.py"
3. Copy content from old settings to "base.py" and "local.py".
4. In "local.py" change :
`python
BASE_DIR = os.path.dirname((os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEBUG = False
ALLOWED_HOSTS = ['*']
`

### Using FTP
1. Cyberduck
2. Transmit

### Set up requirement
`bash
pip freeze > requirements.txt
`

`bash
pip install -r requirements.txt
`

## 08/04/2016
`html
.navbar-nav>li>a:hover {
    color: #111;
}
`
This is right

`html
.navbar-nav>li>a: hover {
    color: #111;
}`
WRONG!