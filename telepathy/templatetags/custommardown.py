# -*- coding: utf-8 -*-
from __future__ import unicode_literals


import markdown

from django import template
from django.template.defaultfilters import stringfilter
from django.utils.encoding import force_unicode
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter(is_safe=False, name='markdown')
@stringfilter
def my_markdown(value):
    extensions = ["nl2br", "extra", "codehilite", "headerid(level=2)", "sane_lists"]

    return mark_safe(markdown.markdown(force_unicode(value),
                                       extensions,
                                       safe_mode=False,
                                       enable_attributes=False))
