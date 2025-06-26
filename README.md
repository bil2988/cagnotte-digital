# 🪙 Ma Cagnotte Digitale / My Digital Piggy Bank

Une application web interactive multilingue pour gérer votre épargne avec un système de paliers personnalisables.

*An interactive multilingual web application to manage your savings with a customizable milestone system.*

## 🌍 Langues supportées / Supported Languages

- 🇫🇷 **Français** - Langue par défaut
- 🇺🇸 **English** - Full English support
- 🇪🇸 **Español** - Soporte completo en español
- 🇸🇦 **العربية** - دعم كامل للغة العربية مع RTL

## ✨ Fonctionnalités / Features

### 💰 Gestion de l'épargne / Savings Management
- **Solde actuel** : Affichage en temps réel de votre épargne
- **Ajout d'argent** : Boutons rapides (1€, 2€, 5€, 10€, 20€, 50€)
- **Retrait d'argent** : Possibilité de retirer des montants
- **Réinitialisation** : Remise à zéro complète
- **Animations** : Pièces qui tombent lors des ajouts

*Real-time balance display, quick add buttons, withdrawal options, reset functionality, and coin drop animations.*

### 🎯 Système de paliers / Milestone System
- **Objectifs personnalisables** : Définissez votre projet (PC Gaming, Voyage, etc.)
- **Paliers multiples** : Décomposez votre objectif en étapes
  - Exemple : Processeur (70€), Carte mère (60€), RAM (80€)
- **Progression visuelle** : Paliers validés avec des coches vertes
- **Calcul automatique** : Total cumulé et pourcentage d'avancement
- **Édition avancée** : Ajout, modification et suppression de paliers

*Customizable goals, multiple milestones, visual progress tracking, automatic calculations, and advanced editing.*

### 🌐 Système multilingue / Multilingual System
- **4 langues complètes** : Français, Anglais, Espagnol, Arabe
- **Support RTL** : Interface adaptée pour l'arabe (droite vers gauche)
- **Sélecteur intuitif** : Dropdown avec drapeaux et noms des langues
- **Sauvegarde des préférences** : Langue conservée entre les sessions
- **Traductions complètes** : Tous les textes, messages et placeholders
- **Dates localisées** : Formats de date adaptés à chaque langue

*Complete translations, RTL support for Arabic, intuitive language selector, preference saving, and localized dates.*

### 🎨 Interface utilisateur / User Interface
- **Design moderne** : Interface épurée avec Tailwind CSS
- **Responsive** : Compatible mobile et desktop
- **Tirelire virtuelle** : Icône de cochon tirelire animée
- **Thème cohérent** : Couleurs harmonieuses et animations fluides
- **Accessibilité** : Support des lecteurs d'écran et navigation clavier

*Modern design, responsive layout, animated piggy bank, consistent theming, and accessibility features.*

### 💾 Persistance des données / Data Persistence
- **Sauvegarde automatique** : Toutes les données stockées dans localStorage
- **Historique complet** : Suivi de toutes les transactions avec date et heure
- **Configuration sauvée** : Objectifs, paliers et langue conservés
- **Synchronisation** : Données cohérentes entre les sessions

*Automatic saving, complete transaction history, saved configurations, and session synchronization.*

## 🚀 Installation et utilisation / Installation & Usage

### Prérequis / Prerequisites
- Node.js (version 18 ou supérieure / version 18 or higher)
- npm ou yarn / npm or yarn

