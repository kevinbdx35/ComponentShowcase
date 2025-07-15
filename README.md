# UI Design System Comparison

Ce projet permet de comparer visuellement différents design systems populaires en implémentant les mêmes composants avec chaque système.

## 🎯 Objectif

Tester et comparer plusieurs design systems (Material UI, Ant Design, Chakra UI, Mantine, etc.) pour faciliter le choix du système le plus adapté à un projet.

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── ReferenceComponents.tsx    # Composants de référence (CSS vanilla)
│   ├── AntDesignComponents.tsx    # Implémentation Ant Design
│   ├── MaterialUIComponents.tsx   # Implémentation Material UI
│   ├── ChakraUIComponents.tsx     # Implémentation Chakra UI
│   ├── MantineComponents.tsx      # Implémentation Mantine
│   ├── ThreeChart.tsx             # Graphiques 3D avec Three.js
│   └── __tests__/                 # Tests unitaires
└── App.tsx                        # Navigation entre les systèmes
```

## 🧩 Composants testés

- **Typography** : Titres, paragraphes, liens
- **Boutons** : Primary, secondary, disabled, différentes tailles
- **Formulaires** : Inputs, select, textarea, checkbox, radio, sliders, rating
- **Affichage** : Cards, tables, badges, avatars, images
- **Feedback** : Alerts, modals, toasts, progress bars
- **Navigation** : Tabs, breadcrumbs, navigation principale
- **Graphiques** : Graphiques 3D interactifs avec Three.js
- **Données** : Tableaux d'employés, statistiques, métriques
- **Layout** : Grilles, conteneurs, espacement

## 🚀 Démarrage

### Installation
```bash
npm install
```

### Développement
```bash
npm start
```
Ouvre [http://localhost:3000](http://localhost:3000) pour voir l'application.

### Tests
```bash
npm test
```

### Build
```bash
npm run build
```

## 📊 Critères de comparaison

- **Performance** : Bundle size, temps de rendu
- **DX** : Facilité d'implémentation, documentation
- **Customisation** : Thématisation, flexibilité
- **Accessibilité** : Conformité WCAG
- **Esthétique** : Cohérence visuelle, modernité

## 🔧 Design systems implémentés

- [x] **Vanilla CSS** (référence) - Implémentation CSS pure
- [x] **Material UI** - Material Design 3 avec thème personnalisé
- [x] **Ant Design** - Design Enterprise avec configuration complète
- [x] **USWDS** - U.S. Web Design System pour applications gouvernementales
- [x] **visx** - Bibliothèque de visualisation de données modulaire
- [🚧] **Chakra UI** - Design system modulaire avec thème étendu (v3 en cours)
- [🚧] **Mantine** - Design system moderne avec AppShell et hooks (v7 en cours)

## 📝 Usage

1. Naviguez entre les différents design systems via la barre de navigation
2. Comparez visuellement les mêmes composants implémentés avec chaque système
3. Testez les interactions et animations
4. Évaluez la cohérence et l'ergonomie
5. Observez les différences de performance et d'accessibilité

## 🛠️ Technologies

- **React 18** - Framework principal
- **TypeScript** - Typage statique
- **React Router** - Navigation SPA
- **Three.js** - Graphiques 3D (@react-three/fiber, @react-three/drei)
- **Unsplash API** - Images haute qualité
- **Jest & React Testing Library** - Tests unitaires

## 📦 Design Systems & Dépendances

### Material UI
- `@mui/material` - Composants Material Design
- `@emotion/react` & `@emotion/styled` - CSS-in-JS
- `@mui/icons-material` - Icônes Material

### Ant Design
- `antd` - Composants Enterprise
- `@ant-design/icons` - Icônes Ant Design

### Chakra UI
- `@chakra-ui/react` - Composants modulaires
- `@chakra-ui/icons` - Icônes Chakra
- `@emotion/react` & `@emotion/styled` - Styling

### USWDS (U.S. Web Design System)
- `@uswds/uswds` - Système de design gouvernemental américain
- Composants accessibles et conformes aux standards fédéraux
- Thème officiel du gouvernement américain

### visx (Visualisation de données)
- `@visx/visx` - Package complet de visualisation de données
- Composants modulaires basés sur D3.js et React
- Graphiques personnalisables et performants

### Mantine (En cours)
- `@mantine/core` - Composants principaux
- `@mantine/hooks` - Hooks utilitaires
- `@mantine/notifications` - Système de notifications
- `@tabler/icons-react` - Icônes Tabler

## 🎨 Fonctionnalités implémentées

### Page de référence (TechCorp Solutions)
- **Hero Section** avec Call-to-Action
- **Navigation** avec tabs et breadcrumbs
- **Services** avec cards et icônes
- **Formulaire de contact** complet avec validation
- **Tableaux d'employés** avec avatars et badges
- **Galerie d'images** Unsplash
- **Dashboard** avec métriques et graphiques 3D
- **Alerts** multi-types (success, warning, error, info)
- **Modals** et interactions
- **Footer** avec liens et informations

### Responsive Design
- Adaptations mobile/desktop pour tous les design systems
- Navigation drawer pour mobile
- Grilles responsives
- Breakpoints optimisés

## 🧪 Tests

Tests unitaires couvrant :
- Rendu des composants principaux
- Navigation entre design systems
- Interactions utilisateur
- Mocks des dépendances externes (Three.js, Unsplash)

## 🔍 Comparaison des Design Systems

| Aspect | Material UI | Ant Design | USWDS | visx |
|--------|-------------|------------|-------|------|
| **Bundle Size** | Moyen | Gros | Moyen | Petit |
| **Customisation** | Élevée | Moyenne | Faible | Très élevée |
| **Performance** | Bonne | Bonne | Excellente | Excellente |
| **Documentation** | Excellente | Très bonne | Excellente | Très bonne |
| **Accessibilité** | Excellente | Bonne | Excellente | Moyenne |
| **Écosystème** | Très riche | Riche | Spécialisé | Spécialisé |
| **Cas d'usage** | Polyvalent | Enterprise | Gouvernemental | Visualisation |

## 🏛️ Focus USWDS (U.S. Web Design System)

Le USWDS est un système de design spécialement conçu pour les applications gouvernementales américaines :

### Caractéristiques principales
- **Conformité fédérale** : Respecte les standards Section 508 et WCAG 2.1 AA
- **Sécurité** : Conçu pour les environnements haute sécurité
- **Accessibilité** : Priorité absolue sur l'accessibilité
- **Cohérence** : Expérience utilisateur unifiée sur tous les sites gouvernementaux

### Composants USWDS implémentés
- **Banner** : Bannière officielle du gouvernement
- **Header** : Navigation gouvernementale standardisée
- **Hero** : Section d'accueil avec call-to-action
- **Cards** : Cartes d'information structurées
- **Forms** : Formulaires avec validation et labels requis
- **Tables** : Tableaux de données avec tri et filtrage
- **Alerts** : Notifications système critiques
- **Progress bars** : Indicateurs de progression
- **Footer** : Pied de page gouvernemental standard

### Avantages USWDS
- ✅ **Compliance** : Conformité automatique aux standards fédéraux
- ✅ **Accessibilité** : Tests d'accessibilité intégrés
- ✅ **Performance** : Optimisé pour les connexions lentes
- ✅ **Responsive** : Compatible mobile-first
- ✅ **Sécurité** : Conçu pour les environnements sécurisés

## 📊 Visualisation avec visx

visx apporte une dimension de visualisation de données avancée :

### Avantages visx
- **Modulaire** : Composants réutilisables et composables
- **Performance** : Optimisé pour de grandes quantités de données
- **Flexibilité** : Contrôle total sur l'apparence et le comportement
- **React-friendly** : Intégration native avec React
- **TypeScript** : Support TypeScript complet

### Graphiques implémentés
- **Bar charts** : Graphiques en barres avec gradients
- **Line charts** : Graphiques linéaires avec courbes
- **Grids** : Grilles de fond personnalisables
- **Axes** : Axes X et Y configurables
- **Interactions** : Hover effects et animations
