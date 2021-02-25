from rest_framework import serializers
from .models import QueryMap

class QueryMapSerializers(serializers.ModelSerializer):
    class Meta:
        model = QueryMap
        fields = ('id', 'src', 'dist', 'path', 'lenPath', 'create_at') 