from rest_framework import serializers
from blog.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields =(
            'id',
            'title',
            'image',
            'slug',
            'category',
            'author',
            'excerpt',
            'content',
            'status',
            'published',
        )
        extra_kwargs = {
            'published' : {'required' : False}
        }
        