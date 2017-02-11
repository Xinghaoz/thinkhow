'''
    This file load the data collected by scrapy into django models.
'''
import os, time
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thinkhow.settings")

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from crawler.models import Game
    os.environ["TZ"]="US/Eastern"

    game_list = []

    # If the loading file is empty, set the flag as true
    flag = False
    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(container_dir, "scrapy", "game.txt")) as f:
        line = f.readline()
        if not line:
            flag = True

        while line:
            parts = line.split('\t')
            game_list.append(Game(url=parts[0], title=parts[1], img=parts[2], up=parts[3], update_time=parts[4]))
            line = f.readline()

    if not flag:
        # Delete all objects before insert new ones
        Game.objects.all().delete()
        Game.objects.bulk_create(game_list)

        print('\n+++++++++++++++++++++++++ Game has been loaded successfully +++++++++++++++++++++++++ \n')
    else:
        print '\n+++++++++++++++++++++++++ Nothing to update in Game! +++++++++++++++++++++++++\n'

if __name__ == '__main__':
    main()
