from django.shortcuts import render

from .forms import SignUpForm, ContactForm

# Create your views here.
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
