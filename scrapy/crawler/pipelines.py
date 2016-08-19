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

        self.bilibili = open('bilibili.txt', 'w')

    def process_item(self, item, spider):
        if spider.name == 'zhihu':
            line = json.dumps(dict(item)) + "\n"
            self.zhihu_json.write(line)

            val = "{}\t{}\t{}\t{}\n".format(item['url'], item['title'], item['abstract'], item['category'])
            self.zhihu.write(val)

        elif spider.name == 'bilibili':
            # line = json.dumps(dict(item)) + "\n"
            # self.bilibili.write(line)
            val = "{}\t{}\t{}\t{}\n".format(item['url'], item['title'], item['category'], item['img'])
            self.bilibili.write(val)

        return item

class BilibiliPipeline(object):
    def __init__(self):
        self.bilibili_json = open('bilibili.txt', 'w')

    def process_item(self, item, spider):
        pass
