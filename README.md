## thinkhow


1. It’s important to add __str__() methods to your models, not only for your own convenience when dealing with the interactive prompt, but also because objects’ representations are used throughout Django’s automatically-generated admin.

2. Whenever you create a form that alters data server-side, use method="post".  This tip isn’t specific to Django; it’s just good Web development practice.

3. Always return an HttpResponseRedirect after successfully dealing with POST data.  This prevents data from being posted twice if a user hits the Back button.

## TODO:
