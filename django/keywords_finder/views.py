from django.shortcuts import render
from .keyword_finder import *

# Create your views here.
def keywords_finder(request):
    if request.method == 'GET':
        return render(request, 'keywords_finder/keywords_finder.html', {})

def get_keywords(request):
    if request.method == "POST":
        html_pattern = re.compile('[a-zA-z]+://[^\s]*')
        url = request.get('url')
        if not html_pattern.findall(url):
            print "Error: Invalid URL!"
            # print usage
        else:
            # Finding 3-gram topics by default.
            n = request.get('n')

            assignment = Assignment(url, n)
            word_counter_array = assignment.find_keywords()
