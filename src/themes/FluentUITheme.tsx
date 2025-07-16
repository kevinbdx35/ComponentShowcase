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

// Fluent UI 2 theme implementation (Microsoft Design)
const FluentUIButton: React.FC<ButtonProps> = ({ 
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
    fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    padding: '5px 12px',
    borderRadius: '4px',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    transition: 'all 0.1s cubic-bezier(0.33, 0, 0.67, 1)',
    opacity: disabled ? 0.6 : 1,
    userSelect: 'none'
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0078d4',
      color: '#ffffff',
      border: '1px solid #0078d4'
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: '#323130',
      border: '1px solid #8a8886'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#0078d4',
      border: '1px solid #0078d4'
    },
    text: {
      backgroundColor: 'transparent',
      color: '#0078d4',
      border: '1px solid transparent'
    }
  };

  const sizeStyles = {
    small: { fontSize: '12px', padding: '2px 8px', minHeight: '24px' },
    medium: { fontSize: '14px', padding: '5px 12px', minHeight: '32px' },
    large: { fontSize: '16px', padding: '8px 16px', minHeight: '40px' }
  };

  const hoverStyles = !disabled ? {
    ':hover': {
      backgroundColor: variant === 'primary' ? '#106ebe' : 
                      variant === 'secondary' ? '#f3f2f1' :
                      variant === 'outline' ? '#deecf9' : '#deecf9'
    }
  } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
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

