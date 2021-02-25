from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import QueryMap
from .serializers import QueryMapSerializers
# Create your views here.

class QueryMapView(generics.CreateAPIView):
    queryset = QueryMap.objects.all()
    serializer_class = QueryMapSerializers

def main(request):
    return HttpResponse("<h1>Hello</H1>")