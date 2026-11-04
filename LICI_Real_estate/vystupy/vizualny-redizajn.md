# LIČI: Zhodnotenie vizuálu a prémiový redizajn

**Dátum:** 4. 11. 2026
**Inšpirácie:** CORWIN (corwin.sk) a Stellar Management (NYC), `zdroje/inspiracia/`
**Pred:** `screenshots/desktop-*.{png,jpg}`, `screenshots/mobil-*`, `screenshots/tablet-*`
**Po:** `screenshots/redizajn/desktop-*`, `.../tablet-*`, `.../mobil-*`
**Kód:** `zdroje/lici-real-estate/src/routes/index.tsx`, `src/styles.css`, `src/routes/__root.tsx`

Štruktúra webu ostala nezmenená: Hero → Služby → Expertíza → Balíčky → Proces → Klienti → Referencie → FAQ → Kontakt → Pätička. Obsah sekcií (texty, balíky, ceny, FAQ) ostal zachovaný. Upravené boli iba vizuál, rozloženie v rámci sekcií, interakcie a zjavné chyby.

---

## 1. Zhodnotenie pôvodného vizuálu

| Oblasť | Stav pred | Hodnotenie |
|---|---|---|
| Farby | Krémová, čokoládová, meď | Dobrý základ, prémiový a teplý. Problém je v rytme: všetky sekcie mali takmer rovnakú krémovú, stránka splývala. |
| Typografia | Všetko Inter, akcenty iba zafarbené, H1 zamrznutý na 60 px | Najväčšia slabina. Chýbal kontrast a „hlas“. Prémiové realitné weby stoja na kontraste groteskového nadpisu a serifovej kurzívy. |
| Hero | Centrovaný text, 5 pulzujúcich hotspotov, malé CTA | Pôsobil ako šablóna. Hotspoty vizuálne súperili s nadpisom, na mobile ho prekrývali. |
| Služby | Tmavé pruhy s fotkou v pozadí | Pútavé, ale ťažké. Šesť tmavých blokov za sebou unavuje, text v pruhoch bol malý. |
| Balíčky | Karty, na hover všetky stmavnú | Zvýraznený balík strácal odlíšenie, prechody 700 ms pôsobili ťažkopádne. |
| Proces | Skrytý akordeón | Štyri krátke kroky schované za klikmi, slabá vizuálna hodnota. |
| Klienti | Textová mriežka s prerušovanými čiarami | Pôsobilo ako wireframe. |
| Referencie | Karta + fotka, šípky mimo layoutu | Šípky pretekali (horizontálny scroll), citát vizuálne nevynikol. |
| Kontakt | Svetlý formulár so sivými poliami | Polia pôsobili „disabled“, sekcia nemala váhu hlavného konverzného bodu. |
| Pätička | Opakovanie kontaktu, malé logo | Bez dojmu, chýbal záver stránky. |

**Celkovo:** solídna paleta, ale slabá typografia, plochý rytmus a šablónovité vzory. Výsledok pôsobí skôr ako šablóna než ako butikové štúdio.

## 2. Čo sme si zobrali z inšpirácií

