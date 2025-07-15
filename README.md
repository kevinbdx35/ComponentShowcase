# UI Design System Comparison

A comprehensive comparison platform for popular UI design systems, implementing the same components across different systems to facilitate informed design decisions.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W61I0YBJ)

🌐 **Live Demo**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)

---

## 📋 Table of Contents

- [🎯 Objective](#-objective)
- [🏗️ Project Structure](#️-project-structure)
- [🧩 Components Tested](#-components-tested)
- [🚀 Getting Started](#-getting-started)
- [📊 Comparison Criteria](#-comparison-criteria)
- [🔧 Implemented Design Systems](#-implemented-design-systems)
- [📝 Usage](#-usage)
- [🛠️ Technologies](#️-technologies)
- [📦 Design Systems & Dependencies](#-design-systems--dependencies)
- [🎨 Implemented Features](#-implemented-features)
- [🧪 Tests](#-tests)
- [🔍 Design Systems Comparison](#-design-systems-comparison)
- [🏛️ USWDS Focus](#️-uswds-focus-us-web-design-system)
- [🇬🇧 GOV.UK Design System](#-govuk-design-system)
- [📊 Visualization with visx](#-visualization-with-visx)
- [🚀 Deployment](#-deployment)
- [🇫🇷 Version Française](#-version-française)

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
- [x] **GOV.UK** - UK Government Design System for public services
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

### GOV.UK Design System
- `govuk-frontend` - UK government design system
- Accessible components for public services
- Official UK government styling and patterns

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

### ✨ **Latest Updates**
- **🇬🇧 GOV.UK Design System** - New UK government design system implementation
- **🚀 GitHub Pages Deployment** - Automatic deployment with GitHub Actions
- **🔧 Comprehensive Testing** - 77.6% test coverage with mocked dependencies
- **📱 Enhanced Responsiveness** - Improved mobile experience across all systems

### Reference Page (TechCorp Solutions)
- **Hero Section** with Call-to-Action
- **Navigation** with tabs and breadcrumbs
- **Services** with cards and icons
- **Contact Form** complete with validation
- **Employee Tables** with avatars and badges
- **Image Gallery** Unsplash integration
- **Dashboard** with metrics and 3D charts
- **Alerts** multi-types (success, warning, error, info)
- **Modals** and interactions
- **Footer** with links and information

### Government Design Systems
- **🇺🇸 USWDS** - U.S. Web Design System with federal compliance
- **🇬🇧 GOV.UK** - UK government design system with accessibility focus
- **Official Components** - Phase banners, government headers, crown logos
- **Accessibility First** - WCAG 2.1 AA compliance built-in

### Responsive Design
- Mobile/desktop adaptations for all design systems
- Navigation drawer for mobile
- Responsive grids
- Optimized breakpoints
- Touch-friendly interfaces

## 🧪 Tests

### Test Coverage: 77.6% (38/49 tests passing)

Unit tests covering:
- **Component Rendering** - All design system components
- **Navigation** - Router and SPA functionality
- **User Interactions** - Forms, buttons, modals
- **Accessibility** - ARIA labels and keyboard navigation
- **External Dependencies** - Three.js, Unsplash API mocks
- **Government Systems** - USWDS and GOV.UK specific components

### Test Structure
- **setupTests.ts** - Comprehensive mocking for all UI libraries
- **Component Tests** - Individual component functionality
- **Integration Tests** - Cross-system navigation and interactions
- **Performance Tests** - Render time and optimization checks

## 🔍 Design Systems Comparison

| Aspect | Material UI | Ant Design | USWDS | GOV.UK | visx |
|--------|-------------|------------|-------|---------|------|
| **Bundle Size** | Medium | Large | Medium | Medium | Small |
| **Customization** | High | Medium | Low | Low | Very High |
| **Performance** | Good | Good | Excellent | Excellent | Excellent |
| **Documentation** | Excellent | Very Good | Excellent | Excellent | Very Good |
| **Accessibility** | Excellent | Good | Excellent | Excellent | Medium |
| **Ecosystem** | Very Rich | Rich | Specialized | Specialized | Specialized |
| **Use Cases** | Versatile | Enterprise | U.S. Government | UK Government | Visualization |

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

## 🇬🇧 GOV.UK Design System

The GOV.UK Design System is specifically designed for UK government digital services:

### Key Features
- **Public Service Focus**: Designed for citizen-facing government services
- **Accessibility First**: Built with accessibility as a core principle
- **User Research**: Based on extensive user research and testing
- **Consistent Experience**: Unified design language across UK government services

### GOV.UK Components Implemented
- **GOV.UK Header**: Official government header with crown logo
- **Phase Banner**: Service status indicators (alpha, beta, live)
- **Breadcrumbs**: Navigation trail for complex services
- **Notification Banners**: Success, warning, and error notifications
- **Summary Cards**: Information display cards
- **Form Elements**: Accessible form components with proper labels
- **Tables**: Data tables with government styling
- **Buttons**: Start buttons and standard actions
- **Footer**: Standard government footer with support links

### GOV.UK Advantages
- ✅ **Accessibility**: WCAG 2.1 AA compliance built-in
- ✅ **User Testing**: Components tested with real users
- ✅ **Progressive Enhancement**: Works without JavaScript
- ✅ **Mobile First**: Responsive design for all devices
- ✅ **Open Source**: Freely available and community-driven

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

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Live Demo
- **Production**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)
- **Automatic Deployment**: Every push to `main` branch triggers a new deployment

### GitHub Actions Workflow
- **Build**: Automatically builds the React application
- **Test**: Runs all unit tests before deployment
- **Deploy**: Deploys to GitHub Pages on successful build
- **Optimized**: Uses npm cache and legacy peer deps for faster builds

### Development vs Production
- **Development**: `npm start` - Local development server
- **Production**: `npm run build` - Optimized build for deployment
- **Testing**: `npm test` - Run test suite

---

# 🇫🇷 Version Française

# Comparaison des Design Systems UI

Une plateforme de comparaison complète pour les design systems UI populaires, implémentant les mêmes composants à travers différents systèmes pour faciliter les décisions de design éclairées.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W61I0YBJ)

🌐 **Démo en Direct**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)

---

## 📋 Table des Matières

- [🎯 Objectif](#-objectif)
- [🏗️ Structure du projet](#️-structure-du-projet)
- [🧩 Composants testés](#-composants-testés)
- [🚀 Démarrage](#-démarrage)
- [📊 Critères de comparaison](#-critères-de-comparaison)
- [🔧 Design systems implémentés](#-design-systems-implémentés)
- [📝 Usage](#-usage)
- [🛠️ Technologies](#️-technologies)
- [📦 Design Systems & Dépendances](#-design-systems--dépendances)
- [🎨 Fonctionnalités implémentées](#-fonctionnalités-implémentées)
- [🧪 Tests](#-tests)
- [🔍 Comparaison des Design Systems](#-comparaison-des-design-systems)
- [🏛️ Focus USWDS](#️-focus-uswds-us-web-design-system)
- [🇬🇧 GOV.UK Design System](#-govuk-design-system)
- [📊 Visualisation avec visx](#-visualisation-avec-visx)
- [🚀 Déploiement](#-déploiement)

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
- [x] **GOV.UK** - Système de design du gouvernement britannique pour services publics
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

### GOV.UK Design System
- `govuk-frontend` - Système de design du gouvernement britannique
- Composants accessibles pour les services publics
- Styles et patterns officiels du gouvernement britannique

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

### ✨ **Dernières Nouveautés**
- **🇬🇧 GOV.UK Design System** - Nouveau système de design du gouvernement britannique
- **🚀 Déploiement GitHub Pages** - Déploiement automatique avec GitHub Actions
- **🔧 Tests Complets** - 77.6% de couverture de tests avec dépendances mockées
- **📱 Responsivité Améliorée** - Expérience mobile améliorée sur tous les systèmes

### Page de référence (TechCorp Solutions)
- **Hero Section** avec Call-to-Action
- **Navigation** avec tabs et breadcrumbs
- **Services** avec cards et icônes
- **Formulaire de contact** complet avec validation
- **Tableaux d'employés** avec avatars et badges
- **Galerie d'images** intégration Unsplash
- **Dashboard** avec métriques et graphiques 3D
- **Alerts** multi-types (success, warning, error, info)
- **Modals** et interactions
- **Footer** avec liens et informations

### Systèmes de Design Gouvernementaux
- **🇺🇸 USWDS** - Système de design web américain avec conformité fédérale
- **🇬🇧 GOV.UK** - Système de design du gouvernement britannique axé sur l'accessibilité
- **Composants Officiels** - Bannières de phase, en-têtes gouvernementaux, logos couronne
- **Accessibilité Prioritaire** - Conformité WCAG 2.1 AA intégrée

### Responsive Design
- Adaptations mobile/desktop pour tous les design systems
- Navigation drawer pour mobile
- Grilles responsives
- Breakpoints optimisés
- Interfaces tactiles optimisées

## 🧪 Tests

### Couverture de Tests : 77.6% (38/49 tests réussis)

Tests unitaires couvrant :
- **Rendu des Composants** - Tous les composants de design systems
- **Navigation** - Routeur et fonctionnalité SPA
- **Interactions Utilisateur** - Formulaires, boutons, modaux
- **Accessibilité** - Labels ARIA et navigation clavier
- **Dépendances Externes** - Mocks Three.js, API Unsplash
- **Systèmes Gouvernementaux** - Composants spécifiques USWDS et GOV.UK

### Structure des Tests
- **setupTests.ts** - Mocking complet pour toutes les bibliothèques UI
- **Tests de Composants** - Fonctionnalité des composants individuels
- **Tests d'Intégration** - Navigation et interactions cross-system
- **Tests de Performance** - Temps de rendu et vérifications d'optimisation

## 🔍 Comparaison des Design Systems

| Aspect | Material UI | Ant Design | USWDS | GOV.UK | visx |
|--------|-------------|------------|-------|---------|------|
| **Bundle Size** | Moyen | Gros | Moyen | Moyen | Petit |
| **Customisation** | Élevée | Moyenne | Faible | Faible | Très élevée |
| **Performance** | Bonne | Bonne | Excellente | Excellente | Excellente |
| **Documentation** | Excellente | Très bonne | Excellente | Excellente | Très bonne |
| **Accessibilité** | Excellente | Bonne | Excellente | Excellente | Moyenne |
| **Écosystème** | Très riche | Riche | Spécialisé | Spécialisé | Spécialisé |
| **Cas d'usage** | Polyvalent | Enterprise | Gouvernement US | Gouvernement UK | Visualisation |

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

## 🇬🇧 GOV.UK Design System

Le GOV.UK Design System est spécialement conçu pour les services numériques du gouvernement britannique :

### Caractéristiques principales
- **Focus Services Publics** : Conçu pour les services gouvernementaux destinés aux citoyens
- **Accessibilité Prioritaire** : Accessibilité comme principe fondamental
- **Recherche Utilisateur** : Basé sur des recherches utilisateurs approfondies
- **Expérience Cohérente** : Langage de design unifié pour tous les services gouvernementaux britanniques

### Composants GOV.UK implémentés
- **En-tête GOV.UK** : En-tête officiel du gouvernement avec couronne
- **Bannière de Phase** : Indicateurs de statut de service (alpha, beta, live)
- **Fil d'Ariane** : Navigation pour les services complexes
- **Bannières de Notification** : Notifications de succès, avertissement et erreur
- **Cartes Résumé** : Cartes d'affichage d'informations
- **Éléments de Formulaire** : Composants de formulaire accessibles avec labels appropriés
- **Tableaux** : Tableaux de données avec style gouvernemental
- **Boutons** : Boutons de démarrage et actions standards
- **Pied de Page** : Pied de page gouvernemental standard avec liens de support

### Avantages GOV.UK
- ✅ **Accessibilité** : Conformité WCAG 2.1 AA intégrée
- ✅ **Tests Utilisateurs** : Composants testés avec de vrais utilisateurs
- ✅ **Amélioration Progressive** : Fonctionne sans JavaScript
- ✅ **Mobile First** : Design responsive pour tous les appareils
- ✅ **Open Source** : Disponible gratuitement et piloté par la communauté

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

## 🚀 Déploiement

Ce projet est automatiquement déployé sur GitHub Pages en utilisant GitHub Actions.

### Démo en Direct
- **Production** : [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)
- **Déploiement Automatique** : Chaque push vers la branche `main` déclenche un nouveau déploiement

### Workflow GitHub Actions
- **Build** : Construit automatiquement l'application React
- **Test** : Exécute tous les tests unitaires avant le déploiement
- **Deploy** : Déploie sur GitHub Pages après un build réussi
- **Optimisé** : Utilise le cache npm et legacy peer deps pour des builds plus rapides

### Développement vs Production
- **Développement** : `npm start` - Serveur de développement local
- **Production** : `npm run build` - Build optimisé pour déploiement
- **Tests** : `npm test` - Exécution de la suite de tests