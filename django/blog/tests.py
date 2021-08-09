from django.test import TestCase
from django.contrib.auth.models import User
from blog.models import Post, Category


class Test_Create_Post(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        test_cat= Category.objects.create(name='django')
        test_user= User.objects.create_user(username='testuser', password='testpassword')
        test_post= Post.objects.create(category_id=1, title='testpost', excerpt='post excerpt', slug='testpost', content='post content', author_id=1, status='published')
        
    def test_category_str_method(self):
        cat= Category.objects.get(id=1)
        post=Post.postobjects.get(id=1)
        title=f'{post.title}'
        author = f'{post.author}'
        excerpt = f'{post.excerpt}'
        self.assertEqual(str(cat), 'django')
        self.assertEqual(str(post), 'testpost')
        self.assertEqual(title, 'testpost')
        self.assertEqual(author, 'testuser')
        self.assertEqual(excerpt, 'post excerpt')
        

#if not by default the id =1, we can get the pk on create to run the load object test

# class TestCategoryModel(TestCase):
#     @classmethod
#     def setUpTestData(cls):
#         cls.obj_id = Category.objects.create(name="first_category").pk
#         user_id= User.objects.create_user(username='myuser1', password='123456789').pk
#         cls.post_id = Post.objects.create(category_id=cls.obj_id, title='Post Title', excerpt='Post Excerpt', content='Post Content', slug='post-title', author_id=user_id, status='published').pk
        

#     def test_category_str_method(self):
#         print(self.obj_id)
#         category = Category.objects.get(id=self.obj_id)
#         self.assertTrue(isinstance(category, Category)) 
#         self.assertEqual(category.__str__(), category.name)
#         post = Post.postobjects.get(id=self.post_id)
#         self.assertEqual(str(post), 'Post Title')
        