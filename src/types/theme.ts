import React from 'react';
import {
  ButtonProps,
  CardProps,
  InputProps,
  SelectProps,
  TableProps,
  AlertProps,
  ModalProps,
  TabsProps,
  BreadcrumbProps,
  AvatarProps,
  BadgeProps,
  ProgressProps,
  RatingProps,
  CheckboxProps,
  RadioGroupProps,
  SliderProps,
  ComponentProps
} from './shared';

// Theme interface that each design system must implement
export interface DesignSystemTheme {
  // Basic components
  Button: React.FC<ButtonProps>;
  Card: React.FC<CardProps>;
  Input: React.FC<InputProps>;
  Textarea: React.FC<InputProps>;
  Select: React.FC<SelectProps>;
  Checkbox: React.FC<CheckboxProps>;
  RadioGroup: React.FC<RadioGroupProps>;
  Slider: React.FC<SliderProps>;
  Rating: React.FC<RatingProps>;
  
  // Display components
  Table: React.FC<TableProps>;
  Avatar: React.FC<AvatarProps>;
  Badge: React.FC<BadgeProps>;
  Progress: React.FC<ProgressProps>;
  Alert: React.FC<AlertProps>;
  Modal: React.FC<ModalProps>;
  
  // Navigation components
  Tabs: React.FC<TabsProps>;
  Breadcrumb: React.FC<BreadcrumbProps>;
  
  // Layout components
  Container: React.FC<ComponentProps>;
  Grid: React.FC<ComponentProps & { columns?: number }>;
  Stack: React.FC<ComponentProps & { direction?: 'row' | 'column'; spacing?: number }>;
  
  // Typography components
  Heading: React.FC<ComponentProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 }>;
  Text: React.FC<ComponentProps & { variant?: 'body' | 'caption' | 'subtitle' }>;
  Link: React.FC<ComponentProps & { href?: string; external?: boolean }>;
  
  // Form components
  Form: React.FC<ComponentProps & { onSubmit?: (e: React.FormEvent) => void }>;
  FormField: React.FC<ComponentProps & { label?: string; error?: string; required?: boolean }>;
  
  // Specialized components
  Header: React.FC<ComponentProps & { title?: string; navigation?: React.ReactNode }>;
  Hero: React.FC<ComponentProps & { title?: string; subtitle?: string; actions?: React.ReactNode }>;
  Footer: React.FC<ComponentProps>;
  
  // Chart placeholder (will be replaced with actual chart component)
  ChartContainer: React.FC<ComponentProps>;
}

// Theme configuration
export interface ThemeConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: string;
  fontFamily: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Theme provider props
export interface ThemeProviderProps {
  theme: DesignSystemTheme;
  config: ThemeConfig;
  children: React.ReactNode;
}

// Theme context
export interface ThemeContextValue {
  theme: DesignSystemTheme;
  config: ThemeConfig;
}

// Design system metadata
export interface DesignSystemInfo {
  id: string;
  name: string;
  description: string;
  version: string;
  documentation: string;
  category: 'government' | 'enterprise' | 'general' | 'visualization';
  status: 'active' | 'beta' | 'deprecated';
  features: string[];
  accessibility: {
    wcag: string;
    screenReader: boolean;
    keyboard: boolean;
    colorContrast: boolean;
  };
}

// Combined theme export
export interface DesignSystemThemeExport {
  info: DesignSystemInfo;
  theme: DesignSystemTheme;
  config: ThemeConfig;
  wrapper?: React.FC<{ children: React.ReactNode }>;
}