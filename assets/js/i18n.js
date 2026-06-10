(function () {
  'use strict';

  var STORAGE_KEY = 'lccontratistas_lang';
  var DEFAULT_LANG = 'es';
  var SUPPORTED = ['es', 'en'];

  var dictEl = document.getElementById('i18n-data');
  if (!dictEl) return;
  var dict;
  try { dict = JSON.parse(dictEl.textContent); } catch (e) { return; }

  function lookup(key, lang) {
    var parts = key.split('.');
    var node = dict;
    for (var i = 0; i < parts.length; i++) {
      if (!node || typeof node !== 'object') return null;
      node = node[parts[i]];
    }
    if (!node) return null;
    if (typeof node === 'object' && node[lang]) return node[lang];
    return null;
  }

  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase();
    if (nav.indexOf('es') === 0) return 'es';
    return 'en';
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var val = lookup(key, lang);
      if (val !== null) nodes[i].textContent = val;
    }

    var attrSelectors = ['placeholder', 'aria-label', 'title', 'alt'];
    for (var a = 0; a < attrSelectors.length; a++) {
      var attr = attrSelectors[a];
      var attrNodes = document.querySelectorAll('[data-i18n-attr-' + attr + ']');
      for (var j = 0; j < attrNodes.length; j++) {
        var akey = attrNodes[j].getAttribute('data-i18n-attr-' + attr);
        var aval = lookup(akey, lang);
        if (aval !== null) attrNodes[j].setAttribute(attr, aval);
      }
    }

    var bilingueNodes = document.querySelectorAll('[data-i18n-en], [data-i18n-en-html]');
    for (var b = 0; b < bilingueNodes.length; b++) {
      var node = bilingueNodes[b];
      var isHtml = node.hasAttribute('data-i18n-en-html');
      var enAttr = isHtml ? 'data-i18n-en-html' : 'data-i18n-en';
      var esAttr = isHtml ? 'data-i18n-es-html' : 'data-i18n-es';
      if (!node.hasAttribute(esAttr)) {
        node.setAttribute(esAttr, isHtml ? node.innerHTML.trim() : node.textContent.trim());
      }
      var targetText = lang === 'en' ? node.getAttribute(enAttr) : node.getAttribute(esAttr);
      if (targetText) {
        if (isHtml) node.innerHTML = targetText;
        else node.textContent = targetText;
      }
    }

    document.documentElement.setAttribute('lang', lang);

    var toggles = document.querySelectorAll('[data-lang-toggle] [data-lang]');
    for (var k = 0; k < toggles.length; k++) {
      var t = toggles[k];
      if (t.getAttribute('data-lang') === lang) {
        t.classList.add('is-active');
        t.setAttribute('aria-pressed', 'true');
      } else {
        t.classList.remove('is-active');
        t.setAttribute('aria-pressed', 'false');
      }
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function bindToggle() {
    var toggles = document.querySelectorAll('[data-lang-toggle]');
    if (!toggles.length) return;
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function (e) {
        var btn = e.target.closest('[data-lang]');
        if (!btn) return;
        e.preventDefault();
        applyLang(btn.getAttribute('data-lang'));
      });
    }
  }

  window.lcI18n = {
    setLang: applyLang,
    getLang: function () {
      try { return localStorage.getItem(STORAGE_KEY) || detectLang(); }
      catch (e) { return detectLang(); }
    },
    lookup: lookup
  };

  document.addEventListener('DOMContentLoaded', function () {
    bindToggle();
    applyLang(detectLang());
  });

  if (document.readyState !== 'loading') {
    bindToggle();
    applyLang(detectLang());
  }
})();
