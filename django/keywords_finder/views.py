from django.shortcuts import render, redirect
from .keywords_finder import *

# Create your views here.
def keywords_finder(request):
    if request.method == 'GET':
        return render(request, 'keywords_finder/keywords_finder.html', {})

def get_keywords(request):
    context = {}
    if request.method == "POST":
        html_pattern = re.compile('[a-zA-z]+://[^\s]*')
        url = request.POST.get('url')

        if not html_pattern.findall(url):
            print "Error: Invalid URL!"
            # print usage
        else:
            # Finding 3-gram topics by default.
            n = request.POST.get('n')

            print '$$$$$$$ ' + url
            print '$$$$$$$ ' + n

            assignment = Assignment(url, n)
            word_counter_array = assignment.find_keywords()
            keyword_container = []
            for word_counter in word_counter_array:
                new_keyword = {
                    'key': word_counter.word,
                    'count': word_counter.count,
                }
                keyword_container.append(new_keyword)

            context['keywords'] = keyword_container
        return render(request, 'keywords_finder/keywords.json', context, content_type='application/json')
    return redirect('/')
