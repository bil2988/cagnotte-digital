# 🪙 Ma Cagnotte Digitale

Une application web interactive pour gérer votre épargne avec un système de paliers personnalisables.

## ✨ Fonctionnalités

### 💰 Gestion de l'épargne
- **Solde actuel** : Affichage en temps réel de votre épargne
- **Ajout d'argent** : Boutons rapides (1€, 2€, 5€, 10€, 20€, 50€)
- **Retrait d'argent** : Possibilité de retirer des montants
- **Réinitialisation** : Remise à zéro complète

### 🎯 Système de paliers
- **Objectifs personnalisables** : Définissez votre projet (PC Gaming, Voyage, etc.)
- **Paliers multiples** : Décomposez votre objectif en étapes
  - Exemple : Processeur (70€), Carte mère (60€), RAM (80€)
- **Progression visuelle** : Paliers validés avec des coches vertes
- **Calcul automatique** : Total cumulé et pourcentage d'avancement

### 🎨 Interface utilisateur
- **Design moderne** : Interface épurée avec Tailwind CSS
- **Animations** : Pièces qui tombent lors des ajouts
- **Responsive** : Compatible mobile et desktop
- **Tirelire virtuelle** : Icône de cochon tirelire animée

### 💾 Persistance des données
- **Sauvegarde automatique** : Toutes les données stockées dans localStorage
- **Historique complet** : Suivi de toutes les transactions avec date et heure
- **Configuration sauvée** : Objectifs et paliers conservés entre les sessions

## 🚀 Installation et utilisation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
\`\`\`bash
# Cloner le projet
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
\`\`\`

### Utilisation
1. **Définir un objectif** : Cliquez sur l'icône crayon pour modifier le nom et les paliers
2. **Ajouter des paliers** : Créez des étapes personnalisées (composants, accessoires, etc.)
3. **Épargner** : Utilisez les boutons verts pour ajouter de l'argent
4. **Suivre la progression** : Regardez vos paliers se valider au fur et à mesure
5. **Consulter l'historique** : Accédez à toutes vos transactions

## 🛠️ Technologies utilisées

- **Frontend** : Next.js 14, React 18
- **Styling** : Tailwind CSS
- **Composants UI** : shadcn/ui
- **Icônes** : Lucide React
- **Stockage** : localStorage (navigateur)
- **TypeScript** : Pour la sécurité des types

## 📱 Fonctionnalités détaillées

### Gestion des paliers
- ➕ Ajouter de nouveaux paliers
- ✏️ Modifier le nom et le prix des paliers existants
- 🗑️ Supprimer des paliers
- 🔄 Réorganisation possible

### Système de progression
- 📊 Barre de progression globale
- ✅ Validation automatique des paliers atteints
- 🎯 Calcul du montant restant à épargner
- 📈 Pourcentage d'avancement affiché

### Historique et suivi
- 📝 Enregistrement de chaque transaction
- 📅 Date et heure précises
- ➕➖ Distinction ajouts/retraits
- 📋 Interface de consultation claire

## 🎮 Exemple d'utilisation

**Objectif** : PC Gaming (500€)

**Paliers** :
1. Processeur - 70€ ✅
2. Carte mère - 60€ ✅  
3. RAM - 80€ ⏳
4. SSD - 100€ ⏳
5. Carte graphique - 190€ ⏳

**Progression** : 130€/500€ (26%) - 2/5 paliers atteints

## 🔧 Personnalisation

L'application est entièrement personnalisable :
- Modifiez les montants des boutons d'ajout
- Changez les couleurs dans `tailwind.config.ts`
- Ajoutez de nouveaux types de paliers
- Personnalisez les animations CSS

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer la documentation
- Soumettre des pull requests

---

**Créé par [Code no Senpaï](https://github.com/codenosenpai) — *coder comme un ninja, enseigner comme un sensei.***
