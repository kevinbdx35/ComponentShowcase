# UI Design System Comparison

A comprehensive comparison platform for popular UI design systems, implementing the same components across different systems to facilitate informed design decisions.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W61I0YBJ)

🌐 **Live Demo**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [🔧 Implemented Design Systems](#-implemented-design-systems)
- [📊 Feature Comparison](#-feature-comparison)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🛠️ Technical Stack](#️-technical-stack)
- [🤝 Contributing](#-contributing)
- [🇫🇷 Version Française](#-version-française)

---

## 🎯 Project Overview

This project provides a unified platform to compare and evaluate different UI design systems side by side. It demonstrates how the same components and functionality can be implemented across various design systems, helping developers and designers make informed decisions for their projects.

### Key Features
- **Unified Architecture**: One generic component system that works with all design systems
- **Real-time Comparison**: Switch between design systems instantly
- **Comprehensive Coverage**: Government, enterprise, and open-source design systems
- **Accessibility Focus**: All implementations maintain WCAG 2.1 AA compliance
- **Live Demo**: Interactive showcase with real components and data

---

## 🏗️ Architecture

The project uses a modern, scalable architecture:

```
src/
├── components/
│   └── shared/             # Generic components used across all themes
├── themes/                 # Design system implementations
│   ├── VanillaTheme.tsx   # CSS-only reference implementation
│   ├── MaterialUITheme.tsx # Material Design 3 implementation
│   ├── AntDesignTheme.tsx  # Ant Design implementation
│   ├── EvergreenTheme.tsx  # Evergreen UI implementation
│   ├── FluentUITheme.tsx   # Microsoft Fluent UI 2 implementation
│   ├── USWDSTheme.tsx      # U.S. Web Design System
│   ├── GOVUKTheme.tsx      # UK Government Design System
│   ├── DSFRTheme.tsx       # French Government Design System
│   └── BootstrapItaliaTheme.tsx # Italian Government Design System
├── context/
│   └── ThemeContext.tsx    # Theme switching logic
├── types/
│   ├── theme.ts           # Theme interfaces
│   └── shared.ts          # Shared type definitions
└── pages/
    └── ThemeShowcase.tsx   # Main showcase page
```

### Design Principles
- **Theme-agnostic Components**: Generic components that work with any design system
- **Type Safety**: Full TypeScript support with comprehensive interfaces
- **Accessibility First**: WCAG 2.1 AA compliance built into every theme
- **Performance Optimized**: Efficient rendering and bundle splitting

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
git clone https://github.com/kevinbdx35/ComponentShowcase.git
cd ComponentShowcase
npm install
```

### Development
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
```

### Testing
```bash
npm test
```

---

## 🔧 Implemented Design Systems

### 🎨 **UI Libraries & Frameworks**

#### 1. **Vanilla CSS (Reference)**
- Pure CSS implementation serving as the baseline
- Modern CSS Grid and Flexbox
- Custom properties for theming
- No external dependencies

#### 2. **Material UI (Material Design 3)**
- Google's Material Design 3 (Material You)
- Comprehensive theming system
- Extensive component library
- Excellent accessibility support

#### 3. **Ant Design**
- Enterprise-focused design language
- Rich component ecosystem
- Excellent TypeScript support
- Comprehensive data visualization

#### 4. **Evergreen UI**
- Segment's design system
- Modern React patterns
- Focused on developer experience
- Modular architecture

#### 5. **Fluent UI 2 (Microsoft)**
- Microsoft's modern design system
- Cross-platform consistency
- Enterprise-ready components
- Office integration patterns

### 🏛️ **Government Design Systems**

#### 1. **U.S. Web Design System (USWDS)**
- Official U.S. federal government design system
- Section 508 and WCAG 2.1 AA compliance
- Designed for government services
- Security-focused implementation

#### 2. **GOV.UK Design System**
- UK government's official design system
- Citizen-focused design approach
- Extensive user research backing
- Progressive enhancement principles

#### 3. **DSFR (French Government)**
- Système de Design de l'État Français
- Official French government identity
- RGAA accessibility compliance
- Marianne typography system

#### 4. **Bootstrap Italia**
- Italian government design system
- Built on Bootstrap 5 foundation
- Titillium Web typography
- AGID compliance standards

---

## 📊 Feature Comparison

| Feature | Vanilla | Material UI | Ant Design | Fluent UI 2 | USWDS | GOV.UK | DSFR | Bootstrap Italia | Evergreen |
|---------|---------|-------------|------------|-------------|--------|--------|------|------------------|-----------|
| **Bundle Size** | Minimal | Medium | Large | Medium | Small | Small | Small | Medium | Medium |
| **Customization** | Full | High | Medium | Medium | Limited | Limited | Limited | Medium | High |
| **Accessibility** | Custom | Excellent | Good | Excellent | Excellent | Excellent | Excellent | Excellent | Excellent |
| **Documentation** | - | Excellent | Very Good | Excellent | Excellent | Excellent | Good | Good | Good |
| **Enterprise Ready** | - | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Government Use** | - | No | No | No | Yes | Yes | Yes | Yes | No |

---

## 🧪 Testing

The project includes comprehensive testing:

- **Component Testing**: Each theme's components are tested
- **Integration Testing**: Cross-theme functionality
- **Accessibility Testing**: WCAG compliance verification
- **Performance Testing**: Bundle size and render performance

### Test Structure
```
src/
├── setupTests.ts          # Test configuration
└── components/
    └── shared/
        └── __tests__/     # Component tests
```

### Running Tests
```bash
npm test                   # Run all tests
npm test -- --coverage    # Run with coverage report
```

---

## 🚀 Deployment

### Automatic Deployment
This project is automatically deployed to GitHub Pages using GitHub Actions.

- **Live Demo**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)
- **Auto-deploy**: Every push to `main` triggers deployment
- **Optimized Build**: Production builds are optimized for performance

### Manual Deployment
```bash
npm run build
# Deploy build/ folder to your hosting platform
```

---

## 🛠️ Technical Stack

### Core Technologies
- **React 19** - UI framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **React Context** - State management

### Design Systems
- **@mui/material** - Material UI components
- **antd** - Ant Design components
- **evergreen-ui** - Evergreen UI components
- **@uswds/uswds** - U.S. Web Design System
- **govuk-frontend** - GOV.UK Design System

### Development Tools
- **React Scripts** - Build tooling
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **GitHub Actions** - CI/CD

### Additional Features
- **Three.js** - 3D visualizations
- **Visx** - Data visualization
- **Semiotic** - Advanced charts

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### Development Guidelines
1. Follow the existing architecture patterns
2. Maintain TypeScript type safety
3. Ensure accessibility compliance
4. Write tests for new features
5. Update documentation

### Adding New Design Systems
1. Create a new theme file in `src/themes/`
2. Implement the `DesignSystemTheme` interface
3. Add the theme to `ThemeShowcase.tsx`
4. Update this README

---

# 🇫🇷 Version Française

# Comparaison des Systèmes de Design UI

Une plateforme complète de comparaison pour les systèmes de design UI populaires, implémentant les mêmes composants à travers différents systèmes pour faciliter les décisions de design éclairées.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W61I0YBJ)

🌐 **Démo en Direct**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)

---

## 📋 Table des Matières

- [🎯 Aperçu du Projet](#-aperçu-du-projet)
- [🏗️ Architecture](#️-architecture-1)
- [🚀 Démarrage Rapide](#-démarrage-rapide)
- [🔧 Systèmes de Design Implémentés](#-systèmes-de-design-implémentés)
- [📊 Comparaison des Fonctionnalités](#-comparaison-des-fonctionnalités)
- [🧪 Tests](#-tests)
- [🚀 Déploiement](#-déploiement-1)
- [🛠️ Stack Technique](#️-stack-technique)
- [🤝 Contribution](#-contribution)

---

## 🎯 Aperçu du Projet

Ce projet fournit une plateforme unifiée pour comparer et évaluer différents systèmes de design UI côte à côte. Il démontre comment les mêmes composants et fonctionnalités peuvent être implémentés à travers divers systèmes de design, aidant les développeurs et designers à prendre des décisions éclairées pour leurs projets.

### Fonctionnalités Clés
- **Architecture Unifiée**: Un système de composants générique qui fonctionne avec tous les systèmes de design
- **Comparaison en Temps Réel**: Basculez entre les systèmes de design instantanément
- **Couverture Complète**: Systèmes de design gouvernementaux, d'entreprise et open-source
- **Focus Accessibilité**: Toutes les implémentations maintiennent la conformité WCAG 2.1 AA
- **Démo Live**: Vitrine interactive avec des composants et données réels

---

## 🏗️ Architecture

Le projet utilise une architecture moderne et scalable :

```
src/
├── components/
│   └── shared/             # Composants génériques utilisés dans tous les thèmes
├── themes/                 # Implémentations des systèmes de design
│   ├── VanillaTheme.tsx   # Implémentation de référence CSS uniquement
│   ├── MaterialUITheme.tsx # Implémentation Material Design 3
│   ├── AntDesignTheme.tsx  # Implémentation Ant Design
│   ├── EvergreenTheme.tsx  # Implémentation Evergreen UI
│   ├── FluentUITheme.tsx   # Implémentation Microsoft Fluent UI 2
│   ├── USWDSTheme.tsx      # Système de Design Web U.S.
│   ├── GOVUKTheme.tsx      # Système de Design du Gouvernement UK
│   ├── DSFRTheme.tsx       # Système de Design du Gouvernement Français
│   └── BootstrapItaliaTheme.tsx # Système de Design du Gouvernement Italien
├── context/
│   └── ThemeContext.tsx    # Logique de basculement des thèmes
├── types/
│   ├── theme.ts           # Interfaces des thèmes
│   └── shared.ts          # Définitions de types partagés
└── pages/
    └── ThemeShowcase.tsx   # Page principale de démonstration
```

### Principes de Design
- **Composants Agnostiques aux Thèmes**: Composants génériques qui fonctionnent avec n'importe quel système de design
- **Sécurité des Types**: Support TypeScript complet avec interfaces exhaustives
- **Accessibilité d'Abord**: Conformité WCAG 2.1 AA intégrée dans chaque thème
- **Optimisé pour les Performances**: Rendu efficace et division des bundles

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 16+ et npm

### Installation
```bash
git clone https://github.com/kevinbdx35/ComponentShowcase.git
cd ComponentShowcase
npm install
```

### Développement
```bash
npm start
```
Ouvre [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build
```bash
npm run build
```

### Tests
```bash
npm test
```

---

## 🔧 Systèmes de Design Implémentés

### 🎨 **Bibliothèques et Frameworks UI**

#### 1. **Vanilla CSS (Référence)**
- Implémentation CSS pure servant de base
- CSS Grid et Flexbox modernes
- Propriétés personnalisées pour le thème
- Aucune dépendance externe

#### 2. **Material UI (Material Design 3)**
- Material Design 3 de Google (Material You)
- Système de thème complet
- Bibliothèque de composants étendue
- Excellent support d'accessibilité

#### 3. **Ant Design**
- Langage de design axé sur l'entreprise
- Écosystème de composants riche
- Excellent support TypeScript
- Visualisation de données complète

#### 4. **Evergreen UI**
- Système de design de Segment
- Patterns React modernes
- Focus sur l'expérience développeur
- Architecture modulaire

#### 5. **Fluent UI 2 (Microsoft)**
- Système de design moderne de Microsoft
- Cohérence cross-platform
- Composants prêts pour l'entreprise
- Patterns d'intégration Office

### 🏛️ **Systèmes de Design Gouvernementaux**

#### 1. **U.S. Web Design System (USWDS)**
- Système de design officiel du gouvernement fédéral américain
- Conformité Section 508 et WCAG 2.1 AA
- Conçu pour les services gouvernementaux
- Implémentation axée sur la sécurité

#### 2. **GOV.UK Design System**
- Système de design officiel du gouvernement britannique
- Approche de design centrée sur le citoyen
- Recherche utilisateur extensive
- Principes d'amélioration progressive

#### 3. **DSFR (Gouvernement Français)**
- Système de Design de l'État Français
- Identité officielle du gouvernement français
- Conformité accessibilité RGAA
- Système typographique Marianne

#### 4. **Bootstrap Italia**
- Système de design du gouvernement italien
- Construit sur la fondation Bootstrap 5
- Typographie Titillium Web
- Standards de conformité AGID

---

## 📊 Comparaison des Fonctionnalités

| Fonctionnalité | Vanilla | Material UI | Ant Design | Fluent UI 2 | USWDS | GOV.UK | DSFR | Bootstrap Italia | Evergreen |
|----------------|---------|-------------|------------|-------------|--------|--------|------|------------------|-----------|
| **Taille Bundle** | Minimale | Moyenne | Grande | Moyenne | Petite | Petite | Petite | Moyenne | Moyenne |
| **Personnalisation** | Complète | Élevée | Moyenne | Moyenne | Limitée | Limitée | Limitée | Moyenne | Élevée |
| **Accessibilité** | Custom | Excellente | Bonne | Excellente | Excellente | Excellente | Excellente | Excellente | Excellente |
| **Documentation** | - | Excellente | Très Bonne | Excellente | Excellente | Excellente | Bonne | Bonne | Bonne |
| **Enterprise** | - | Oui | Oui | Oui | Oui | Oui | Oui | Oui | Oui |
| **Usage Gov** | - | Non | Non | Non | Oui | Oui | Oui | Oui | Non |

---

## 🧪 Tests

Le projet inclut des tests complets :

- **Tests de Composants**: Chaque composant de thème est testé
- **Tests d'Intégration**: Fonctionnalité cross-thème
- **Tests d'Accessibilité**: Vérification de conformité WCAG
- **Tests de Performance**: Taille de bundle et performance de rendu

### Structure des Tests
```
src/
├── setupTests.ts          # Configuration des tests
└── components/
    └── shared/
        └── __tests__/     # Tests de composants
```

### Exécution des Tests
```bash
npm test                   # Exécuter tous les tests
npm test -- --coverage    # Exécuter avec rapport de couverture
```

---

## 🚀 Déploiement

### Déploiement Automatique
Ce projet est automatiquement déployé sur GitHub Pages en utilisant GitHub Actions.

- **Démo Live**: [https://kevinbdx35.github.io/ComponentShowcase](https://kevinbdx35.github.io/ComponentShowcase)
- **Auto-déploiement**: Chaque push vers `main` déclenche le déploiement
- **Build Optimisé**: Les builds de production sont optimisés pour les performances

### Déploiement Manuel
```bash
npm run build
# Déployer le dossier build/ sur votre plateforme d'hébergement
```

---

## 🛠️ Stack Technique

### Technologies Principales
- **React 19** - Framework UI
- **TypeScript** - Sécurité des types
- **React Router** - Navigation
- **React Context** - Gestion d'état

### Systèmes de Design
- **@mui/material** - Composants Material UI
- **antd** - Composants Ant Design
- **evergreen-ui** - Composants Evergreen UI
- **@uswds/uswds** - Système de Design Web U.S.
- **govuk-frontend** - Système de Design GOV.UK

### Outils de Développement
- **React Scripts** - Outillage de build
- **Jest** - Framework de test
- **React Testing Library** - Tests de composants
- **GitHub Actions** - CI/CD

### Fonctionnalités Additionnelles
- **Three.js** - Visualisations 3D
- **Visx** - Visualisation de données
- **Semiotic** - Graphiques avancés

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des issues et pull requests.

### Directives de Développement
1. Suivez les patterns d'architecture existants
2. Maintenez la sécurité des types TypeScript
3. Assurez la conformité d'accessibilité
4. Écrivez des tests pour les nouvelles fonctionnalités
5. Mettez à jour la documentation

### Ajout de Nouveaux Systèmes de Design
1. Créez un nouveau fichier de thème dans `src/themes/`
2. Implémentez l'interface `DesignSystemTheme`
3. Ajoutez le thème à `ThemeShowcase.tsx`
4. Mettez à jour ce README

---

## 📄 License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Tous les mainteneurs des systèmes de design implémentés
- La communauté open-source pour les outils et bibliothèques
- Les équipes gouvernementales pour leurs systèmes de design accessibles

---

**Développé avec ❤️ pour la communauté des développeurs et designers**