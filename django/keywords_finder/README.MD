## Language
Python 2.7.11

## Usage
```
python Assignment.py [url] [n]
```
[url] - The url you want to get the topics from.  It must include protocol (such as 'http://' 'https://')
[n]   - The size of n-gram.

## Dependencies
pip install beautifulsoup4
pip install requests

## My solution
If there are some key words(topics) in a pages, it is usually the most frequent words in that page.  Thus we might want to count the number of occurrence of each word, and pick up the most frequent ones.  However, in a HTML page, there are many tags like <div> or <p> and in every English sentence.  There are also many common words like "the, it, to".  There words are called "stop-words".  So first we need to remove the HTML tags in a web page and ignore the stop-word".  Then, even though we ignore the stop-words, the most frequent words in a page are usually not necessary the topics which can best describe the page.  So let's think about that: What is often used to summarize a page, an article or a paper?  It is the "title".  (In the beginning, I also look into the <h1>, <h2> tags because they are usually used to highlight something.  But after some tests, the results turned out to be not very good, so I don't take them into consideration later.)  

So now we plan to extract the topics from the title.  But again, it is not necessary that each word in the title can best describe the page.  Furthermore, sometimes a keyword or a topic usually consist of multiple words or a phrase.  For example, in [this page](http://www.cnn.com/2013/06/10/politics/edward-snowden-profile/), the title is "Man behind NSA leaks says he did it to safeguard privacy, liberty - CNNPolitics.com".  Every single word might not best describe the page.  So we need to generate a n-gram model.  An [n-gram](https://en.wikipedia.org/wiki/N-gram) is a contiguous sequence of n items from a given sequence of text or speech. (For exampke, "Man", "behind", "NSA"... are 1-gram, "Man behind", "behind NSA"... are 2-gram).  Another problem is that: many n-grams are not semantic.  For example, the 2-gram "leaks says" doesn't mean anything at all.  So we need to find a way to get meaningful and n-gram.

My idea is that, if it is a meaningful n-gram, it might occur many times in the body of the page.  For example, the 2-gram "leaks says" is less possible to occur many times in the body.  But the 2-gram "NSA leaks" tend to occur many times in the body.  So what I do is that: First, use the title to generate a n-gram model (The number "n" is actually an user input, by default, it is 3).  Next, do the same for the body of the page.  Then match every n-gram of the body to the title, count the frequency.  Finally we pick up the most frequent ones and that is the result.

## Test result
```
python Assignment.py https://www.amazon.com/Cuisinart-CPT-122-Compact-2-Slice-Toaster/dp/B009GQ034C/ref\=sr_1_1\?s\=kitchen\&ie\=UTF8\&qid\=1431620315\&sr\=1-1\&keywords\=toaster
```
Result:     
Amazon, Compact Plastic Toaster, Plastic Toaster White, 2-Slice Compact Plastic, CPT-122 2-Slice Compact, Cuisinart CPT-122 2-Slice, Kitchen Dining, Toaster White Kitchen

Evaluation:
Not very good, because there are many overlapping 3-gram

==================================================

```
python Assignment.py http://blog.rei.com/camp/how-to-introduce-your-indoorsy-friend-to-the-outdoors/ 4
```
Result:
Introduce Your Indoorsy Friend, Outdoors, REI Co-op Journal

Evaluation:
Very good in describing this page.

==================================================

```
python Assignment.py http://www.cnn.com/2013/06/10/politics/edward-snowden-profile/
```
Result:
NSA leaks, safeguard privacy liberty, CNNPolitics

Evaluation:
Very good in describing this page.

==================================================

```
python Assignment.py http://www.cnn.com/2016/12/29/entertainment/debbie-reynolds-dead/index.html
```
Result:
daughter, Carrie Fisher dies, Debbie Reynolds mother

Evaluation:
Very good in describing this page.

==================================================

```
python Assignment.py https://www.bustle.com/articles/167790-ramsay-finally-died-on-game-of-thrones-his-death-was-befitting-of-his-actions 10
```
Result:
His Death Was Befitting Of His Actions, Ramsay Finally Died On Game Of Thrones

Evaluation:
Very good in describing this page.

## Drawbacks
1. If the page doesn't have the <title> tag, there will be no result.
2. Can not handle the pages that require Javascript execution.
3. Still have some n-gram overlap.
4. It is still very tricky dealing with the stop-words

## License
[MIT](https://en.wikipedia.org/wiki/MIT_License)

## Author
Developed by Xinghao Zhou in December 2016
