---
title: "LIVIA Lab — Imaging, Vision & Artificial Intelligence"
layout: homelay
excerpt: "LIVIA is the Laboratory of Imaging, Vision and Artificial Intelligence at École de technologie supérieure (ÉTS), Université du Québec, Montréal."
sitemap: false
permalink: /
---

<section class="section">
<div class="section-head">
<div class="kicker">Who we are</div>
<h2>Perception and modeling of dynamic environments</h2>
<p>The unifying theme of LIVIA is the perception and modeling of dynamic environments — 2D and 3D scenes, video, speech and more — using modern artificial intelligence. Our scientific orientation revolves around the large-scale processing, analysis and interpretation of images and videos, turning massive, weakly-annotated data into reliable, deployable systems.</p>
</div>

<div class="grid grid-3">
<div class="card-m"><div class="icon">◈</div><h4>Machine Learning</h4><p>Deep learning, self- and weakly-supervised learning, domain adaptation and learning under limited annotations.</p></div>
<div class="card-m"><div class="icon">◉</div><h4>Computer Vision</h4><p>Recognition, detection, segmentation and super-resolution across natural, medical and microscopy imagery.</p></div>
<div class="card-m"><div class="icon">◆</div><h4>Pattern Recognition</h4><p>Biometrics, classifier ensembles and dynamic selection for robust decision-making.</p></div>
<div class="card-m"><div class="icon">❖</div><h4>Adaptive &amp; Intelligent Systems</h4><p>Models that adapt to users and shifting conditions in real-time, resource-limited settings.</p></div>
<div class="card-m"><div class="icon">⬡</div><h4>Information Fusion</h4><p>Multimodal fusion of vision, audio, language and physiological signals for richer understanding.</p></div>
<div class="card-m"><div class="icon">✦</div><h4>Optimization of Complex Systems</h4><p>Convex and combinatorial optimization, evolutionary and multi-objective methods.</p></div>
</div>
</section>

<section class="section" style="background:var(--bg-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:0 -9999px;padding-left:9999px;padding-right:9999px;">
<div style="max-width:var(--maxw);margin:0 auto;">
<div class="section-head">
<div class="kicker">Impact</div>
<h2>Solving concrete, high-stakes problems</h2>
<p>The techniques developed at LIVIA are used to solve real and complex problems — for example, convolutional and transformer networks that detect tumors or assess depression from massive, sparsely-annotated data.</p>
</div>
<div class="pill-row">
<span class="pill">Medical, satellite &amp; aerial image analysis</span>
<span class="pill">Biometrics — face, signature, voice</span>
<span class="pill">Handwritten document processing</span>
<span class="pill">Affective computing for health</span>
<span class="pill">Security &amp; surveillance</span>
</div>
</div>
</section>

<section class="section">
<div class="section-head">
<div class="kicker">Latest news</div>
<h2>What's happening at LIVIA</h2>
</div>
<div class="grid" style="gap:14px;">
{% for article in site.data.news limit:6 %}
<div class="news-card">
<div class="date">{{ article.date }}</div>
<p>{{ article.headline | markdownify | remove: '<p>' | remove: '</p>' }}</p>
</div>
{% endfor %}
</div>
</section>

<section class="section" style="background:var(--bg-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:0 -9999px;padding-left:9999px;padding-right:9999px;">
<div style="max-width:var(--maxw);margin:0 auto;text-align:center;">
<div class="kicker" style="text-align:center;">Join us</div>
<h2>We're recruiting passionate researchers</h2>
<p class="center-narrow" style="color:var(--muted);">We are looking for motivated PhD students, postdocs and Master's students to join the team and help shape the future of computer vision and AI.</p>
<a class="btn-modern" href="{{ site.url }}{{ site.baseurl }}/vacancies">See open positions →</a>
</div>
</section>

<section class="section-tight">
<p class="text-center kicker" style="text-align:center;color:var(--muted);">Affiliations &amp; partners</p>
<figure class="fifth sponsors">
<img src="{{ site.url }}{{ site.baseurl }}/images/brand/ets-logo.svg" alt="École de technologie supérieure (ÉTS)" style="height:64px;">
<img src="{{ site.url }}{{ site.baseurl }}/images/brand/livia-logo.svg" alt="LIVIA" style="height:40px;">
<img src="{{ site.url }}{{ site.baseurl }}/images/logopic/gentec.png" alt="Gentec">
<img src="{{ site.url }}{{ site.baseurl }}/images/logopic/distech.png" alt="Distech">
<img src="{{ site.url }}{{ site.baseurl }}/images/logopic/Diagnos.png" alt="Diagnos">
<img src="{{ site.url }}{{ site.baseurl }}/images/logopic/zebra.jpeg" alt="Zebra">
</figure>
</section>
