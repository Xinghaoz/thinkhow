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
    start_urls = ["http://www.bilibili.com/"]

    def start_requests(self):
            for url in self.start_urls:
                yield scrapy.Request(url, self.parse, meta={
                    'splash': {
                        'endpoint': 'render.html'
                    }
                })

    def parse(self, response):
        print '&&&&&&&&&&&&&&&&&&&&&&&&& {} &&&&&&&&&&&&&&&&&&&&&&&&&'.format(response.url)
        page = Selector(response)

        # //*[@id="b_game"]/div[2]/div[2]/div[2]/div[1]/div/ul[1]
        game_list = page.xpath('//*[@id="b_game"]/div[2]/div[2]/div[2]/div[1]/div/ul[1]')
        game = game_list.xpath('.//a')
        print "&&&&&&&", game_list.extract()
        print "=======", game.extract()
