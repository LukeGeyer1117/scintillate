from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify
import uuid

class User(AbstractUser):
    email           = models.EmailField(unique=True)

    # Meta Data
    created_at      = models.DateTimeField(auto_now_add=True)
    last_updated    = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.username}'

class Project(models.Model):
    '''
    The Project model is extremely important to get right. Access to projects must be heavily regulated.
    '''

    class Visibility(models.TextChoices):
        PRIVATE     = "PRIVATE", "Private"
        UNLISTED    = "UNLISTED", "Unlisted"
        PUBLIC      = "PUBLIC", "Public"

    class Status(models.TextChoices):
        ACTIVE      = "ACTIVE", "Active"
        ARCHIVED    = "ARCHIVED", "Archived"
        SUSPENDED   = "SUSPENDED", "Suspended"

    # Use a UUID to keep malefactors from just guessing at project id's.
    uuid            = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)

    # User-facing info
    name            = models.CharField(max_length=150, blank=False)
    description     = models.TextField(blank=True, max_length=350)
    slug            = models.SlugField(max_length=100)

    # Ownership Info
    owner           = models.ForeignKey(
        settings.AUTH_USER_MODEL,   # Rather than implicitly using the User model.
        on_delete=models.PROTECT,
        related_name="owned_projects"
    )

    # Discoverability and Lifecycle Settings
    visibility      = models.CharField(
        max_length=50,
        choices=Visibility.choices,
        default=Visibility.PRIVATE
    )
    status          = models.CharField(
        max_length=50,
        choices=Status.choices,
        default=Status.ACTIVE
    )

    # metadata
    created_at      = models.DateTimeField(auto_now_add=True)
    last_edited     = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-last_edited"]
        indexes = [
            models.Index(fields=["owner"]),
            models.Index(fields=["visibility"]),
            models.Index(fields=["status"]),
            models.Index(fields=["last_edited"])
        ]
    
    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(self.name)[:160] or "project"
            self.slug = base
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Membership(models.Model):
    uuid             = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)

    # Foreign Keys
    user           = models.ForeignKey(User, on_delete=models.CASCADE)
    project        = models.ForeignKey(Project, on_delete=models.CASCADE)

    # Level of control over project is determined by the membership role of the user.
    # Any user who does not have at least one of these membership types has no rights
    # or powers to affect or view the project.
    class Role(models.TextChoices):
        OWNER       = "OWNER", "Owner"
        ADMIN       = "ADMIN", "Admin"
        EDITOR      = "EDITOR", "Editor"
        COMMENTER   = "COMMENTER", "Commenter"
        VIEWER      = "VIEWER", "Viewer"
    role            = models.CharField(
        max_length=30,
        choices=Role.choices,
        default=Role.VIEWER
    )

    class Meta:
        unique_together = ("user", "project")