### Installation
\`\`\`bash
# Cloner le projet / Clone the project
git clone [URL_DU_REPO]

# Installer les dépendances / Install dependencies
npm install

# Lancer en mode développement / Start development server
npm run dev
\`\`\`

### Utilisation / Usage
1. **Changer de langue** : Cliquez sur le bouton globe 🌍 en haut à droite
   *Change language: Click the globe button 🌍 in the top right*

2. **Définir un objectif** : Cliquez sur l'icône crayon pour modifier le nom et les paliers
   *Set a goal: Click the pencil icon to modify name and milestones*

3. **Ajouter des paliers** : Créez des étapes personnalisées (composants, accessoires, etc.)
   *Add milestones: Create custom steps (components, accessories, etc.)*

4. **Épargner** : Utilisez les boutons verts pour ajouter de l'argent
   *Save money: Use green buttons to add money*

5. **Suivre la progression** : Regardez vos paliers se valider au fur et à mesure
   *Track progress: Watch your milestones get validated progressively*

6. **Consulter l'historique** : Accédez à toutes vos transactions
   *View history: Access all your transactions*

## 🛠️ Technologies utilisées / Technologies Used

- **Frontend** : Next.js 14, React 18
- **Styling** : Tailwind CSS
- **Composants UI** : shadcn/ui
- **Icônes** : Lucide React
- **Stockage** : localStorage (navigateur / browser)
- **TypeScript** : Pour la sécurité des types / For type safety
- **Internationalisation** : Système i18n personnalisé / Custom i18n system

## 📱 Fonctionnalités détaillées / Detailed Features

### Gestion des paliers / Milestone Management
- ➕ **Ajouter** de nouveaux paliers / Add new milestones
- ✏️ **Modifier** le nom et le prix des paliers existants / Edit name and price of existing milestones
- 🗑️ **Supprimer** des paliers / Delete milestones
- 🔄 **Réorganisation** possible / Reorganization possible

### Système de progression / Progress System
- 📊 **Barre de progression** globale / Global progress bar
- ✅ **Validation automatique** des paliers atteints / Automatic validation of reached milestones
- 🎯 **Calcul du montant** restant à épargner / Calculation of remaining amount to save
- 📈 **Pourcentage d'avancement** affiché / Progress percentage displayed

### Historique et suivi / History & Tracking
- 📝 **Enregistrement** de chaque transaction / Recording of each transaction
- 📅 **Date et heure** précises / Precise date and time
- ➕➖ **Distinction** ajouts/retraits / Distinction between additions/withdrawals
- 📋 **Interface de consultation** claire / Clear consultation interface

### Support multilingue / Multilingual Support
- 🌍 **Traduction complète** de l'interface / Complete interface translation
- 🔄 **Changement instantané** de langue / Instant language switching
- 💾 **Sauvegarde des préférences** linguistiques / Language preference saving
- 📱 **Interface RTL** pour l'arabe / RTL interface for Arabic

## 🎮 Exemple d'utilisation / Usage Example

**Objectif / Goal** : PC Gaming (500€)

**Paliers / Milestones** :
1. Processeur / Processor - 70€ ✅
2. Carte mère / Motherboard - 60€ ✅  
3. RAM - 80€ ⏳
4. SSD - 100€ ⏳
5. Carte graphique / Graphics Card - 190€ ⏳

**Progression / Progress** : 130€/500€ (26%) - 2/5 paliers atteints / milestones achieved

## 🔧 Personnalisation / Customization

L'application est entièrement personnalisable :
*The application is fully customizable:*

- Modifiez les montants des boutons d'ajout / Modify add button amounts
- Changez les couleurs dans `tailwind.config.ts` / Change colors in `tailwind.config.ts`
- Ajoutez de nouveaux types de paliers / Add new milestone types
- Personnalisez les animations CSS / Customize CSS animations
- Ajoutez de nouvelles langues / Add new languages

## 🌐 Ajout de nouvelles langues / Adding New Languages

Pour ajouter une nouvelle langue :
*To add a new language:*

1. Créez un fichier `locales/[code].json` / Create a `locales/[code].json` file
2. Ajoutez la langue dans `useLanguage.ts` / Add the language in `useLanguage.ts`
3. Mettez à jour le `LanguageSelector` / Update the `LanguageSelector`
4. Testez toutes les fonctionnalités / Test all features

## 📄 Structure du projet / Project Structure

\`\`\`
├── app/
│   └── page.tsx                 # Page principale / Main page
├── components/
│   ├── ui/                      # Composants UI / UI components
│   └── language-selector.tsx    # Sélecteur de langue / Language selector
├── hooks/
│   └── useLanguage.ts          # Hook de gestion des langues / Language management hook
├── locales/
│   ├── fr.json                 # Traductions françaises / French translations
│   ├── en.json                 # Traductions anglaises / English translations
│   ├── es.json                 # Traductions espagnoles / Spanish translations
│   └── ar.json                 # Traductions arabes / Arabic translations
└── public/
    └── assets/img/
        └── logo-senpai.png     # Logo du créateur / Creator logo
\`\`\`

## 📄 Licence / License

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.
*This project is under MIT license. You are free to use, modify and distribute it.*

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
*Contributions are welcome! Feel free to:*

- Signaler des bugs / Report bugs
- Proposer de nouvelles fonctionnalités / Suggest new features
- Améliorer la documentation / Improve documentation
- Soumettre des pull requests / Submit pull requests
- Ajouter de nouvelles traductions / Add new translations

## 🔮 Fonctionnalités futures / Future Features

- 📊 **Graphiques et statistiques** / Charts and statistics
- 🎨 **Thèmes personnalisables** / Customizable themes
- 📱 **Application mobile** / Mobile app
- ☁️ **Synchronisation cloud** / Cloud synchronization
- 🔔 **Notifications** / Notifications
- 💱 **Support multi-devises** / Multi-currency support

---

**Créé par [Code no Senpaï](https://github.com/codenosenpai) — *coder comme un ninja, enseigner comme un sensei.***

**Created by [Code no Senpaï](https://github.com/codenosenpai) — *code like a ninja, teach like a sensei.***

https://cagnotte-digitale.netlify.app
