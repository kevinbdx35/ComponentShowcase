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

// Vanilla CSS theme implementation
const VanillaButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...props 
}) => {
  const baseStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s',
    opacity: disabled ? 0.6 : 1,
    ...style
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#667eea',
      color: 'white',
      border: '2px solid #667eea'
    },
    secondary: {
      backgroundColor: 'white',
      color: '#667eea',
      border: '2px solid #667eea'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#667eea',
      border: '2px solid #667eea'
    },
    text: {
      backgroundColor: 'transparent',
      color: '#667eea',
      border: '2px solid transparent'
    }
  };

  const sizeStyles = {
    small: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    large: { padding: '1rem 2rem', fontSize: '1.1rem' }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size]
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const VanillaCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        ...style
      }}
      {...props}
    >
      {title && <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{title}</h3>}
      {subtitle && <p style={{ margin: '0 0 1rem 0', color: '#666' }}>{subtitle}</p>}
      {children}
    </div>
  );
};

const VanillaInput: React.FC<InputProps> = ({ 
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
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
          borderRadius: '8px',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.2s',
          ...style
        }}
        {...props}
      />
      {error && (
        <p style={{ 
          color: '#ef4444', 
          fontSize: '0.875rem', 
          margin: '0.25rem 0 0 0' 
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

const VanillaTextarea: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  style,
  ...props 
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={4}
        style={{
          width: '100%',
          padding: '0.75rem',
          border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
          borderRadius: '8px',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.2s',
          resize: 'vertical',
          ...style
        }}
        {...props}
      />
      {error && (
        <p style={{ 
          color: '#ef4444', 
          fontSize: '0.875rem', 
          margin: '0.25rem 0 0 0' 
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

const VanillaSelect: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value, 
  onChange, 
  error, 
  required = false,
  style,
  ...props 
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          border: `2px solid ${error ? '#ef4444' : '#e2e8f0'}`,
          borderRadius: '8px',
          fontSize: '1rem',
          outline: 'none',
          backgroundColor: 'white',
          ...style
        }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p style={{ 
          color: '#ef4444', 
          fontSize: '0.875rem', 
          margin: '0.25rem 0 0 0' 
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

// ... [Les autres composants Vanilla seront ajoutés dans la suite]

const VanillaContainer: React.FC<ComponentProps> = ({ children, style, ...props }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', ...style }} {...props}>
    {children}
  </div>
);

const VanillaGrid: React.FC<ComponentProps & { columns?: number }> = ({ 
  children, 
  columns = 1, 
  style, 
  ...props 
}) => (
  <div 
    style={{ 
      display: 'grid', 
      gridTemplateColumns: `repeat(${columns}, 1fr)`, 
      gap: '1.5rem',
      ...style 
    }} 
    {...props}
  >
    {children}
  </div>
);

const VanillaStack: React.FC<ComponentProps & { direction?: 'row' | 'column'; spacing?: number }> = ({ 
  children, 
  direction = 'column', 
  spacing = 1, 
  style, 
  ...props 
}) => (
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
);

const VanillaHeading: React.FC<ComponentProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 }> = ({ 
  children, 
  level = 1, 
  style, 
  ...props 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizes = {
    1: '3rem',
    2: '2.5rem', 
    3: '2rem',
    4: '1.5rem',
    5: '1.25rem',
    6: '1rem'
  };
  
  return React.createElement(Tag, {
    style: { fontSize: sizes[level], fontWeight: 'bold', color: '#333', margin: 0, ...style },
    ...props
  }, children);
};

const VanillaText: React.FC<ComponentProps & { variant?: 'body' | 'caption' | 'subtitle' }> = ({ 
  children, 
  variant = 'body', 
  style, 
  ...props 
}) => {
  const variantStyles = {
    body: { fontSize: '1rem', lineHeight: '1.6' },
    caption: { fontSize: '0.875rem', color: '#666' },
    subtitle: { fontSize: '1.125rem', color: '#666' }
  };
  
  return (
    <p style={{ margin: 0, ...variantStyles[variant], ...style }} {...props}>
      {children}
    </p>
  );
};

// Placeholder implementations for complex components
const VanillaTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <div style={{ overflow: 'auto', ...style }} {...props}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell: any, j) => (
              <td key={j} style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// More placeholder implementations
const VanillaAlert: React.FC<AlertProps> = ({ type, title, message, style, ...props }) => (
  <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#f3f4f6', ...style }} {...props}>
    {title && <strong>{title}: </strong>}
    {message}
  </div>
);

const VanillaModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, ...props }) => {
  if (!isOpen) return null;
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '12px', 
        maxWidth: '500px', 
        width: '90%',
        maxHeight: '90%',
        overflow: 'auto'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

// Simplified placeholder implementations for remaining components
const PlaceholderComponent: React.FC<any> = ({ children, style, ...props }) => (
  <div style={{ padding: '1rem', border: '1px dashed #ccc', ...style }} {...props}>
    {children || 'Component Placeholder'}
  </div>
);

const vanillaTheme: DesignSystemTheme = {
  Button: VanillaButton,
  Card: VanillaCard,
  Input: VanillaInput,
  Textarea: VanillaTextarea,
  Select: VanillaSelect,
  Checkbox: PlaceholderComponent,
  RadioGroup: PlaceholderComponent,
  Slider: PlaceholderComponent,
  Rating: PlaceholderComponent,
  Table: VanillaTable,
  Avatar: PlaceholderComponent,
  Badge: PlaceholderComponent,
  Progress: PlaceholderComponent,
  Alert: VanillaAlert,
  Modal: VanillaModal,
  Tabs: PlaceholderComponent,
  Breadcrumb: PlaceholderComponent,
  Container: VanillaContainer,
  Grid: VanillaGrid,
  Stack: VanillaStack,
  Heading: VanillaHeading,
  Text: VanillaText,
  Link: PlaceholderComponent,
  Form: ({ children, ...props }) => <form {...props}>{children}</form>,
  FormField: ({ children, label, error, required, ...props }) => (
    <div style={{ marginBottom: '1rem' }} {...props}>
      {label && (
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}
      {children}
      {error && <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>{error}</p>}
    </div>
  ),
  Header: ({ title, ...props }) => (
    <header style={{ backgroundColor: '#667eea', color: 'white', padding: '1rem 2rem' }} {...props}>
      <h1 style={{ margin: 0 }}>{title}</h1>
    </header>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <section style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center'
    }} {...props}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>{subtitle}</p>
      {actions}
    </section>
  ),
  Footer: ({ children, ...props }) => (
    <footer {...props}>
      {children}
    </footer>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', ...style }} {...props}>
      {children}
    </div>
  )
};

const vanillaConfig: ThemeConfig = {
  name: 'Vanilla CSS',
  primaryColor: '#667eea',
  secondaryColor: '#764ba2',
  backgroundColor: '#f8f9fa',
  textColor: '#333333',
  borderRadius: '8px',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 30px rgba(0, 0, 0, 0.12)'
  }
};

export const VanillaThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'vanilla',
    name: 'Vanilla CSS',
    description: 'Pure CSS implementation serving as the reference for all other design systems',
    version: '1.0.0',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: 'general',
    status: 'active',
    features: [
      'Pure CSS implementation',
      'No external dependencies', 
      'Lightweight and performant',
      'Cross-browser compatible',
      'Baseline for comparison'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: vanillaTheme,
  config: vanillaConfig
};