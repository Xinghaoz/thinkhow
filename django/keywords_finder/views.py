from django.shortcuts import render

# Create your views here.
def keywords_finder(request):
    if request.method == 'GET':
        return render(request, 'keywords_finder/keywords_finder.html', {})
