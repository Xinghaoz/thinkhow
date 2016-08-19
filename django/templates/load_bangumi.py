'''
    This file load the data collected by scrapy into django models.
'''
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thinkhow.settings")

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from bilibili.models import Bangumi
    bangumi_list = []

    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    with open(os.path.join(container_dir, "scrapy", "bilibili.txt")) as f:
        line = f.readline()
        while line:
            parts = line.split('\t')
            bangumi_list.append(Bangumi(url=parts[0], title=parts[1], category=parts[2], img=parts[3]))
            line = f.readline()

    Bangumi.objects.bulk_create(bangumi_list)

if __name__ =='__main__':
    main()
    print('Done!')
