'''
    This file load the data collected by scrapy into django models.
'''
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'thinkhow.settings')

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from zhihu.models import ZhihuML
    # Delete all objects before insert new ones

    zhihu_list = []

    # If the loading file is empty, set the flag as true
    flag = False
    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(container_dir, 'scrapy', 'zhihu_ml.txt')) as f:
        line = f.readline()
        if not line:
            flag = True

        while line:
            #print line
            parts = line.split('\t')
            zhihu_list.append(ZhihuML(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3], img=parts[4], author=parts[5], bio=parts[6]))
            line = f.readline()

    if not flag:
        ZhihuML.objects.all().delete()
        ZhihuML.objects.bulk_create(zhihu_list)
        print('\n+++++++++++++++++++++++++ ZhihuML has been loaded successfully +++++++++++++++++++++++++ \n')
    else:
        print '\n+++++++++++++++++++++++++ Nothing to update in ZhihuML! +++++++++++++++++++++++++\n'

if __name__ == '__main__':
    main()
