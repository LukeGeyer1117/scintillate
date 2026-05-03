from django.db import models
from django.contrib.auth.models import AbstractUser

## TODO: Implement a User Model
class User(AbstractUser):
    email           = models.EmailField(unique=True)

    # Meta Data
    created_at      = models.DateTimeField(auto_now_add=True)
    last_updated    = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.username}'

## TODO: Implement a Project Model

## TODO: Implement a Membership Model