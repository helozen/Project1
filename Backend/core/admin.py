from django.contrib import admin
from .models import User, Job, Booking, Review

admin.site.register(User)
admin.site.register(Job)
admin.site.register(Booking)
admin.site.register(Review)
