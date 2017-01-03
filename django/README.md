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

## 08/16/2016
`js
var articles = $("article"); // Wrong!
articles[i].attr("class")
$(articles[i]).attr("class") // Correct!`

## 08/27/2016
Install python development files:
`bash
sudo apt-get install python-dev
sudo apt-get install python-pip`

Now that the development files are available, we can install uWSGI globally through pip by typing:
`bash
sudo pip install uwsgi`

Deploy Django with uWSGI:
`bash
uwsgi --http :8000 --module mysite.wsgi`

Deploy备忘录：
折腾了一两个小时，终于解决了502 Bad Gateway的问题。
nginx的作用是分发网络包，在设置里每个"location"定义了一个包去往的地址。
在我的设置中，最下面的包是去往Django的，
所以不仅要开启nginx服务器：
`bash
sudo service nginx restart`

还要开启Django:
`bash
uwsgi --socket mysite.sock --module mysite.wsgi`

而这Django和Nginx的关系是：
`the web client <-> the web server <-> the socket <-> uWSGI <-> Python`

中间要有一个socket来连接！！
502 Bad Gateway的原因就是找不到这个socket

通过
`vim /var/log/nginx/error.log`
我发现
`connect() to unix:///home/ubuntu/thinkhow/django/mysite.sock failed (2: No such file or directory) while connecting to upstream, client: 128.237.210.254, server: example.com, request: "GET / HTTP/1.1", upstream: "uwsgi://unix:///home/ubuntu/thinkhow/django/mysite.sock:", host: "ec2-52-91-196-230.compute-1.amazonaws.com:8000"`
没有找到这个sock！！这就是出错的原因

没有的话，自己就创建一个
`sudo vim thinkhow.sock`
内容空白即可

注意还有会有Permission Denied的问题：
`2016/08/27 20:11:04 [crit] 11882#0: *1 connect() to unix:///home/ubuntu/uwsgi-tutorial/mysite/mysite.sock failed (13: Permission denied) while connecting to upstream, client: 128.237.210.254, server: 52.91.196.230, request: "GET / HTTP/1.1", upstream: "uwsgi://unix:///home/ubuntu/uwsgi-tutorial/mysite/mysite.sock:", host: "52.91.196.230:8000"`

如此即可：
`bash
uwsgi --socket mysite.sock --wsgi-file test.py --chmod-socket=666 # (very permissive)`
Or:
`bash
uwsgi --socket mysite.sock --wsgi-file test.py --chmod-socket=664 # (more sensible)`

Run uWSGI in background:
`bash
uwsgi --ini uwsgi.ini &
`

Stop uWSGI:
`bash
killall -9 uwsgi
`

至此Django终于部署成功啦！

## 08/29/2016
In python
('update_time',)
is a tuple, but
('update_time')
is not!
`python
class BangumiTimeAdmin(admin.ModelAdmin):
    list_display = ('update_time',)
`

### STATIC_ROOT VS STATIC_URL
STATIC_URL is where Django stores the static files.
STATIC_ROOT is where your web server to find the static files.

### How to stop uWSGI:
ps ax | grep uwsgi
15005 pts/4    S      0:00 /ve/path/bin/uwsgi --ini config.ini
15006 pts/4    S      0:00 /ve/path/bin/uwsgi --ini config.ini
15007 pts/4    S      0:00 /ve/path/bin/uwsgi --ini config.ini

killall -9 uwsgi


## Deploy update 01/02/2017
To turn in homework 6, create files (and subdirectories if needed) in
this directory, add and commit those files to your cloned repository,
and push your commit to your bare repository on GitHub.

Add any general notes or instructions for the TAs to this README file.
The TAs will read this file before evaluating your work.

Deploy URL: http://www.thinkhowblog.com/

## Setup Environment
```bash
sudo apt-get update
```

Install python development files:
```bash
sudo apt-get install python-dev
sudo apt-get install python-pip
```

Now that the development files are available, we can install uWSGI globally through pip by typing:

Install Django and the dependencies:
```bash
sudo pip install django
sudo pip install Pillow
sudo pip install uwsgi
```

Install Nginx
```
sudo apt-get install nginx
```

Configure the static root in django. (setting.py)
```
STATIC_ROOT = os.path.join(BASE_DIR, "static_root/")
```
Then
```
python manage.py collectstatic
```

Create a log file
```
sudo vim /var/log/uwsgi/xinghaoz.log
```

Change the default port of Nginx.
```
sudo vim /etc/nginx/sites-available/default
```
Change the following 2 lines:
```
listen 80 default_server;
listen [::]:80 default_server;
```
To:
```
listen 8080 default_server;
listen [::]:8080 default_server;
```


## Deploy
When running in delopying mode, we should set the DEBUG mode to False:
In settings.py:
```
DEBUG = False
ALLOWED_HOSTS = ['*']
```

```
sudo ln -s /home/ubuntu/grumblr/xinghaoz_nginx.conf /etc/nginx/sites-enabled/
```

Or directly copy the configuration file into the directory
```
sudo cp xinghaoz_nginx.conf /etc/nginx/sites-enabled/xinghaoz_nginx.conf
```

Run Nginx server:
```
sudo service nginx restart
```

Run Django with uwsgi:
```
uwsgi --socket xinghaoz.sock --module webapps.wsgi --chmod-socket=666
```

By now, we have successfully deploy our application in the web!

---------
For our convenience, we can set a .ini file and include all our configuration
in the file, then run the uwsgi by using the configuration file.

Create a file "uwsgi.ini" and copy the following into the file:
```
[uwsgi]
# Django-related settings
# the base directory (full path)
chdir=/home/ubuntu/grumblr
# Django's wsgi file
module          = webapps.wsgi
# the virtualenv (full path)
＃home            = /path/to/virtualenv
# process-related settings
# master
master          = true
# maximum number of worker processes
processes       = 10
# the socket (use the full path to be safe)
socket          = /home/ubuntu/grumblr/xinghaoz.sock
# ... with appropriate permissions - may be needed
chmod-socket    = 666
# clear environment on exit
vacuum          = true
```

Run uWSGI in background:
```bash
uwsgi --ini uwsgi.ini &
```

If we want to Stop uWSGI:
```bash
killall -9 uwsgi
```

Remember to change the DB!
```
DATABASES = {
    # Use Postgresql
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'myproject',
        'USER': 'myprojectuser',
        'PASSWORD': POSTGRESQL_PASSWORD,
        'HOST': 'localhost',
        'PORT': '',
    }
}
```

Remember to hide you key!

Don't forget to make the deploy secure by add following into settings.py:
```
SECRET_KEY = SECRET_KEY
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
X_FRAME_OPTIONS = 'DENY'
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = '0'
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
``
