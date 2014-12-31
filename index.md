---
ingredients:
  beef: 2lbs
  carrots: 1
  eggs: 2 dozen
---
Hi


{% for p in site.pages %}
  {% for ingredient in p.ingredients %}
    {{ ingredient[0] }}: {{ ingredient[1] }}
  {% endfor %}
{% endfor %}
