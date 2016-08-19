'''
    This file load the data collected by scrapy into django models.
'''
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thinkhow.settings")

# If the version of django is larger than 1.7, you should include the following two lines.
import django
django.setup()

def main():
    from bilibili.models import Game
    game_list = []

    # Data file is in "scrapy" directory, which is in "thinkhow" directory.
    container_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    with open(os.path.join(container_dir, "scrapy", "game.txt")) as f:
        line = f.readline()
        while line:
            parts = line.split('\t')
            game_list.append(Game(url=parts[0], title=parts[1], img=parts[2], up=parts[3]))
            line = f.readline()

    Game.objects.bulk_create(game_list)

if __name__ =='__main__':
    main()
    print('Done!')
