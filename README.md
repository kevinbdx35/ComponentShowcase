# UI Design System Comparison

A comprehensive comparison platform for popular UI design systems, implementing the same components across different systems to facilitate informed design decisions.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W61I0YBJ)

---

## 🎯 Objective

Test and compare multiple design systems (Material UI, Ant Design, Chakra UI, Mantine, etc.) to facilitate choosing the most suitable system for a project.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ReferenceComponents.tsx    # Reference components (vanilla CSS)
│   ├── AntDesignComponents.tsx    # Ant Design implementation
│   ├── MaterialUIComponents.tsx   # Material UI implementation
│   ├── ChakraUIComponents.tsx     # Chakra UI implementation
│   ├── MantineComponents.tsx      # Mantine implementation
│   ├── ThreeChart.tsx             # 3D charts with Three.js
│   └── __tests__/                 # Unit tests
└── App.tsx                        # Navigation between systems
```

## 🧩 Components Tested

- **Typography**: Headers, paragraphs, links
- **Buttons**: Primary, secondary, disabled, different sizes
- **Forms**: Inputs, selects, textareas, checkboxes, radios, sliders, ratings
- **Display**: Cards, tables, badges, avatars, images
- **Feedback**: Alerts, modals, toasts, progress bars
- **Navigation**: Tabs, breadcrumbs, main navigation
- **Charts**: Interactive 3D charts with Three.js
- **Data**: Employee tables, statistics, metrics
- **Layout**: Grids, containers, spacing

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) to view the application.

### Testing
```bash
npm test
```

### Build
```bash
npm run build
```

## 📊 Comparison Criteria

- **Performance**: Bundle size, render time
- **DX**: Implementation ease, documentation
- **Customization**: Theming, flexibility
- **Accessibility**: WCAG compliance
- **Aesthetics**: Visual consistency, modernity

## 🔧 Implemented Design Systems

- [x] **Vanilla CSS** (reference) - Pure CSS implementation
- [x] **Material UI** - Material Design 3 with custom theme
- [x] **Ant Design** - Enterprise design with complete configuration
- [x] **USWDS** - U.S. Web Design System for government applications
- [x] **visx** - Modular data visualization library
- [🚧] **Chakra UI** - Modular design system with extended theme (v3 in progress)
- [🚧] **Mantine** - Modern design system with AppShell and hooks (v7 in progress)

## 📝 Usage

1. Navigate between different design systems via the navigation bar
2. Visually compare the same components implemented with each system
3. Test interactions and animations
4. Evaluate consistency and ergonomics
5. Observe performance and accessibility differences

## 🛠️ Technologies

- **React 18** - Main framework
- **TypeScript** - Static typing
- **React Router** - SPA navigation
- **Three.js** - 3D graphics (@react-three/fiber, @react-three/drei)
- **Unsplash API** - High-quality images
- **Jest & React Testing Library** - Unit testing

## 📦 Design Systems & Dependencies

### Material UI
- `@mui/material` - Material Design components
- `@emotion/react` & `@emotion/styled` - CSS-in-JS
- `@mui/icons-material` - Material icons

### Ant Design
- `antd` - Enterprise components
- `@ant-design/icons` - Ant Design icons

### Chakra UI
- `@chakra-ui/react` - Modular components
- `@chakra-ui/icons` - Chakra icons
- `@emotion/react` & `@emotion/styled` - Styling

### USWDS (U.S. Web Design System)
- `@uswds/uswds` - American government design system
- Accessible components compliant with federal standards
- Official U.S. government theme

### visx (Data Visualization)
- `@visx/visx` - Complete data visualization package
- Modular components based on D3.js and React
- Customizable and performant charts

### Mantine (In Progress)
- `@mantine/core` - Core components
- `@mantine/hooks` - Utility hooks
- `@mantine/notifications` - Notification system
- `@tabler/icons-react` - Tabler icons

## 🎨 Implemented Features

### Reference Page (TechCorp Solutions)
- **Hero Section** with Call-to-Action
- **Navigation** with tabs and breadcrumbs
- **Services** with cards and icons
- **Contact Form** complete with validation
- **Employee Tables** with avatars and badges
- **Image Gallery** Unsplash
- **Dashboard** with metrics and 3D charts
- **Alerts** multi-types (success, warning, error, info)
- **Modals** and interactions
- **Footer** with links and information

### Responsive Design
- Mobile/desktop adaptations for all design systems
- Navigation drawer for mobile
- Responsive grids
- Optimized breakpoints

## 🧪 Tests

Unit tests covering:
- Main component rendering
- Navigation between design systems
- User interactions
- External dependency mocks (Three.js, Unsplash)

## 🔍 Design Systems Comparison

| Aspect | Material UI | Ant Design | USWDS | visx |
|--------|-------------|------------|-------|------|
| **Bundle Size** | Medium | Large | Medium | Small |
| **Customization** | High | Medium | Low | Very High |
| **Performance** | Good | Good | Excellent | Excellent |
| **Documentation** | Excellent | Very Good | Excellent | Very Good |
| **Accessibility** | Excellent | Good | Excellent | Medium |
| **Ecosystem** | Very Rich | Rich | Specialized | Specialized |
| **Use Cases** | Versatile | Enterprise | Government | Visualization |

## 🏛️ USWDS Focus (U.S. Web Design System)

USWDS is a design system specifically designed for American government applications:

### Key Features
- **Federal Compliance**: Meets Section 508 and WCAG 2.1 AA standards
- **Security**: Designed for high-security environments
- **Accessibility**: Absolute priority on accessibility
- **Consistency**: Unified user experience across all government sites

### USWDS Components Implemented
- **Banner**: Official government banner
- **Header**: Standardized government navigation
- **Hero**: Welcome section with call-to-action
- **Cards**: Structured information cards
- **Forms**: Forms with validation and required labels
- **Tables**: Data tables with sorting and filtering
- **Alerts**: Critical system notifications
- **Progress bars**: Progress indicators
- **Footer**: Standard government footer

### USWDS Advantages
- ✅ **Compliance**: Automatic compliance with federal standards
- ✅ **Accessibility**: Built-in accessibility testing
- ✅ **Performance**: Optimized for slow connections
- ✅ **Responsive**: Mobile-first compatible
- ✅ **Security**: Designed for secure environments

## 📊 Visualization with visx

visx brings advanced data visualization capabilities:

### visx Advantages
- **Modular**: Reusable and composable components
- **Performance**: Optimized for large datasets
- **Flexibility**: Full control over appearance and behavior
- **React-friendly**: Native React integration
- **TypeScript**: Complete TypeScript support

### Implemented Charts
- **Bar charts**: Bar charts with gradients
- **Line charts**: Line charts with curves
- **Grids**: Customizable background grids
- **Axes**: Configurable X and Y axes
- **Interactions**: Hover effects and animations

---

# Comparaison des Design Systems UI

Une plateforme de comparaison complète pour les design systems UI populaires, implémentant les mêmes composants à travers différents systèmes pour faciliter les décisions de design éclairées.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W61I0YBJ)

---

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