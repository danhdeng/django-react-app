from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, IsAuthenticated, DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly
from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404

#Create your views here.

class PostUserWritePermission(BasePermission):
    message='Editing posts is restricted to author only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            # Check permissions for read-only request
            return True
        else:
            # Check permissions for write request
            return obj.author==request.user
        
class PostListView(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    
    
    # def get_queryset(self):
    #     user=self.request.user;
    #     return Post.objects.filter(author=user)
class PostDetailView(generics.RetrieveUpdateAPIView, PostUserWritePermission):
    permission_classes=[PostUserWritePermission]
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    
    # def get_object(self, queryset=None, **kwargs):
    #     item=self.kwargs.get("pk")
    #     return get_object_or_404(Post, slug=item)
        
class PostListdetailFilter(generics.ListAPIView):
    queryset=Post.objects.all()
    serializer_class= PostSerializer
    filter_backends=[filters.SearchFilter]
    search_fields=['^slug']
    
class PostCreateView(generics.CreateAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    
class AdminPostDetailView(generics.RetrieveAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    
class AdminPostEditView(generics.RetrieveUpdateAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset=Post.objects.all()
    serializer_class = PostSerializer

class PostEditView(generics.UpdateAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
class AdminPostDeleteView(generics.RetrieveDestroyAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset=Post.objects.all()
    serializer_class = PostSerializer

# The search behavior may be restricted by prepending various characters to the search_fields.

#     '^' Starts-with search.
#     '=' Exact matches.
#     '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
#     '$' Regex search.



# #rest_framework viewsets
# class PostList(viewsets.ModelViewSet):
#     permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
#     serializer_class = PostSerializer
#     # queryset=Post.objects.all()
#     def get_object(self, queryset=None, **kwargs):
#         item=self.kwargs.get("pk")
#         print(item)
#         return get_object_or_404(Post, slug=item)
    
#     def get_queryset(self):
#         return Post.objects.all()
    
    
#rest_framework viewsets
# class PostList(viewsets.ViewSet):
#     permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
#     queryset=Post.objects.all()
       
#     def list(self, request):
#         serializer_class = PostSerializer(self.queryset, many=True)
#         print(serializer_class.data)
#         return Response(serializer_class.data)

#     def retrieve(self, request, pk=None):
#         post = generics.get_object_or_404(self.queryset, pk=pk)
#         serializer_class = PostSerializer(post)
#         return Response(serializer_class.data)
    
     # def create(self, request):
    #     pass

    # def update(self, request, pk=None):
    #     pass

    # def partial_update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass

# class PostListView(generics.ListCreateAPIView):
#     permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
#     queryset=Post.objects.all()
#     serializer_class = PostSerializer
    

# class PostDetailView(generics.RetrieveUpdateDestroyAPIView, PostUserWritePermission):
#     permission_classes=[PostUserWritePermission]
#     queryset=Post.objects.all()
#     serializer_class = PostSerializer



# Concrete View Classes

# CreateAPIView

# Used for create-only endpoints.

# Provides a post method handler.

# Extends: GenericAPIView, CreateModelMixin
# ListAPIView

# Used for read-only endpoints to represent a collection of model instances.

# Provides a get method handler.

# Extends: GenericAPIView, ListModelMixin
# RetrieveAPIView

# Used for read-only endpoints to represent a single model instance.

# Provides a get method handler.

# Extends: GenericAPIView, RetrieveModelMixin
# DestroyAPIView

# Used for delete-only endpoints for a single model instance.

# Provides a delete method handler.

# Extends: GenericAPIView, DestroyModelMixin
# UpdateAPIView

# Used for update-only endpoints for a single model instance.

# Provides put and patch method handlers.

# Extends: GenericAPIView, UpdateModelMixin
# ListCreateAPIView

# Used for read-write endpoints to represent a collection of model instances.

# Provides get and post method handlers.

# Extends: GenericAPIView, ListModelMixin, CreateModelMixin
# RetrieveUpdateAPIView

# Used for read or update endpoints to represent a single model instance.

# Provides get, put and patch method handlers.

# Extends: GenericAPIView, RetrieveModelMixin, UpdateModelMixin
# RetrieveDestroyAPIView

# Used for read or delete endpoints to represent a single model instance.

# Provides get and delete method handlers.

# Extends: GenericAPIView, RetrieveModelMixin, DestroyModelMixin
# RetrieveUpdateDestroyAPIView

# Used for read-write-delete endpoints to represent a single model instance.

# Provides get, put, patch and delete method handlers.

# Extends: GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
    
    
