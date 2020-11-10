from django.shortcuts import render

# Create your views here.
from .models import Image, User
from .serializers import ImageSerializer, UserSerializer, UserImagesSerializer
from rest_framework import generics

class ImageListCreate(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserImagesCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    # queryset = User.objects.filter(name__contains = 'nick') # filters results LIKE value
    # queryset = User.objects.all()[:2] # Limits number of results


    serializer_class = UserImagesSerializer