**Stellar Management**
- **Grotesk + serifová kurzíva v jednom nadpise** („We help New Yorkers find *home*“) → „Rozumieme marketingu, ktorý predáva *nehnuteľnosti*“, akcent v každom nadpise sekcie.
- **Hero zarovnaný vľavo dole** s veľkým nadpisom a **plávajúcou kartou vpravo dole** (Approach card) → karta „Naše služby 06“ s obrázkom.
- **Editoriálny whitespace**, veľké nadpisy, málo prvkov na obrazovke.
- **Tenké deliace linky** (facts grid), číslované zoznamy.
- **Veľké záverečné CTA** („Let's talk Real Estate“) → tmavá sekcia Kontakt s nadpisom 80 px.

**CORWIN**
- **Číslované zoznamy s tenkými linkami** (mestotvorné princípy) → akordeón služieb 01 až 06.
- **Štítky na projektových kartách** („Naše projekty“) → štítok „Projekt“ v referenciách.
- **Sticky „Let's talk“ CTA** → plávajúce tlačidlo „Poďme sa rozprávať“ po prescrollovaní hero.
- **Zemité tóny a fotografia architektúry** potvrdzujú existujúcu paletu LIČI.

## 3. Čo bolo zmenené

### Dizajnový systém
- **Typografia:** Inter Tight Light na nadpisy (tracking −3 %), Instrument Serif Italic na akcenty, Inter na text. Nadpisy sú konečne responzívne (H1: 44 / 60 / 92 px).
- **Farby:** pomenované tokeny `espresso #1A120C`, `cocoa #21160E`, `cream #F5F0E8`, `sand #EAE1D5`, `copper #955A38`, `copper-light #D29A70`.
- **Rytmus sekcií:** tmavá (hero) → krémová → tmavá foto (Expertíza) → krémová → piesková (Proces) → krémová → krémová → piesková (FAQ) → tmavá (Kontakt + pätička).
- **Eyebrow labely:** jednotné „01 —— SLUŽBY“, číslovanie 01 až 08 bez dier a duplicít.
- **Jemný film grain** na tmavých plochách (dojem tlače, prémiová textúra).
- **Tlačidlá:** pill s kruhovou medenou šípkou, jednotné na celom webe.

### Sekcie
- **Navigácia:** fixná, priehľadná, po scrolle s blur pozadím. Odkazy vedú na existujúce sekcie, Kontakt ako outline pill. **Mobilné menu** na celú obrazovku s veľkou typografiou.
- **Hero:** celá výška, gradient zdola, text vľavo dole, plávajúca karta vpravo. Hotspoty sú len na desktope, sklenené (blur), pulz 3× a stop, popis aj pri fokuse z klávesnice. H1 sa zobrazí okamžite (bez reveal animácie).
- **Služby:** editoriálny číslovaný zoznam s tenkými linkami. Otvorená položka ukáže popis, štítky, odkaz „Konzultovať túto službu“ a fotku s jemným zoom-out.
- **Expertíza:** veľký statement 84 px zarovnaný vľavo, linka, krátky text a CTA (namiesto „CTA pôjde SEM“).
- **Balíčky:** svetlé karty s jemným tieňom, zvýraznený balík tmavý s grain textúrou, cena v oddelenom pruhu. CTA predvyplní balík vo formulári a odroluje naň.
- **Proces:** 4 stále viditeľné kroky v mriežke s veľkými serifovými číslami 01 až 04.
- **Klienti:** pomalý nekonečný marquee názvov s medenými ✦, pauza na hover, pre čítačky statický zoznam.
- **Referencie:** veľký serifový citát, osoba s hodnotením v pätičke karty, fotka projektu so štítkom. Ovládanie (počítadlo 01/03, linky, šípky 48 px) je mimo obrázka.
- **FAQ:** tenké linky namiesto kariet, väčšie otázky, okrúhle +/×.
- **Kontakt:** tmavá sekcia, kontakty ako klikateľné riadky (`mailto:`, `tel:`), formulár s podčiarknutými poľami: meno, telefón, e-mail, segment (pill voľba), balík, správa a súhlas GDPR.
- **Pätička:** záverečný claim so serifovým akcentom, navigácia, sociálne siete s názvami a obrovský wordmark „LIČI.“ ako podpis stránky.

### Opravy z analýzy (súčasť redizajnu)
- Obrázky: 10,5 MB PNG z Lovable hostingu → **0,35 MB WebP v repozitári**, `srcset` pre hero, lazy loading pre služby.
- `lang="sk"`, odstránené Lovable placeholder meta tagy, `og:locale`, `theme-color`, JSON-LD `FAQPage`.
- Typografia: CSS pravidlá nadpisov presunuté do `@layer base`, Tailwind veľkosti fungujú.
- Parallax bez React renderu (rAF + ref), rešpektuje `prefers-reduced-motion`.
- Reveal animácie: 0,5 s, obsah sa skryje iba ak beží JS, s 3 s fallbackom.
- Prístupnosť: skip link, `aria-controls` a nadpisy v akordeóne, `inert` na neaktívnych snímkach karuselu, popisy hotspotov pri fokuse, dotykové ciele ≥ 44 px, inputy 16 px.
- 404 a chybová stránka po slovensky.
- Korektúra: čiarky v hero a službách, „Optimal“ → „Komplex“, slovenské názvy vo features balíka 03, unikátny text hotspotu Virtuálna prehliadka.

## 4. Čo ešte treba doplniť (mimo kódu)

| # | Odporúčanie | Prečo | Priorita |
|---|---|---|---|
| 1 | Reálny obsah balíkov namiesto lorem ipsum | Bez obsahu sú ceny nepresvedčivé | Vysoká |
| 2 | Reálne referencie a logá klientov (SVG) v marquee | Vymyslené recenzie sú právne riziko; logá pôsobia prémiovejšie ako text | Vysoká |
| 3 | Napojiť formulár: nastaviť `VITE_CONTACT_ENDPOINT` (napr. Formspree, Make, vlastné API/CRM) | Bez neho formulár zobrazí hlášku „nie je napojený“ | Vysoká |
| 4 | Reálne kontakty, adresa, IČO, zásady ochrany osobných údajov | Dôvera, GDPR | Vysoká |
| 5 | Vlastná fotografia/video z reálnych projektov (Stellar má video v hero) | Stock/AI fotky znižujú dôveryhodnosť, video hero výrazne zvýši prémiový dojem | Stredná |
| 6 | Pás s číslami (Stellar „Key figures“) v Expertíze: projekty, predané jednotky, priemerný čas predaja | Najsilnejší dôkaz pre developerov, doplniť iba s reálnymi číslami | Stredná |
| 7 | Logo: vlastný znak alebo upravený wordmark (napr. serifové „Č“ s medenou bodkou) | Teraz je to iba text v Inter Tight | Stredná |
| 8 | OG obrázok 1200×630 a favicon sada | Zdieľanie na LinkedIn/FB, profesionálny dojem | Stredná |
| 9 | Prípadové štúdie ako podstránky (CORWIN „Naše projekty“) | SEO a dôkaz výsledkov, nemení štruktúru homepage | Nízka |

## 5. Technické poznámky

- Lokálne spustenie: `npx vite dev --config vite.analysis.config.ts` (proxy na Lovable je teraz potrebná už iba pre staré `.asset.json` súbory, ktoré sa nepoužívajú; ich odstránenie je bezpečné po overení v Lovable).
- Projekt je napojený na Lovable. Po pushnutí do pripojenej vetvy sa zmeny prejavia v editore Lovable.
- Pôvodný `index.tsx` je uložený v `vystupy/povodny-index.tsx`, pôvodný vzhľad ukazujú screenshoty v `screenshots/`.
