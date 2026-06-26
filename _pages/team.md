---
title: "LIVIA — Team"
layout: gridlay
excerpt: "LIVIA Lab: faculty, researchers, students and alumni."
sitemap: false
permalink: /team/
---

<section class="section-tight">
<div class="section-head">
<div class="kicker">Our people</div>
<h1 style="margin-bottom:10px;">The LIVIA Team</h1>
<p>A diverse group of faculty, researchers and graduate students working across computer vision, machine learning and artificial intelligence. <strong>We are recruiting</strong> — <a href="{{ site.url }}{{ site.baseurl }}/vacancies">see open positions</a>.</p>
</div>
</section>

<section class="section-tight">
<div class="section-head"><div class="kicker">Faculty &amp; Researchers</div><h2>Professors &amp; principal investigators</h2></div>

<div class="team-grid">
{% for member in site.data.team_members %}
<div class="member">
<div class="member-photo">
<img src="{{ site.url }}{{ site.baseurl }}/images/livia_team_pic/{{ member.photo }}" alt="{{ member.name }}" />
</div>
<div class="member-body">
<h4>{{ member.name }}</h4>
<span class="member-role">{{ member.info }}</span>
<ul>
{% if member.number_educ >= 1 %}<li>{{ member.education1 }}</li>{% endif %}
{% if member.number_educ >= 2 %}<li>{{ member.education2 }}</li>{% endif %}
{% if member.number_educ >= 3 %}<li>{{ member.education3 }}</li>{% endif %}
{% if member.number_educ >= 4 %}<li>{{ member.education4 }}</li>{% endif %}
</ul>
</div>
</div>
{% endfor %}
</div>
</section>

<section class="section-tight">
<div class="section-head"><div class="kicker">Graduate Students &amp; Staff</div><h2>Current students &amp; research staff</h2></div>
<div class="roster">
{% for member in site.data.students %}
<div class="roster-item">
<div class="rn">{{ member.name }}</div>
<div class="rr">{{ member.role }}</div>
</div>
{% endfor %}
</div>
</section>

<section class="section-tight">
<div class="section-head"><div class="kicker">Alumni</div><h2>Where they started</h2></div>
<div class="roster">
{% for member in site.data.alumni_members %}
<div class="roster-item">
<div class="rn">{{ member.name }}</div>
<div class="rr">{{ member.role }}</div>
</div>
{% endfor %}
</div>
</section>
