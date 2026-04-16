# CLAUDE.md — EffiNova Website Agent Guide

Diese Datei wird von Claude Code automatisch beim Start gelesen. Sie erklärt alle Konventionen, den Tech-Stack und den Workflow für das EffiNova-Website-Projekt.

## Projektübersicht

**Statische Website für EffiNova GmbH**, Berlin, Energieberatung und energetische Sanierungsberatung.

- **Live-URL:** https://effi-nova.de
- **Deployment:** GitHub Pages (automatisch bei `git push`)
- **Repository:** effi-nova-website

## Tech-Stack

- **HTML5** — strukturiert, semantisch
- **Vanilla JavaScript** — minimales DOM-Scripting (keine Frameworks, keine Build-Tools für JS)
- **Tailwind CSS v3.4** — CLI-basiert (NICHT CDN!)
  - Quelle: `src/input.css`
  - Output: `dist/output.css`
  - Build-Befehl: `npm run build:css`
  - Watch-Modus: `npm run watch:css`
- **Montserrat Variable Font** — self-hosted (fonts/Montserrat-Variable.woff2), keine Google Fonts CDN
- **Font Awesome 6.5.1** — via Cloudflare cdnjs (einzige externe CSS-Ressource)
- **Deployment:** GitHub Pages (automatisch, kein Build-Server nötig)

## Farben (Brand Guide Sektion 03)

```
effi-green       = #004225  (Primary)
effi-green-mid   = #035B2F
effi-green-dark  = #01331B
effi-beige       = #F2EFE7
effi-cream       = #F4EFD9
effi-body        = #92887A  (Body Text)
effi-h3          = #616161  (Heading 3)
effi-gold        = #C3A87A
```

Diese sind in `tailwind.config.js` als Custom Colors konfiguriert → immer über `bg-effi-green`, `text-effi-body` etc. verwenden.

## Schriften

**Ausschließlich Montserrat Variable Font** (self-hosted).

- Überschriften h1, h2, h3, h4: Montserrat (verschiedene Gewichte)
- Body-Text: Montserrat Regular (400)
- **NICHT:** Gobold, Google Fonts CDN, externe Schrift-Services

## Build-Workflow (KRITISCH)

### Vor jedem Commit:

**WICHTIG:** Bei JEDER Änderung an HTML-Tailwind-Klassen oder `tailwind.config.js` MUSS der Befehl `npm run build:css` ausgeführt werden, bevor committet wird.

**Warum?** Tailwind CSS CLI generiert das finale `dist/output.css` nur, wenn der Build-Befehl läuft. GitHub Pages nutzt diese Datei direkt — neue Klassen sind nicht im Output-Stylesheet enthalten, wenn der Build fehlt.

```bash
npm run build:css
git add -A
git commit -m "Deploy: <Beschreibung>"
git push
```

### Entwicklungsmodus:

```bash
npm run watch:css
```

Dieser Befehl überwacht `src/input.css` und alle HTML-Dateien auf Tailwind-Klassen und regeneriert `dist/output.css` automatisch bei Änderungen.

## Dateistruktur

