from django.db import models

# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique = True)

class Center (models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField (max_length=200)

class List (models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)


