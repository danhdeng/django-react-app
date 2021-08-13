from django.urls import path
from .views import CustomUserCreate, CreateBlacklistTokenView

app_name="users"

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="user-create"),
    path('logout/blacklist/', CreateBlacklistTokenView.as_view(), name="token-blacklist")

]