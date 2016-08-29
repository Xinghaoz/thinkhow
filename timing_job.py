#! /usr/bin/env python
#coding=utf-8

import time, os, sched

schedule = sched.scheduler(time.time, time.sleep)

def perform_command(cmd='', sec=600):
    # execute cmd every (sec) second.
    schedule.enter(sec, 0, perform_command, (cmd, sec))
    os.system("cd scrapy; scrapy crawl zhihu; cd ..")
    os.system("cd django; python load_zhihu.py; cd ..")

    os.system("cd scrapy; scrapy crawl zhihu_ml; cd ..")
    os.system("cd django; python load_zhihu_ml.py; cd ..")

    os.system("cd scrapy; scrapy crawl bangumi; cd ..")
    os.system("cd django; python load_bangumi.py; cd ..")

    os.system("cd scrapy; scrapy crawl game; cd ..")
    os.system("cd django; python load_game.py; cd ..")

def timing_exe(cmd='', sec=600):
    schedule.enter(sec, 0, perform_command, (cmd, sec))
    schedule.run()

timing_exe(sec=5)

# Only the first one get executed!

# timing_exe("echo 123", sec=5)
# timing_exe(cmd="cd scrapy; scrapy crawl zhihu; cd ..", sec=20)
# timing_exe(cmd="cd scrapy; scrapy crawl zhihu_ml; cd..", sec=60, diff=10)
# timing_exe(cmd="cd scrapy; scrapy crawl bangumi; cd..", sec=60, diff=20)
# timing_exe(cmd="cd scrapy; scrapy crawl game; cd..", sec=60, diff=30)
