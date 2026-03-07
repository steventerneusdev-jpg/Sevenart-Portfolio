# Sevenart Portfolio - Steven Terneus

Portfolio professionnel minimaliste de vidéaste et photographe, créé avec React, Tailwind CSS et Framer Motion.

## 🎨 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour créer l'interface utilisateur
- **Vite** - Outil de build rapide et moderne
- **Tailwind CSS** - Framework CSS utility-first pour le design
- **Framer Motion** - Bibliothèque d'animations React
- **Lucide React** - Icônes modernes et élégantes

## 🚀 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur à l'adresse `http://localhost:5174`

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 🎯 Fonctionnalités

- ✨ Design minimaliste et épuré
- 🎨 Thème cyan sur fond zinc-950
- 🌊 Animations fluides avec Framer Motion
- 📱 Compatible mobile, tablette et desktop
- 🎬 Galerie vidéo avec filtres par catégorie
- 📧 Section contact avec liens directs
- 🖼️ Images optimisées (logo + portrait)

## 🎨 Design

### Palette de couleurs
- **Fond principal** : zinc-950 (noir profond)
- **Accent** : cyan-500 (#06b6d4)
- **Texte** : zinc-100 à zinc-400
- **Bordures** : zinc-800

### Sections
1. **Navbar** - Navigation fixe avec logo Sevenart
2. **Hero** - Grande section avec nom, slogan et portrait
3. **Portfolio** - Galerie vidéos filtrables
4. **Footer/Contact** - Section contact avec email et réseaux sociaux

## 📁 Structure du projet

```
sevenart-portfolio/
├── src/
│   ├── assets/
│   │   ├── logo.png         # Logo Sevenart
│   │   └── portrait.jpeg    # Portrait Steven Terneus
│   ├── App.jsx              # Application complète
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 📝 Personnalisation

### Modifier les vidéos du portfolio

Dans `src/App.jsx`, éditez le tableau `VIDEO_DATA` :

```javascript
const VIDEO_DATA = [
  {
    id: 1,
    title: "Titre de votre vidéo",
    category: "Publicité", // ou "Court-métrage", "Événementiel"
    thumbnail: "URL_de_votre_miniature",
    embedId: "ID_YOUTUBE", 
    description: "Description de votre projet"
  },
  // ...
];
```

### Changer les informations de contact

Les informations sont déjà configurées avec vos vraies coordonnées :
- **Email** : sevenart.ts@gmail.com
- **Instagram** : @sevenart.ts

### Remplacer les images

Placez vos images dans `src/assets/` et importez-les dans `App.jsx` :

```javascript
import monImage from './assets/mon-image.jpg';
```

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build le projet : `npm run build`
2. Glissez le dossier `dist/` sur Netlify

### GitHub Pages
```bash
npm run build
# Puis déployez le contenu du dossier dist/
```

## 👤 Contact

- **Nom** : Steven Terneus
- **Société** : Sevenart
- **Email** : sevenart.ts@gmail.com
- **Instagram** : [@sevenart.ts](https://instagram.com/sevenart.ts)
- **Slogan** : L'art au-delà du regard

---

© 2026 Sevenart - Tous droits réservés.
# Portfolio-Videaste
