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
