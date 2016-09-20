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
    name = 'zhihu'
    allowed_domains = ['zhihu.com']
    start_urls = ['http://www.zhihu.com/', 'https://www.zhihu.com/topic/19559450/hot', 'https://www.zhihu.com/topic/19590195/hot', 'https://www.zhihu.com/topic/19554091/hot', 'https://www.zhihu.com/topic/19670916/hot']

    def __init__(self):
        self.headers = header.H
        self.cookies = header.C

    def start_requests(self):
        os.environ["TZ"]="US/Eastern"
        print '&&&&&&&&&&&&&&&&&&&&&&&&& start_requests &&&&&&&&&&&&&&&&&&&&&&&&&'
        # Use cookie to login in Zhihu
        yield FormRequest(self.start_urls[0], meta = {'cookiejar': 0}, \
                          headers = self.headers, \
                          cookies =self.cookies,
                          callback = self.parse_item)

        for url in self.start_urls[1:]:
            print '&&&&&&&&&&&&&&&&&&&&&&&&&', url, '&&&&&&&&&&&&&&&&&&&&&&&&&'
            yield FormRequest(url, meta = {'cookiejar': 1}, \
                              headers = self.headers, \
                              cookies =self.cookies,
                              callback = self.parse_topic)

    def parse_item(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        # topics and zhuanlan are held in two different label.
        topics = page.xpath('//div[@feed-item-a]')
        zhuanlans = page.xpath('//div[@feed-item-p]')

        a = page.xpath('//span[@class="zm-item-answer-author-info"]')
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

            # If abstract contains image, the first element would be '\n'.
            # So we should first check whether the first element is '\n',
            # if so, we should extract the second element
            abstract = topic.xpath('.//div[@class="zh-summary summary clearfix"]/text()').extract()
            if abstract[0] == '\n':
                item['abstract'] = abstract[1].strip().encode('utf-8')
            else:
                item['abstract'] = abstract[0].strip().encode('utf-8')

            category = "ALL:" + topic.xpath('./div[1]/div[2]/div[1]/a/text()').extract_first()

            item['title'] = title.encode('utf-8')
            item['url'] = url
            item['category'] = category.encode('utf-8')
            item['img'] = img
            item['author'] = author.encode('utf-8')
            item['bio'] = bio.encode('utf-8').strip()
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

            category = "ALL:" + topic.xpath('./div[1]/div[2]/div[1]/a/text()').extract_first()

            item['title'] = title.encode('utf-8')
            item['url'] = url
            item['category'] = category.encode('utf-8')
            item['img'] = img
            item['author'] = author.encode('utf-8')
            item['bio'] = bio.encode('utf-8').strip()
            item['update_time'] = time.ctime()
            yield item

    def parse_topic(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        # topics and zhuanlan are held in two different label.
        topics = page.xpath('//div[@class="feed-main"]')

        for topic in topics:
            item = ZhihuItem()
            title = topic.xpath('.//h2/a/text()').extract_first().strip()
            url = topic.xpath('.//h2/a/@href').extract_first().strip()
            url = "http://www.zhihu.com" + url
            author = topic.xpath('.//a[@class="author-link"]/text()').extract_first()
            bio = topic.xpath('.//span[@class="bio"]/text()').extract_first()

            # If abstract contains image, the first element would be '\n'.
            # So we should first check whether the first element is '\n',
            # if so, we should extract the second element
            abstract = topic.xpath('.//div[@class="zh-summary summary clearfix"]/text()').extract()
            if abstract[0] == '\n':
                item['abstract'] = abstract[1].strip().encode('utf-8')
            else:
                item['abstract'] = abstract[0].strip().encode('utf-8')

            category = page.xpath('//h1/text()').extract_first()

            # Somebody doesn't have bio and somebody is anonymous.
            if not bio:
                bio = ''

            if not author:
                author = 'Anonymous'

            item['title'] = title.encode('utf-8')
            item['url'] = url
            item['category'] = category.encode('utf-8')
            item['img'] = "https://pic1.zhimg.com/d3dd87a0feae0a3db82973157eee89c0_m.png"
            item['author'] = author.encode('utf-8')
            item['bio'] = bio.encode('utf-8').strip()
            item['update_time'] = time.ctime()
            yield item
