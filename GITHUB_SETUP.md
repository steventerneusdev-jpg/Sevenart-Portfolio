# 🚀 Connexion à GitHub - Guide complet

## ✅ Étape 1 : Git initialisé et premier commit fait

Votre projet est maintenant sous Git avec tous les fichiers commités ! ✅

---

## 📦 Étape 2 : Créer le repository sur GitHub

### 1. Allez sur GitHub
Ouvrez : https://github.com

### 2. Créez un nouveau repository
- Cliquez sur le `+` en haut à droite
- Sélectionnez **"New repository"**

### 3. Configurez le repository
- **Repository name** : `sevenart-portfolio` (ou autre nom)
- **Description** : `Portfolio professionnel - Steven Terneus - Sevenart`
- **Public** ou **Private** : À votre choix
- ⚠️ **NE COCHEZ PAS** les options suivantes :
  - ❌ Add a README file
  - ❌ Add .gitignore
  - ❌ Choose a license
  
  (Vous avez déjà ces fichiers)

- Cliquez sur **"Create repository"**

---

## 🔗 Étape 3 : Connecter et pousser votre code

GitHub va vous afficher une page avec des instructions. 

### Copiez VOTRE URL GitHub
Vous verrez quelque chose comme :
```
https://github.com/VOTRE-USERNAME/sevenart-portfolio.git
```

### Puis exécutez ces commandes dans votre terminal

**Remplacez `VOTRE-USERNAME` par votre vrai username GitHub** :

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE-USERNAME/sevenart-portfolio.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser votre code sur GitHub
git push -u origin main
```

---

## 🎯 Commandes rapides (à copier-coller)

Une fois que vous avez créé le repo sur GitHub, remplacez `VOTRE-USERNAME` et lancez :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/sevenart-portfolio.git
git branch -M main
git push -u origin main
```

---

## ✅ Après le premier push

Pour les prochaines modifications :

```bash
# 1. Modifier vos fichiers
# 2. Ajouter les changements
git add .

# 3. Créer un commit
git commit -m "Description de vos modifications"

# 4. Pousser sur GitHub
git push
```

---

## 🔐 Authentification

Si GitHub vous demande de vous authentifier :

### Option 1 : SSH (Vous avez déjà la clé)
Utilisez l'URL SSH au lieu de HTTPS :
```bash
git remote set-url origin git@github.com:VOTRE-USERNAME/sevenart-portfolio.git
```

### Option 2 : HTTPS avec Personal Access Token
1. Allez sur GitHub → Settings → Developer settings → Personal access tokens
2. Créez un token
3. Utilisez-le comme mot de passe quand Git demande

---

## 📝 Exemple complet

```bash
# Si votre username GitHub est "steventerneus"
git remote add origin https://github.com/steventerneus/sevenart-portfolio.git
git branch -M main
git push -u origin main
```

Ou avec SSH :
```bash
git remote add origin git@github.com:steventerneus/sevenart-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🐛 Problèmes courants

### "remote origin already exists"
```bash
git remote remove origin
# Puis réessayez la commande git remote add
```

### "Permission denied (publickey)"
Votre clé SSH n'est pas correctement configurée :
```bash
# Vérifiez vos clés
ssh -T git@github.com

# Si ça ne marche pas, utilisez HTTPS au lieu de SSH
```

### "failed to push some refs"
Le repo distant a des fichiers que vous n'avez pas :
```bash
git pull origin main --rebase
git push -u origin main
```

---

## ✨ Bonus : Déployer automatiquement avec Vercel

Une fois sur GitHub, déployez gratuitement :

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Importez votre repository `sevenart-portfolio`
4. Cliquez **Deploy**

Votre site sera en ligne en 2 minutes avec une vraie URL ! 🚀

---

## 📋 Checklist

- [x] Git initialisé
- [x] Premier commit créé
- [ ] Repository créé sur GitHub
- [ ] Remote ajouté
- [ ] Code poussé sur GitHub
- [ ] (Optionnel) Déployé sur Vercel

---

**Prochaines étapes** :
1. Créez le repo sur GitHub
2. Copiez l'URL du repo
3. Lancez les commandes de connexion
4. Poussez votre code !

Bon courage ! 🎉
