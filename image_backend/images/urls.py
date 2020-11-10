from django.urls import path
from . import views

urlpatterns = [
    path('api/images/', views.ImageListCreate.as_view() ),
]