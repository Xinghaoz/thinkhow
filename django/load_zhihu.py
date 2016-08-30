'''
    This file load the data collected by scrapy into django models.
'''
import os, time
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'thinkhow.settings')

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from zhihu.models import Article
    from update.models import ZhihuTime
    os.environ["TZ"]="US/Eastern"

    zhihu_list = []

    # If the loading file is empty, set the flag as true
    flag = False
    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(container_dir, 'scrapy', 'zhihu.txt')) as f:
        line = f.readline()
        if not line:
            flag = True

        while line:
            #print line
            parts = line.split('\t')
            zhihu_list.append(Article(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3], img=parts[4], author=parts[5], bio=parts[6]))
            line = f.readline()

    if not flag:
        # Delete all objects before insert new ones
        Article.objects.all().delete()
        Article.objects.bulk_create(zhihu_list)

        # Update the time
        update_time = time.ctime()
        ZhihuTime.objects.create(update_time = update_time)
        print('\n+++++++++++++++++++++++++ Zhihu has been loaded successfully +++++++++++++++++++++++++ \n')
    else:
        print '\n+++++++++++++++++++++++++ Nothing to update in Zhihu! +++++++++++++++++++++++++\n'

if __name__ == '__main__':
    main()
