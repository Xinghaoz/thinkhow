from django.shortcuts import render
from django.http import HttpResponseRedirect
# from django.urls import reverse
# from django.conf.urls import reverse

from .forms import SignUpForm, ContactForm
from .models import SignUp

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

    return render(request, "contact/forms.html", context)

def comments(request):
    form = ContactForm(request.POST or None)
    if form.is_valid():
        # print form.cleaned_data
        for key, value in form.cleaned_data.iteritems():
            print key, value

    data = form.cleaned_data
    new_one = SignUp(email=data['email'], full_name=data['full_name'], message=data['message'])
    new_one.save()

    context = {
        "form": form,
    }

    return HttpResponseRedirect(reverse('contact:message', args=()))
    # return render(request, "contact/message.html", context)
