'''
    This file load the data collected by scrapy into django models.
'''
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'thinkhow.settings')

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from zhihu.models import Article
    zhihu_list = []

    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(container_dir, 'scrapy', 'zhihu.txt')) as f:
        line = f.readline()
        while line:
            #print line
            parts = line.split('\t')
            zhihu_list.append(Article(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3]))
            line = f.readline()

    Article.objects.bulk_create(zhihu_list)

if __name__ == '__main__':
    main()
    print('Done!')
