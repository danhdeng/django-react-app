# from rest_framework import urlpatterns
# from .views import PostList
# from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import PostListView, PostDetailView, PostListdetailFilter

app_name="blogapi"

#use restF_Framework router feature
# router =DefaultRouter()
# router.register('', PostList, basename="post")
# urlpatterns =router.urls

urlpatterns = [
    path('<int:pk>/', PostDetailView.as_view(), name="post-details"),
    path('search/', PostListdetailFilter.as_view(), name="post-search"),
    path('', PostListView.as_view(), name="post-list"),
    
]

