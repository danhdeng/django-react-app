from rest_framework import urlpatterns
from .views import PostList
from rest_framework.routers import DefaultRouter

app_name="blogapi"

router =DefaultRouter()

router.register('', PostList, basename="post")

urlpatterns =router.urls

# urlpatterns = [
#     path('<int:pk>/', PostDetailView.as_view(), name="post-details"),
#     path('', PostListView.as_view(), name="post-list")
    
# ]

