---
layout: page
title: BLOG
permalink: /posts/
---

<div class="home">


  <ul class="post-list">
    {% for post in site.posts %}
      <li>


        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.url }}">{{ post.title }}</a><span class="post-meta"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>
