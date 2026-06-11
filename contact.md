---
layout: page
title: Contacto
permalink: /contact/
description: Contacta a Fokita Soluciones. WhatsApp, telefono y correo electronico. Atencion inmediata.
---

<h1 data-i18n="contact_page.title">Contacto</h1>
<p class="text-muted" data-i18n="contact_page.subtitle">Estamos listos para ayudarte. Elige el canal que prefieras.</p>

<div class="contact-grid">
  <div class="contact-card">
    <div class="contact-card__icon"><span class="material-symbols-rounded">chat</span></div>
    <h3 data-i18n="contact_page.whatsapp_title">WhatsApp (respuesta inmediata)</h3>
    <p data-i18n="contact_page.whatsapp_desc">Escribenos directamente para una respuesta rapida.</p>
    <a href="https://wa.me/{{ site.contact.whatsapp }}?text={{ site.whatsapp_messages.contact | url_encode }}"
       class="btn btn--whatsapp" target="_blank" rel="noopener" data-i18n="contact_page.whatsapp_button">
      Abrir WhatsApp
    </a>
  </div>

  <div class="contact-card">
    <div class="contact-card__icon"><span class="material-symbols-rounded">call</span></div>
    <h3 data-i18n="contact_page.phone_title">Telefono</h3>
    <p><a href="tel:{{ site.contact.phone }}">{{ site.contact.phone }}</a></p>
  </div>

  <div class="contact-card">
    <div class="contact-card__icon"><span class="material-symbols-rounded">mail</span></div>
    <h3 data-i18n="contact_page.email_title">Correo electronico</h3>
    <p><a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a></p>
  </div>

  <div class="contact-card">
    <div class="contact-card__icon"><span class="material-symbols-rounded">location_on</span></div>
    <h3 data-i18n="contact_page.location_title">Ubicacion</h3>
    <p>{{ site.contact.city }}</p>
  </div>
</div>

<script src="/assets/js/i18n.js" defer></script>
