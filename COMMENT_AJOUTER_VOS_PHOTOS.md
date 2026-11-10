# 📸 Comment ajouter vos photos au carousel

## 🎯 Résumé technique

✅ **Dossier créé** : `src/assets/carousel-photos/`  
✅ **Format recommandé** : WebP ou JPG  
✅ **Poids par image** : 80-150 KB  
✅ **Dimensions** : 1200-1600px de largeur  
✅ **Nombre idéal** : 12-15 images  
✅ **Opacité** : 25% (déjà configuré)  
✅ **Animation** : Défilement lent gauche → droite (40 secondes par cycle)

---

## 📋 Étapes pour ajouter vos photos

### 1️⃣ Préparez vos images
- Optimisez-les avec **TinyPNG** ou **Squoosh** (voir IMAGES_CAROUSEL_INFO.md)
- Nommez-les simplement : `photo-01.webp`, `photo-02.webp`, etc.
- Placez-les dans `src/assets/carousel-photos/`

### 2️⃣ Modifiez le fichier App.jsx

Ouvrez `src/App.jsx` et cherchez le composant `PhotoCarousel` (vers la ligne 381).

**Remplacez cette section** :

```javascript
const PhotoCarousel = () => {
  // Pour le moment, utilisez des images placeholder ou les vôtres
  // Ajoutez vos images dans src/assets/carousel-photos/
  const carouselImages = [
    // Exemple : import photo1 from "./assets/carousel-photos/photo-01.webp";
    // Ensuite ajoutez-les ici : photo1, photo2, photo3, etc.
    // Pour l'instant, on utilise des placeholders
  ];
```

**Par ceci** (exemple avec 12 images) :

```javascript
// Importez vos images EN HAUT du fichier, après les autres imports
import photo1 from "./assets/carousel-photos/photo-01.webp";
import photo2 from "./assets/carousel-photos/photo-02.webp";
import photo3 from "./assets/carousel-photos/photo-03.webp";
import photo4 from "./assets/carousel-photos/photo-04.webp";
import photo5 from "./assets/carousel-photos/photo-05.webp";
import photo6 from "./assets/carousel-photos/photo-06.webp";
import photo7 from "./assets/carousel-photos/photo-07.webp";
import photo8 from "./assets/carousel-photos/photo-08.webp";
import photo9 from "./assets/carousel-photos/photo-09.webp";
import photo10 from "./assets/carousel-photos/photo-10.webp";
import photo11 from "./assets/carousel-photos/photo-11.webp";
import photo12 from "./assets/carousel-photos/photo-12.webp";

const PhotoCarousel = () => {
  const carouselImages = [
    photo1, photo2, photo3, photo4, photo5, photo6,
    photo7, photo8, photo9, photo10, photo11, photo12
  ];
```

### 3️⃣ Modifiez la boucle d'affichage

**Cherchez ces lignes** (vers la ligne 408) :

```javascript
{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
  <div
    key={`img-${i}`}
    className="h-screen w-[480px] shrink-0"
    style={{ opacity: 0.25 }}
  >
    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
      {/* Placeholder - remplacez par vos vraies images */}
      <span className="text-sm">Photo {i}</span>
    </div>
  </div>
))}
```

**Remplacez par** :

```javascript
{carouselImages.map((img, i) => (
  <div
    key={`img-${i}`}
    className="h-screen w-[480px] shrink-0"
    style={{ opacity: 0.25 }}
  >
    <img
      src={img}
      alt={`Photo ${i + 1}`}
      className="w-full h-full object-cover"
    />
  </div>
))}
```

**Faites la même chose pour la deuxième boucle** (quelques lignes plus bas, celle avec `img-repeat-${i}`)

### 4️⃣ Ajustez la durée d'animation (optionnel)

Pour modifier la vitesse de défilement, changez la valeur `duration` (ligne ~399) :

```javascript
transition={{
  x: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 40, // ← Changez cette valeur
    ease: "linear",
  },
}}
```

- **Plus lent** : augmentez (ex: 50, 60)
- **Plus rapide** : diminuez (ex: 30, 25)

---

## 🎨 Personnalisation du texte

Le texte actuel est :

> **Titre** : "Capturer l'instant, raconter l'émotion"  
> **Description** : "Chaque image raconte une histoire unique. De la photographie événementielle aux portraits lifestyle, je capture l'authenticité de chaque moment avec sensibilité et créativité."

Pour le modifier, éditez les lignes 455-474 dans `src/App.jsx`.

---

## ✅ Test

1. Sauvegardez `App.jsx`
2. Le serveur Vite recharge automatiquement
3. Scrollez jusqu'à la nouvelle section
4. Vérifiez que les images défilent et que le texte est lisible

---

## 🚨 Problèmes courants

**Images trop lourdes ?**
→ Optimisez-les avec TinyPNG ou réduisez leur taille

**Animation saccadée ?**
→ Réduisez le nombre d'images ou diminuez leur poids

**Images déformées ?**
→ Utilisez des formats paysage (16:9 ou 3:2)

**Texte illisible ?**
→ Ajustez l'overlay noir (ligne 448, changez `bg-black/40` en `bg-black/60`)

---

💡 **Besoin d'aide ?** Consultez `IMAGES_CAROUSEL_INFO.md` pour plus de détails techniques.
