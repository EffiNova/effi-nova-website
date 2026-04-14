# EffiNova Website

Statische Website für EffiNova GmbH — Energieberatung und Sanierungsberatung in Berlin.

**Live:** https://effi-nova.de

## Tech-Stack

- **HTML5** + Vanilla JavaScript (keine Frameworks)
- **Tailwind CSS v3.4** — CLI-basiert (nicht CDN)
- **Montserrat Variable Font** — self-hosted
- **Deployment:** GitHub Pages (automatisch)

## Quick Start

### Lokal entwickeln:

```bash
git clone <repo-url>
cd effi-nova-website
npm install
```

**Watch-Modus starten** (regeneriert CSS automatisch):
```bash
npm run watch:css
```

Dann eine HTML-Datei im Browser öffnen:
```bash
open index.html
# oder mit VSCode Live Server
```

### Änderungen machen:

1. HTML bearbeiten
2. Tailwind-Klassen nutzen (werden vom Watch-Modus aktualisiert)
3. Browser aktualisieren

## Deploy

```bash
npm run build:css      # Tailwind CSS finalisieren
git add -A
git commit -m "Deploy: <Beschreibung>"
git push
```

→ GitHub Pages deployed automatisch innerhalb von ~1-2 Minuten.

**WICHTIG:** `npm run build:css` MUSS vor dem Push ausgeführt werden, damit neue Tailwind-Klassen im Output-CSS enthalten sind.

## Struktur

```
effi-nova-website/
├── index.html                   — Startseite
├── impressum.html               — Impressum
├── datenschutz.html             — Datenschutz
├── referenzen-archiv.html       — Referenzen
├── blog/                        — Blogartikel
├── bilder/                      — Assets (WebP primär, PNG/JPG Fallback)
├── fonts/                       — Montserrat Variable Font (self-hosted)
├── _archiv_unscharfgeschaltet/  — Draft-Seiten (NICHT LIVE)
├── src/input.css                — Tailwind CSS Source
├── dist/output.css              — Tailwind Build-Output (wird commitet)
└── tailwind.config.js           — Konfiguration (Farben, Fonts)
```

## NPM-Befehle

```bash
npm run watch:css    # Watch-Modus (Entwicklung)
npm run build:css    # Einmaliger Build (vor Deploy)
```

## Wichtige Konventionen

- **Bilder:** WebP-Format (Quality 85), PNG/JPG als Fallback
- **Below-the-fold-Bilder:** `loading="lazy" decoding="async"`
- **Copy:** Perspektive "wir" / "EffiNova", nicht "ich"
- **Fonts:** Nur Montserrat Variable (self-hosted)
- **Tailwind:** CLI-Befehl vor jedem Commit! Kein CDN.

## Detaillierte Dokumentation

Für vollständige Konventionen, Farb-Codes, Glasmorphism-Guidelines und Troubleshooting:

→ **siehe `CLAUDE.md`** in diesem Verzeichnis

## Support

Fragen oder Bugs? kontakt@effi-nova.de
