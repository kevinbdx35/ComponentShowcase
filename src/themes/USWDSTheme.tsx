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

// USWDS theme implementation using CSS classes and native HTML elements
const USWDSButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...props 
}) => {
  const baseClasses = 'usa-button';
  const variantClasses = {
    primary: '',
    secondary: 'usa-button--secondary',
    outline: 'usa-button--outline',
    text: 'usa-button--unstyled'
  };
  
  const sizeClasses = {
    small: 'usa-button--small',
    medium: '',
    large: 'usa-button--big'
  };

  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size]
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

const USWDSCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <div 
      className="usa-card"
      style={style}
      {...props}
    >
      <div className="usa-card__container">
        <div className="usa-card__header">
          {title && <h2 className="usa-card__heading">{title}</h2>}
        </div>
        <div className="usa-card__body">
          {subtitle && <p>{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

const USWDSInput: React.FC<InputProps> = ({ 
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
    <div className="usa-form-group" style={{ marginBottom: '1rem' }}>
      {label && (
        <label 
          className={`usa-label ${required ? 'usa-label--required' : ''} ${error ? 'usa-label--error' : ''}`}
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`usa-input ${error ? 'usa-input--error' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={style}
        {...props}
      />
      {error && (
        <div className="usa-error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

const USWDSTextarea: React.FC<InputProps> = ({ 
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
    <div className="usa-form-group" style={{ marginBottom: '1rem' }}>
      {label && (
        <label 
          className={`usa-label ${required ? 'usa-label--required' : ''} ${error ? 'usa-label--error' : ''}`}
          htmlFor={textareaId}
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`usa-textarea ${error ? 'usa-input--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        rows={4}
        style={style}
        {...props}
      />
      {error && (
        <div className="usa-error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

const USWDSSelect: React.FC<SelectProps> = ({ 
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
    <div className="usa-form-group" style={{ marginBottom: '1rem' }}>
      {label && (
        <label 
          className={`usa-label ${required ? 'usa-label--required' : ''} ${error ? 'usa-label--error' : ''}`}
          htmlFor={selectId}
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`usa-select ${error ? 'usa-input--error' : ''}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={style}
        {...props}
      >
        <option value="">- Select -</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="usa-error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

const USWDSCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="usa-checkbox" style={style}>
      <input
        id={checkboxId}
        className="usa-checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
      <label className="usa-checkbox__label" htmlFor={checkboxId}>
        {label}
      </label>
    </div>
  );
};

const USWDSRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <fieldset className="usa-fieldset" style={style} {...props}>
      <legend className="usa-legend">{name}</legend>
      {options.map((option, index) => {
        const radioId = `radio-${name}-${index}`;
        return (
          <div key={option.value} className="usa-radio">
            <input
              id={radioId}
              className="usa-radio__input"
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
            />
            <label className="usa-radio__label" htmlFor={radioId}>
              {option.label}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

const USWDSTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <table className="usa-table" style={style} {...props}>
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={i} scope="col">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {Object.values(row).map((cell: any, j) => (
            <td key={j}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const USWDSAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  dismissible, 
  onDismiss, 
  style, 
  ...props 
}) => {
  const alertTypes = {
    error: 'usa-alert--error',
    warning: 'usa-alert--warning',
    success: 'usa-alert--success',
    info: 'usa-alert--info'
  };

  return (
    <div 
      className={`usa-alert ${alertTypes[type]} ${dismissible ? 'usa-alert--slim' : ''}`}
      style={style}
      {...props}
    >
      <div className="usa-alert__body">
        {title && <h3 className="usa-alert__heading">{title}</h3>}
        <p className="usa-alert__text">{message}</p>
      </div>
      {dismissible && (
        <button 
          className="usa-alert__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
};

const USWDSModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  ...props 
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: 'usa-modal--sm',
    medium: '',
    large: 'usa-modal--lg'
  };

  return (
    <div className={`usa-modal ${sizeClasses[size]}`} {...props}>
      <div className="usa-modal__content">
        <div className="usa-modal__main">
          <div className="usa-modal__heading">
            <h2 className="usa-modal__title">{title}</h2>
            <button
              className="usa-modal__close"
              onClick={onClose}
              aria-label="Close this window"
            >
              ×
            </button>
          </div>
          <div className="usa-modal__body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const USWDSTabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, ...props }) => {
  return (
    <div {...props}>
      <div className="usa-accordion">
        {tabs.map((tab, index) => (
          <div key={index} className="usa-accordion__content">
            <button
              className={`usa-accordion__button ${activeTab === index ? 'usa-accordion__button--expanded' : ''}`}
              onClick={() => onTabChange(index)}
              aria-expanded={activeTab === index}
            >
              {tab.label}
            </button>
            {activeTab === index && (
              <div className="usa-accordion__content">
                {tab.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const USWDSBreadcrumb: React.FC<BreadcrumbProps> = ({ items, ...props }) => (
  <nav className="usa-breadcrumb" aria-label="Breadcrumbs" {...props}>
    <ol className="usa-breadcrumb__list">
      {items.map((item, index) => (
        <li key={index} className="usa-breadcrumb__list-item">
          {item.href && index < items.length - 1 ? (
            <a href={item.href} className="usa-breadcrumb__link">
              {item.label}
            </a>
          ) : (
            <span className="usa-current" aria-current="page">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Simplified implementations for components without direct USWDS equivalents
const USWDSAvatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  name, 
  size = 'medium', 
  style, 
  ...props 
}) => {
  const sizes = { small: '32px', medium: '48px', large: '64px' };
  const avatarSize = sizes[size];
  
  return (
    <div 
      className="usa-avatar"
      style={{ 
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        backgroundColor: '#005ea2',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size === 'small' ? '14px' : size === 'large' ? '24px' : '18px',
        fontWeight: 'bold',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        name ? name.charAt(0).toUpperCase() : '?'
      )}
    </div>
  );
};

const USWDSBadge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'primary', 
  variant = 'solid',
  style, 
  ...props 
}) => {
  const colorMap: Record<string, string> = {
    primary: '#005ea2',
    secondary: '#54278f',
    success: '#00a91c',
    warning: '#ffbe2e',
    error: '#d63384'
  };
  
  return (
    <span 
      className="usa-tag"
      style={{ 
        backgroundColor: colorMap[color] || colorMap.primary,
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  );
};

const USWDSProgress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  label, 
  style, 
  ...props 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div style={style} {...props}>
      {label && <div className="usa-label" style={{ marginBottom: '0.5rem' }}>{label}</div>}
      <div 
        className="usa-progress-bar" 
        style={{ 
          width: '100%', 
          height: '1rem', 
          backgroundColor: '#e6e6e6', 
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{ 
            width: `${percentage}%`, 
            height: '100%', 
            backgroundColor: '#005ea2',
            transition: 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

// Placeholder implementations for components without USWDS equivalents
const PlaceholderComponent: React.FC<any> = ({ children, style, ...props }) => (
  <div style={{ padding: '1rem', border: '1px solid #a9aeb1', borderRadius: '0.25rem', ...style }} {...props}>
    {children || 'USWDS Component'}
  </div>
);

const uswdsTheme: DesignSystemTheme = {
  Button: USWDSButton,
  Card: USWDSCard,
  Input: USWDSInput,
  Textarea: USWDSTextarea,
  Select: USWDSSelect,
  Checkbox: USWDSCheckbox,
  RadioGroup: USWDSRadioGroup,
  Slider: PlaceholderComponent,
  Rating: PlaceholderComponent,
  Table: USWDSTable,
  Avatar: USWDSAvatar,
  Badge: USWDSBadge,
  Progress: USWDSProgress,
  Alert: USWDSAlert,
  Modal: USWDSModal,
  Tabs: USWDSTabs,
  Breadcrumb: USWDSBreadcrumb,
  Container: ({ children, style, ...props }) => (
    <div className="grid-container" style={style} {...props}>
      {children}
    </div>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <div className="grid-row" style={style} {...props}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={`grid-col-${12 / columns}`}>
          {child}
        </div>
      ))}
    </div>
  ),
  Stack: ({ children, direction = 'column', spacing = 1, style, ...props }) => (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: direction,
        gap: `${spacing * 0.5}rem`,
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  ),
  Heading: ({ children, level = 1, style, ...props }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return React.createElement(Tag, {
      className: `usa-${Tag}`,
      style,
      ...props
    }, children);
  },
  Text: ({ children, variant = 'body', style, ...props }) => {
    const className = variant === 'caption' ? 'usa-hint' : 
                     variant === 'subtitle' ? 'usa-intro' : '';
    
    return (
      <p className={className} style={style} {...props}>
        {children}
      </p>
    );
  },
  Link: ({ children, href, external, style, ...props }) => (
    <a 
      className="usa-link"
      href={href} 
      target={external ? '_blank' : undefined} 
      rel={external ? 'noopener noreferrer' : undefined}
      style={style} 
      {...props}
    >
      {children}
    </a>
  ),
  Form: ({ children, onSubmit, ...props }) => (
    <form className="usa-form" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  ),
  FormField: ({ children, label, error, required, ...props }) => (
    <div className={`usa-form-group ${error ? 'usa-form-group--error' : ''}`} {...props}>
      {children}
    </div>
  ),
  Header: ({ title, navigation, ...props }) => (
    <header className="usa-header usa-header--basic" {...props}>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <div className="usa-logo">
            <em className="usa-logo__text">{title}</em>
          </div>
        </div>
        {navigation}
      </div>
    </header>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <section 
      className="usa-hero" 
      style={{ 
        background: 'linear-gradient(135deg, #005ea2 0%, #1a4480 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}
      {...props}
    >
      <div className="grid-container">
        <h1 className="usa-hero__heading" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>
          {title}
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          {subtitle}
        </p>
        {actions}
      </div>
    </section>
  ),
  Footer: ({ children, ...props }) => (
    <footer className="usa-footer" {...props}>
      {children}
    </footer>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <div 
      style={{ 
        border: '1px solid #a9aeb1', 
        borderRadius: '0.25rem', 
        padding: '1rem',
        backgroundColor: 'white',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  )
};

const uswdsConfig: ThemeConfig = {
  name: 'U.S. Web Design System',
  primaryColor: '#005ea2',
  secondaryColor: '#54278f',
  backgroundColor: '#ffffff',
  textColor: '#1b1b1b',
  borderRadius: '0.25rem',
  fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

// Note: USWDS requires CSS to be loaded separately
const USWDSWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="uswds-theme">
    {children}
  </div>
);

export const USWDSThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'uswds',
    name: 'U.S. Web Design System',
    description: 'Design system for the U.S. federal government, ensuring accessibility and consistency across government websites',
    version: '3.0.0',
    documentation: 'https://designsystem.digital.gov/',
    category: 'government',
    status: 'active',
    features: [
      'Section 508 compliance',
      'WCAG 2.1 AA accessibility',
      'Government-approved design patterns',
      'Extensive component library',
      'Mobile-first responsive design',
      'Performance optimized'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: uswdsTheme,
  config: uswdsConfig,
  wrapper: USWDSWrapper
};