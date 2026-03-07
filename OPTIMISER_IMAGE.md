# 🖼️ Optimiser votre image portrait

## ⚠️ Problème actuel

Votre image `portrait.png` fait **47 MB** ! C'est beaucoup trop lourd, d'où le temps de chargement.

---

## ✅ Solution : Optimiser l'image

### Option 1 : En ligne (Gratuit, Facile)

**1. TinyPNG** (Recommandé)
- Allez sur : https://tinypng.com
- Glissez votre `portrait.png`
- Téléchargez la version optimisée
- Remplacez le fichier dans `src/assets/`
- **Résultat** : ~2-5 MB (10x plus léger)

**2. Squoosh** (Par Google)
- Allez sur : https://squoosh.app
- Glissez votre image
- Ajustez la qualité (80-85% recommandé)
- Téléchargez
- **Résultat** : ~2-3 MB

### Option 2 : Format WebP (Meilleur)

WebP est 30% plus léger que PNG avec la même qualité.

**Sur Squoosh.app** :
1. Uploadez votre portrait.png
2. Sélectionnez "WebP" dans les options
3. Qualité : 80-85%
4. Téléchargez en `.webp`

**Puis dans votre code** :
```javascript
import portraitImg from './assets/portrait.webp';  // ← .webp au lieu de .png
```

---

## 📊 Tailles recommandées

| Format | Taille idéale | Qualité |
|--------|---------------|---------|
| PNG | 2-5 MB | Originale |
| WebP | 500 KB - 2 MB | Excellente |
| JPEG | 200 KB - 1 MB | Bonne |

---

## 🚀 Commandes pour optimiser (si vous avez ImageMagick)

```bash
# Installer ImageMagick
brew install imagemagick

# Optimiser en PNG
magick src/assets/portrait.png -quality 85 -strip src/assets/portrait-optimized.png

# Convertir en WebP
magick src/assets/portrait.png -quality 85 src/assets/portrait.webp
```

---

## 💡 Pourquoi c'est important ?

**Avant** (47 MB) :
- ⏱️ Temps de chargement : 5-10 secondes
- 📱 Sur mobile : Très lent
- 💰 Consomme beaucoup de data

**Après** (2 MB) :
- ⚡ Temps de chargement : < 1 seconde
- 📱 Sur mobile : Rapide
- 💰 Économie de data

---

## ✅ Étapes rapides

1. Allez sur https://tinypng.com
2. Glissez votre `src/assets/portrait.png`
3. Téléchargez le fichier optimisé
4. Remplacez le fichier dans `src/assets/`
5. Rafraîchissez votre navigateur

**Votre site sera 10x plus rapide !** ⚡

---

## 🎯 Résumé

- ❌ Actuel : 47 MB (trop lourd)
- ✅ Objectif : 2-5 MB max
- 🛠️ Outil : TinyPNG ou Squoosh
- ⏱️ Temps : 2 minutes

Optimisez votre image et le chargement sera instantané ! 🚀
