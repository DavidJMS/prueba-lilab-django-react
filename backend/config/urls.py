from django.contrib import admin
from django.urls import path, re_path, include


urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/', include(('apps.accounts.urls', 'accounts'), namespace='accounts')),
    path('api/', include(('apps.credits.urls', 'credits'), namespace='credits')),
]
