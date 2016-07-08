import scrapy
from scrapy.spiders import BaseSpider
from thinkhow.items import ThinkhowItem
from scrapy.selector import Selector
from scrapy.linkextractors import LinkExtractor
from scrapy.http import Request
import re

class ThinkhowSpider(BaseSpider):
    name = 'thinkhow'
    allowed_domains = ['aibo123.com']
    start_urls = ['http://www.aibo123.com/data/a196/jfb_ls/2015_16634_1/']

    def parse(self, response):
        page = Selector(response)
        path = page.xpath('//*[@id="match_tab"]/tbody')
        team1 = path.xpath('//td[@align="right"]/text()').extract()
        team2 = path.xpath('//td[@align="left"]/text()').extract()
        result = path.xpath('//b/text()').extract()

        for i in range(0, len(team1)):
            item = ThinkhowItem()
            item['team1'] = team1[i]
            item['team2'] = team2[i]
            item['result'] = result[i]
            yield item

        # Next page to crawl
        url = response.url
        pattern = re.compile('_(\d+)/')
        next_num = int(pattern.findall(url)[-1]) + 1
        temp = "_" + str(next_num) + "/"
        new_url = pattern.sub(temp, url)
        print '=========================', new_url

        req = Request(url=new_url, callback=self.parse)
        yield req
