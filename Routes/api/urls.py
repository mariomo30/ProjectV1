from django.urls import path
from .views import QueryMapView

urlpatterns = [
    path('querymap', QueryMapView.as_view())
]
