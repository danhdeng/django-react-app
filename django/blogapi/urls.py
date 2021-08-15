# from rest_framework import urlpatterns
# from .views import PostList
# from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import (PostListView, 
                    PostDetailView, 
                    PostListdetailFilter,
                    PostCreateView,
                    PostEditView,
                    AdminPostDetailView,
                    AdminPostEditView,
                    AdminPostDeleteView,
                    AdminPostUploadView
                    )

app_name="blogapi"

#use restF_Framework router feature
# router =DefaultRouter()
# router.register('', PostList, basename="post")
# urlpatterns =router.urls

urlpatterns = [
    path('<int:pk>/', PostDetailView.as_view(), name="post-details"),
    path('search/', PostListdetailFilter.as_view(), name="post-search"),
    path('', PostListView.as_view(), name="post-list"),
    
    path('admin/create/', PostCreateView.as_view(), name="admin-create"),
    path('admin/', PostListView.as_view(), name="post-list"),
    path('admin/edit/postdetail/<int:pk>/', AdminPostDetailView.as_view(), name="admin-detailpost"),
    path('admin/edit/<int:pk>/', PostEditView.as_view(), name="post-edit"),
    path('admin/delete/<int:pk>/', AdminPostDeleteView.as_view(), name="post-delete"),
    path('admin/image/upload/', AdminPostUploadView.as_view(), name="admin-upload"),
    
    
]

