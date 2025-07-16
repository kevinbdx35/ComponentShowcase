import React from 'react';
import { DesignSystemTheme, ThemeConfig, DesignSystemThemeExport } from '../types/theme';
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
} from '../types/shared';

// DSFR theme implementation (French Government Design System)
const DSFRButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...props 
}) => {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'Marianne, arial, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    opacity: disabled ? 0.6 : 1
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#000091',
      color: '#ffffff',
      border: '1px solid #000091'
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: '#000091',
      border: '1px solid #000091'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#000091',
      border: '1px solid #000091'
    },
    text: {
      backgroundColor: 'transparent',
      color: '#000091',
      border: '1px solid transparent',
      textDecoration: 'underline'
    }
  };

  const sizeStyles = {
    small: { fontSize: '14px', padding: '4px 8px' },
    medium: { fontSize: '16px', padding: '8px 16px' },
    large: { fontSize: '18px', padding: '12px 24px' }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="fr-btn"
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const DSFRCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <div 
      className="fr-card"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
        marginBottom: '16px',
        ...style
      }}
      {...props}
    >
      {title && (
        <h3 style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '20px',
          fontWeight: 700,
          color: '#161616',
          margin: '0 0 8px 0',
          lineHeight: '28px'
        }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '16px',
          color: '#666666',
          margin: '0 0 16px 0',
          lineHeight: '24px'
        }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

