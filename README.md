# Nattlig Prototype

Statisk HTML/CSS-prototype av nattlig.no. Bygd 2026-05-06.

## Slik åpner du prototypen lokalt

**Enkleste:** Dobbeltklikk `index.html` — den åpnes i nettleseren din.

**Anbefalt (kjør lokal server – riktig fil-paths):**
```bash
cd /Users/bendik/Prosjekter/nattlig/prototype
python3 -m http.server 8000
```
Åpne så `http://localhost:8000` i nettleseren.

## Sider i prototypen

| Side | Fil | Hva det er |
|---|---|---|
| Forsiden | `index.html` | Inverted PDP, Avatar A primær + avatar-velger |
| PDP | `pute.html` | Klassisk produktdetaljside |
| LP – Varme nattsovere | `varme-nattsovere.html` | Avatar A landingsside |
| LP – Overgangsalder | `overgangsalder.html` | Avatar B landingsside |
| LP – Tempur-alternativ | `tempur-alternativ.html` | Avatar D landingsside |
| Om | `om.html` | Brand-narrativ, grunnleggerhistorie |
| FAQ | `faq.html` | 20 spørsmål gruppert |
| Kontakt | `kontakt.html` | Skjema + kanaler |
| Frakt og retur | `frakt-og-retur.html` | Frakt + 90 d garanti + retur-prosess |

## Hva fungerer

- ✅ Responsiv design (desktop + tablet + mobil)
- ✅ Brand-farger fra `research/brand.md` (lavendel-blå #7484C7)
- ✅ Mock cart (klikk "Legg i handlekurv" → toast vises, badge teller)
- ✅ Variant-selector (radio-knapper for 1 stk / 2 stk / + trekk)
- ✅ FAQ accordion
- ✅ Bilde-galleri på PDP (klikk thumbnails)
- ✅ Cookie-banner (lagrer valg i localStorage)
- ✅ Smooth scroll til seksjoner
- ✅ Sticky header med cart-ikon

## Hva fungerer IKKE (det er bare prototype)

- ❌ Ekte cart/checkout (kun visuell mockup)
- ❌ Ekte betaling (Vipps/Klarna-knapper er bare visuelle)
- ❌ Ekte e-post-skjema (logger til toast, sender ikke)
- ❌ Ekte tracking (ingen GA4, Pixel, etc — det kommer i Shopify)
- ❌ Ekte reviews (47 anmeldelser er placeholder)

## Deploy til Vercel/Netlify (gratis preview-URL)

**Netlify Drop (enklest, ingen konto trengs):**
1. Gå til https://app.netlify.com/drop
2. Drag-and-drop hele `prototype/`-mappen
3. Du får en URL som `random-name-12345.netlify.app`
4. Del med Daniel/Kevin

**Vercel (krever konto, gir penere URL):**
1. Logg inn på vercel.com
2. New Project → Import → drag `prototype/`-mappen
3. Få URL som `nattlig-prototype.vercel.app`

## Hva skjer etterpå

Når du har feedback fra Daniel + Kevin:
- (a) Iterer på prototypen (Claude oppdaterer copy/design)
- (b) Konverter til Shopify theme (Liquid-filer + tema)
- (c) Bygg fullt e-commerce med Shopify (tech-spec.md viser hvordan)

## Tech-stack

- HTML5 + CSS (vanilla)
- Tailwind CSS via CDN
- Inter + Outfit fonts via Google Fonts
- ~50 linjer JavaScript for interaktivitet
- Ingen build step, ingen npm, ingen dependencies

## Bilder

Alle bilder ligger i `bilder/`-mappen. Renavnet for tydelighet:
- `wordmark-dark.jpg` / `wordmark-light.jpg` — logo
- `pute-bestselger.jpg` — hero produktbilde
- `lifestyle-kvinne.jpg` — hero lifestyle
- `kald-varm-side.jpg` — Kuld™-grafikk (NB: viser "Kuld®" ikke "Kuld™" — må fikses)
- `hender-foam.jpg` — justerbarhets-demo
- `detalj-tag.png` / `detalj-foam.jpg` — produktdetaljer
- `soverom-ikoner.jpg` — soverom + 4 ikoner
