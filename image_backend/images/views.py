from django.shortcuts import render

# Create your views here.
from .models import Image, User
from .serializers import ImageSerializer, UserSerializer, UserImagesSerializer
from rest_framework import generics

class ImageListCreate(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

# class ImageListCreate(generics.ListCreateAPIView):
#     queryset = Image.objects.filter

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserImagesCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    # queryset = User.objects.filter(name__contains = 'nick') # filters results LIKE value
    # queryset = User.objects.all()[:2] # Limits number of results
    serializer_class = UserImagesSerializer

class GetImageById(generics.ListAPIView):
    def get_queryset(self):
        id = self.kwargs['id']
        return Image.objects.filter(id = id)
    serializer_class = ImageSerializer