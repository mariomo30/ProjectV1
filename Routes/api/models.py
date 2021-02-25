from django.db import models
import string
import random

class QueryMap(models.Model):
    src = models.CharField(max_length=500, unique=True)
    dist = models.CharField(max_length=500, unique=True)
    path = models.CharField(max_length=500, unique=True)
    lenPath = models.FloatField(null=False, unique=True)
    create_at = models.DateTimeField(auto_now_add=True)
