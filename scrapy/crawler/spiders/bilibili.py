# -*- coding:utf-8 -*-

import scrapy
from scrapy.spiders import BaseSpider, CrawlSpider
from scrapy.selector import Selector
from scrapy.linkextractors import LinkExtractor
from scrapy.http import Request, FormRequest

from crawler.items import BilibiliItem
import re


class BilibiliSpider (BaseSpider):
    name = 'bilibili'
    allowed_domains = ['bilibili.com']
    start_urls = ['http://bangumi.bilibili.com/22/', 'http://www.bilibili.com/video/game.html']

    def start_requests(self):
            # for url in self.start_urls:
            yield scrapy.Request(self.start_urls[0], self.parse, meta={
                'splash': {
                    'endpoint': 'render.html'
                }
            })

            yield scrapy.Request(self.start_urls[1], self.parse_game, meta={
                'splash': {
                    'endpoint': 'render.html'
                }
            })

    def parse(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        bangumi_list = page.xpath('//*[@id="list_bangumi_new"]/div[2]/ul/li')

        # The number beyond 13 has no img, therefore we just crawl the first 12 items
        i = 0
        for bangumi in bangumi_list:
            if i == 12:
                break
            item = BilibiliItem()

            title = bangumi.xpath('.//a/text()').extract_first()
            url = "http://bangumi.bilibili.com" + bangumi.xpath('.//a/@href').extract_first()
            category = bangumi.xpath('.//span/text()').extract_first()
            img = bangumi.xpath('.//img/@src').extract_first()

            item['title'] = title.encode('utf-8')
            item['url'] = url
            item['category'] = category.encode('utf-8')
            item['img'] = img

            i += 1
            # yield item

    def parse_game(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        game_list_wrapper = page.xpath('//ul[@class="rlist"]')[0]
        game_list_wrapper_1 = page.xpath('/html/body/div[4]/div[6]/div[2]/div[2]/div[1]/div/ul[1]')

        game_list = game_list_wrapper.xpath('./li')
        game_list_1 = game_list_wrapper_1.xpath('./li')
        print '=======', game_list_wrapper_1.extract_first()
        print '=======', game_list_1.extract()

        for game in game_list_1:
            title = game.xpath('.//div[@class="title t"]/text()').extract_first()

            print '=======', title
