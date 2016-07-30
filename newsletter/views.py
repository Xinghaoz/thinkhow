from django.shortcuts import render

from .forms import SignUpForm, ContactForm

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
    return render(request, "home.html", context)

def contact(request):
    title = "Contact me"
    form = ContactForm(request.POST or None)
    if form.is_valid():
        for key, value in form.cleaned_data.iteritems():
            print key, value

    context = {
        "form": form,
        "title": title,
    }

    return render(request, "forms.html", context)
