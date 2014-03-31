from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    due = models.DateTimeField()
