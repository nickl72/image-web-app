from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
from .models import Image, User
from .serializers import ImageSerializer, UserSerializer, UserImagesSerializer
from rest_framework import generics
import json
from .scripts.parse_data import get_image_url

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

@csrf_exempt 
def edit(request, id, actions, changes):
    if request.method == 'PUT' or request.method == 'POST':

        print(actions.split(','))
        print(changes.split(','))

        image = Image.objects.filter(id=id)[0]

        # def get_image_url(request, image):
        #     host = request.get_host()
        #     image_url = f'http://{host}{image.path.url}'
        #     return image_url

        image_path=get_image_url(request, image)
        image_data = {'path':image_path, 'id':image.id}
        return HttpResponse(json.dumps(image_data))
    else: 
        return HttpResponse('Error! Edits must be made as a PUT or POST request')

        #  ['DEFAULT_CHUNK_SIZE', '__bool__', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', 
        # '__enter__', '__eq__', '__exit__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', 
        # '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__module__', 
        # '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', 
        # '__str__', '__subclasshook__', '__weakref__', '_committed', '_del_file', '_file', '_get_file', '_get_image_dimensions', 
        # '_require_file', '_set_file', 'chunks', 'close', 'closed', 'delete', 'encoding', 'field', 'file', 'fileno', 
        # 'flush', 'height', 'instance', 'isatty', 'multiple_chunks', 'name', 'newlines', 'open', 'path', 'read', 
        # 'readable', 'readinto', 'readline', 'readlines', 'save', 'seek', 'seekable', 'size', 'storage', 'tell', 'truncate', 
        # 'url', 'width', 'writable', 'write', 'writelines']

        # ['COOKIES', 'FILES', 'GET', 'META', 'POST', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', 
        # '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', 
        # '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', 
        # '__str__', '__subclasshook__', '__weakref__', '_cors_enabled', '_current_scheme_host', '_encoding', '_get_full_path', 
        # '_get_post', '_get_raw_host', '_get_scheme', '_initialize_handlers', '_load_post_and_files', '_mark_post_parse_error', 
        # '_messages', '_read_started', '_set_content_type_params', '_set_post', '_stream', '_upload_handlers', 'accepted_types', 
        # 'accepts', 'body', 'build_absolute_uri', 'close', 'content_params', 'content_type', 'encoding', 'environ', 
        # 'get_full_path', 'get_full_path_info', 'get_host', 'get_port', 'get_raw_uri', 'get_signed_cookie', 'headers', 'is_ajax', 
        # 'is_secure', 'method', 'parse_file_upload', 'path', 'path_info', 'read', 'readline', 'readlines', 'resolver_match', 
        # 'scheme', 'session', 'upload_handlers', 'user']