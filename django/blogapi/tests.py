from django.http import response
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from blog.models import Post, Category


class POST_API_TestCase(APITestCase):
    
    def test_view_posts(self):
        url=reverse('blogapi:post-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def test_create_post(self):
        test_cat= Category.objects.create(name='django')
        test_user= User.objects.create_user(username='testuser', password='testpassword')
       
        data={
            "title": "new post",
            "author": 1,
            "excerpt" :"new",
            "content": "new",
            "category": 1
        }
        
        url=reverse('blogapi:post-list')
        
        response=self.client.post(url,data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
        