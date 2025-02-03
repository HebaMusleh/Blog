from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from api import views as api_views

urlpatterns=[
    # Userauths API Endpoints
    path('user/token/',api_views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/register/', api_views.RegisterView.as_view(), name='auth_register'),
    path('user/profile/<user_id>/', api_views.ProfileView.as_view(), name='user_profile'),

    #categories API Endpoints 
    path('post/category/list/',api_views.CategoryListAPIView.as_view()),
    path('post/category/posts/<category_slug>',api_views.PostCategoryListAPIView.as_view()),

    #post API Endpoints 
    path('post/list',api_views.PostListView.as_view()),
    path('post/details/<post_slug>',api_views.PostDetailView.as_view()),
    path('post/like-post',api_views.LikePostAPIView.as_view()),
    

]