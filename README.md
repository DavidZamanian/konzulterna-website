# Företag Konzulterna iGrit AB - Website

En modern webbplats för Företag Konzulterna iGrit AB, byggd med React, TypeScript och Vite.

## 🚀 Funktioner

- **Modern design**: Responsiv design med moderna CSS-tekniker
- **Tjänstepresentation**: Tydlig presentation av företagets tjänster
- **Kontaktformulär**: Funktionellt kontaktformulär med e-postfunktionalitet
- **E-postskydd**: E-postadresser skyddade mot skrapning
- **Integritetspolicy**: Separat sida för GDPR-compliance
- **SEO-optimerad**: Inkluderar sitemap och meta-tags
- **Mobilanpassad**: Fullt responsiv design för alla enheter

## 📧 E-postfunktionalitet

Kontaktformuläret skickar e-post till `igritoeer@gmail.com` med följande funktioner:

- **Skydd mot skrapning**: E-postadressen är obfuskerad i koden
- **Mailto-integration**: Öppnar användarens e-postklient med förifylld information
- **EmailJS-support**: Möjlighet att konfigurera direkt e-postsändning (se `EMAIL_SETUP.md`)
- **Fallback-system**: Automatisk fallback till mailto om EmailJS inte är konfigurerat

För avancerad e-postfunktionalitet, se dokumentationen i `EMAIL_SETUP.md`.

## 🛠️ Teknisk stack

- **React 18** - Frontend ramverk
- **TypeScript** - Typsäkerhet
- **Vite** - Build tool och dev server
- **CSS3** - Modern styling med CSS-variabler
- **React Router** - Routing mellan sidor
- **ESLint** - Kodkvalitet
- **Prettier** - Kodformatering

## 📦 Installation

1. Klona repot:

```bash
git clone https://github.com/davidzamanian/konzulterna-website.git
cd konzulterna-website
```

2. Installera dependencies:

```bash
yarn install
```

3. Starta development server:

```bash
yarn dev
```

4. Öppna webbläsaren på `http://localhost:5173/konzulterna-website/`

## 📋 Tillgängliga kommandon

- `yarn dev` - Startar development server
- `yarn build` - Bygger produktionsversion
- `yarn preview` - Förhandsgranskar byggd version
- `yarn lint` - Kör ESLint
- `yarn format` - Formaterar kod med Prettier
- `yarn deploy` - Deployer till GitHub Pages

## 🚀 Deployment

För att deploya till GitHub Pages:

1. Bygg projektet:

```bash
yarn build
```

2. Deploya:

```bash
yarn deploy
```

## 📝 Projektstruktur

```
src/
├── pages/
│   ├── HomePage.tsx        # Startsida med alla tjänster
│   ├── HomePage.css        # Styling för startsida
│   ├── PrivacyPolicy.tsx   # Integritetspolicy
│   └── PrivacyPolicy.css   # Styling för integritetspolicy
├── App.tsx                 # Huvudkomponent med routing
├── main.tsx               # Entry point
└── index.css              # Globala stilar
```

## 🎨 Design

Webbplatsen använder ett modernt designsystem med:

- Konsistenta färger och typografi
- Skuggor och övergångar för bättre UX
- Responsiv grid-layout
- Tillgänglighetsanpassade formulär
- Hover-effekter och animationer

## 📱 Responsivitet

- **Desktop**: Full layout med side-by-side formulär
- **Tablet**: Anpassad grid-layout
- **Mobile**: Staplad layout med optimerad navigation

## 🔒 GDPR Compliance

- Tydlig integritetspolicy
- Informativ text om personuppgiftshantering
- Länkning mellan formulär och policy
- Strukturerad information om användarrättigheter

## 📧 Kontakt

För frågor om webbplatsen, kontakta utvecklaren via GitHub.

## 📄 Licens

Detta projekt är licensierat under MIT License.
