# -*- coding:utf-8 -*-

import scrapy
from scrapy.spiders import BaseSpider, CrawlSpider
from scrapy.selector import Selector
from scrapy.linkextractors import LinkExtractor
from scrapy.http import Request, FormRequest

from crawler.items import BilibiliItem
import re


class GameSpider (BaseSpider):
    name = 'game'
    allowed_domains = ['bilibili.com']
    start_urls = ['http://www.bilibili.com/video/game.html']

    def start_requests(self):
            # for url in self.start_urls:
            yield scrapy.Request(self.start_urls[0], self.parse, meta={
                'splash': {
                    'endpoint': 'render.html'
                }
            })

    def parse(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        game_list_wrapper = page.xpath('//ul[@class="rlist"]')
        # game_list_wrapper_1 = page.xpath('/html/body/div[4]/div[5]/div[2]/div[2]/div[1]/div')

        # print '+++++++', game_list_wrapper

        game_list = game_list_wrapper.xpath('./li')
        # game_list_1 = game_list_wrapper_1.xpath('.//li')
        # print '+++++++', game_list_wrapper_1
        # print '=======', game_list_1
        # print '=======', game_list_1.extract()

        for game in game_list:
            item = BilibiliItem()
            url = 'http://www.bilibili.com' + game.xpath('.//a/@href').extract_first()
            title = game.xpath('.//div[@class="title t"]/text()').extract_first()
            img = game.xpath('.//img/@src').extract_first()
            up = game.xpath('.//@data-up').extract_first()

            item['url'] = url
            item['title'] = title.encode('utf-8')
            item['img'] = img
            item['up'] = up.encode('utf-8')
            yield item
