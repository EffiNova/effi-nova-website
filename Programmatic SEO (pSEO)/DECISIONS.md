# DECISIONS — pSEO EffiNova

## 2026-07-20 — Grundsatzentscheidungen (Henk via Auswahlfragen)

1. **Regionen: Eigene Liste** — Henk liefert konkrete Liste aktiver Regionen.
   - Verworfen: Deutschlandweit (Enwendo-Modell) — nicht alle Regionen werden real bedient; Berlin+Brandenburg pauschal — Liste soll exakt sein.

2. **Granularität: Städte ab ~20k Einwohner** — Qualität vor Masse, echtes Suchvolumen, Rest über Nachbarorte-Erwähnungen. Später erweiterbar.
   - Verworfen: Jede Gemeinde (Thin-Content-Risiko, tausende Seiten); nur Kreise/Bezirke (zu wenig Longtail).

3. **Content: Echt recherchiert pro Ort** — reale kommunale Förderprogramme, Klimaziele, Gebäudebestand pro Stadt (wie Enwendo). Batch-weise Recherche.
   - Verworfen: Reines Template+Variablen (Duplicate-/Thin-Content-Risiko); Hybrid (erst mal alle Seiten hochwertig, Liste ist ohnehin begrenzt).

4. **Projektdateien angelegt** (STATE/DECISIONS/OPEN/GLOSSARY) — Long-Context-Hygiene.

## 2026-07-20 — Seitenliste & Struktur (Henk via Auswahlfragen)

5. **Regionsdefinition: PLZ-Liste** — 669 unique PLZ geliefert, vollständig gemappt (siehe REGIONEN.md). Ergebnis: 30 Kernstädte ≥20k EW.

6. **Berlin: Hauptseite + 12 Bezirksseiten** (z.B. /energieberatung/berlin-spandau/).
   - Verworfen: nur eine Berlin-Seite — Berlin ist Kernmarkt (720 Suchen/Mo), Bezirks-Longtail mitnehmen.

7. **Zusatzorte: 7 Speckgürtel-Gemeinden** (Blankenfelde-Mahlow, Wandlitz, Panketal, Kleinmachnow, Neuenhagen, Hoppegarten, Stahnsdorf) — kaufkräftige EFH-Gebiete. EW-Zahlen vor Seitenbau verifizieren.
   - Verworfen (vorerst): 15–20k-Städte (Prenzlau, Nauen, Forst, Lübbenau, Templin, Landsberg) — als Ausbaustufe 2 möglich, nicht endgültig verworfen.

8. **URL-Struktur: /energieberatung/<stadt-slug>/** + Übersicht /energieberatung/regionen/. Unterseiten später möglich (/energieberatung/<stadt>/isfp/).
   - Verworfen: /regionen/<stadt>/ (kein Keyword im Pfad); flache .html-Dateien im Root (schlechter erweiterbar).

**Finaler Seitenumfang Stufe 1: 50 Seiten** = 1 Übersicht + 30 Kernstädte + 12 Berlin-Bezirke + 7 Speckgürtel-Gemeinden.

## Technische Rahmenbedingungen (aus CLAUDE.md des Website-Repos, nicht verhandelbar)
- Statisches HTML + Tailwind CLI (kein Framework, kein CDN-Tailwind)
- Montserrat self-hosted, EffiNova-Farbwelt (effi-green #004225 etc.)
- Deploy via git push → Cloudflare Pages
- Copy: "wir"/"EffiNova", professionell, keine Superlative