```
effi-nova-migration/
├── index.html                    — Startseite
├── impressum.html                — Pflichtangaben § 5 TMG
├── datenschutz.html              — DSGVO-Datenschutzerklärung
├── referenzen-archiv.html        — Referenzen
├── blog/                         — Blog-Bereich
│   ├── index.html                — Blog-Übersichtsseite (CSS-Pfad: ../dist/output.css)
│   ├── artikel-template.html     — Basis-Template (Pfade: ../)
│   └── energieausweis/           — Themenordner Energieausweis
│       ├── artikel-template.html — Template für dieses Thema (Pfade: absolute /)
│       ├── images/               — Bilder pro Artikel (Unterordner je Slug)
│       └── *.html                — Artikel-Dateien
│   (Weitere Themenordner: foerdermittel/, sanierung/, waermepumpe/, solar/, praxis/)
├── bilder/                       — Alle Assets (WebP Primärformat, PNG/JPG Fallback)
├── fonts/                        — Self-hosted Schriften (Montserrat-Variable.woff2)
├── _archiv_unscharfgeschaltet/   — NICHT LIVE!
│   ├── karriere.html
│   ├── templates/
│   └── (weitere Draft-Seiten)
├── src/
│   └── input.css                 — Tailwind CSS Source
├── dist/
│   └── output.css                — Tailwind CLI Build-Output (committet!)
├── tailwind.config.js            — Tailwind Konfiguration (Farben, Fonts, Plugins)
├── package.json                  — Dependencies (nur tailwindcss)
├── package-lock.json
├── robots.txt                    — SEO: schließt _archiv_unscharfgeschaltet/ aus
└── CLAUDE.md                     — Diese Datei
```

### Archive-Ordner: `_archiv_unscharfgeschaltet/`

Dieser Ordner enthält **DRAFT-Seiten und Templates**, die noch nicht live gehen dürfen:

- `karriere.html` — Karriere-Seite (noch in Entwicklung)
- `templates/` — Stadt-Templates für zukünftige Lokalisierung

**REGEL:** Keine dieser Dateien auf die Produktionsseite pushen oder live schalten ohne vorherige Absprache. Sie sind im `robots.txt` ausgeschlossen (noindex).

## Bilder-Konventionen

### Konvertierung:

- Neue Bilder immer zu **WebP konvertieren** (Quality 85, `method=6` in Pillow)
- Original-Datei (PNG oder JPG) als Fallback behalten

Beispiel mit Python/Pillow:
```python
from PIL import Image
img = Image.open('image.jpg')
img.save('image.webp', 'WEBP', quality=85, method=6)
```

### HTML:

- **Below-the-fold-Bilder:** `loading="lazy" decoding="async"`
- **Eager:** Nur Nav-Logo + Hero-Bild (Above-the-fold)

```html
<!-- Hero: eager -->
<img src="bilder/hero.webp" alt="EffiNova Energieberatung Berlin" />

<!-- Below-the-fold: lazy -->
<img src="bilder/referenz-1.webp" alt="Saniertes Einfamilienhaus Charlottenburg"
     loading="lazy" decoding="async" />
```

### Alt-Texte:

- Sinnvoll für SEO und Accessibility
- Nicht leer — aber auch nicht überoptimiert
- Kurz, beschreibend

Beispiel: `"Energieberater bei der Thermografie-Aufnahme eines Wohnhauses"`

## Copy-Konventionen

### Perspektive:

- Immer **"wir"** oder **"EffiNova"** statt "ich" (Team-Perspektive, nicht Einzelperson)
- Ausnahme: Die persönliche Bio in der "Über EffiNova"-Sektion kann über Henk als Gründer sprechen

### Ton:

- Professionell, sachlich, vertrauenswürdig
- Keine Übertreibungen, keine unbelegten Superlative
- Fokus auf Kompetenz und Ergebnis

### Formulierungen:

- "EffiNova unterstützt Sie bei..." statt "Ich helfe dir..."
- "Unsere Erfahrung..." statt "Meine Erfahrung..."

## Glassmorphism

Glassmorphism wird für bestimmte UI-Elemente genutzt:

- **Navigation:** halbtransparenter Background + `backdrop-blur-sm` oder `-md`
- **Leistungs-Cards:** Glasmorphic Style
- **CTA-Banner:** Halbdurchsichtig mit Blur-Effekt
- **Kontakt-Cards:** Glasmorphic Stil

### Fallback:

Es gibt einen `@supports not (backdrop-filter: blur())` Fallback für Browser, die `backdrop-filter` nicht unterstützen. **Bei neuen Komponenten mit Glasmorphism:** Diese Fallback-Regel immer beachten.

## Kontakt-Flows