const FluentUICard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e1dfdd',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
        fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        ...style
      }}
      {...props}
    >
      {title && (
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#323130',
          margin: '0 0 8px 0',
          lineHeight: '24px'
        }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{
          fontSize: '14px',
          color: '#605e5c',
          margin: '0 0 16px 0',
          lineHeight: '20px'
        }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

const FluentUIInput: React.FC<InputProps> = ({ 
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
  const inputId = `fluent-input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label 
          htmlFor={inputId}
          style={{
            fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#323130',
            display: 'block',
            marginBottom: '4px'
          }}
        >
          {label}
          {required && <span style={{ color: '#d13438' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '14px',
          lineHeight: '20px',
          padding: '6px 12px',
          border: `1px solid ${error ? '#d13438' : '#8a8886'}`,
          borderRadius: '4px',
          width: '100%',
          minHeight: '32px',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#323130',
          outline: 'none',
          transition: 'border-color 0.1s ease-in-out',
          ...style
        }}
        onFocus={(e) => {
          if (!error) {
            e.target.style.borderColor = '#0078d4';
          }
        }}
        onBlur={(e) => {
          if (!error) {
            e.target.style.borderColor = '#8a8886';
          }
        }}
        {...props}
      />
      {error && (
        <div style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '12px',
          color: '#d13438',
          marginTop: '4px',
          lineHeight: '16px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

const FluentUITextarea: React.FC<InputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  style,
  ...props 
}) => {
  const textareaId = `fluent-textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label 
          htmlFor={textareaId}
          style={{
            fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#323130',
            display: 'block',
            marginBottom: '4px'
          }}
        >
          {label}
          {required && <span style={{ color: '#d13438' }}> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        rows={4}
        style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '14px',
          lineHeight: '20px',
          padding: '6px 12px',
          border: `1px solid ${error ? '#d13438' : '#8a8886'}`,
          borderRadius: '4px',
          width: '100%',
          minHeight: '80px',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#323130',
          outline: 'none',
          resize: 'vertical',
          transition: 'border-color 0.1s ease-in-out',
          ...style
        }}
        onFocus={(e) => {
          if (!error) {
            e.target.style.borderColor = '#0078d4';
          }
        }}
        onBlur={(e) => {
          if (!error) {
            e.target.style.borderColor = '#8a8886';
          }
        }}
        {...props}
      />
      {error && (
        <div style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '12px',
          color: '#d13438',
          marginTop: '4px',
          lineHeight: '16px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

const FluentUISelect: React.FC<SelectProps> = ({ 
  label, 
  options, 
  value, 
  onChange, 
  error, 
  required = false,
  style,
  ...props 
}) => {
  const selectId = `fluent-select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label 
          htmlFor={selectId}
          style={{
            fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#323130',
            display: 'block',
            marginBottom: '4px'
          }}
        >
          {label}
          {required && <span style={{ color: '#d13438' }}> *</span>}
        </label>
      )}
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '14px',
          lineHeight: '20px',
          padding: '6px 12px',
          border: `1px solid ${error ? '#d13438' : '#8a8886'}`,
          borderRadius: '4px',
          width: '100%',
          minHeight: '32px',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#323130',
          outline: 'none',
          cursor: 'pointer',
          ...style
        }}
        onFocus={(e) => {
          if (!error) {
            e.target.style.borderColor = '#0078d4';
          }
        }}
        onBlur={(e) => {
          if (!error) {
            e.target.style.borderColor = '#8a8886';
          }
        }}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '12px',
          color: '#d13438',
          marginTop: '4px',
          lineHeight: '16px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

const FluentUICheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  const checkboxId = `fluent-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px', 
      marginBottom: '8px',
      cursor: 'pointer',
      ...style 
    }}>
      <div style={{ position: 'relative' }}>
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          style={{
            width: '16px',
            height: '16px',
            margin: 0,
            opacity: 0,
            position: 'absolute',
            cursor: 'pointer'
          }}
          {...props}
        />
        <div style={{
          width: '16px',
          height: '16px',
          border: '1px solid #8a8886',
          borderRadius: '2px',
          backgroundColor: checked ? '#0078d4' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.1s ease-in-out'
        }}>
          {checked && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path 
                d="M3.5 6L5.5 8L8.5 4" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <label 
        htmlFor={checkboxId}
        style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '14px',
          color: '#323130',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        {label}
      </label>
    </div>
  );
};

const FluentUIRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <fieldset style={{ 
      border: 'none', 
      padding: 0, 
      margin: 0,
      marginBottom: '16px',
      ...style 
    }} {...props}>
      <legend style={{
        fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        color: '#323130',
        marginBottom: '8px'
      }}>
        {name}
      </legend>
      {options.map((option, index) => {
        const radioId = `fluent-radio-${name}-${index}`;
        return (
          <div key={option.value} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            marginBottom: '8px',
            cursor: 'pointer'
          }}>
            <div style={{ position: 'relative' }}>
              <input
                id={radioId}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  opacity: 0,
                  position: 'absolute',
                  cursor: 'pointer'
                }}
              />
              <div style={{
                width: '16px',
                height: '16px',
                border: '1px solid #8a8886',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.1s ease-in-out'
              }}>
                {value === option.value && (
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#0078d4'
                  }} />
                )}
              </div>
            </div>
            <label 
              htmlFor={radioId}
              style={{
                fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
                fontSize: '14px',
                color: '#323130',
                cursor: 'pointer',
                userSelect: 'none'
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

const FluentUITable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <div style={{ overflow: 'auto', ...style }} {...props}>
    <table style={{ 
      width: '100%', 
      borderCollapse: 'collapse',
      fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
      fontSize: '14px'
    }}>
      <thead>
        <tr style={{ backgroundColor: '#f8f9fa' }}>
          {headers.map((header, i) => (
            <th key={i} style={{
              padding: '12px 16px',
              textAlign: 'left',
              borderBottom: '1px solid #e1dfdd',
              fontWeight: 600,
              color: '#323130'
            }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} style={{ 
            borderBottom: '1px solid #edebe9',
            transition: 'background-color 0.1s ease-in-out'
          }}>
            {Object.values(row).map((cell: any, j) => (
              <td key={j} style={{
                padding: '12px 16px',
                color: '#323130',
                lineHeight: '20px'
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

const FluentUIAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  dismissible, 
  onDismiss, 
  style, 
  ...props 
}) => {
  const alertStyles = {
    error: { 
      backgroundColor: '#fef7f7', 
      borderColor: '#d13438', 
      color: '#d13438',
      iconColor: '#d13438'
    },
    warning: { 
      backgroundColor: '#fff9f5', 
      borderColor: '#ff8c00', 
      color: '#8a5700',
      iconColor: '#ff8c00'
    },
    success: { 
      backgroundColor: '#f7fef7', 
      borderColor: '#107c10', 
      color: '#107c10',
      iconColor: '#107c10'
    },
    info: { 
      backgroundColor: '#f3f9ff', 
      borderColor: '#0078d4', 
      color: '#004578',
      iconColor: '#0078d4'
    }
  };

  const currentStyle = alertStyles[type];

  return (
    <div 
      style={{
        fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        padding: '12px 16px',
        backgroundColor: currentStyle.backgroundColor,
        border: `1px solid ${currentStyle.borderColor}`,
        borderRadius: '4px',
        marginBottom: '16px',
        ...style
      }}
      {...props}
    >
      <div style={{
        width: '16px',
        height: '16px',
        marginTop: '2px',
        flexShrink: 0
      }}>
        {/* Simple icon placeholder */}
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: currentStyle.iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {type === 'error' ? '!' : 
           type === 'warning' ? '⚠' : 
           type === 'success' ? '✓' : 
           'i'}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            color: currentStyle.color,
            marginBottom: '4px'
          }}>
            {title}
          </div>
        )}
        <div style={{
          fontSize: '14px',
          color: currentStyle.color,
          lineHeight: '20px'
        }}>
          {message}
        </div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          style={{
            background: 'none',
            border: 'none',
            color: currentStyle.iconColor,
            fontSize: '16px',
            cursor: 'pointer',
            padding: '0',
            marginTop: '2px'
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

const FluentUIModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  ...props 
}) => {
  if (!isOpen) return null;

  const sizeStyles = {
    small: { maxWidth: '400px' },
    medium: { maxWidth: '600px' },
    large: { maxWidth: '900px' }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
      {...props}
    >
      <div 
        style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.14)',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          ...sizeStyles[size]
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid #e1dfdd'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#323130',
            margin: 0
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#605e5c',
              fontSize: '16px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px'
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

// Simplified implementations for complex components
const FluentUIPlaceholder: React.FC<any> = ({ children, style, ...props }) => (
  <div style={{ 
    padding: '16px', 
    border: '1px solid #e1dfdd', 
    borderRadius: '4px',
    backgroundColor: '#faf9f8',
    fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    fontSize: '14px',
    color: '#323130',
    textAlign: 'center',
    ...style 
  }} {...props}>
    {children || 'Fluent UI Component'}
  </div>
);

const fluentUITheme: DesignSystemTheme = {
  Button: FluentUIButton,
  Card: FluentUICard,
  Input: FluentUIInput,
  Textarea: FluentUITextarea,
  Select: FluentUISelect,
  Checkbox: FluentUICheckbox,
  RadioGroup: FluentUIRadioGroup,
  Slider: FluentUIPlaceholder,
  Rating: FluentUIPlaceholder,
  Table: FluentUITable,
  Avatar: FluentUIPlaceholder,
  Badge: FluentUIPlaceholder,
  Progress: FluentUIPlaceholder,
  Alert: FluentUIAlert,
  Modal: FluentUIModal,
  Tabs: FluentUIPlaceholder,
  Breadcrumb: FluentUIPlaceholder,
  Container: ({ children, style, ...props }) => (
    <div 
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${columns}, 1fr)`, 
        gap: '20px',
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
        gap: `${spacing * 8}px`,
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
      1: { fontSize: '32px', fontWeight: 600, lineHeight: '40px' },
      2: { fontSize: '24px', fontWeight: 600, lineHeight: '32px' },
      3: { fontSize: '20px', fontWeight: 600, lineHeight: '28px' },
      4: { fontSize: '18px', fontWeight: 600, lineHeight: '24px' },
      5: { fontSize: '16px', fontWeight: 600, lineHeight: '22px' },
      6: { fontSize: '14px', fontWeight: 600, lineHeight: '20px' }
    };
    
    return (
      <Tag 
        style={{ 
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          color: '#323130', 
          margin: '0 0 12px 0',
          ...sizes[level],
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
      body: { fontSize: '14px', lineHeight: '20px', color: '#323130' },
      caption: { fontSize: '12px', lineHeight: '16px', color: '#605e5c' },
      subtitle: { fontSize: '16px', lineHeight: '22px', color: '#323130', fontWeight: 400 }
    };
    
    return (
      <p 
        style={{ 
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          margin: '0 0 12px 0',
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
        fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
        color: '#0078d4',
        textDecoration: 'none',
        fontSize: '14px',
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
    <div style={{ marginBottom: '16px' }} {...props}>
      {children}
    </div>
  ),
  Header: ({ title, navigation, ...props }) => (
    <header 
      style={{ 
        backgroundColor: '#0078d4',
        color: '#ffffff',
        padding: '12px 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14)'
      }} 
      {...props}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <h1 style={{
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          color: '#ffffff',
          margin: 0
        }}>
          {title}
        </h1>
        {navigation}
      </div>
    </header>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <section 
      style={{ 
        background: 'linear-gradient(135deg, #0078d4 0%, #106ebe 100%)',
        color: '#ffffff',
        padding: '64px 0',
        textAlign: 'center'
      }}
      {...props}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ 
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '48px', 
          fontWeight: 600,
          color: '#ffffff',
          margin: '0 0 16px 0',
          lineHeight: '56px'
        }}>
          {title}
        </h1>
        <p style={{ 
          fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          fontSize: '18px', 
          color: '#ffffff',
          margin: '0 0 32px 0',
          lineHeight: '24px',
          opacity: 0.9
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
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e1dfdd',
        padding: '32px 0'
      }} 
      {...props}
    >
      {children}
    </footer>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <div 
      style={{ 
        backgroundColor: '#ffffff',
        border: '1px solid #e1dfdd',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  )
};

const fluentUIConfig: ThemeConfig = {
  name: 'Fluent UI 2',
  primaryColor: '#0078d4',
  secondaryColor: '#605e5c',
  backgroundColor: '#ffffff',
  textColor: '#323130',
  borderRadius: '4px',
  fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.14), 0 0px 2px rgba(0, 0, 0, 0.12)',
    md: '0 4px 8px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.12)'
  }
};

export const FluentUIThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'fluent-ui-2',
    name: 'Fluent UI 2',
    description: 'Microsoft\'s modern design system for building cohesive, delightful, and accessible experiences',
    version: '2.0.0',
    documentation: 'https://fluent2.microsoft.design/',
    category: 'enterprise',
    status: 'active',
    features: [
      'Microsoft Design Language',
      'Accessibility-first approach',
      'Cross-platform consistency',
      'Modern visual design',
      'Comprehensive component library',
      'Enterprise-ready'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: fluentUITheme,
  config: fluentUIConfig
};