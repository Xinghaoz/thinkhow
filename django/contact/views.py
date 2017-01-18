from django.shortcuts import render
from django.http import HttpResponseRedirect
# from django.urls import reverse
# from django.conf.urls import reverse
from django.core.urlresolvers import reverse

from .forms import SignUpForm, CommentForm
from .models import Comment

# Create your views here.
def contact(request):
    form = CommentForm()

    context = {
        "form": form,
    }

    return render(request, "contact/forms.html", context)

def comments(request):
    form = CommentForm(request.POST or None)
    if form.is_valid():
        for key, value in form.cleaned_data.iteritems():
            pass
    else:
        context = {
            "form": form,
        }
        return render(request, "contact/forms.html", context)

    data = form.cleaned_data
    new_one = Comment(email=data['email'], full_name=data['full_name'], comment=data['comment'])
    new_one.save()

    comments = Comment.objects.all()
    context = {
        "form": form,
        "comments": comments,
    }

    # return HttpResponseRedirect(reverse('comments', args=()))
    return render(request, "contact/comments.html", context)

def message(request):
    comments = Comment.objects.all()
    context = {
        "comments": comments,
    }
    return render(request, "contact/comments.html", context)
