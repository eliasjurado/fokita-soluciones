# LC Contratistas

Sitio web de servicios profesionales para el hogar. Construido con Jekyll y publicado en GitHub Pages.

**Propietario:** Jhonatan Lopez Carrion  
**Telefono:** +51 976 223 755  
**Idiomas:** Espanol / Ingles

## Desarrollo local

```bash
bundle install
bundle exec jekyll serve
```

Abre http://localhost:4000

## Estructura

```
lc-contratistas/
├── _config.yml          ← Configuracion del sitio
├── _data/
│   ├── i18n.yml         ← Diccionario ES/EN
│   └── servicios.yml    ← Catalogo de servicios
├── _includes/           ← Header, footer, WhatsApp float
├── _layouts/            ← Layouts Jekyll
├── _sass/               ← Estilos SCSS
├── assets/
│   ├── css/main.scss
│   └── js/i18n.js       ← Language switcher
├── index.html           ← Pagina principal
├── services.md          ← /services/
├── about.md             ← /about/
└── contact.md           ← /contact/
```