const DSFRInput: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  type = 'text',
  style,
  ...props 
}) => {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="fr-input-group" style={{ marginBottom: '16px' }}>
      {label && (
        <label 
          className="fr-label"
          htmlFor={inputId}
          style={{
            fontFamily: 'Marianne, arial, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#161616',
            display: 'block',
            marginBottom: '8px'
          }}
        >
          {label}
          {required && <span style={{ color: '#e1000f' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`fr-input ${error ? 'fr-input--error' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '16px',
          lineHeight: '24px',
          padding: '8px 12px',
          border: `2px solid ${error ? '#e1000f' : '#3a3a3a'}`,
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          ...style
        }}
        {...props}
      />
      {error && (
        <p style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '14px',
          color: '#e1000f',
          margin: '4px 0 0 0',
          lineHeight: '20px'
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

const DSFRTextarea: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  style,
  ...props 
}) => {
  const textareaId = `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="fr-input-group" style={{ marginBottom: '16px' }}>
      {label && (
        <label 
          className="fr-label"
          htmlFor={textareaId}
          style={{
            fontFamily: 'Marianne, arial, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#161616',
            display: 'block',
            marginBottom: '8px'
          }}
        >
          {label}
          {required && <span style={{ color: '#e1000f' }}> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`fr-input ${error ? 'fr-input--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        rows={4}
        style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '16px',
          lineHeight: '24px',
          padding: '8px 12px',
          border: `2px solid ${error ? '#e1000f' : '#3a3a3a'}`,
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          resize: 'vertical',
          ...style
        }}
        {...props}
      />
      {error && (
        <p style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '14px',
          color: '#e1000f',
          margin: '4px 0 0 0',
          lineHeight: '20px'
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

const DSFRSelect: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value, 
  onChange, 
  error, 
  required = false,
  style,
  ...props 
}) => {
  const selectId = `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="fr-select-group" style={{ marginBottom: '16px' }}>
      {label && (
        <label 
          className="fr-label"
          htmlFor={selectId}
          style={{
            fontFamily: 'Marianne, arial, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#161616',
            display: 'block',
            marginBottom: '8px'
          }}
        >
          {label}
          {required && <span style={{ color: '#e1000f' }}> *</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`fr-select ${error ? 'fr-select--error' : ''}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '16px',
          lineHeight: '24px',
          padding: '8px 12px',
          border: `2px solid ${error ? '#e1000f' : '#3a3a3a'}`,
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          ...style
        }}
        {...props}
      >
        <option value="">Sélectionner</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '14px',
          color: '#e1000f',
          margin: '4px 0 0 0',
          lineHeight: '20px'
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

const DSFRCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="fr-checkbox-group" style={{ marginBottom: '16px', ...style }}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          width: '20px',
          height: '20px',
          marginRight: '8px',
          accentColor: '#000091'
        }}
        {...props}
      />
      <label 
        htmlFor={checkboxId}
        style={{
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '16px',
          color: '#161616',
          cursor: 'pointer',
          lineHeight: '24px'
        }}
      >
        {label}
      </label>
    </div>
  );
};

const DSFRRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <fieldset className="fr-fieldset" style={{ border: 'none', padding: 0, margin: 0, ...style }} {...props}>
      <legend style={{
        fontFamily: 'Marianne, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 500,
        color: '#161616',
        marginBottom: '16px'
      }}>
        {name}
      </legend>
      {options.map((option, index) => {
        const radioId = `radio-${name}-${index}`;
        return (
          <div key={option.value} className="fr-radio-group" style={{ marginBottom: '8px' }}>
            <input
              id={radioId}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              style={{
                width: '20px',
                height: '20px',
                marginRight: '8px',
                accentColor: '#000091'
              }}
            />
            <label 
              htmlFor={radioId}
              style={{
                fontFamily: 'Marianne, arial, sans-serif',
                fontSize: '16px',
                color: '#161616',
                cursor: 'pointer',
                lineHeight: '24px'
              }}
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

const DSFRTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <table className="fr-table" style={{ 
    width: '100%', 
    borderCollapse: 'collapse',
    fontFamily: 'Marianne, arial, sans-serif',
    ...style 
  }} {...props}>
    <thead>
      <tr style={{ backgroundColor: '#f6f6f6' }}>
        {headers.map((header, i) => (
          <th key={i} style={{
            padding: '12px 16px',
            textAlign: 'left',
            borderBottom: '2px solid #000091',
            fontWeight: 700,
            fontSize: '16px',
            color: '#161616'
          }}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
          {Object.values(row).map((cell: any, j) => (
            <td key={j} style={{
              padding: '12px 16px',
              fontSize: '16px',
              color: '#161616',
              lineHeight: '24px'
            }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const DSFRAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  style, 
  ...props 
}) => {
  const typeStyles = {
    error: { backgroundColor: '#ffe9e9', borderColor: '#e1000f', color: '#e1000f' },
    warning: { backgroundColor: '#fff4e6', borderColor: '#fc5d00', color: '#fc5d00' },
    success: { backgroundColor: '#e8f5e8', borderColor: '#18753c', color: '#18753c' },
    info: { backgroundColor: '#e8edff', borderColor: '#000091', color: '#000091' }
  };

  return (
    <div 
      className={`fr-alert fr-alert--${type}`}
      style={{
        fontFamily: 'Marianne, arial, sans-serif',
        padding: '16px',
        borderLeft: `4px solid ${typeStyles[type].borderColor}`,
        backgroundColor: typeStyles[type].backgroundColor,
        marginBottom: '16px',
        ...style
      }}
      {...props}
    >
      {title && (
        <h3 style={{
          fontSize: '18px',
          fontWeight: 700,
          color: typeStyles[type].color,
          margin: '0 0 8px 0'
        }}>
          {title}
        </h3>
      )}
      <p style={{
        fontSize: '16px',
        color: '#161616',
        margin: 0,
        lineHeight: '24px'
      }}>
        {message}
      </p>
    </div>
  );
};

const DSFRModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  ...props 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fr-modal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      {...props}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90%',
          overflow: 'auto',
          fontFamily: 'Marianne, arial, sans-serif',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.32)'
        }}
      >
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#161616',
            margin: 0
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666666',
              padding: '8px'
            }}
          >
            ×
          </button>
        </div>
        <div style={{ padding: '24px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Placeholder implementations for complex components
const PlaceholderComponent: React.FC<any> = ({ children, style, ...props }) => (
  <div style={{ 
    padding: '16px', 
    border: '1px solid #e5e5e5', 
    borderRadius: '8px',
    backgroundColor: '#f6f6f6',
    fontFamily: 'Marianne, arial, sans-serif',
    fontSize: '16px',
    color: '#161616',
    ...style 
  }} {...props}>
    {children || 'Composant DSFR'}
  </div>
);

const dsfrTheme: DesignSystemTheme = {
  Button: DSFRButton,
  Card: DSFRCard,
  Input: DSFRInput,
  Textarea: DSFRTextarea,
  Select: DSFRSelect,
  Checkbox: DSFRCheckbox,
  RadioGroup: DSFRRadioGroup,
  Slider: PlaceholderComponent,
  Rating: PlaceholderComponent,
  Table: DSFRTable,
  Avatar: PlaceholderComponent,
  Badge: PlaceholderComponent,
  Progress: PlaceholderComponent,
  Alert: DSFRAlert,
  Modal: DSFRModal,
  Tabs: PlaceholderComponent,
  Breadcrumb: PlaceholderComponent,
  Container: ({ children, style, ...props }) => (
    <div 
      className="fr-container"
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 16px',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <div 
      className="fr-grid-row"
      style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${columns}, 1fr)`, 
        gap: '16px',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  ),
  Stack: ({ children, direction = 'column', spacing = 1, style, ...props }) => (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: direction,
        gap: `${spacing * 16}px`,
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  ),
  Heading: ({ children, level = 1, style, ...props }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const sizes = {
      1: '32px',
      2: '28px',
      3: '24px',
      4: '20px',
      5: '18px',
      6: '16px'
    };
    
    return React.createElement(Tag, {
      className: `fr-h${level}`,
      style: {
        fontFamily: 'Marianne, arial, sans-serif',
        fontSize: sizes[level], 
        fontWeight: 700, 
        color: '#161616', 
        margin: '0 0 16px 0',
        lineHeight: 1.2,
        ...style 
      },
      ...props
    }, children);
  },
  Text: ({ children, variant = 'body', style, ...props }) => {
    const variantStyles = {
      body: { fontSize: '16px', lineHeight: '24px' },
      caption: { fontSize: '14px', color: '#666666', lineHeight: '20px' },
      subtitle: { fontSize: '18px', fontWeight: 500, lineHeight: '28px' }
    };
    
    return (
      <p 
        className={`fr-text${variant === 'subtitle' ? '--lg' : variant === 'caption' ? '--sm' : ''}`}
        style={{ 
          fontFamily: 'Marianne, arial, sans-serif',
          color: '#161616',
          margin: '0 0 16px 0',
          ...variantStyles[variant], 
          ...style 
        }} 
        {...props}
      >
        {children}
      </p>
    );
  },
  Link: ({ children, href, external, style, ...props }) => (
    <a 
      className="fr-link"
      href={href} 
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ 
        fontFamily: 'Marianne, arial, sans-serif',
        color: '#000091',
        textDecoration: 'underline',
        ...style 
      }} 
      {...props}
    >
      {children}
    </a>
  ),
  Form: ({ children, onSubmit, ...props }) => (
    <form className="fr-form" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  ),
  FormField: ({ children, label, error, required, ...props }) => (
    <div className={`fr-input-group ${error ? 'fr-input-group--error' : ''}`} {...props}>
      {children}
    </div>
  ),
  Header: ({ title, navigation, ...props }) => (
    <header 
      className="fr-header" 
      style={{ 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        padding: '16px 0'
      }} 
      {...props}
    >
      <div className="fr-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{
            fontFamily: 'Marianne, arial, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            color: '#161616',
            margin: 0
          }}>
            {title}
          </h1>
          {navigation}
        </div>
      </div>
    </header>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <section 
      className="fr-hero"
      style={{ 
        background: 'linear-gradient(135deg, #000091 0%, #1212ff 100%)',
        color: '#ffffff',
        padding: '80px 0',
        textAlign: 'center'
      }}
      {...props}
    >
      <div className="fr-container">
        <h1 style={{ 
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '48px', 
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 24px 0',
          lineHeight: 1.1
        }}>
          {title}
        </h1>
        <p style={{ 
          fontFamily: 'Marianne, arial, sans-serif',
          fontSize: '20px', 
          color: '#ffffff',
          margin: '0 0 32px 0',
          lineHeight: 1.4
        }}>
          {subtitle}
        </p>
        {actions}
      </div>
    </section>
  ),
  Footer: ({ children, ...props }) => (
    <footer 
      className="fr-footer" 
      style={{ 
        backgroundColor: '#f6f6f6',
        borderTop: '1px solid #e5e5e5',
        padding: '32px 0'
      }} 
      {...props}
    >
      {children}
    </footer>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <div 
      className="fr-card"
      style={{ 
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  )
};

const dsfrConfig: ThemeConfig = {
  name: 'DSFR',
  primaryColor: '#000091',
  secondaryColor: '#e1000f',
  backgroundColor: '#ffffff',
  textColor: '#161616',
  borderRadius: '8px',
  fontFamily: 'Marianne, arial, sans-serif',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 2px 6px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.32)'
  }
};

export const DSFRThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'dsfr',
    name: 'DSFR',
    description: 'Design System de l\'État français - Système de design officiel pour l\'administration française',
    version: '1.0.0',
    documentation: 'https://www.systeme-de-design.gouv.fr/',
    category: 'government',
    status: 'active',
    features: [
      'Conformité RGAA 4.1',
      'Accessibilité WCAG 2.1 AA',
      'Identité visuelle de l\'État',
      'Composants certifiés',
      'Responsive design',
      'Multilingue'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: dsfrTheme,
  config: dsfrConfig
};