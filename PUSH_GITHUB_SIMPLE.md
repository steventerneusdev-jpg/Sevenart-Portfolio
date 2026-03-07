# 🚀 Comment pousser votre projet sur GitHub - GUIDE ULTRA-SIMPLE

## ✅ Ce qui est déjà fait
Votre projet est prêt à être envoyé sur GitHub ! ✅

---

## 🎯 LES 3 ÉTAPES À SUIVRE

### 📍 ÉTAPE 1 : Créer un "dépôt" sur GitHub.com

**C'est quoi ?** Un endroit sur GitHub où votre code sera stocké.

**Comment faire :**

1. **Ouvrez votre navigateur** et allez sur : **https://github.com**

2. **Connectez-vous** à votre compte GitHub

3. **Cliquez sur le bouton vert "New"** (ou le `+` en haut à droite, puis "New repository")

4. **Remplissez le formulaire** :
   - **Repository name** : Tapez `sevenart-portfolio`
   - **Description** : Tapez `Mon portfolio professionnel`
   - **Public ou Private** : Choisissez ce que vous voulez
   - ⚠️ **IMPORTANT** : Ne cochez RIEN d'autre (pas de README, pas de .gitignore, etc.)

5. **Cliquez sur le bouton vert "Create repository"**

6. **GitHub va vous montrer une page avec des commandes**
   - Vous verrez une URL qui ressemble à : `https://github.com/VOTRE-NOM/sevenart-portfolio.git`
   - **COPIEZ CETTE URL** (elle commence par `https://github.com/`)

---

### 📍 ÉTAPE 2 : Connecter votre projet local à GitHub

**C'est quoi ?** Dire à votre ordinateur où envoyer le code.

**Comment faire :**

1. **Ouvrez votre terminal** (celui dans Cursor ou l'application Terminal)

2. **Assurez-vous d'être dans le bon dossier** :
   ```bash
   pwd
   ```
   Vous devriez voir : `/Users/steventerneus/Dev/Sevenart portfolio`

3. **Collez l'URL que vous avez copiée** dans cette commande :
   ```bash
   git remote add origin COLLEZ_VOTRE_URL_ICI
   ```
   
   **Exemple** (remplacez par VOTRE vraie URL) :
   ```bash
   git remote add origin https://github.com/votre-nom/sevenart-portfolio.git
   ```

4. **Appuyez sur Entrée**

---

### 📍 ÉTAPE 3 : Envoyer votre code sur GitHub

**C'est quoi ?** Envoyer tous vos fichiers sur GitHub.

**Comment faire :**

**Tapez ces 2 commandes l'une après l'autre** :

```bash
git branch -M main
```
*(Appuyez sur Entrée)*

```bash
git push -u origin main
```
*(Appuyez sur Entrée)*

**Attendez quelques secondes...**

✅ **C'EST FAIT !** Votre code est maintenant sur GitHub !

---

## 🎉 Vérifier que ça a marché

1. Retournez sur **https://github.com**
2. Cliquez sur votre profil → "Your repositories"
3. Vous devriez voir **sevenart-portfolio** dans la liste
4. Cliquez dessus → Vous voyez tous vos fichiers ! 🎊

---

## 🔄 Pour les prochaines modifications

**Quand vous modifiez votre code et voulez l'envoyer à nouveau sur GitHub :**

```bash
git add .
git commit -m "Description de ce que vous avez changé"
git push
```

**Exemple :**
```bash
git add .
git commit -m "Ajout d'une nouvelle vidéo"
git push
```

---

## ❓ Problèmes courants

### Si on vous demande un mot de passe

**Vous avez une clé SSH** (vous l'avez déjà créée), donc utilisez cette URL à la place :

Au lieu de `https://github.com/...`, utilisez :
```bash
git remote set-url origin git@github.com:VOTRE-NOM/sevenart-portfolio.git
```

Puis réessayez :
```bash
git push -u origin main
```

---

## 📞 Besoin d'aide ?

**Dites-moi simplement :**
- "Je suis bloqué à l'étape X"
- Ou envoyez-moi l'erreur que vous voyez

Je vous aiderai ! 😊

---

## 📋 RÉCAPITULATIF RAPIDE

1. ✅ Aller sur github.com → Créer un nouveau repository
2. ✅ Copier l'URL du repository
3. ✅ Dans le terminal : `git remote add origin URL_COPIÉE`
4. ✅ Dans le terminal : `git branch -M main`
5. ✅ Dans le terminal : `git push -u origin main`
6. ✅ C'EST FAIT ! 🎉

---

**Vous êtes prêt !** Commencez par l'ÉTAPE 1 👆
