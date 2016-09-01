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
#import time
#import re
#import pymongo
#from pymongo import MongoClient

#import scrapy_splash
#from scrapy_splash import SplashRequest, SplashResponse


class ZhihuSpider (CrawlSpider):
    name = 'zhihu_old'
    allowed_domains = ['zhihu.com']
    start_urls = ["http://www.zhihu.com/"]

    def __init__(self):
        self.headers = header.H
        self.cookies = header.C

    def start_requests(self):
        os.environ["TZ"]="US/Eastern"
        print '&&&&&&&&&&&&&&&&&&&&&&&&& start_requests &&&&&&&&&&&&&&&&&&&&&&&&&'
        # Use cookie to login in Zhihu
        for i, url in enumerate(self.start_urls):
            yield FormRequest(url, meta = {'cookiejar': i}, \
                              headers = self.headers, \
                              cookies =self.cookies,
                              callback = self.parse_item)

    def parse_item(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        # topics and zhuanlan are held in two different label.
        topics = page.xpath('//div[@feed-item-a]')
        zhuanlans = page.xpath('//div[@feed-item-p]')

        a = page.xpath('//span[@class="zm-item-answer-author-info"]')
        # print response.body
        for topic in topics:
            item = ZhihuItem()
            title = topic.xpath('.//h2/a/text()').extract_first().strip()
            url = topic.xpath('.//h2/a/@href').extract_first().strip()
            url = "http://www.zhihu.com" + url
            img = topic.xpath('.//img/@src').extract_first()
            author = topic.xpath('.//a[@class="author-link"]/text()').extract_first()
            bio = topic.xpath('.//span[@class="bio"]/text()').extract_first()
            if not bio:
                bio = ''
            if not author:
                author = 'Anonymous'

            # print '+++++++', author
            # print '+++++++', bio
            # print '+++++++', title
            # print '+++++++', url

            # If abstract contains image, the first element would be '\n'.
            # So we should first check whether the first element is '\n',
            # if so, we should extract the second element
            abstract = topic.xpath('.//div[@class="zh-summary summary clearfix"]/text()').extract()
            if abstract[0] == '\n':
                item['abstract'] = abstract[1].strip().encode('utf-8')
            else:
                item['abstract'] = abstract[0].strip().encode('utf-8')

            category = topic.xpath('./div[1]/div[2]/div[1]/a/text()').extract_first()

            item['title'] = title.encode('utf-8')
            item['url'] = url
            item['category'] = category.encode('utf-8')
            item['img'] = img
            item['author'] = author.encode('utf-8')
            item['bio'] = bio.encode('utf-8')
            item['update_time'] = time.ctime()
            yield item

        for zhuanlan in zhuanlans:
            item = ZhihuItem()
            title = zhuanlan.xpath('.//h2/a/text()').extract_first().strip()
            url = zhuanlan.xpath('.//h2/a/@href').extract_first().strip()
            img = topic.xpath('.//img/@src').extract_first()
            author = topic.xpath('.//a[@class="author-link"]/text()').extract_first()
            bio = topic.xpath('.//span[@class="bio"]/text()').extract_first()
            if not bio:
                bio = ''
            if not author:
                author = 'Anonymous'

            # If abstract contains image, the first element would be '\n'.
            # So we should first check whether the first element is '\n',
            # if so, we should extract the second element
            abstract = zhuanlan.xpath('.//div[@class="zh-summary summary clearfix"]/text()').extract()
            if abstract[0] == '\n':
                item['abstract'] = abstract[1].strip().encode('utf-8')
            else:
                item['abstract'] = abstract[0].strip().encode('utf-8')

            category = topic.xpath('./div[1]/div[2]/div[1]/a/text()').extract_first()

            item['title'] = title.encode('utf-8')
            item['url'] = url
            item['category'] = category.encode('utf-8')
            item['img'] = img
            item['author'] = author.encode('utf-8')
            item['bio'] = bio.encode('utf-8')
            item['update_time'] = time.ctime()
            yield item
