# LICI_Real_estate: Analýza webu

**Web:** lokálny zdroj `zdroje/lici-real-estate` (Lovable projekt, TanStack Start + React 19 + Tailwind 4), spustený na `http://localhost:5180/`
**Dátum analýzy:** 4. 11. 2026
**Screenshoty:** `screenshots/desktop-fold.png`, `desktop-full.jpg` (1440×900), `tablet-fold.png`, `tablet-full.jpg` (768×1024), `mobil-fold.png`, `mobil-full.jpg` (390×844)

> **Dôležitý kontext:** nejde o realitný portál s ponukou nehnuteľností, ale o jednostránkový web (landing page) **marketingovej agentúry pre developerov a maklérov** (služby, balíky, proces, referencie, FAQ, kontakt). Sekcia „Vyhľadávanie a ponuka nehnuteľností“ preto hodnotí ponuku služieb a balíkov.

> **Technická poznámka k spusteniu:** Homebrew Node 26.13 na tomto Macu padá (abort 134) pri čítaní `package.json`, preto bol web spustený cez prenosný Node 22 LTS. Väčšina obrázkov (hero, 6 obrázkov služieb, banner Expertíza) nie je v repozitári, sú to Lovable assety `/__l5e/assets-v1/...`. Pre analýzu pribudol `vite.analysis.config.ts` s proxy na Lovable hosting. **Mimo Lovable hostingu web zobrazí rozbité obrázky.**

---

## 1. Zhrnutie

Vizuálny smer (krémová, tmavá čokoládová, medená) je prémiový, súdržný a hodí sa k realitnému segmentu. Web je však zatiaľ **v stave rozpracovaného prototypu**, nie pripravený na spustenie: obsahuje lorem ipsum, zástupné kontakty, neexistujúce kotvy v navigácii, nefunkčný formulár a vymyslené referencie. Globálne CSS pravidlo navyše ruší responzívnu typografiu, takže na mobile H1 pretečie mimo obrazovku. Mobil nemá navigáciu.

**Top 5 odporúčaní**
1. **Dokončiť obsah:** odstrániť lorem ipsum, „CTA pôjde SEM“, zástupné kontakty, vymyslené referencie a klientov (Vysoká).
2. **Sfunkčniť konverziu:** formulár s odoslaním, validáciou, súhlasom GDPR a potvrdením, CTA balíkov napojiť na formulár s predvoleným balíkom, klikateľný `tel:` a `mailto:` (Vysoká).
3. **Opraviť typografiu:** odstrániť neviazané pravidlá `h1/h2/h3 { font-size }` a `.italic { font-style: normal !important }` v `styles.css`, ktoré prebíjajú Tailwind triedy (Vysoká).
4. **Mobil:** pridať hamburger menu, upraviť hero (hotspoty, veľkosť H1), inputy 16 px (Vysoká).
5. **Výkon a SEO:** prekonvertovať ~10,5 MB PNG obrázkov na WebP/AVIF so `srcset`, odstrániť Lovable placeholder meta tagy, `lang="sk"`, štruktúrované dáta (Vysoká/Stredná).

---

## 2. Prvý dojem a vizuálny dizajn

