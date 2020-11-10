from django.shortcuts import render

# Create your views here.
from .models import Image, User
from .serializers import ImageSerializer, UserSerializer
from rest_framework import generics

class ImageListCreate(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer