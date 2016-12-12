from django.db import models
from django.utils import timezone


# User class for built-in authentication module
from django.contrib.auth.models import User

class Profile(models.Model):
    owner = models.OneToOneField(User)
    short_bio = models.CharField(max_length=420, default="", blank=True)
    picture = models.ImageField(upload_to="lovelive-user-profile-photos", blank=True)
    def __str__(self):
        return str(self.owner)

    @staticmethod
    def get_profile(owner):
        return Profile.objects.filter(owner=owner)

class Property(models.Model):
    # state = models.IntegerField(default=0)
    room = models.IntegerField(default=-1)
    owner = models.OneToOneField(User)
    cash = models.IntegerField(default=64500)
    deposit = models.IntegerField(default=0)
    total_score = models.FloatField(default=0)
    def __str__(self):
        return " MyProperty " + str(self.owner) + " " + str(self.total_score)
    @staticmethod
    def get_myproperty(owner):
        return MyProperty.objects.get(owner=owner)

class ChatMessage(models.Model):
    message = models.CharField(max_length=50, default="message~")
    room = models.IntegerField(default=0)
    def __str__(self):
        return str(self.room)

class Room(models.Model):
    room_name = models.CharField(max_length=150, default="default room name")
    player_1 = models.CharField(max_length=150, default="")
    player_2 = models.CharField(max_length=150, default="")
    player_3 = models.CharField(max_length=150, default="")
    state = models.IntegerField(default=0)
    def __str__(self):
        return "ROOM NAME:" + self.room_name + "@ player1: " + self.player_1 + ", player2: " + \
        self.player_2 + ", player3: " + self.player_3 + ", state: " + str(self.state)
