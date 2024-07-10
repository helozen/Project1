from django.urls import path
from .views import UserCreate, JobListCreate, BookingListCreate, ReviewListCreate

urlpatterns = [
    path('register/', UserCreate.as_view(), name='register'),
    path('jobs/', JobListCreate.as_view(), name='job-list-create'),
    path('bookings/', BookingListCreate.as_view(), name='booking-list-create'),
    path('reviews/', ReviewListCreate.as_view(), name='review-list-create'),
]

# trades_hub/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]

from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserCreate, JobListCreate, BookingListCreate, ReviewListCreate

urlpatterns = [
    path('register/', UserCreate.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('jobs/', JobListCreate.as_view(), name='job-list-create'),
    path('bookings/', BookingListCreate.as_view(), name='booking-list-create'),
    path('reviews/', ReviewListCreate.as_view(), name='review-list-create'),
]
