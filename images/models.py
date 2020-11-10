from django.db import models

# Create your models here.

class User(models.Model):
    def __str__(self):
        return self.username

    name = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=254)

class Image(models.Model):
    def __str__(self):
        return self.title

    title = models.CharField(max_length=254)
    image_path = models.CharField(max_length=254)
    description = models.CharField(max_length=254)
    edited = models.BooleanField(default=False)
    public = models.BooleanField(default=False)
    creator_id = models.ForeignKey(User, on_delete = models.CASCADE) # Consider changing on_delete method to avoid deleting image when a user is deleted

class Tag(models.Model):
    def __str__(self):
        return self.tag

    tag = models.CharField(max_length=200)

class Comment(models.Model):
    def __str__(self):
        return self.comment

    comment = models.CharField(max_length=254)
    image_id = models.ForeignKey(Image, on_delete = models.Cascade)
    user_id = models.ForeignKey(User, on_delete = models.Cascade)