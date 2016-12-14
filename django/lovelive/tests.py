from django.test import TestCase
from lovelive.models import *
# Create your tests here.


class LoveliveModelsTest(TestCase):
    def Add_Profile(self):
        self.assertTrue(Profile.objects.all().count() == 0)
        new_profile = Profile(short_bio='Test bio')
        new_profile.save()
        self.assertTrue(Profile.objects.all().count() == 1)
        self.assertTrue(Profile.objects.filter(short_bio__contains='Test'))
    
    def Add_Property(self):
        self.assertTrue(Property.objects.all().count() == 0)
        new_property = Property(room = 12)
        new_profile.save()
        self.assertTrue(Profile.objects.all().count() == 1)
        self.assertTrue(Profile.objects.filter(room = 12))
    
    def Add_Message(self):
        self.assertTrue(ChatMessage.objects.all().count() == 0)
        new_message = ChatMessage(message = 'Test message')
        new_message.save()
        self.assertTrue(ChatMessage.objects.all().count() == 1)
        self.assertTrue(ChatMessage.objects.filter(message__contains='Test'))

class LoveliveTest(TestCase):
                                
    fixtures = ['sample-data']


    def test_home_page(self):   
        client = Client()
        response = client.get('lovelive/home/')
        self.assertEqual(response.status_code, 200)