from django.http import response
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase,APIClient
from blog.models import Post, Category



class POST_API_TestCase(APITestCase):
    
    def test_view_posts(self):
        url=reverse('blogapi:post-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def test_create_post(self):
        test_cat= Category.objects.create(name='django')
        # test_user= User.objects.create_user(username='testuser', password='testpassword')
        super_user =User.objects.create_superuser(username='superuser', password='123456789')
        
        self.client.login(username=super_user.username, password='123456789')
        
        data={
            "title": "auth test",
            "author": 1,
            "excerpt" :"auth",
            "content": "auth",
            "category": 1
        }
        url=reverse('blogapi:post-list')
        response=self.client.post(url,data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    def test_update_post(self):
        client = APIClient()
        url=reverse('blogapi:post-details',  kwargs={'pk': 1})
        self.test_cat= Category.objects.create(name='django')
        self.testuser1= User.objects.create_user(username='testuser1', password='testpassword')
        self.testuser2= User.objects.create_user(username='testuser2', password='testpassword')
        self.test_post = Post.objects.create(
            category_id=1, title='Post Title', excerpt='Post Excerpt', content='Post Content', slug='post-title', author_id=1, status='published')

        client.login(username=self.testuser2.username,
                     password='testpassword')

        data={
            "title": "auth test",
            "author": 1,
            "excerpt" :"auth",
            "content": "auth",
            "status": "published"
        }
        response=client.put(url,data, format='json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        client.login(username=self.testuser1.username,
                     password='testpassword')

        data={
            "title": "auth test",
            "author": 1,
            "excerpt" :"auth",
            "content": "auth",
            "status": "published"
        }
        response=client.put(url,data, format='json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)