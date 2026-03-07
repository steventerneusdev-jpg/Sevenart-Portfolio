# 📝 Aide-mémoire - Modifications rapides

## 🎬 Modifier les vidéos du portfolio

**Fichier** : `src/App.jsx`  
**Ligne** : ~8

```javascript
const VIDEO_DATA = [
  {
    id: 1,
    title: "Nom de votre vidéo",
    category: "Publicité",              // Publicité, Court-métrage, ou Événementiel
    thumbnail: "URL_ou_chemin_image",   // Miniature de la vidéo
    embedId: "ID_YOUTUBE",              // Ex: si URL = youtube.com/watch?v=ABC123, l'ID est ABC123
    description: "Description du projet"
  },
  // Dupliquez ce bloc pour ajouter plus de vidéos
];
```

---

## 📧 Changer les coordonnées

**Fichier** : `src/App.jsx`

### Email (2 endroits)
- **Ligne ~129** (Hero, bloc contact) : `sevenart.ts@gmail.com`
- **Ligne ~293** (Footer) : `sevenart.ts@gmail.com`

### Instagram (2 endroits)
- **Ligne ~123** (Hero) : `@sevenart.ts` et lien
- **Ligne ~301** (Footer) : `@sevenart.ts` et lien

**Recherchez dans le fichier** : `Ctrl+F` → `sevenart.ts` → Remplacez tous

---

## 🖼️ Changer les images

### Logo (dans la navbar)
**Remplacez** : `src/assets/logo.png`  
**Par** : Votre nouveau logo (même nom ou changez l'import ligne 4)

### Portrait (Hero section)
**Remplacez** : `src/assets/portrait.jpeg`  
**Par** : Votre nouvelle photo (même nom ou changez l'import ligne 5)

### Miniatures des vidéos
**Option 1** - Mettez dans `src/assets/` puis :
```javascript
import thumb1 from './assets/video1-thumb.jpg';
// ...
thumbnail: thumb1,
```

**Option 2** - Mettez dans `public/thumbnails/` puis :
```javascript
thumbnail: "/thumbnails/video1.jpg",
```

---

## 🎨 Changer les couleurs

**Fichier** : `src/App.jsx`

Recherchez : `cyan-` (il y a ~30 occurrences)  
Remplacez par : `blue-`, `purple-`, `emerald-`, `rose-`, etc.

### Exemples
- `cyan-500` → `blue-500` (bleu)
- `cyan-400` → `purple-400` (violet)
- `cyan-500` → `emerald-500` (vert)

---

## ✏️ Modifier les textes

### Nom et slogan (Hero)
**Fichier** : `src/App.jsx`  
**Lignes** : 104-117

```javascript
<h1>Steven Terneus</h1>           // ← Votre nom
<h2>L'art au-delà du regard</h2>  // ← Votre slogan
<p>Photographe & Vidéaste...</p>  // ← Votre description
```

### Titre du Footer
**Ligne** : ~280

```javascript
<h2>Parlons <span>Projet</span></h2>  // ← Changez ici
```

---

## 🔧 Ajouter une catégorie de vidéo

**Fichier** : `src/App.jsx`  
**Ligne** : ~54

```javascript
const CATEGORIES = ["Tous", "Publicité", "Court-métrage", "Événementiel", "Nouvelle"];
                                                                            // ↑ Ajoutez ici
```

Puis ajoutez des vidéos avec cette catégorie dans `VIDEO_DATA`.

---

## 📱 Ajouter d'autres réseaux sociaux

**Fichier** : `src/App.jsx`  
**Ligne** : ~298 (dans le Footer)

```javascript
// Importez l'icône en haut du fichier
import { Instagram, Mail, Facebook, Linkedin, Youtube } from 'lucide-react';

// Ajoutez le lien
<motion.a href="https://..." ...>
  <Facebook className="..." size={32} />
</motion.a>
```

---

## 🎯 Snippets utiles

### Ajouter une nouvelle vidéo
```javascript
{
  id: 7,  // Incrémentez l'ID
  title: "Votre titre",
  category: "Publicité",
  thumbnail: "https://...",
  embedId: "ABC123",
  description: "Votre description"
},
```

### Nouveau lien dans le Hero
```javascript
<motion.div className="flex items-center gap-4 text-zinc-300 hover:text-cyan-400 transition-colors" whileHover={{ x: 5 }}>
  <VotreIcone size={24} />
  <a href="votre-lien" className="text-lg font-medium">Votre texte</a>
</motion.div>
```

---

## 🚀 Commandes terminal

```bash
# Démarrer le serveur (déjà actif)
npm run dev

# Arrêter le serveur
Ctrl + C dans le terminal

# Build pour production
npm run build

# Installer une nouvelle dépendance
npm install nom-du-package
```

---

## 🐛 Problèmes courants

### Les images ne s'affichent pas
Vérifiez que les chemins sont corrects :
- Images dans `src/assets/` → import en haut du fichier
- Images dans `public/` → chemin `/nom-image.jpg`

### Erreur de compilation
- Vérifiez les imports en haut de `App.jsx`
- Vérifiez que toutes les balises sont fermées
- Relancez : `npm run dev`

### Changements non visibles
- Le hot reload est automatique
- Si ça ne marche pas : rafraîchissez le navigateur (Cmd+R ou Ctrl+R)

---

## 📍 Liens des fichiers importants

• **Code principal** : `src/App.jsx` (lignes 1-350)
• **Styles** : `src/index.css` (lignes 1-21)
• **Config Tailwind** : `tailwind.config.js`
• **Images** : `src/assets/`

---

## ✅ Checklist personnalisation

- [ ] Remplacer les 6 vidéos exemples
- [ ] Ajouter vos miniatures
- [ ] Vérifier email et Instagram
- [ ] Tester la modal vidéo
- [ ] Tester tous les filtres
- [ ] Vérifier sur mobile
- [ ] Build et déployer

---

🎉 Votre portfolio est prêt !

Ouvrez : http://localhost:5174

═══════════════════════════════════════════════════════════════
