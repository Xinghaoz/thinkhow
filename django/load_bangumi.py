'''
    This file load the data collected by scrapy into django models.
'''
import os, time
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thinkhow.settings")

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from bilibili.models import Bangumi
    from update.models import BangumiTime
    os.environ["TZ"]="US/Eastern"

    bangumi_list = []

    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    # If the loading file is empty, set the flag as true
    flag = False
    with open(os.path.join(container_dir, "scrapy", "bangumi.txt")) as f:
        line = f.readline()
        if not line:
            flag = True

        while line:
            parts = line.split('\t')
            bangumi_list.append(Bangumi(url=parts[0], title=parts[1], category=parts[2], img=parts[3], update_time=parts[4]))
            line = f.readline()

    # We delete and update only when the file is not empty
    if not flag:
        # Delete all objects before insert new ones
        Bangumi.objects.all().delete()
        Bangumi.objects.bulk_create(bangumi_list)

        # update_time = time.ctime()
        # BangumiTime.objects.all().delete()
        # BangumiTime.objects.create(update_time = update_time)
        print('\n+++++++++++++++++++++++++ Bangumi has been loaded successfully +++++++++++++++++++++++++ \n')
    else:
        print '\n+++++++++++++++++++++++++ Nothing to update in Bangumi! +++++++++++++++++++++++++\n'

if __name__ == '__main__':
    main()
