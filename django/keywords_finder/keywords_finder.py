 # -*- coding: utf-8 -*-

import sys
import requests
import re
from bs4 import BeautifulSoup

## WordCounter: A class used to help sort the words and display them.
class WordCounter:
    def __init__(self, word, count):
        self.word = word
        self.count = count

    # Sort it in decreasing order.  That is: the most frequent one comes first.
    def __gt__(self, other):
        if self.count != other.count:
            return self.count < other.count
        else:
            return self.word > other.word

    def __eq__(self, other):
        return self.count == other.count and self.word == other.word

    def __str__(self):
        return '[' + self.word + ']: ' + self.count

## Assignment: Main class that includes the core methods.
class Assignment:
    def __init__(self, url, n=3):
        self.url = url
        self.n = int(n)
        # Loading stop words into a set
        self.stop_words = set()
        with open('keywords_finder/stop-words.txt', 'r') as f:
            for line in f:
                self.stop_words.add(line.strip()) # Need to trim the newline symbol '\n'

    ## generate_ngram: Generate the n gram of the given array.
    # @ words[array]: An array of words which is used to generate the ngram.
    # @ n[int]: The size of the ngram.
    def generate_ngram(self, words, n):
        ngram = []
        for i in range(0, len(words) - (n - 1)):
            word = ''
            skip = False
            for j in range(0, n):
                if words[i + j] in self.stop_words:
                    skip = True
                    break
                word = word + ' ' + words[i + j]
            if skip:
                continue
            word = word.strip()
            ngram.append(word)
        return ngram

    ## count: Count the occurrence of each word in the given words array,
    ##        excluding the stop words.
    # @ words[array]: The array of words need to be counted.
    def count(self, words):
        count_dict = {}
        for word in words:
            if word.lower() in self.stop_words:
                continue
            if word in count_dict:
                count = count_dict[word] + 1
                count_dict[word] = count
            else:
                count_dict[word] = 1
        return count_dict

    ## find_keywords: Find the topics in a page.
    # First, it extracts the content in the page, splits the page into english
    # words.  Then it use these words to generate a n-gram model.  Finally, it
    # use this model to find the topics in 2 conditions:
    #   1. The word must be in the title.
    #   2. The word must be one of the most frequent words in the body.
    def find_keywords(self):
        usage = """
            Usage:
            python Assignment.py [url] [n]

            [url] - The url you want to get the topics from.  It must include protocol (such as 'http://' 'https://')
            [n]   - The size of n-gram.
            """
        try:
            # Regular expression pattern
            pattern = re.compile('[a-zA-Z0-9-]+')
            host_pattern = re.compile('[a-zA-z]+://([^\s/]*)')
            remove_tag_pattern = re.compile('<[^>]*>')

            # Get the content in the given url.
            # We must simulate a browser visit by setting proper headers.
            host_name = host_pattern.findall(self.url)[0]
            headers = {
                'Host': host_name,
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate',
                'Referer': 'http://www.google.com',
                'Connection': 'keep-alive',
                'Cache-Control': 'max-age=0',
            }
            r = requests.get(self.url, headers=headers)
            body = r.text

            # Use beautiful soup to fetch the html contents.
            soup = BeautifulSoup(body, 'html.parser')

            # The most important information is usually in the title and h1 tag.
            title = soup.title

            ####### Part 1: Extract the content in the page #######
            body_without_tag = remove_tag_pattern.sub('', body)
            body_words = pattern.findall(body_without_tag)
            title_words = pattern.findall(title.string)

            ####### Part 2: Generate n-gram #######
            candidate_words = []
            n_gram = []

            for i in range(0, self.n):
                n_gram.insert(0, self.count(self.generate_ngram(body_words, i + 1)))
                candidate_words.extend(self.generate_ngram(title_words, i + 1))

            ####### Part 3: Counting #######
            # Count the occurrence of each word
            word_counter_array = []
            for i in range(0, self.n):
                for key in n_gram[i].keys():
                    new_counter = WordCounter(key, n_gram[i][key])
                    if key in candidate_words:
                        is_in_ngram = False
                        for counter in word_counter_array:
                            if key in counter.word:
                                is_in_ngram = True
                        if not is_in_ngram:
                            word_counter_array.append(new_counter)

            word_counter_array.sort()

            print '======= n-gram frequency: ======='
            for word_counter in word_counter_array:
                word = word_counter.word
                if word in candidate_words:
                    print '[' + word_counter.word + ']: ' + str(word_counter.count)

            print '\n======= Common topics that best describe the contents of that page: ======='
            for index, word_counter in enumerate(word_counter_array):
                if index != len(word_counter_array) - 1:
                    print word_counter.word + ',',
                else:
                    print word_counter.word

            return word_counter_array
        except requests.exceptions.MissingSchema:
            print "Invalid URL!\n"
            print usage
        # except:
        #     print "Other error occurred!"

## Main method
if __name__ == "__main__":
    usage = """
        Usage:
        python Assignment.py [url] [n]

        [url] - The url you want to get the topics from.  It must include protocol (such as 'http://' 'https://')
        [n]   - The size of n-gram.
        """
    if len(sys.argv) < 2:
        print usage
    else:
        html_pattern = re.compile('[a-zA-z]+://[^\s]*')
        url = sys.argv[1]
        if not html_pattern.findall(url):
            print "Error: Invalid URL!"
            print usage
        else:
            # Finding 3-gram topics by default.
            n = 3
            if len(sys.argv) > 2:
                try:
                    n = int(sys.argv[2])
                except:
                    print "Warning: n must be a valid positive interger! Now it is set to be the default value (3)."
                    print usage
            assignment = Assignment(url, n)
            assignment.find_keywords()
