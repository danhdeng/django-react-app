from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, IsAuthenticated, DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly
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
    permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    

class PostDetailView(generics.RetrieveUpdateDestroyAPIView, PostUserWritePermission):
    permission_classes=[PostUserWritePermission]
    queryset=Post.objects.all()
    serializer_class = PostSerializer



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
    
    
