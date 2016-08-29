### XPATH
1.  
'//*[@id="feed-3"]/div[1]/div[2]/div[2]/h2'   - Can't find content
'//*[@id="feed-3"]/div[1]/div[2]/div[2]/h2/a' - Can find

2.  
title.xpath('text()')  - Correct
title.xpath('/text()') - Wrong

3.  
`bash
$ docker-machine start # start virtual machine for docker
$ docker-machine env  # it's helps to get environment variables
$ eval "$(docker-machine env default)" #set environment variables
$ docker run -p 8050:8050 scrapinghub/splash
`

Install Splash in Ubuntu 14.04:
`bash
sudo docker pull scrapinghub/splash`

sudo apt-get install python-lxml
sudo pip install pydispatcher
