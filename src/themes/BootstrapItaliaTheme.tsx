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

// Bootstrap Italia theme implementation (Italian Government Design System)
const BootstrapItaliaButton: React.FC<ButtonProps> = ({ 
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
    fontFamily: 'Titillium Web, sans-serif',
    fontWeight: 600,
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    borderRadius: '4px',
    transition: 'all 0.15s ease-in-out',
    opacity: disabled ? 0.65 : 1,
    lineHeight: 1.5
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0066cc',
      borderColor: '#0066cc',
      color: '#ffffff'
    },
    secondary: {
      backgroundColor: '#5c6f82',
      borderColor: '#5c6f82',
      color: '#ffffff'
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '#0066cc',
      color: '#0066cc'
    },
    text: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#0066cc',
      textDecoration: 'underline'
    }
  };

  const sizeStyles = {
    small: { padding: '0.25rem 0.5rem', fontSize: '0.875rem' },
    medium: { padding: '0.5rem 1rem', fontSize: '1rem' },
    large: { padding: '0.75rem 1.5rem', fontSize: '1.25rem' }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn"
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

const BootstrapItaliaCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <div 
      className="card"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.125)',
        borderRadius: '8px',
        marginBottom: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        ...style
      }}
      {...props}
    >
      <div className="card-body" style={{ padding: '1.5rem' }}>
        {title && (
          <h5 
            className="card-title"
            style={{
              fontFamily: 'Titillium Web, sans-serif',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#17324d',
              marginBottom: '0.5rem'
            }}
          >
            {title}
          </h5>
        )}
        {subtitle && (
          <h6 
            className="card-subtitle"
            style={{
              fontFamily: 'Titillium Web, sans-serif',
              fontSize: '1rem',
              color: '#5c6f82',
              marginBottom: '1rem'
            }}
          >
            {subtitle}
          </h6>
        )}
        {children}
      </div>
    </div>
  );
};

