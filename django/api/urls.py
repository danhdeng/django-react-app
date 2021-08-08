from django.urls import path, include
from .views import PostListView, PostDetailView
app_name="api"

urlpatterns = [
    path('<int:pk>/', PostDetailView.as_view(), name="post-details"),
    path('', PostListView.as_view(), name="post-list")
    
]

