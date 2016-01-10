---
title: Recipes
---
<ul>
{% for p in site.pages %}
  {% if p.layout == 'recipe' %}
  <li><span class="recipe-link"><a href="{{ p.url }}">{{ p.title }}</a>{% if p.gluten-free %} - <img src="/assets/images/gluten-free.svg" alt="Gluten Free" class="gluten-free"/> {% endif %}</span></li>
  {% endif %}
{% endfor %}
</ul>
