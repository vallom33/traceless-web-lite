# TraceLess Web – Le web qui trace, sans traces

> Une démonstration d'éco-conception web pour la Nuit de l'Info 2024

## 🎯 Contexte

TraceLess Web est une expérience web minimaliste inspirée du [protocole Gemini](https://gemini.circumlunar.space/). L'objectif est de démontrer qu'un web léger, accessible et respectueux de la vie privée est possible.

Le site est à la fois :
- **Didactique** : il explique les principes d'éco-conception web
- **Démonstratif** : il applique ces principes dans sa propre implémentation

## 📊 Métriques

| Métrique | Valeur |
|----------|--------|
| Poids total du site | < 25 KB |
| Poids par page | < 20 KB |
| Requêtes HTTP par page | 2 (HTML + CSS) |
| JavaScript requis | Non |
| Cookies | 0 |
| Trackers | 0 |
| Polices web | 0 |

## 🚀 Lancement

### Serveur statique simple

```bash
# Avec Python
cd public/traceless
python -m http.server 8000

# Avec Node.js (npx)
npx serve public/traceless

# Avec PHP
cd public/traceless
php -S localhost:8000
```

Puis ouvrir http://localhost:8000

### Avec le projet Lovable/Vite

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:8080/traceless/

## 📁 Structure

```
public/traceless/
├── index.html            # Page d'accueil
├── eco-conception.html   # Principes d'éco-conception
├── experimentation.html  # Démonstration interactive
├── code.html             # Architecture technique
├── styles.css            # CSS unique (~3 KB)
├── main.js               # JS optionnel (~2 KB)
└── README.md             # Ce fichier
```

## ✅ Principes implémentés

### Une requête par page (ou presque)
- HTML + CSS externe = 2 requêtes
- JavaScript chargé uniquement sur `/experimentation`
- Pas de polices web, pas de CDN tiers

### Médias optionnels
- Aucune image chargée automatiquement
- L'utilisateur décide explicitement de charger les médias
- Descriptions textuelles complètes

### Page weight < 50 KB
- Objectif largement dépassé : chaque page < 20 KB
- CSS minimal (~3 KB)
- JS minimal et optionnel (~2 KB)

### Accessibilité
- Lien "Skip to content" sur chaque page
- Navigation 100% clavier
- HTML sémantique (header, nav, main, article, footer)
- Contrastes WCAG AA
- Attributs ARIA appropriés

### Support navigateurs texte
Testé avec :
- `w3m`
- `lynx`
- `links`

Le site reste entièrement navigable et lisible.

## 🛠️ Choix techniques

### Pas de framework
- Pas de React, Vue, Angular, etc.
- HTML, CSS et JavaScript vanilla uniquement
- Code source lisible directement

### CSS
- Variables CSS pour les couleurs
- Polices système (`system-ui`)
- Layout max-width pour la lisibilité
- Mobile-first

### JavaScript
- IIFE pour éviter la pollution globale
- Vanilla JS ES5 pour compatibilité maximale
- Optionnel : le site fonctionne sans

### Ce qui n'est PAS inclus
- ❌ Google Analytics ou trackers
- ❌ Cookies
- ❌ Polices Google Fonts
- ❌ Bibliothèques JS externes
- ❌ Images en autoload
- ❌ Vidéos en autoplay

## 📖 Licence

Domaine public / CC0 – Utilisez, modifiez, distribuez librement.

## 🔗 Ressources

- [GreenIT.fr](https://www.greenit.fr/)
- [Website Carbon Calculator](https://www.websitecarbon.com/)
- [Protocole Gemini](https://gemini.circumlunar.space/)
- [W3C WAI](https://www.w3.org/WAI/)

---

*TraceLess Web – Nuit de l'Info 2024*
