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
- [🇫🇷 DSFR (French Government Design System)](#-dsfr-french-government-design-system)
- [🇨🇦 Canada.ca Design System](#-canadaca-design-system)
- [🇦🇺 Australian Health Design System](#-australian-health-design-system)
- [🏛️ GOLD Design System](#️-gold-design-system)
- [🇳🇿 New Zealand Government Design System](#-new-zealand-government-design-system)
- [🇮🇹 Bootstrap Italia (Italian Government Design System)](#-bootstrap-italia-italian-government-design-system)
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
│   ├── MaterialUIComponents.tsx   # Material UI implementation (disabled)
│   ├── USWDSComponents.tsx        # USWDS implementation
│   ├── GOVUKComponents.tsx        # GOV.UK Design System
│   ├── DSFRComponents.tsx         # French Government DSFR
│   ├── CanadaComponents.tsx       # Canada.ca Design System
│   ├── AustralianHealthComponents.tsx # Australian Health Design System
│   ├── GOLDComponents.tsx         # GOLD Design System
│   ├── NZGovtComponents.tsx       # New Zealand Government Design System
│   ├── BootstrapItaliaComponents.tsx # Bootstrap Italia (Italian Government)
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
- **🇬🇧 GOV.UK Design System** - UK government design system implementation
- **🇫🇷 DSFR** - French Government Design System (Système de Design de l'État Français)
- **🇨🇦 Canada.ca** - Canadian Government Design System with bilingual support
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

## 🇫🇷 DSFR (French Government Design System)

The Système de Design de l'État Français (DSFR) is the official design system for French government digital services:

### Key Features
- **République Française Branding**: Official Marianne logo and French government identity
- **Accessibility Compliance**: RGAA (French accessibility guidelines) conformity
- **Service Public Focus**: Designed for French citizen services and administration
- **Consistent Identity**: Unified experience across all French government platforms

### DSFR Components Implemented
- **Official Header**: Marianne logo with "République Française" branding
- **Phase Banner**: Beta/Alpha service status notifications
- **Navigation**: Government service navigation with breadcrumbs
- **Service Cards**: Information display cards for government services
- **Form Elements**: Accessible French government form components
- **Team Directory**: Staff directory with government styling
- **Statistics Dashboard**: Performance metrics display
- **Alerts**: Success, information, warning, and error notifications
- **Modal Dialogs**: Confirmation and information dialogs
- **Official Footer**: Standard French government footer with legal links

### DSFR Advantages
- ✅ **Government Identity**: Official French state visual identity
- ✅ **RGAA Compliance**: French accessibility standard conformity
- ✅ **Citizen-Focused**: Designed for French public service users
- ✅ **Responsive Design**: Mobile-first approach for all devices
- ✅ **Typography**: Official Marianne font family
- ✅ **Color Palette**: Official state colors and approved variants

### French Government Standards
- **Marianne Typography**: Official government font
- **Blue France Color**: Primary government blue (#000091)
- **Semantic Colors**: Standardized colors for alerts and states
- **BEM Methodology**: Structured CSS naming convention
- **Progressive Enhancement**: Works without JavaScript

## 🇨🇦 Canada.ca Design System

The Canada.ca Design System is the official design framework for Canadian government digital services:

### Key Features
- **Government of Canada Branding**: Official Government of Canada signature and visual identity
- **Bilingual by Design**: Full English and French language support with dynamic switching
- **Accessibility First**: WCAG 2.1 AA compliance and inclusive design principles
- **User-Centered**: Based on extensive user research with Canadian citizens

### Canada.ca Components Implemented
- **Official Header**: Government of Canada signature with maple leaf flag
- **Language Toggle**: Seamless English/French language switching
- **Breadcrumb Navigation**: Canada.ca compliant navigation trails
- **Super Task Button**: Primary call-to-action for government services
- **Bilingual Forms**: Complete form components with official language support
- **Service Cards**: Information display cards for government programs
- **Team Directory**: Government staff directory with official email formats
- **Performance Dashboard**: Metrics display for service delivery
- **Alert System**: Success, information, warning, and danger notifications
- **Modal Dialogs**: Accessible confirmation and information dialogs
- **Official Footer**: Standard Government of Canada footer with required links

### Canada.ca Advantages
- ✅ **Bilingual Excellence**: Native English/French support throughout
- ✅ **Federal Standards**: Meets Treasury Board Secretariat requirements
- ✅ **Citizen-Focused**: Designed for Canadian government service users
- ✅ **Accessibility Compliance**: WCAG 2.1 AA conformity built-in
- ✅ **Responsive Design**: Mobile-first approach for all devices
- ✅ **Open Government**: Transparency and open data integration
- ✅ **Federal Identity**: Official Government of Canada visual standards

### Canadian Government Standards
- **Official Signature**: Government of Canada wordmark and flag
- **Color Palette**: Federal corporate colors and approved variants
- **Typography**: Noto Sans font family for optimal readability
- **Bilingual Content**: Equal treatment of English and French languages
- **Accessibility**: Federal accessibility standards compliance
- **User Experience**: Evidence-based design from citizen research

## 🇦🇺 Australian Health Design System

The Australian Health Design System is the official design framework for Australian government health and aged care digital services:

### Key Features
- **Australian Government Branding**: Official Australian Government Coat of Arms and visual identity
- **Health-Focused Design**: Specialized components for health and medical services
- **Quick Exit Functionality**: Safety feature for sensitive health content
- **Accessibility Priority**: Full WCAG compliance for diverse user needs

### Australian Health Components Implemented
- **Government Header**: Australian Government Department of Health and Aged Care branding
- **Navigation Menu**: Health-specific navigation with responsive mobile menu
- **Breadcrumb Navigation**: Clear navigation paths for complex health information
- **Hero Section**: Prominent messaging for health outcomes and services
- **Health Service Cards**: Information display for Medicare, My Health Record, aged care services
- **Comprehensive Forms**: Detailed feedback forms with health-specific fields
- **Team Directory**: Department leadership with official government email addresses
- **Performance Dashboard**: Health system metrics and service statistics
- **Alert System**: Health-specific notifications and important updates
- **Modal Dialogs**: Confirmation dialogs for sensitive health record actions

### Design Specifications
- **Color Palette**: Official Australian government blue (#014181) with health-focused secondary colors
- **Typography**: Open Sans font family for clarity and accessibility
- **Health Focus**: Specialized components for health information and services
- **Government Standards**: Compliance with Australian government digital service standards

## 🏛️ GOLD Design System

The GOLD Design System (formerly the Australian Government Design System) is the official design framework for Australian government digital services:

### Key Features
- **Australian Government Branding**: Official Australian Government identity and visual standards
- **Component-Based Architecture**: Modular, reusable components for rapid development
- **Accessibility First**: WCAG 2.1 AA compliance built into every component
- **User-Centered Design**: Based on extensive user research with Australian citizens

### GOLD Components Implemented
- **Government Header**: Official Australian Government branding with GOLD logo
- **Responsive Navigation**: Mobile-first navigation with accessibility features
- **Breadcrumb Navigation**: Clear navigation paths following government standards
- **Hero Section**: Prominent messaging for government services and information
- **Service Cards**: Information display for government digital services and programs
- **Government Forms**: Comprehensive form components with validation and accessibility
- **Team Directory**: Government department staff directory with official email formats
- **Performance Dashboard**: Metrics display for government service delivery and adoption
- **Page Alert System**: Government-standard notifications for success, information, warnings, and errors
- **Modal Dialogs**: Accessible confirmation and information dialogs for government actions

### Design Specifications
- **Color Palette**: Official GOLD Design System colors with primary (#06262d) and secondary (#00498f) government blues
- **Typography**: Source Sans Pro font family for optimal government communication
- **Grid System**: 12-column responsive grid system for consistent layouts
- **Component Library**: Comprehensive set of pre-built, tested components
- **Accessibility**: Full WCAG 2.1 AA compliance with screen reader support

### GOLD Standards
- **Open Source**: Community-driven development with MIT licensing
- **Government Focus**: Specialized components for government services and citizen interaction
- **Documentation**: Comprehensive guidelines and implementation examples
- **Support**: Active community support and government design system expertise

## 🇳🇿 New Zealand Government Design System

The New Zealand Government Design System is designed for building accessible, consistent government websites that put citizens first:

### Key Features
- **Kiwi Innovation**: Combines international best practices with cutting-edge New Zealand innovations
- **Citizen-Centered Design**: Built to help all New Zealanders access government services easily
- **Accessibility First**: Comprehensive accessibility testing ensures inclusive design for all users
- **Evidence-Based**: Based on user research and testing with real New Zealand citizens

### New Zealand Components Implemented
- **Government Header**: New Zealand Government branding with official identity
- **Responsive Navigation**: Mobile-first navigation designed for New Zealand users
- **Breadcrumb Navigation**: Clear navigation paths following government web standards
- **Hero Section**: Prominent messaging with friendly "Kia ora!" greeting
- **Digital Service Cards**: Information display for government digital services and programs
- **Government Forms**: Comprehensive form components with New Zealand-specific validation
- **Team Directory**: Government department staff directory with official .govt.nz email addresses
- **Performance Dashboard**: Metrics display for government service delivery and citizen satisfaction
- **Page Alert System**: Four alert types (Success, Note, Warning, Error) with distinctive New Zealand styling
- **Modal Dialogs**: Accessible confirmation dialogs for government service interactions

### Design Specifications
- **Color Palette**: Official New Zealand Government colors with primary (#003d6b) and secondary (#0066a6) blues
- **Typography**: Noto Sans font family for clear government communication
- **Component Library**: 12+ released components with more coming soon (File upload, Inset text)
- **Framework Support**: Available in React, Vue, Mustache, HTML, and Twig implementations
- **Accessibility**: WCAG compliance built into every component

### New Zealand Standards
- **Government Web Standards**: Meets New Zealand Government web usability standards
- **Community Driven**: Open to community contribution via email, Slack, and GitHub
- **Multi-Framework**: Supports various development environments and CMSs
- **Alpha Phase**: Continuously improving based on user feedback and government needs

## 🇮🇹 Bootstrap Italia (Italian Government Design System)

Bootstrap Italia is the official design system for websites and digital applications of the Italian Public Administration, based on Bootstrap 5:

### Key Features
- **Government Standards**: Official Italian government digital identity and visual standards
- **Bootstrap 5 Foundation**: Built on the solid foundation of Bootstrap 5 with government customizations
- **Accessibility Compliance**: WCAG 2.1 AA standards ensuring digital accessibility for all citizens
- **Mobile-First Design**: Responsive design optimized for all devices and screen sizes

### Bootstrap Italia Components Implemented
- **Government Header**: Official Italian Republic branding with government identity
- **Navigation System**: Main navigation and breadcrumb system following Italian government standards
- **Interactive Tabs**: Tabbed navigation for organizing government information and services
- **Service Cards**: Information display for government digital services and administrative functions
- **Government Forms**: Comprehensive form components with Italian labels and government validation patterns
- **Team Directory**: Government staff directory with official Italian government email formats (.gov.it)
- **Performance Dashboard**: Metrics display for government service adoption and citizen satisfaction
- **Alert System**: Government-standard notifications for system status and citizen communications
- **Modal Dialogs**: Accessible confirmation and information dialogs for government interactions

### Design Specifications
- **Color Palette**: Official Bootstrap Italia colors with primary (#0066cc) and secondary (#5a6772) government colors
- **Typography**: Titillium Web font family, the official font for Italian government digital communications
- **Grid System**: Bootstrap 5 responsive grid system adapted for government layouts
- **Component Library**: Government-specific components following Italian digital administration guidelines
- **Accessibility**: Full WCAG 2.1 AA compliance with Italian accessibility law compliance

### Italian Government Standards
- **Designers Italia**: Follows the design guidelines from the Italian Digital Transformation Team
- **AGID Compliance**: Adheres to Italian Agency for Digital Italy (AGID) technical specifications
- **Documentation**: Comprehensive Italian language documentation and implementation guides
- **Community Support**: Active community of Italian government developers and designers

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
- **🇬🇧 GOV.UK Design System** - Système de design du gouvernement britannique
- **🇫🇷 DSFR** - Système de Design de l'État Français (design system officiel français)
- **🇨🇦 Canada.ca** - Système de design du gouvernement canadien avec support bilingue
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

## 🇫🇷 DSFR (Système de Design de l'État Français)

Le Système de Design de l'État Français (DSFR) est le système de design officiel pour les services numériques du gouvernement français :

### Caractéristiques principales
- **Identité République Française** : Logo Marianne officiel et identité du gouvernement français
- **Conformité Accessibilité** : Conformité RGAA (Référentiel Général d'Amélioration de l'Accessibilité)
- **Focus Service Public** : Conçu pour les services citoyens et l'administration française
- **Identité Cohérente** : Expérience unifiée sur toutes les plateformes gouvernementales françaises

### Composants DSFR implémentés
- **En-tête Officiel** : Logo Marianne avec l'identité "République Française"
- **Bannière de Phase** : Notifications de statut de service Beta/Alpha
- **Navigation** : Navigation des services gouvernementaux avec fil d'Ariane
- **Cartes de Services** : Cartes d'affichage d'informations pour les services gouvernementaux
- **Éléments de Formulaire** : Composants de formulaire accessibles du gouvernement français
- **Annuaire d'Équipe** : Annuaire du personnel avec style gouvernemental
- **Tableau de Bord Statistiques** : Affichage des métriques de performance
- **Alertes** : Notifications de succès, information, avertissement et erreur
- **Boîtes de Dialogue Modales** : Dialogues de confirmation et d'information
- **Pied de Page Officiel** : Pied de page standard du gouvernement français avec liens légaux

### Avantages DSFR
- ✅ **Identité Gouvernementale** : Identité visuelle officielle de l'État français
- ✅ **Conformité RGAA** : Conformité aux standards d'accessibilité français
- ✅ **Centré Citoyen** : Conçu pour les utilisateurs des services publics français
- ✅ **Design Responsive** : Approche mobile-first pour tous les appareils
- ✅ **Typographie** : Famille de polices Marianne officielle
- ✅ **Palette de Couleurs** : Couleurs officielles de l'État et variantes approuvées

### Standards du Gouvernement Français
- **Typographie Marianne** : Police officielle du gouvernement
- **Couleur Bleu France** : Bleu gouvernemental principal (#000091)
- **Couleurs Sémantiques** : Couleurs standardisées pour les alertes et états
- **Méthodologie BEM** : Convention de nommage CSS structurée
- **Amélioration Progressive** : Fonctionne sans JavaScript

## 🇨🇦 Système de Design Canada.ca

Le Système de Design Canada.ca est le cadre de conception officiel pour les services numériques du gouvernement canadien :

### Caractéristiques principales
- **Image de marque du Gouvernement du Canada** : Signature officielle du gouvernement du Canada et identité visuelle
- **Bilingue par conception** : Support complet anglais et français avec commutation dynamique
- **Accessibilité prioritaire** : Conformité WCAG 2.1 AA et principes de conception inclusive
- **Centré sur l'utilisateur** : Basé sur des recherches approfondies avec les citoyens canadiens

### Composants Canada.ca implémentés
- **En-tête Officiel** : Signature du gouvernement du Canada avec drapeau à feuille d'érable
- **Commutateur de Langue** : Basculement transparent anglais/français
- **Navigation Fil d'Ariane** : Pistes de navigation conformes à Canada.ca
- **Bouton Super Tâche** : Appel à l'action principal pour les services gouvernementaux
- **Formulaires Bilingues** : Composants de formulaire complets avec support des langues officielles
- **Cartes de Services** : Cartes d'affichage d'informations pour les programmes gouvernementaux
- **Annuaire d'Équipe** : Annuaire du personnel gouvernemental avec formats de courriels officiels
- **Tableau de Bord Performance** : Affichage des métriques de prestation de services
- **Système d'Alertes** : Notifications de succès, information, avertissement et danger
- **Boîtes de Dialogue Modales** : Dialogues de confirmation et d'information accessibles
- **Pied de Page Officiel** : Pied de page standard du gouvernement du Canada avec liens requis

### Avantages Canada.ca
- ✅ **Excellence Bilingue** : Support natif anglais/français partout
- ✅ **Standards Fédéraux** : Respecte les exigences du Secrétariat du Conseil du Trésor
- ✅ **Centré Citoyen** : Conçu pour les utilisateurs des services gouvernementaux canadiens
- ✅ **Conformité Accessibilité** : Conformité WCAG 2.1 AA intégrée
- ✅ **Design Responsive** : Approche mobile-first pour tous les appareils
- ✅ **Gouvernement Ouvert** : Intégration de la transparence et des données ouvertes
- ✅ **Identité Fédérale** : Standards visuels officiels du gouvernement du Canada

### Standards du Gouvernement Canadien
- **Signature Officielle** : Mot-symbole et drapeau du gouvernement du Canada
- **Palette de Couleurs** : Couleurs corporatives fédérales et variantes approuvées
- **Typographie** : Famille de polices Noto Sans pour une lisibilité optimale
- **Contenu Bilingue** : Traitement égal des langues anglaise et française
- **Accessibilité** : Conformité aux standards d'accessibilité fédéraux
- **Expérience Utilisateur** : Conception basée sur la recherche citoyenne

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