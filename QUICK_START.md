# 🚀 Démarrage Rapide - Portfolio Sevenart

## ✅ Le site est déjà en ligne !

Votre portfolio tourne actuellement sur :

```
http://localhost:5174
```

**Ouvrez cette URL dans votre navigateur pour le voir ! 🎉**

---

## 📋 Ce qui a été fait

✅ Design minimaliste basé sur votre code  
✅ Couleurs zinc-950 + cyan-500  
✅ Vos vraies infos (sevenart.ts@gmail.com, @sevenart.ts)  
✅ Votre logo et portrait intégrés depuis `src/assets/`  
✅ Animations Framer Motion ajoutées  
✅ Structure simplifiée (tout dans `App.jsx`)  

---

## 📂 Vos images

```
src/assets/
├── logo.png ............ Votre logo Sevenart (dans navbar)
└── portrait.jpeg ....... Votre portrait (dans Hero)
```

Ces images sont déjà **correctement importées** dans le code.

---

## ✏️ Modifier les vidéos du portfolio

Ouvrez `src/App.jsx` et trouvez le tableau `VIDEO_DATA` (ligne ~8).

Remplacez les exemples par vos vraies vidéos :

```javascript
const VIDEO_DATA = [
  {
    id: 1,
    title: "Nom de votre vidéo",
    category: "Publicité",           // ou "Court-métrage", "Événementiel"
    thumbnail: "URL_miniature",       // Image d'aperçu
    embedId: "ID_YOUTUBE",            // ID de votre vidéo YouTube
    description: "Description"
  },
  // Ajoutez autant de vidéos que vous voulez
];
```

### Comment trouver l'ID YouTube ?

URL YouTube : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`  
→ L'ID est : `dQw4w9WgXcQ`

---

## 🎨 Ajouter vos miniatures de vidéos

### Option 1 : Depuis assets
Mettez vos miniatures dans `src/assets/` puis :

```javascript
import thumb1 from './assets/video1-thumb.jpg';

const VIDEO_DATA = [
  {
    thumbnail: thumb1,  // Utilisez l'import
    // ...
  }
];
```

### Option 2 : Depuis public
Mettez vos images dans `public/thumbnails/` puis :

```javascript
thumbnail: "/thumbnails/video1.jpg",  // Chemin direct
```

### Option 3 : URLs externes
Gardez les URLs Unsplash ou utilisez vos propres URLs.

---

## 🎯 Structure du code

Tout est dans `src/App.jsx` :
- Ligne 8-52 : `VIDEO_DATA` (vos vidéos)
- Ligne 54 : `CATEGORIES` (filtres)
- Ligne 60-92 : `Navbar` (navigation)
- Ligne 94-175 : `Hero` (section accueil)
- Ligne 177-235 : `PortfolioGallery` (galerie vidéos)
- Ligne 237-270 : `VideoModal` (popup vidéo)
- Ligne 272-320 : `Footer` (contact)
- Ligne 325+ : `App` (composant principal)

---

## 🌐 Déployer en production

### 1. Build le projet
```bash
npm run build
```

### 2. Déployer sur Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

Ou connectez votre repo GitHub à Vercel pour des déploiements automatiques.

---

## 🔧 Commandes utiles

```bash
# Développement
npm run dev          # Lance le serveur (déjà actif)

# Production
npm run build        # Build pour production
npm run preview      # Prévisualise le build

# Nettoyage
rm -rf node_modules package-lock.json
npm install          # Réinstalle tout
```

---

## ✨ Animations Framer Motion

Les animations suivantes ont été ajoutées à votre code :

- Navbar qui glisse du haut
- Textes du Hero qui apparaissent progressivement
- Effet hover sur tous les boutons (scale + translate)
- Cartes du portfolio qui apparaissent au scroll
- Background animé (pulsation)
- Halo lumineux sur le portrait
- Modal avec transition smooth

---

## 📝 Modifications rapides

### Changer votre email
Recherchez `sevenart.ts@gmail.com` dans `App.jsx` et remplacez (2 occurrences).

### Changer votre Instagram
Recherchez `sevenart.ts` et remplacez par votre handle.

### Modifier le slogan
Ligne ~114 : `"L'art au-delà du regard"`

### Changer les couleurs cyan
Recherchez `cyan-` dans tout le fichier et remplacez par une autre couleur Tailwind (ex: `blue-`, `purple-`, `emerald-`).

---

## 🎨 Palette de couleurs actuelle

```
Background : zinc-950  (#09090b)
Texte      : zinc-100  (#f4f4f5)
Gris       : zinc-400  (#a1a1aa)
Accent     : cyan-500  (#06b6d4)
Hover      : cyan-400  (#22d3ee)
```

---

## 📦 Dépendances installées

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.344.0",
  "tailwindcss": "^3.4.1",
  "vite": "^5.1.4"
}
```

---

## ✅ Checklist de finalisation

- [ ] Remplacer les 6 vidéos exemples par vos vraies vidéos
- [ ] Ajouter vos miniatures de vidéos
- [ ] Vérifier que les liens Instagram/Email fonctionnent
- [ ] Tester sur mobile, tablette, desktop
- [ ] Optimiser les images (TinyPNG)
- [ ] Build et déployer (`npm run build` + Vercel)

---

## 🎬 Résultat final

Votre portfolio Sevenart est maintenant :

✨ **Minimaliste** - Design épuré et professionnel  
🎨 **Cohérent** - Palette zinc + cyan  
⚡ **Rapide** - Build avec Vite  
🌊 **Animé** - Framer Motion fluide  
📱 **Responsive** - Mobile first  
🔗 **Personnel** - Vos vraies infos  
🖼️ **Imagé** - Votre logo et portrait  

---

**Consultez CHANGES_APPLIED.md pour plus de détails sur les modifications.**

**Ouvrez http://localhost:5174 maintenant ! 🚀**
