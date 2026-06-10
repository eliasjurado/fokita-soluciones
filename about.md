---
layout: page
title: Sobre nosotros
permalink: /about/
description: Conoce LC Contratistas. Profesionales confiables para el mantenimiento y mejoras de tu hogar.
---

<h1 data-i18n="about_page.title">Sobre nosotros</h1>

<p data-i18n="about_page.intro">LC Contratistas es una empresa de servicios para el hogar fundada por Jhonatan Lopez Carrion con una mision clara: conectar hogares con profesionales confiables que resuelvan sus necesidades de manera rapida, transparente y con garantia.</p>

<h2 data-i18n="about_page.mission_title">Nuestra mision</h2>
<p data-i18n="about_page.mission_text">Facilitar el acceso a servicios profesionales del hogar de alta calidad, con atencion personalizada y precios justos. Creemos que cada hogar merece estar en buenas manos.</p>

<h2 data-i18n="about_page.values_title">Nuestros valores</h2>
<div class="values-grid">
  <div class="value-item">
    <div class="value-item__icon">🤝</div>
    <h4 data-i18n="about_page.value1">Honestidad</h4>
  </div>
  <div class="value-item">
    <div class="value-item__icon">⭐</div>
    <h4 data-i18n="about_page.value2">Calidad</h4>
  </div>
  <div class="value-item">
    <div class="value-item__icon">⏰</div>
    <h4 data-i18n="about_page.value3">Puntualidad</h4>
  </div>
  <div class="value-item">
    <div class="value-item__icon">💪</div>
    <h4 data-i18n="about_page.value4">Compromiso</h4>
  </div>
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
