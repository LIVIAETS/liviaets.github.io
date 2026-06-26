---
title: "LIVIA — News"
layout: textlay
excerpt: "News and highlights from the LIVIA lab."
sitemap: false
permalink: /allnews.html
---

<section class="section-tight">
<div class="section-head">
<div class="kicker">Newsroom</div>
<h1 style="margin-bottom:10px;">News &amp; Highlights</h1>
</div>
<div class="grid" style="gap:14px;">
{% for article in site.data.news %}
<div class="news-card">
<div class="date">{{ article.date }}</div>
<p>{{ article.headline | markdownify | remove: '<p>' | remove: '</p>' }}</p>
</div>
{% endfor %}
</div>
</section>
