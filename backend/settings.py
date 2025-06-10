# backend/settings.py
import os
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': os.getenv('rmfdb'),
    'USER': os.getenv('rmfuser'),
    'PASSWORD': os.getenv('rmfpass'),
    'HOST': os.getenv('localhost'),
    'PORT': '5432',
  }
}
