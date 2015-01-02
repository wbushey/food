---
title: Recipes
---
<ul>
{% for p in site.pages %}
  {% if p.layout == 'recipe' %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
