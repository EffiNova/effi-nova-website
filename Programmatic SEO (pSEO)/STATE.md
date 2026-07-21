# STATE — Programmatic SEO (pSEO) EffiNova

**Stand:** 2026-07-20 (Session 1, Ende)

## Ziel
pSEO-Struktur auf effi-nova.de nach Enwendo-Vorbild: Übersicht /energieberatung/regionen/ + Stadtseiten /energieberatung/<stadt>/ mit echt recherchiertem Lokal-Content.

## Erledigt
- Konkurrenzanalyse Enwendo (Muster in GLOSSARY.md)
- PLZ-Liste (669 PLZ) vollständig auf Orte gemappt → REGIONEN.md
- Suchvolumen-Check (DataForSEO): Berlin 720/Mo, Magdeburg 140, Cottbus 70, Rest Longtail
- Seitenliste Stufe 1 fixiert: **50 Seiten** (Übersicht + 30 Kernstädte + 12 Berlin-Bezirke + 7 Speckgürtel), DECISIONS.md #5–8
- **PILOTSEITE BERNAU GEBAUT:** `energieberatung/bernau-bei-berlin/index.html` im Website-Repo
  - EffiNova-Design (Nav/Footer/Prose aus Blog-Template übernommen), Tailwind-Build ausgeführt (dist/output.css aktualisiert), tailwind.config.js um `./energieberatung/**/*.html` erweitert
  - Lokal-Content quellenbasiert: Wärmeplanung beschlossen 28.05.2026 (bernau.de), ILB WohneigentumförderR (foerderdatenbank.de: Zuschuss 30k + zinsfreies Darlehen 230k), EW ~46.000 (Okt 2025), KfW-458-Sätze konsistent mit eigenem Blog (Reform 21.07.2026)
  - Schema.org: Service, BreadcrumbList, FAQPage; 7 lokalisierte FAQs
  - Linkcheck + CSS-Klassen-Check bestanden
- **NOCH NICHT COMMITTET/GEPUSHT** — wartet auf Henks Review (Push = Live-Deploy!)

## Update 2 nach Henk-Feedback (gleiche Session)
- Selbstkontrolle etabliert: Headless-Chromium (Playwright) in Sandbox eingerichtet → Seiten werden ab jetzt vor Abgabe visuell gerendert und geprüft
- Hero-Bild getauscht: Vorher/Nachher-Referenz (bilder/referenzen/effi-1.webp) statt abgeschnittener Infografik
- Berater-Panel nutzt Henks Mainpage-Portrait (bilder/ueber-mich/henk-portrait.webp) — bestätigt identisch mit Startseite
- Für Henks Review: selbstständige Vorschau-Datei (VORSCHAU-bernau-bei-berlin.html, CSS/Fonts/Bilder eingebettet), da App-Vorschau keine Nachbardateien lädt. Produktionsdatei bleibt energieberatung/bernau-bei-berlin/index.html

## Update nach Henk-Feedback (gleiche Session)
- Asset-Pfade auf relativ umgestellt (../../) → Seite rendert jetzt auch beim direkten Öffnen der Datei korrekt
- Berater-Sektion ergänzt: Henk Wenner als Ansprechpartner vor Ort (Foto henk-portrait.webp, Meister-Credentials aus index.html, Tel/Mail-CTAs) — Enwendo-Muster
- CSS neu gebaut, alle Klassen verifiziert

## Nächste Schritte
1. Henk-Review der Pilotseite (lokal öffnen) → Freigabe → commit + push
2. Übersichtsseite /energieberatung/regionen/ bauen (Breadcrumb-TODO in Pilotseite aktivieren)
3. EW-Zahlen der 7 Speckgürtel-Gemeinden verifizieren
4. Batch-Produktion restliche 48 Seiten (Recherche → Template → Build), interne Verlinkung aktivieren (TODO-Kommentare in Pilotseite)
5. Sitemap + Footer-/Startseiten-Verlinkung, Deploy

## Kontext für nächste Session
- Pilotseite enthält 2 HTML-TODO-Kommentare (Breadcrumb-Link + Nachbarort-Links) — aktivieren, wenn Zielseiten existieren
- Rohdaten (plz_orte_mapping.json etc.) im Scratchpad — aus PLZ-Liste reproduzierbar
