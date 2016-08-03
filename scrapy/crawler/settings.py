# -*- coding: utf-8 -*-
from . import header

BOT_NAME = 'crawler'

SPIDER_MODULES = ['crawler.spiders']
NEWSPIDER_MODULE = 'crawler.spiders'


DOWNLOAD_DELAY = 1

ITEM_PIPELINES = {
   'crawler.pipelines.ZhihuPipeline': 300,
}