**Pozitíva**
- Teplá, zemitá paleta (#F5F1EB krém, #21160E čokoládová, #955A38 meď) pôsobí prémiovo a dôveryhodne, typicky pre realitný segment.
- Veľkorysý whitespace, čisté karty, konzistentné rádiusy (10 px) a pill tlačidlá.
- Hero s hotspotmi na fotke budovy je originálny nápad, ktorý vizuálne prepája služby s nehnuteľnosťou.
- Akordeón služieb s fotkami na pozadí je pútavý (screenshot `desktop-full.jpg`, sekcia 02).

**Problémy**
- **Zámer typografie sa nenačítal.** Projekt načítava Instrument Serif (elegantný serif pre nadpisy a kurzívové akcenty typu „*spolupráce.*“), ale `--font-display` je nastavený na Inter a `.italic { font-style: normal !important }` vypína kurzívu. Výsledok: všetko je Inter, akcentové slová sú len zafarbené, chýba kontrast medzi nadpismi a textom. Serif sa zbytočne sťahuje.
- **Veľkosti nadpisov sú zamrznuté.** V `styles.css` sú mimo `@layer` pravidlá `h1 {60px} h2 {45px} h3 {36px}`. V Tailwind 4 neviazané štýly prebíjajú utility, takže `text-5xl md:text-7xl lg:text-[88px]` nefunguje: H1 má všade 60 px (desktop menší, ako bol navrhnutý, mobil príliš veľký).
- Logo „LIČI.“ je iba text v Inter, nemá vlastný znak ani charakter. Vo footri má `font-bold italic`, no kurzíva je vypnutá.
- Sekcie striedajú takmer rovnaké odtiene krémovej (#F5F1EB oproti oklch 0.954), rytmus stránky je preto plochý a sekcie sa zlievajú.
- Na hover balíkov sa všetky karty sfarbia na tmavo, zvýraznený balík „Komplex“ tak stráca odlíšenie.

## 3. UX a informačná architektúra

Poradie: Hero → 02 Služby → 03 Expertíza (banner) → 04 Balíčky → 05 Proces → Klienti → 03 Referencie → 07 FAQ → Kontakt → Footer.

- **Nefunkčná navigácia:** položky „Rezidenčné“ (`#rezidencne`), „Komerčné“ (`#komercne`) a „Referencie“ (`#projekty`) smerujú na neexistujúce kotvy. Na stránke existujú iba `#sluzby`, `#balicky` a `#kontakt`. Vo footri „Rezidenčné“ vedie na `#projekty`.
- **Číslovanie sekcií je nekonzistentné:** chýba 01 a 06, „03“ sa opakuje (Expertíza aj Referencie), Klienti nemajú číslo. Číslovanie budí dojem poriadku, no tu pôsobí neupravene.
- Navigácia „Rezidenčné / Komerčné“ sľubuje segmentáciu, ktorá na webe neexistuje (žiadny obsah podľa segmentu).
- Hlavička nie je sticky. Na dlhej stránke (7 700 px desktop, 11 500 px mobil) sa navigácia a CTA stratia hneď po hero.
- Popisy hotspotov sú iba na `:hover`, na dotykových zariadeniach a z klávesnice sú nedostupné. Hotspoty „Virtuálna prehliadka“ a „Predajná stratégia“ majú **identický text** (popis stratégie bol skopírovaný).
- V otvorenej položke akordeónu služieb sa názov presunie mimo tlačidla, tlačidlo potom obsahuje iba ikonu.
- Kroky procesu (`<details>`) sú pri štyroch krátkych krokoch zbytočne skryté, lepšie by fungovala otvorená časová os.

## 4. Ponuka služieb a balíkov (namiesto vyhľadávania nehnuteľností)

- Web nemá ponuku nehnuteľností ani vyhľadávanie, čo je pri agentúre v poriadku. Ak má LIČI aj sprostredkovať predaj, chýba to úplne.
- **Balíky:** ceny „od 4 900 €“ a „od 12 400 €“ sú silný kvalifikačný prvok, no **zoznamy výhod sú lorem ipsum** (Štart, Komplex). Bez obsahu balíka cena nič nehovorí.
- Balík 03 uvádza „Všetko z **Optimal**, plus:“, no balík s takým názvom neexistuje (má byť „Komplex“).
- „Na Dopyt“ sa číta zle, odporúčanie: „Cena na dopyt“ alebo „Individuálne“.
- Služby nemajú vlastné podstránky ani ukážky práce (portfólio virtuálnych prehliadok, webov, brandingov), referenčné projekty nemajú výsledky (čísla, predané jednotky, CPL).

## 5. Mobilná verzia

(screenshoty `mobil-fold.png`, `mobil-full.jpg`)
- **Chýba mobilné menu:** navigácia má `hidden md:flex` bez hamburgeru, na mobile sa nedá navigovať.
- **H1 pretečie:** pre globálne `h1 {60px}` má nadpis 402 px šírky pri viewporte 375 px, slovo „nehnuteľnosti“ je orezané.
- **Hotspoty prekrývajú text** nadpisu a podnadpisu, hover karty na dotyk nefungujú.
- **Inputy majú 14 px**, iOS Safari pri fokuse priblíži stránku. Treba ≥ 16 px.
- Šípky karuselu referencií ležia cez fotku projektu (vertikálne centrované na celý stack karty + fotky).
- Malé dotykové ciele: bodky karuselu 8×8 px, radio 16×16 px, hotspoty a sociálne ikony 40×40 px (odporúčanie ≥ 44×44).
- **Tablet (768 px):** horizontálny scroll, šípka „Ďalšia referencia“ (`md:-right-12`) končí na 777 px pri šírke 753 px.
- Chýba `theme-color`, `apple-touch-icon` a favicon.

## 6. Prístupnosť

- `<html lang="en">`, obsah je pritom slovenský (čítačky čítajú zlou výslovnosťou).
- **Obsah skrytý do hydratácie:** všetky `[data-reveal]` prvky vrátane H1 v hero majú `opacity: 0`, kým nezbehne JS. Bez JS alebo pri chybe hydratácie je stránka prázdna.
- Hierarchia nadpisov: H1 → H3 (H2 iba v banneri Expertíza). Sekcie by mali byť H2.
- Hotspoty: popis iba na hover, nie na `:focus-visible`. Pulzujúca animácia `animate-ping` beží nekonečne a nerešpektuje `prefers-reduced-motion`.
- Akordeón služieb: v otvorenom stave tlačidlo nemá textový názov (iba ikona s `aria-hidden`).
- Karusel referencií: neaktívne snímky ostávajú v poradí tabulátora a pre čítačky, chýba `aria-roledescription`/`aria-live`, bodky nemajú `aria-current`.
- Sociálne odkazy majú `aria-label="social"` (všetky tri rovnako) a `href="#"`.
- Formulár: radio tlačidlá majú `appearance-none` bez viditeľného fokusu, nevyplnený radio (#C7BEB3 na #EDE8DF) má kontrast ~1,5:1 (WCAG 1.4.11 vyžaduje 3:1). Rovnako slabý je okraj inputov. Chýbajú `name`, `autocomplete` a `required`.
- Kontrast textu je väčšinou OK (meď #955A38 na krémovej ~4,8:1, na hranici pre malý text, napr. „Atrium Architekti“ 14 px).
- Fotky referencií majú alt = meno osoby (OK), banner Expertíza `alt=""` (OK, dekorácia).

## 7. Texty, brand a dôveryhodnosť

- **Zástupný obsah:** lorem ipsum v balíkoch aj v prvej referencii, „CTA pôjde SEM“ na tlačidle v banneri, `hello@realestate.sk`, `+421 900 000 000`, „Ulica 1, PSČ Mesto“.
- **Vymyslené referencie a klienti** („Jožinka Ferková“, hodnotenie 5.0, značky HORIZON, AVALON…). Zverejniť vymyslené recenzie je **právne riziko** (klamlivá obchodná praktika) a pre B2B klientov (developerov) aj reputačné. Použiť iba reálne referencie s menom, logom a výsledkom.
- **Gramatika:**
  - „Prinesieme váš projekt**,** tej správnej cieľovej skupine“: čiarka navyše.
  - „Prémiové weby**,** ako kľúčový predajný kanál“: čiarka navyše.
  - „Pozrime sa, čo váš&nbsp;projekt potrebuje“: OK, ale „Spojme sa **spolu**“ je pleonazmus (→ „Spojme sa“ / „Poďme do toho spolu“).
  - „cieľovku“ je slang, v prémiovom tóne nepatrí (→ „cieľovú skupinu“).
- **Miešanie jazykov:** „Real estate marketing studio“, „PR & media strategy“, „Full-time project lead“, „Event pre brokérov“, „Komerčný real estate“ oproti „Rezidenciálny“ vo formulári a „Rezidenčné“ v menu. Odporúčam jednotnú slovenčinu, prípadne s ustálenými termínmi.
- Hero je silný a jasný („Rozumieme marketingu, ktorý predáva nehnuteľnosti“), podnadpis je slabý a generický. Odporúčanie: konkrétny benefit („Virtuálne prehliadky, web a kampane pod jednou strechou, aby sa vaše byty predali rýchlejšie.“).
- Chýba „O nás“ (tím, tváre, história), čísla (počet projektov, predaných jednotiek), certifikácie (Matterport partner, Google Partner) a IČO/obchodné meno v pätičke.

## 8. SEO

- **Lovable placeholder meta tagy** z `__root.tsx` ostali na stránke: `twitter:title „Liči Real Estate“`, `twitter:description „LIČI Vision generates real estate web pages from an image, using placeholder images.“`, `author = Lovable`, `twitter:site = @Lovable`, `og:image` = screenshot Lovable preview.
- `lang="en"`, chýba `og:locale sk_SK`.
- Chýba `canonical`, `robots.txt`, `sitemap.xml`, favicon.
- Žiadne štruktúrované dáta: odporúčam `Organization`/`ProfessionalService` (NAP), `FAQPage` (FAQ sekcia je ideálna), `Service`/`Offer` pre balíky.
- Titulok „LIČI, Marketing pre realitný development“ (40 znakov) je OK, odporúčanie: „LIČI | Marketing pre realitných developerov – virtuálne prehliadky, weby, kampane“.
- Jednostránkový web neumožňuje rankovať na kľúčové slová služieb (napr. „virtuálna prehliadka Matterport Bratislava“, „marketing developerského projektu“, „home staging“). Odporúčam podstránky služieb a prípadové štúdie.
- Obrázky služieb sú CSS pozadia (neindexovateľné, bez altu).
- Nadpisy sekcií ako H3 namiesto H2 oslabujú štruktúru dokumentu.
- 404 a chybová stránka sú v angličtine.

## 9. Výkon a animácie

**Výkon**
- **Obrázky ~10,5 MB PNG:** hero 2,77 MB, 6 obrázkov služieb po 1,0 až 1,4 MB, Expertíza 0,99 MB. Obrázky služieb sú CSS pozadia, načítajú sa všetky naraz a nie lazy. Hero (LCP prvok) nemá `fetchpriority="high"` ani preload. Odporúčanie: AVIF/WebP, `srcset`, 150 až 300 kB na obrázok, `<img loading="lazy">` namiesto pozadí.
- **LCP blokované hydratáciou:** H1 má `opacity:0` až do spustenia JS a IntersectionObserveru.
- **Parallax cez React state:** `setExpertiseOffset` pri každom scroll evente prerenderuje celý komponent stránky (~1 000 riadkov JSX). Odporúčanie: zapisovať priamo do `style.transform` cez ref v `requestAnimationFrame`, alebo CSS `animation-timeline: view()`.
- `will-change: opacity, transform` na 50 prvkoch `[data-reveal]` trvalo (aj po odhalení) zbytočne drží GPU vrstvy.
- JS bundle ~425 kB nekomprimovaný (React Query, Radix a 40+ shadcn komponentov v repozitári, väčšina sa nepoužíva), CSS 91 kB.
- Google Fonts: načítava sa Instrument Serif, ktorý sa nepoužíva.

**Animácie**
- Reveal pri scrolle (0,8 s, ease-out-expo) je príjemný a rešpektuje `prefers-reduced-motion`. Je ho však priveľa (50 prvkov) a 0,8 s je na opakované prvky dlhé (odporúčanie 0,4 až 0,5 s, stagger).
- `animate-ping` na 5 hotspotoch beží nekonečne, odvádza pozornosť od CTA a nerešpektuje reduced-motion.
- Hover prechody balíkov trvajú 700 ms (pomalé, odporúčanie 200 až 300 ms), `hover:scale-[1.005]` na akordeóne je prakticky nepostrehnuteľný (odstrániť).
- Parallax obrázka banneru so `scale(1.45)` a posunom ±200 px je výrazný a nerešpektuje reduced-motion.
- Akordeón služieb (grid-rows 500 ms) a karusel (700 ms) sú OK.

## 10. Konverzie (kontakt, formuláre, CTA)

- **Formulár nič neodošle:** tlačidlo je `type="button"` bez handlera, inputy nemajú `name`, chýba validácia, potvrdenie aj chybový stav.
- Chýba pole „Správa / O projekte“, hoci text vyzýva „stručne nám priblížte váš projekt“. Chýba aj súhlas so spracovaním osobných údajov (GDPR) a odkaz na zásady.
- Tlačidlá balíkov („Mám záujem“, „Kontaktujte nás“) nič nerobia. Mali by scrollovať na formulár s predvoleným balíkom.
- Telefón a e-mail nie sú klikateľné (`tel:`, `mailto:`).
- CTA texty sú generické („Chcem vedieť viac“, „CTA pôjde SEM“). Odporúčanie: „Nezáväzná konzultácia“, „Získať návrh pre môj projekt“.
- Chýba sticky CTA alebo hlavička a alternatíva typu rezervácie termínu (Calendly).
- Dôveryhodnosť pred formulárom: žiadne logá reálnych klientov, výsledky ani tvár konzultanta.

---

## 11. Zoznam zistení

| # | Oblasť | Problém | Kde | Odporúčanie | Priorita |
|---|--------|---------|-----|-------------|----------|
| 1 | Obsah | Lorem ipsum v balíkoch a referencii, „CTA pôjde SEM“, zástupné kontakty | `/#balicky`, banner Expertíza, `/#kontakt`; `desktop-full.jpg` | Doplniť reálny obsah pred spustením | Vysoká |
| 2 | Dôvera/právo | Vymyslené referencie (5.0) a značky klientov | Klienti, Referencie; `desktop-full.jpg` | Použiť iba reálne referencie alebo sekciu dočasne skryť | Vysoká |
| 3 | Konverzie | Formulár neodosiela, chýba správa, GDPR, validácia, potvrdenie | `/#kontakt` | Napojiť na backend/CRM, doplniť polia a stavy | Vysoká |
| 4 | Konverzie | CTA balíkov nemajú akciu | `/#balicky` | Scroll na formulár + predvolený balík | Vysoká |
| 5 | Navigácia | Kotvy `#rezidencne`, `#komercne`, `#projekty` neexistujú | Menu, footer | Doplniť sekcie/ID alebo upraviť menu | Vysoká |
| 6 | Mobil | Chýba mobilné menu | `mobil-fold.png` | Hamburger + sheet/drawer | Vysoká |
| 7 | Dizajn/Mobil | Globálne `h1/h2/h3 {font-size}` prebíjajú Tailwind, H1 na mobile pretečie | `styles.css`, `mobil-fold.png` | Presunúť do `@layer base` alebo odstrániť | Vysoká |
| 8 | Mobil | Hotspoty prekrývajú text hero, popisy iba na hover | Hero; `mobil-fold.png` | Na mobile skryť alebo nahradiť zoznamom, na desktope `focus`/`click` | Vysoká |
| 9 | Výkon | ~10,5 MB PNG obrázkov, pozadia služieb nie sú lazy | Hero, Služby, Expertíza | AVIF/WebP + srcset + lazy, preload hero | Vysoká |
| 10 | SEO | Lovable placeholder meta (twitter, author, og:image) | `__root.tsx` | Prepísať meta, vlastný OG obrázok 1200×630 | Vysoká |
| 11 | Technické | Obrázky závislé od Lovable hostingu (`/__l5e/...`) | `src/assets/*.asset.json` | Pri self-hostingu uložiť assety do repozitára | Vysoká |
| 12 | Prístupnosť/SEO | `lang="en"` | `__root.tsx` | `lang="sk"` | Stredná |
| 13 | Výkon/A11y | Obsah vrátane H1 skrytý (`opacity:0`) do hydratácie | `[data-reveal]` | Reveal iba pod hero, s triedou `js` na `<html>` ako fallback | Stredná |
| 14 | Výkon | Parallax cez React state rerenderuje celú stránku | Expertíza, `index.tsx:308` | ref + rAF alebo CSS scroll-driven animation | Stredná |
| 15 | Dizajn | Instrument Serif sa načíta, no nepoužíva; kurzíva vypnutá `!important` | `styles.css` | Rozhodnúť o fonte: použiť serif pre display, alebo ho nenačítať | Stredná |
| 16 | Mobil | Inputy 14 px, iOS zoom | Formulár | `font-size: 16px` | Stredná |
| 17 | Tablet | Horizontálny scroll (šípka karuselu mimo viewportu) | 768 px; `tablet-full.jpg` | Šípky dovnútra na < 1280 px | Stredná |
| 18 | Prístupnosť | Radio/input kontrast ~1,5:1, chýba fokus na radio | Formulár | Okraj ≥ 3:1, `focus-visible` ring | Stredná |
| 19 | Prístupnosť | Karusel: neaktívne snímky v tab poradí, bez `aria-live` | Referencie | `inert` na neaktívne snímky, ARIA vzor karuselu | Stredná |
| 20 | Prístupnosť | Otvorený akordeón služieb: tlačidlo bez názvu | Služby | Názov ponechať v tlačidle (vizuálne skrytý) | Stredná |
| 21 | SEO | Chýba canonical, sitemap, robots, JSON-LD (Organization, FAQPage) | `<head>` | Doplniť | Stredná |
| 22 | SEO | Nadpisy sekcií ako H3 | Celá stránka | Sekcie H2, položky H3 | Stredná |
| 23 | Texty | Chybné čiarky, „Optimal“ namiesto „Komplex“, rovnaký text dvoch hotspotov | Hero, Služby, Balík 03 | Korektúra | Stredná |
| 24 | Konverzie | Telefón a e-mail nie sú klikateľné | `/#kontakt` | `tel:` a `mailto:` | Stredná |
| 25 | UX | Nekonzistentné číslovanie sekcií (chýba 01, 06, dvakrát 03) | Eyebrow nadpisy | Prečíslovať alebo číslovanie zrušiť | Nízka |
| 26 | Texty | Miešanie SK/EN, slang „cieľovka“ | Footer, balíky, formulár | Zjednotiť terminológiu | Nízka |
| 27 | Animácie | Nekonečný `animate-ping`, hover 700 ms, reveal 0,8 s | Hero, Balíky | Ping 2× a stop, hover 200–300 ms, reveal 0,4–0,5 s | Nízka |
| 28 | Prístupnosť | Sociálne ikony `aria-label="social"`, `href="#"` | Footer | Reálne URL a názvy sietí | Nízka |
| 29 | UX | Hlavička nie je sticky | Celá stránka | Sticky header s CTA po scrolle | Nízka |
| 30 | Brand | Logo iba ako text, chýba favicon | Header, footer | Vlastný znak + favicon sada | Nízka |

## 12. Stav po redizajne (4. 11. 2026)

Prémiový vizuálny redizajn podľa inšpirácií CORWIN a Stellar je hotový, štruktúra webu ostala zachovaná. Detail je vo [vystupy/vizualny-redizajn.md](vystupy/vizualny-redizajn.md), screenshoty v `screenshots/redizajn/`.

V kóde sú vyriešené zistenia **5 až 24 a 26 až 29** (navigácia, mobilné menu, typografia, hero, obrázky a WebP, meta a SEO, `lang`, reveal, parallax, inputy, tablet scroll, kontrast formulára, karusel, akordeón, korektúra, `tel:`/`mailto:`, číslovanie, animácie, sociálne ikony, sticky header). Formulár je funkčný na strane klienta, odoslanie vyžaduje nastaviť `VITE_CONTACT_ENDPOINT`.

**Otvorené (vyžaduje obsah od klienta):** 1 (lorem ipsum, kontakty), 2 (reálne referencie), 30 (logo, favicon), OG obrázok, canonical (doména).

## 13. Ďalšie kroky

1. **Obsahový sprint (klient):** reálne texty balíkov, referencie s povolením, logá klientov, kontakty, fotky tímu, 2 až 3 prípadové štúdie s číslami.
2. **Technický fix (1 až 2 dni):** body 3 až 11 a 16 až 24 zo zoznamu: typografia v `styles.css`, mobilné menu, formulár a backend, optimalizácia obrázkov, meta a `lang`, kotvy.
3. **Rozhodnutie o type písma:** dostať do kódu pôvodný zámer (serif display + kurzíva) alebo ostať pri Inter a zjednodušiť načítanie fontov.
4. **SEO rozšírenie:** podstránky služieb (virtuálne prehliadky, weby, branding, kampane), prípadové štúdie, JSON-LD.
5. **Redizajn (fáza 8 v CLAUDE.md):** design tokeny (farby už existujú), mobilný hero bez hotspotov, sticky CTA. Návrhy budú vo `vystupy/`.
6. Po opravách zopakovať meranie: Lighthouse (mobil), WCAG kontrast, test na reálnom iPhone a Androide.
