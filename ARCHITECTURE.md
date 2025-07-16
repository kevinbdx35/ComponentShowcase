# Architecture du Design System

## 🎯 Principe de Base

Le projet utilise maintenant une architecture **composant générique + thème spécifique** qui permet :
- ✅ **DRY** : Un seul composant référence pour tous les design systems
- ✅ **Consistency** : Tous les thèmes implémentent les mêmes interfaces
- ✅ **Maintainability** : Facile d'ajouter de nouveaux design systems
- ✅ **Flexibility** : Changement de thème en temps réel

## 📁 Structure du Projet

```
src/
├── components/
│   └── shared/
│       ├── CompanyShowcase.tsx        # Composant générique principal
│       ├── HeroSection.tsx           # Section hero générique
│       ├── ContactForm.tsx           # Formulaire de contact générique
│       ├── TeamTable.tsx             # Tableau d'équipe générique
│       ├── ServiceCards.tsx          # Cartes de service génériques
│       ├── CompanyGallery.tsx        # Galerie d'entreprise générique
│       ├── PerformanceDashboard.tsx  # Dashboard de performance générique
│       ├── AlertsDemo.tsx            # Démo d'alertes générique
│       ├── ModalDemo.tsx             # Démo de modales générique
│       ├── NavigationTabs.tsx        # Navigation par onglets générique
│       └── CompanyFooter.tsx         # Footer d'entreprise générique
│
├── themes/
│   ├── VanillaTheme.tsx             # Thème CSS vanilla (référence)
│   ├── MaterialUITheme.tsx          # Thème Material Design 3
│   ├── AntDesignTheme.tsx           # Thème Ant Design
│   ├── EvergreenTheme.tsx           # Thème Evergreen UI
│   ├── USWDSTheme.tsx               # Thème U.S. Web Design System
│   ├── GOVUKTheme.tsx               # Thème GOV.UK Design System
│   ├── DSFRTheme.tsx                # Thème DSFR (France)
│   └── BootstrapItaliaTheme.tsx     # Thème Bootstrap Italia
│
├── types/
│   ├── shared.ts                    # Interfaces communes (ButtonProps, CardProps, etc.)
│   └── theme.ts                     # Abstraction des thèmes (DesignSystemTheme)
│
├── context/
│   └── ThemeContext.tsx             # Context React pour gestion des thèmes
│
├── pages/
│   └── ThemeShowcase.tsx            # Page de démonstration des thèmes
│
└── data/
    └── companyData.ts               # Données d'entreprise partagées
```

## 🔧 Comment ça fonctionne

### 1. Composant Générique
```typescript
// CompanyShowcase.tsx
const CompanyShowcase = () => {
  const { theme } = useTheme();
  
  return (
    <theme.Container>
      <theme.Hero title="Mon Titre" subtitle="Mon Sous-titre" />
      <theme.Button variant="primary">Cliquez ici</theme.Button>
    </theme.Container>
  );
};
```

### 2. Thème Spécifique
```typescript
// MaterialUITheme.tsx
const materialTheme: DesignSystemTheme = {
  Button: MaterialButton,     // Implémentation Material UI
  Hero: MaterialHero,         // Implémentation Material UI
  Container: MaterialContainer, // Implémentation Material UI
  // ... autres composants
};
```

### 3. Utilisation
```typescript
// ThemeShowcase.tsx
<ThemeProvider theme={materialTheme.theme} config={materialTheme.config}>
  <CompanyShowcase />
</ThemeProvider>
```

## 🎨 Design Systems Implémentés

### Design Systems Gouvernementaux
- **🇺🇸 USWDS** - U.S. Web Design System (gouvernement américain)
- **🇬🇧 GOV.UK** - Design System du gouvernement britannique
- **🇫🇷 DSFR** - Design System de l'État français
- **🇮🇹 Bootstrap Italia** - Design System du gouvernement italien

### Design Systems Généraux
- **🎨 Vanilla CSS** - Référence CSS pure
- **🎨 Material UI** - Material Design 3 (Material You)
- **🎨 Ant Design** - Design system d'entreprise
- **🎨 Evergreen UI** - Design system de Segment

## 📋 Interfaces TypeScript

### Composants de Base
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
```

### Thème Abstrait
```typescript
interface DesignSystemTheme {
  Button: React.FC<ButtonProps>;
  Card: React.FC<CardProps>;
  Input: React.FC<InputProps>;
  // ... tous les composants
}
```

## 🚀 Avantages de cette Architecture

1. **Code Réutilisable** : Un seul composant pour tous les design systems
2. **Type Safety** : Interfaces TypeScript strictes
3. **Extensibilité** : Facile d'ajouter de nouveaux design systems
4. **Consistance** : Même comportement pour tous les thèmes
5. **Maintenabilité** : Modifications centralisées
6. **Performance** : Chargement dynamique des thèmes

## 🔄 Ajout d'un Nouveau Design System

1. Créer le fichier thème : `src/themes/MonNouveauTheme.tsx`
2. Implémenter l'interface `DesignSystemTheme`
3. Exporter comme `DesignSystemThemeExport`
4. Ajouter au `ThemeShowcase.tsx`

```typescript
// MonNouveauTheme.tsx
export const MonNouveauThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'mon-nouveau-theme',
    name: 'Mon Nouveau Theme',
    description: 'Description du thème',
    // ...
  },
  theme: monNouveauTheme,
  config: monNouveauConfig
};
```

## 🧪 Tests

Les tests sont maintenant centralisés sur :
- Les composants génériques dans `src/components/shared/`
- Les interfaces TypeScript dans `src/types/`
- Le contexte de thème dans `src/context/`

## 📚 Documentation

Chaque thème inclut :
- Informations sur le design system
- Lien vers la documentation officielle
- Fonctionnalités supportées
- Niveau d'accessibilité (WCAG)
- Statut de développement