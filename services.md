---
layout: page
title: Servicios
permalink: /services/
description: Plomeria, electricidad, pintura, carpinteria, limpieza, mudanzas y mas. Profesionales verificados para tu hogar.
---

<div class="intro-mascot">
  <div class="intro-mascot__text">
    <h1 data-i18n="services_page.title">Nuestros servicios</h1>
    <p class="text-muted" data-i18n="services_page.subtitle">Soluciones profesionales para cada necesidad de tu hogar</p>
  </div>
  <div class="intro-mascot__img">
    <img src="{{ '/assets/images/mascota-construye.png' | relative_url }}" alt="Mascota de Fokita construyendo" width="296" height="447" loading="lazy">
  </div>
</div>

<div class="services-grid" style="margin-top: 2rem;">
  {%- for servicio in site.data.servicios -%}
  <div class="service-card">
    <div class="service-card__icon"><span class="material-symbols-rounded">{{ servicio.icon }}</span></div>
    <h3 data-i18n-en-html="{{ servicio.nombre.en }}">{{ servicio.nombre.es }}</h3>
    <p data-i18n-en="{{ servicio.descripcion.en }}">{{ servicio.descripcion.es }}</p>
    <span class="service-card__price" data-i18n-en="{{ servicio.precio_desde.en }}">{{ servicio.precio_desde.es }}</span>
  </div>
  {%- endfor -%}
</div>

<section class="cta-section" style="margin-top: 4rem; border-radius: 12px;">
  <div class="container">
    <h2 data-i18n="cta_section.title">Listo para empezar?</h2>
    <p data-i18n="cta_section.subtitle">Escribenos por WhatsApp y recibe un presupuesto en minutos.</p>
    <a href="https://wa.me/{{ site.contact.whatsapp }}?text={{ site.whatsapp_messages.default | url_encode }}"
       class="btn btn--lg" target="_blank" rel="noopener" data-i18n="cta_section.button">
      Escribir por WhatsApp
    </a>
  </div>
</section>

<script src="/assets/js/i18n.js" defer></script>
