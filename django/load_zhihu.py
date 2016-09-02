# -*- coding: utf-8 -*-

'''
    This file load the data collected by scrapy into django models.
'''
import os, time
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'thinkhow.settings')

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from zhihu.models import Article, ZhihuML, ZhihuCV, ZhihuMath, ZhihuStat
    from update.models import ZhihuTime

    zhihu_list = []
    zhihu_ml_list = []
    zhihu_cv_list = []
    zhihu_math_list = []
    zhihu_stat_list = []

    # If the loading file is empty, set the flag as true
    flag = False
    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(container_dir, 'scrapy', 'zhihu.txt')) as f:
        line = f.readline()
        if not line:
            flag = True

        while line:
            parts = line.split('\t')
            # Check the topics (category)
            if "ALL" in parts[3]:
                category = parts[3][4:]
                zhihu_list.append(Article(url=parts[0], title=parts[1], abstract=parts[2], category=category, img=parts[4], author=parts[5], bio=parts[6], update_time=parts[7]))
            elif parts[3] == "机器学习":
                zhihu_ml_list.append(ZhihuML(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3], img=parts[4], author=parts[5], bio=parts[6], update_time=parts[7]))
            elif parts[3] == "计算机视觉":
                zhihu_cv_list.append(ZhihuCV(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3], img=parts[4], author=parts[5], bio=parts[6], update_time=parts[7]))
            elif parts[3] == "数学":
                zhihu_math_list.append(ZhihuMath(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3], img=parts[4], author=parts[5], bio=parts[6], update_time=parts[7]))
            elif parts[3] == "概率论":
                zhihu_stat_list.append(ZhihuStat(url=parts[0], title=parts[1], abstract=parts[2], category=parts[3], img=parts[4], author=parts[5], bio=parts[6], update_time=parts[7]))
            line = f.readline()

    if not flag:
        # Delete all objects before insert new ones
        Article.objects.all().delete()
        Article.objects.bulk_create(zhihu_list)

        ZhihuML.objects.all().delete()
        ZhihuML.objects.bulk_create(zhihu_ml_list)

        ZhihuCV.objects.all().delete()
        ZhihuCV.objects.bulk_create(zhihu_cv_list)

        ZhihuMath.objects.all().delete()
        ZhihuMath.objects.bulk_create(zhihu_math_list)

        ZhihuStat.objects.all().delete()
        ZhihuStat.objects.bulk_create(zhihu_stat_list)

        print('\n+++++++++++++++++++++++++ Zhihu has been loaded successfully +++++++++++++++++++++++++ \n')
    else:
        print '\n+++++++++++++++++++++++++ Nothing to update in Zhihu! +++++++++++++++++++++++++\n'

if __name__ == '__main__':
    main()
