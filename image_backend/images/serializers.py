from rest_framework import serializers
from .models import Image, User

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'title', 'path', 'creator']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'username', 'email')

class UserImagesSerializer(serializers.ModelSerializer):
    created_images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'username', 'email', 'created_images']