const BootstrapItaliaInput: React.FC<InputProps> = ({ 
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
    <div className="form-group" style={{ marginBottom: '1rem' }}>
      {label && (
        <label 
          htmlFor={inputId}
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#17324d',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          {label}
          {required && <span style={{ color: '#d1344c' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: '1rem',
          lineHeight: '1.5',
          padding: '0.5rem 0.75rem',
          backgroundColor: '#ffffff',
          border: `1px solid ${error ? '#d1344c' : '#ced4da'}`,
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
          ...style
        }}
        {...props}
      />
      {error && (
        <div 
          className="invalid-feedback"
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '0.875rem',
            color: '#d1344c',
            marginTop: '0.25rem',
            display: 'block'
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

const BootstrapItaliaTextarea: React.FC<InputProps> = ({ 
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
    <div className="form-group" style={{ marginBottom: '1rem' }}>
      {label && (
        <label 
          htmlFor={textareaId}
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#17324d',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          {label}
          {required && <span style={{ color: '#d1344c' }}> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        rows={4}
        style={{
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: '1rem',
          lineHeight: '1.5',
          padding: '0.5rem 0.75rem',
          backgroundColor: '#ffffff',
          border: `1px solid ${error ? '#d1344c' : '#ced4da'}`,
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          resize: 'vertical',
          transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
          ...style
        }}
        {...props}
      />
      {error && (
        <div 
          className="invalid-feedback"
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '0.875rem',
            color: '#d1344c',
            marginTop: '0.25rem',
            display: 'block'
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

const BootstrapItaliaSelect: React.FC<SelectProps> = ({ 
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
    <div className="form-group" style={{ marginBottom: '1rem' }}>
      {label && (
        <label 
          htmlFor={selectId}
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#17324d',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          {label}
          {required && <span style={{ color: '#d1344c' }}> *</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: '1rem',
          lineHeight: '1.5',
          padding: '0.5rem 0.75rem',
          backgroundColor: '#ffffff',
          border: `1px solid ${error ? '#d1344c' : '#ced4da'}`,
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
          ...style
        }}
        {...props}
      >
        <option value="">Seleziona</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div 
          className="invalid-feedback"
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '0.875rem',
            color: '#d1344c',
            marginTop: '0.25rem',
            display: 'block'
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

const BootstrapItaliaCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="form-check" style={{ marginBottom: '0.5rem', ...style }}>
      <input
        id={checkboxId}
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          width: '1rem',
          height: '1rem',
          marginTop: '0.25rem',
          marginRight: '0.5rem',
          accentColor: '#0066cc'
        }}
        {...props}
      />
      <label 
        className="form-check-label"
        htmlFor={checkboxId}
        style={{
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: '1rem',
          color: '#17324d',
          cursor: 'pointer'
        }}
      >
        {label}
      </label>
    </div>
  );
};

const BootstrapItaliaRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0, ...style }} {...props}>
      <legend style={{
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#17324d',
        marginBottom: '0.5rem'
      }}>
        {name}
      </legend>
      {options.map((option, index) => {
        const radioId = `radio-${name}-${index}`;
        return (
          <div key={option.value} className="form-check" style={{ marginBottom: '0.5rem' }}>
            <input
              id={radioId}
              className="form-check-input"
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              style={{
                width: '1rem',
                height: '1rem',
                marginTop: '0.25rem',
                marginRight: '0.5rem',
                accentColor: '#0066cc'
              }}
            />
            <label 
              className="form-check-label"
              htmlFor={radioId}
              style={{
                fontFamily: 'Titillium Web, sans-serif',
                fontSize: '1rem',
                color: '#17324d',
                cursor: 'pointer'
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

const BootstrapItaliaTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <div className="table-responsive">
    <table className="table table-striped" style={{ 
      fontFamily: 'Titillium Web, sans-serif',
      ...style 
    }} {...props}>
      <thead style={{ backgroundColor: '#f8f9fa' }}>
        <tr>
          {headers.map((header, i) => (
            <th key={i} style={{
              padding: '0.75rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#17324d',
              borderBottom: '2px solid #dee2e6'
            }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell: any, j) => (
              <td key={j} style={{
                padding: '0.75rem',
                fontSize: '1rem',
                color: '#17324d',
                borderBottom: '1px solid #dee2e6'
              }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BootstrapItaliaAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  dismissible, 
  onDismiss, 
  style, 
  ...props 
}) => {
  const alertStyles = {
    error: { backgroundColor: '#f8d7da', borderColor: '#f5c6cb', color: '#721c24' },
    warning: { backgroundColor: '#fff3cd', borderColor: '#ffeeba', color: '#856404' },
    success: { backgroundColor: '#d4edda', borderColor: '#c3e6cb', color: '#155724' },
    info: { backgroundColor: '#d1ecf1', borderColor: '#bee5eb', color: '#0c5460' }
  };

  return (
    <div 
      className={`alert alert-${type} ${dismissible ? 'alert-dismissible' : ''}`}
      style={{
        fontFamily: 'Titillium Web, sans-serif',
        position: 'relative',
        padding: '0.75rem 1.25rem',
        marginBottom: '1rem',
        border: '1px solid transparent',
        borderRadius: '4px',
        ...alertStyles[type],
        ...style
      }}
      {...props}
    >
      {title && (
        <h4 
          className="alert-heading"
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '0.5rem'
          }}
        >
          {title}
        </h4>
      )}
      <p style={{ margin: 0 }}>
        {message}
      </p>
      {dismissible && (
        <button
          type="button"
          className="close"
          onClick={onDismiss}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '1.25rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

const BootstrapItaliaModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  ...props 
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: { maxWidth: '500px' },
    medium: { maxWidth: '800px' },
    large: { maxWidth: '1140px' }
  };

  return (
    <div 
      className="modal fade show"
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1050
      }}
      {...props}
    >
      <div 
        className="modal-dialog modal-dialog-centered"
        style={{
          position: 'relative',
          width: 'auto',
          margin: '1.75rem',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          minHeight: 'calc(100% - 3.5rem)'
        }}
      >
        <div 
          className="modal-content"
          style={{
            fontFamily: 'Titillium Web, sans-serif',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            pointerEvents: 'auto',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '6px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            ...sizeClasses[size]
          }}
        >
          <div 
            className="modal-header"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: '1rem 1rem',
              borderBottom: '1px solid #dee2e6',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px'
            }}
          >
            <h4 
              className="modal-title"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#17324d',
                margin: 0
              }}
            >
              {title}
            </h4>
            <button
              type="button"
              className="close"
              onClick={onClose}
              style={{
                padding: '1rem 1rem',
                margin: '-1rem -1rem -1rem auto',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div 
            className="modal-body"
            style={{
              position: 'relative',
              flex: '1 1 auto',
              padding: '1rem'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder implementations for complex components
const PlaceholderComponent: React.FC<any> = ({ children, style, ...props }) => (
  <div style={{ 
    padding: '1rem', 
    border: '1px solid #ced4da', 
    borderRadius: '4px',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Titillium Web, sans-serif',
    fontSize: '1rem',
    color: '#17324d',
    ...style 
  }} {...props}>
    {children || 'Componente Bootstrap Italia'}
  </div>
);

const bootstrapItaliaTheme: DesignSystemTheme = {
  Button: BootstrapItaliaButton,
  Card: BootstrapItaliaCard,
  Input: BootstrapItaliaInput,
  Textarea: BootstrapItaliaTextarea,
  Select: BootstrapItaliaSelect,
  Checkbox: BootstrapItaliaCheckbox,
  RadioGroup: BootstrapItaliaRadioGroup,
  Slider: PlaceholderComponent,
  Rating: PlaceholderComponent,
  Table: BootstrapItaliaTable,
  Avatar: PlaceholderComponent,
  Badge: PlaceholderComponent,
  Progress: PlaceholderComponent,
  Alert: BootstrapItaliaAlert,
  Modal: BootstrapItaliaModal,
  Tabs: PlaceholderComponent,
  Breadcrumb: PlaceholderComponent,
  Container: ({ children, style, ...props }) => (
    <div 
      className="container-fluid"
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 15px',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <div 
      className="row"
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        margin: '0 -15px',
        ...style 
      }} 
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <div 
          key={index} 
          className={`col-md-${12 / columns}`}
          style={{ 
            position: 'relative',
            width: '100%',
            padding: '0 15px',
            flexBasis: `${100 / columns}%`,
            maxWidth: `${100 / columns}%`
          }}
        >
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
        gap: `${spacing}rem`,
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
      1: '2.5rem',
      2: '2rem',
      3: '1.75rem',
      4: '1.5rem',
      5: '1.25rem',
      6: '1rem'
    };
    
    return (
      <Tag 
        style={{ 
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: sizes[level], 
          fontWeight: 600, 
          color: '#17324d', 
          marginBottom: '0.5rem',
          lineHeight: 1.2,
          ...style 
        }} 
        {...props}
      >
        {children}
      </Tag>
    );
  },
  Text: ({ children, variant = 'body', style, ...props }) => {
    const variantStyles = {
      body: { fontSize: '1rem', lineHeight: '1.5' },
      caption: { fontSize: '0.875rem', color: '#5c6f82' },
      subtitle: { fontSize: '1.25rem', fontWeight: 400 }
    };
    
    return (
      <p 
        style={{ 
          fontFamily: 'Titillium Web, sans-serif',
          color: '#17324d',
          marginBottom: '1rem',
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
      href={href} 
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ 
        fontFamily: 'Titillium Web, sans-serif',
        color: '#0066cc',
        textDecoration: 'underline',
        ...style 
      }} 
      {...props}
    >
      {children}
    </a>
  ),
  Form: ({ children, onSubmit, ...props }) => (
    <form onSubmit={onSubmit} {...props}>
      {children}
    </form>
  ),
  FormField: ({ children, label, error, required, ...props }) => (
    <div className={`form-group ${error ? 'has-error' : ''}`} {...props}>
      {children}
    </div>
  ),
  Header: ({ title, navigation, ...props }) => (
    <header 
      style={{ 
        backgroundColor: '#0066cc',
        color: '#ffffff',
        padding: '1rem 0'
      }} 
      {...props}
    >
      <div className="container-fluid">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#ffffff',
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
      style={{ 
        background: 'linear-gradient(135deg, #0066cc 0%, #004d99 100%)',
        color: '#ffffff',
        padding: '4rem 0',
        textAlign: 'center'
      }}
      {...props}
    >
      <div className="container-fluid">
        <h1 style={{ 
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: '3rem', 
          fontWeight: 600,
          color: '#ffffff',
          marginBottom: '1rem'
        }}>
          {title}
        </h1>
        <p style={{ 
          fontFamily: 'Titillium Web, sans-serif',
          fontSize: '1.25rem', 
          color: '#ffffff',
          marginBottom: '2rem'
        }}>
          {subtitle}
        </p>
        {actions}
      </div>
    </section>
  ),
  Footer: ({ children, ...props }) => (
    <footer 
      style={{ 
        backgroundColor: '#17324d',
        color: '#ffffff',
        padding: '2rem 0'
      }} 
      {...props}
    >
      {children}
    </footer>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <div 
      className="card"
      style={{ 
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.125)',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  )
};

const bootstrapItaliaConfig: ThemeConfig = {
  name: 'Bootstrap Italia',
  primaryColor: '#0066cc',
  secondaryColor: '#5c6f82',
  backgroundColor: '#ffffff',
  textColor: '#17324d',
  borderRadius: '4px',
  fontFamily: 'Titillium Web, sans-serif',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
};

export const BootstrapItaliaThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'bootstrap-italia',
    name: 'Bootstrap Italia',
    description: 'Design system del governo italiano basato su Bootstrap 5',
    version: '2.0.0',
    documentation: 'https://italia.github.io/bootstrap-italia/',
    category: 'government',
    status: 'active',
    features: [
      'WCAG 2.1 AA compliance',
      'Basato su Bootstrap 5',
      'Identità visiva italiana',
      'Componenti governativi',
      'Responsive design',
      'Accessibilità avanzata'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: bootstrapItaliaTheme,
  config: bootstrapItaliaConfig
};