- **"Beratung anfragen" Button:** Externe PerspectiveFunnel-URL
- **Telefon:** `<a href="tel:+491234567890">...</a>`
- **E-Mail:** `<a href="mailto:kontakt@effi-nova.de">...</a>`

## Legal-Links im Footer

```html
<a href="impressum.html">Impressum</a>
<a href="datenschutz.html">Datenschutz</a>
<!-- AGB + Widerruf: noch Platzhalter — wenn Content kommt, Dateien erstellen -->
```

## NICHT TUN

Diese Regeln sind unverrückbar:

1. **NICHT** Tailwind CDN einbauen (`cdn.tailwindcss.com`)
   - Nur `dist/output.css` (von CLI erzeugt)

2. **NICHT** Google Fonts CDN nutzen
   - Alle Fonts bleiben self-hosted (Montserrat-Variable.woff2)

3. **NICHT** Archive-Dateien (`_archiv_unscharfgeschaltet/`) ohne Absprache live schalten
   - Diese Seiten sind Draft und müssen erst reviewed werden

4. **NICHT** Frameworks einführen
   - Kein React, Vue, Astro, Svelte, etc.
   - Nur HTML + Vanilla JS + Tailwind CLI

5. **NICHT** neuen Content in `karriere.html` oder `templates/` pushen
   - Diese sind im Archive-Ordner — brauchen vorherige Review

6. **NICHT** Emojis in Produktions-HTML
   - Es sei denn, explizit gewünscht und briefed

## Before-Commit-Checklist für Claude Code

Vor jedem `git commit`:

1. **Tailwind-Klassen geändert?**
   - → `npm run build:css` ausführen
   - → `dist/output.css` wurde neu erzeugt

2. **Neue Bilder hinzugefügt?**
   - → WebP-Version generiert?
   - → Original (PNG/JPG) als Fallback behalten?

3. **HTML bearbeitet?**
   - → Cross-check: Nutzen andere HTML-Dateien die gleiche Struktur (Nav/Footer)?
   - → Müssen diese auch synchron angepasst werden?

4. **Git-Status vor Commit prüfen**
   - → Keine `node_modules/` committen
   - → Keine `.DS_Store`-Dateien
   - → `dist/output.css` MUSS dabei sein

```bash
git status
git diff --stat
```

5. Commit mit aussagekräftiger Message:
   ```bash
   git commit -m "Feature: <Beschreibung>" 
   # oder
   git commit -m "Fix: <Bug-Beschreibung>"
   # oder
   git commit -m "Deploy: <Inhaltliche Änderung>"
   ```

6. Push:
   ```bash
   git push
   ```

   → GitHub Pages deployed automatisch innerhalb von ~1-2 Minuten.

## Nützliche NPM-Befehle

```bash
npm run watch:css    # Development: Tailwind Watch-Modus
npm run build:css    # Production: Tailwind CLI Build einmalig
npm install          # Dependencies installieren (nur tailwindcss)
```

## Troubleshooting

### Tailwind-Klassen funktionieren nicht nach Änderung

**Symptom:** Neue Tailwind-Klassen sind in der Live-Website nicht zu sehen.

**Ursache:** `npm run build:css` wurde nicht ausgeführt.

**Lösung:**
```bash
npm run build:css
git add dist/output.css
git commit -m "Fix: Tailwind CSS rebuild"
git push
```

### Lokale Entwicklung: Änderungen zeigen sich nicht

**Symptom:** HTML-Datei wird im Browser angezeigt, aber Tailwind-Styles fehlen.

**Ursache:** `npm run watch:css` läuft nicht im Hintergrund.

**Lösung:**
```bash
npm run watch:css
# In anderem Terminal:
open index.html  # oder mit VSCode Live Server öffnen
```

## Kontakt

Für Fragen oder Aktualisierungen dieser Dokumentation: kontakt@effi-nova.de

---

**Letzte Aktualisierung:** 14. April 2026
