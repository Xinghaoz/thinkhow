# -*- coding: utf-8 -*-
from . import header

BOT_NAME = 'crawler'

SPIDER_MODULES = ['crawler.spiders']
NEWSPIDER_MODULE = 'crawler.spiders'


DOWNLOAD_DELAY = 1

ITEM_PIPELINES = {
   'crawler.pipelines.ZhihuPipeline': 300,
}


# Scrapyjs
DOWNLOADER_MIDDLEWARES = {
    'scrapyjs.SplashMiddleware': 725,
}
SPLASH_URL = 'http://localhost:8050/' # In Linux
# SPLASH_URL = 'http://192.168.99.100:8050/' # In Mac
DUPEFILTER_CLASS = 'scrapyjs.SplashAwareDupeFilter'
HTTPCACHE_STORAGE = 'scrapyjs.SplashAwareFSCacheStorage'
