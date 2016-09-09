# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import json, codecs

class ZhihuPipeline(object):
    def __init__(self):
        self.zhihu_json = open('zhihu.dat', 'w')
        self.zhihu = open('zhihu.txt', 'w')

        self.zhihu_ml = open('zhihu_ml.txt', 'w')

        self.bangumi = open('bangumi.txt', 'w')
        self.game = open('game.txt', 'w')

    def process_item(self, item, spider):
        if spider.name == 'zhihu':
            # line = json.dumps(dict(item)) + "\n"
            # self.zhihu_json.write(line)
            val = "{}\t{}\t{}\t{}\t{}\t{}\t{}\t{}\n".format(item['url'], item['title'], item['abstract'], item['category'], item['img'], item['author'], item['bio'], item['update_time'])
            self.zhihu.write(val)

        elif spider.name == 'bangumi':
            val = "{}\t{}\t{}\t{}\t{}\n".format(item['url'], item['title'], item['category'], item['img'], item['update_time'])
            self.bangumi.write(val)

        elif spider.name == 'game':
            val = "{}\t{}\t{}\t{}\t{}\n".format(item['url'], item['title'], item['img'], item['up'], item['update_time'])
            self.game.write(val)

        elif spider.name == 'zhihu_ml':
            val = "{}\t{}\t{}\t{}\t{}\t{}\t{}\t{}\n".format(item['url'], item['title'], item['abstract'], item['category'], item['img'], item['author'], item['bio'], item['update_time'])
            self.zhihu_ml.write(val)

        return item
