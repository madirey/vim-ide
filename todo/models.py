#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import division

from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    due = models.DateTimeField()
