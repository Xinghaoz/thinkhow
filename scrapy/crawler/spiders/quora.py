# -*- coding:utf-8 -*-

import scrapy
from scrapy.spiders import BaseSpider, CrawlSpider
from scrapy.selector import Selector
from scrapy.linkextractors import LinkExtractor
from scrapy.http import Request, FormRequest

from crawler.items import ZhihuItem
from crawler import header
import re
import os, time

class ZhihuSpider (CrawlSpider):
    name = 'quora'
    allowed_domains = ['quora.com']
    start_urls = ['https://www.quora.com']

    # def __init__(self):
        # self.headers = header.QUORA_HEADER
        # self.cookies = header.QUORA_COOKIE

    def start_requests(self):
        os.environ["TZ"]="US/Eastern"
        print '&&&&&&&&&&&&&&&&&&&&&&&&& start_requests &&&&&&&&&&&&&&&&&&&&&&&&&'
        # Use cookie to login in Zhihu
        yield FormRequest(self.start_urls[0], meta = {'cookiejar': 0},
                        #   headers = self.headers,
                        #   cookies =self.cookies,
                          callback = self.parse_item)

    def parse_item(self, response):
        print response.body
