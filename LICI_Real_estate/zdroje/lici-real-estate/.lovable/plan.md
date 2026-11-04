## Cieľ

Zjednotiť typografiu všetkých `<h3>` nadpisov na **Inter Light (300)** s `line-height: 0.9` a `letter-spacing: 1px`.

## Zmeny

**`src/styles.css`** — pridať globálne pravidlo:

```css
h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  line-height: 0.9;
  letter-spacing: 1px;
}
```

**`src/routes/index.tsx`** — z H3 v Expertíza banneri odstrániť inline `style` a `font-sans` triedu, aby globálne pravidlo prevzalo kontrolu (zostanú len veľkosť/farba).

## Poznámka

Pravidlo platí globálne pre všetky `<h3>` na stránke (Expertíza, FAQ, kontakt, partneri…). Ak chcete iba pre Expertíza H3, dajte vedieť.
