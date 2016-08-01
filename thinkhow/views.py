from django.shortcuts import render
from contact.forms import SignUpForm

# Create your views here.
def home(request):

    if request.method == "POST":
        print request.POST

    title = 'Welcome'
    if request.user.is_authenticated():
        title = "My Title %s" % request.user

    form = SignUpForm(request.POST or None)

    context = {
        "title": title,
        "form": form,
    }

    if form.is_valid():
        form.save()

        context = {
            "title": 'Thank you',
        }

    if request.user.is_authenticated() and request.user.is_staff: # If the user is admin, it is "staff"
        context = {
            'queryset': [1, 2, 3]# Some queryset
        }
    return render(request, "home.html", context)

def about(request):
    return render(request, "about.html", {})
