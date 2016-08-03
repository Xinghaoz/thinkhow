### XPATH
1.  
'//*[@id="feed-3"]/div[1]/div[2]/div[2]/h2'   - Can't find content
'//*[@id="feed-3"]/div[1]/div[2]/div[2]/h2/a' - Can find

2.  
title.xpath('text()')  - Correct
title.xpath('/text()') - Wrong
