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
