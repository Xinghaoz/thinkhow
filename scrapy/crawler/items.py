# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ZhihuItem(scrapy.Item):
    url = scrapy.Field()
    title = scrapy.Field()
    abstract = scrapy.Field()
    category = scrapy.Field()

class BilibiliItem(scrapy.Item):
    url = scrapy.Field()
    title = scrapy.Field()
    category = scrapy.Field()
    up = scrapy.Field()
