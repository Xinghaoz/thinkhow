# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import codecs

class ThinkhowPipeline(object):
    def __init__(self):
        #with open("result.dat", 'wb', encoding = 'utf-8') as f:
        self.result = codecs.open('result.dat', 'wb', encoding='utf-8')

    def process_item(self, item, spider):
        print '**********'
        #line = "{0}\t{1}\t{2}\n".format(item['team1'], item['team2'], item['result'])
        line = item['team1'] + "\t" + item['team2'] + "\t" + item['result'] + "\n"
        self.result.write(line)
        return item
