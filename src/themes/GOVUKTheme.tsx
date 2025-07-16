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

// GOV.UK theme implementation following design system patterns
const GOVUKButton: React.FC<ButtonProps> = ({ 
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
    fontFamily: 'GDS Transport, arial, sans-serif',
    fontSize: '19px',
    fontWeight: 700,
    textAlign: 'center',
    verticalAlign: 'top',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: '#00703c',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0',
    padding: '0.526rem 1.05rem',
    textDecoration: 'none',
    display: 'inline-block',
    lineHeight: 1.1875,
    opacity: disabled ? 0.6 : 1,
    transition: 'background-color 0.2s'
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#00703c',
      color: '#ffffff'
    },
    secondary: {
      backgroundColor: '#1d70b8',
      color: '#ffffff'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#1d70b8',
      border: '2px solid #1d70b8'
    },
    text: {
      backgroundColor: 'transparent',
      color: '#1d70b8',
      textDecoration: 'underline'
    }
  };

  const sizeStyles = {
    small: { fontSize: '16px', padding: '0.4rem 0.8rem' },
    medium: { fontSize: '19px', padding: '0.526rem 1.05rem' },
    large: { fontSize: '24px', padding: '0.75rem 1.5rem' }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="govuk-button"
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

const GOVUKCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <div 
      className="govuk-summary-card"
      style={{
        border: '1px solid #b1b4b6',
        backgroundColor: '#ffffff',
        marginBottom: '20px',
        ...style
      }}
      {...props}
    >
      {(title || subtitle) && (
        <div 
          className="govuk-summary-card__title-wrapper"
          style={{
            backgroundColor: '#f3f2f1',
            borderBottom: '1px solid #b1b4b6',
            padding: '15px 20px'
          }}
        >
          {title && (
            <h2 
              className="govuk-summary-card__title"
              style={{
                fontFamily: 'GDS Transport, arial, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: 1.09,
                margin: 0,
                color: '#0b0c0c'
              }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{
              fontFamily: 'GDS Transport, arial, sans-serif',
              fontSize: '19px',
              lineHeight: 1.25,
              color: '#505a5f',
              margin: '5px 0 0 0'
            }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div 
        className="govuk-summary-card__content"
        style={{ padding: '20px' }}
      >
        {children}
      </div>
    </div>
  );
};

const GOVUKInput: React.FC<InputProps> = ({ 
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
    <div className="govuk-form-group" style={{ marginBottom: '20px' }}>
      {label && (
        <label 
          className="govuk-label"
          htmlFor={inputId}
          style={{
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '19px',
            fontWeight: 700,
            color: '#0b0c0c',
            display: 'block',
            marginBottom: '5px'
          }}
        >
          {label}
          {required && <span style={{ color: '#d4351c' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`govuk-input ${error ? 'govuk-input--error' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'GDS Transport, arial, sans-serif',
          fontSize: '19px',
          lineHeight: 1.25,
          padding: '5px 4px 4px',
          border: `2px solid ${error ? '#d4351c' : '#0b0c0c'}`,
          borderRadius: '0',
          width: '100%',
          boxSizing: 'border-box',
          ...style
        }}
        {...props}
      />
      {error && (
        <p 
          className="govuk-error-message"
          style={{
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '19px',
            lineHeight: 1.25,
            color: '#d4351c',
            fontWeight: 700,
            marginTop: '5px',
            marginBottom: '15px'
          }}
        >
          <span className="govuk-visually-hidden">Error:</span> {error}
        </p>
      )}
    </div>
  );
};

const GOVUKTextarea: React.FC<InputProps> = ({ 
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
    <div className="govuk-form-group" style={{ marginBottom: '20px' }}>
      {label && (
        <label 
          className="govuk-label"
          htmlFor={textareaId}
          style={{
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '19px',
            fontWeight: 700,
            color: '#0b0c0c',
            display: 'block',
            marginBottom: '5px'
          }}
        >
          {label}
          {required && <span style={{ color: '#d4351c' }}> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`govuk-textarea ${error ? 'govuk-textarea--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        rows={5}
        style={{
          fontFamily: 'GDS Transport, arial, sans-serif',
          fontSize: '19px',
          lineHeight: 1.25,
          padding: '5px 4px 4px',
          border: `2px solid ${error ? '#d4351c' : '#0b0c0c'}`,
          borderRadius: '0',
          width: '100%',
          boxSizing: 'border-box',
          resize: 'vertical',
          ...style
        }}
        {...props}
      />
      {error && (
        <p 
          className="govuk-error-message"
          style={{
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '19px',
            lineHeight: 1.25,
            color: '#d4351c',
            fontWeight: 700,
            marginTop: '5px',
            marginBottom: '15px'
          }}
        >
          <span className="govuk-visually-hidden">Error:</span> {error}
        </p>
      )}
    </div>
  );
};

const GOVUKSelect: React.FC<SelectProps> = ({ 
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
    <div className="govuk-form-group" style={{ marginBottom: '20px' }}>
      {label && (
        <label 
          className="govuk-label"
          htmlFor={selectId}
          style={{
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '19px',
            fontWeight: 700,
            color: '#0b0c0c',
            display: 'block',
            marginBottom: '5px'
          }}
        >
          {label}
          {required && <span style={{ color: '#d4351c' }}> *</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`govuk-select ${error ? 'govuk-select--error' : ''}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        style={{
          fontFamily: 'GDS Transport, arial, sans-serif',
          fontSize: '19px',
          lineHeight: 1.25,
          padding: '5px 4px 4px',
          border: `2px solid ${error ? '#d4351c' : '#0b0c0c'}`,
          borderRadius: '0',
          width: '100%',
          boxSizing: 'border-box',
          ...style
        }}
        {...props}
      >
        <option value="">Please select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p 
          className="govuk-error-message"
          style={{
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '19px',
            lineHeight: 1.25,
            color: '#d4351c',
            fontWeight: 700,
            marginTop: '5px',
            marginBottom: '15px'
          }}
        >
          <span className="govuk-visually-hidden">Error:</span> {error}
        </p>
      )}
    </div>
  );
};

const GOVUKCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="govuk-checkboxes__item" style={{ marginBottom: '10px', ...style }}>
      <input
        id={checkboxId}
        className="govuk-checkboxes__input"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          position: 'absolute',
          zIndex: 1,
          top: '-2px',
          left: '-2px',
          width: '44px',
          height: '44px',
          margin: '0',
          opacity: 0,
          cursor: 'pointer'
        }}
        {...props}
      />
      <label 
        className="govuk-label govuk-checkboxes__label"
        htmlFor={checkboxId}
        style={{
          fontFamily: 'GDS Transport, arial, sans-serif',
          fontSize: '19px',
          lineHeight: 1.25,
          color: '#0b0c0c',
          display: 'block',
          marginBottom: '5px',
          paddingLeft: '40px',
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <span 
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '40px',
            height: '40px',
            border: '2px solid #0b0c0c',
            backgroundColor: checked ? '#0b0c0c' : '#ffffff'
          }}
        />
        {checked && (
          <span 
            style={{
              position: 'absolute',
              top: '11px',
              left: '9px',
              width: '18px',
              height: '7px',
              transform: 'rotate(-45deg)',
              borderLeft: '3px solid #ffffff',
              borderBottom: '3px solid #ffffff'
            }}
          />
        )}
        {label}
      </label>
    </div>
  );
};

const GOVUKRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <fieldset className="govuk-fieldset" style={style} {...props}>
      <legend 
        className="govuk-fieldset__legend"
        style={{
          fontFamily: 'GDS Transport, arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          color: '#0b0c0c',
          marginBottom: '15px'
        }}
      >
        {name}
      </legend>
      <div className="govuk-radios">
        {options.map((option, index) => {
          const radioId = `radio-${name}-${index}`;
          return (
            <div key={option.value} className="govuk-radios__item" style={{ marginBottom: '10px' }}>
              <input
                id={radioId}
                className="govuk-radios__input"
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  top: '-2px',
                  left: '-2px',
                  width: '44px',
                  height: '44px',
                  margin: '0',
                  opacity: 0,
                  cursor: 'pointer'
                }}
              />
              <label 
                className="govuk-label govuk-radios__label"
                htmlFor={radioId}
                style={{
                  fontFamily: 'GDS Transport, arial, sans-serif',
                  fontSize: '19px',
                  lineHeight: 1.25,
                  color: '#0b0c0c',
                  display: 'block',
                  marginBottom: '5px',
                  paddingLeft: '40px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                <span 
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '40px',
                    height: '40px',
                    border: '2px solid #0b0c0c',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff'
                  }}
                />
                {value === option.value && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: '#0b0c0c'
                    }}
                  />
                )}
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

const GOVUKTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <table className="govuk-table" style={{ width: '100%', ...style }} {...props}>
    <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        {headers.map((header, i) => (
          <th 
            key={i} 
            scope="col" 
            className="govuk-table__header"
            style={{
              fontFamily: 'GDS Transport, arial, sans-serif',
              fontSize: '19px',
              fontWeight: 700,
              color: '#0b0c0c',
              padding: '10px 20px 10px 0',
              textAlign: 'left',
              borderBottom: '1px solid #b1b4b6'
            }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="govuk-table__body">
      {data.map((row, i) => (
        <tr key={i} className="govuk-table__row">
          {Object.values(row).map((cell: any, j) => (
            <td 
              key={j} 
              className="govuk-table__cell"
              style={{
                fontFamily: 'GDS Transport, arial, sans-serif',
                fontSize: '19px',
                lineHeight: 1.25,
                color: '#0b0c0c',
                padding: '10px 20px 10px 0',
                borderBottom: '1px solid #b1b4b6'
              }}
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const GOVUKAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  style, 
  ...props 
}) => {
  const typeColors = {
    error: '#d4351c',
    warning: '#f47738',
    success: '#00703c',
    info: '#1d70b8'
  };

  return (
    <div 
      className={`govuk-notification-banner ${type === 'error' ? 'govuk-notification-banner--error' : ''}`}
      style={{
        fontFamily: 'GDS Transport, arial, sans-serif',
        backgroundColor: type === 'error' ? '#f3f2f1' : '#ffffff',
        border: `5px solid ${typeColors[type]}`,
        marginBottom: '30px',
        padding: '15px 20px',
        ...style
      }}
      {...props}
    >
      {title && (
        <h2 
          className="govuk-notification-banner__title"
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#0b0c0c',
            margin: '0 0 15px 0'
          }}
        >
          {title}
        </h2>
      )}
      <p 
        className="govuk-notification-banner__heading"
        style={{
          fontSize: '19px',
          lineHeight: 1.25,
          color: '#0b0c0c',
          margin: 0
        }}
      >
        {message}
      </p>
    </div>
  );
};

const GOVUKModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  ...props 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="govuk-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      {...props}
    >
      <div 
        className="govuk-modal"
        style={{
          backgroundColor: '#ffffff',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90%',
          overflow: 'auto',
          fontFamily: 'GDS Transport, arial, sans-serif',
          border: '1px solid #0b0c0c'
        }}
      >
        <div 
          style={{
            padding: '30px',
            borderBottom: '1px solid #b1b4b6'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#0b0c0c',
                margin: 0
              }}
            >
              {title}
            </h1>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#0b0c0c',
                padding: '10px'
              }}
            >
              ×
            </button>
          </div>
        </div>
        <div style={{ padding: '30px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Simplified implementations for complex components
const PlaceholderComponent: React.FC<any> = ({ children, style, ...props }) => (
  <div style={{ 
    padding: '20px', 
    border: '1px solid #b1b4b6', 
    backgroundColor: '#f3f2f1',
    fontFamily: 'GDS Transport, arial, sans-serif',
    fontSize: '19px',
    color: '#0b0c0c',
    ...style 
  }} {...props}>
    {children || 'GOV.UK Component'}
  </div>
);

const govukTheme: DesignSystemTheme = {
  Button: GOVUKButton,
  Card: GOVUKCard,
  Input: GOVUKInput,
  Textarea: GOVUKTextarea,
  Select: GOVUKSelect,
  Checkbox: GOVUKCheckbox,
  RadioGroup: GOVUKRadioGroup,
  Slider: PlaceholderComponent,
  Rating: PlaceholderComponent,
  Table: GOVUKTable,
  Avatar: PlaceholderComponent,
  Badge: PlaceholderComponent,
  Progress: PlaceholderComponent,
  Alert: GOVUKAlert,
  Modal: GOVUKModal,
  Tabs: PlaceholderComponent,
  Breadcrumb: PlaceholderComponent,
  Container: ({ children, style, ...props }) => (
    <div 
      className="govuk-width-container"
      style={{ 
        maxWidth: '1020px', 
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
      className="govuk-grid-row"
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
          className={`govuk-grid-column-${columns === 1 ? 'full' : columns === 2 ? 'one-half' : 'one-third'}`}
          style={{ 
            padding: '0 15px',
            flexBasis: `${100 / columns}%`,
            flexGrow: 0,
            flexShrink: 0
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
        gap: `${spacing * 20}px`,
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
      1: '48px',
      2: '36px',
      3: '27px',
      4: '24px',
      5: '19px',
      6: '16px'
    };
    
    return (
      <Tag 
        className={`govuk-heading-${level === 1 ? 'xl' : level === 2 ? 'l' : level === 3 ? 'm' : 's'}`}
        style={{ 
          fontFamily: 'GDS Transport, arial, sans-serif',
          fontSize: sizes[level], 
          fontWeight: 700, 
          color: '#0b0c0c', 
          margin: '0 0 15px 0',
          lineHeight: 1.04,
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
      body: { fontSize: '19px', lineHeight: 1.25 },
      caption: { fontSize: '14px', color: '#505a5f' },
      subtitle: { fontSize: '27px', fontWeight: 400 }
    };
    
    return (
      <p 
        className={`govuk-body${variant === 'subtitle' ? '-l' : variant === 'caption' ? '-s' : ''}`}
        style={{ 
          fontFamily: 'GDS Transport, arial, sans-serif',
          color: '#0b0c0c',
          margin: '0 0 15px 0',
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
      className="govuk-link"
      href={href} 
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ 
        fontFamily: 'GDS Transport, arial, sans-serif',
        color: '#1d70b8',
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
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`} {...props}>
      {children}
    </div>
  ),
  Header: ({ title, navigation, ...props }) => (
    <header 
      className="govuk-header" 
      style={{ 
        backgroundColor: '#0b0c0c',
        color: '#ffffff',
        padding: '10px 0'
      }} 
      {...props}
    >
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__logo">
          <span 
            className="govuk-header__logotype"
            style={{
              fontFamily: 'GDS Transport, arial, sans-serif',
              fontSize: '30px',
              fontWeight: 700,
              color: '#ffffff'
            }}
          >
            {title}
          </span>
        </div>
        {navigation}
      </div>
    </header>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <section 
      className="govuk-hero"
      style={{ 
        backgroundColor: '#1d70b8',
        color: '#ffffff',
        padding: '60px 0',
        textAlign: 'center'
      }}
      {...props}
    >
      <div className="govuk-width-container">
        <h1 
          style={{ 
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '48px', 
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 30px 0',
            lineHeight: 1.04
          }}
        >
          {title}
        </h1>
        <p 
          style={{ 
            fontFamily: 'GDS Transport, arial, sans-serif',
            fontSize: '24px', 
            color: '#ffffff',
            margin: '0 0 30px 0',
            lineHeight: 1.25
          }}
        >
          {subtitle}
        </p>
        {actions}
      </div>
    </section>
  ),
  Footer: ({ children, ...props }) => (
    <footer 
      className="govuk-footer" 
      style={{ 
        backgroundColor: '#0b0c0c',
        color: '#ffffff',
        padding: '30px 0'
      }} 
      {...props}
    >
      {children}
    </footer>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <div 
      style={{ 
        border: '1px solid #b1b4b6', 
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom: '30px',
        ...style 
      }} 
      {...props}
    >
      {children}
    </div>
  )
};

const govukConfig: ThemeConfig = {
  name: 'GOV.UK Design System',
  primaryColor: '#1d70b8',
  secondaryColor: '#00703c',
  backgroundColor: '#ffffff',
  textColor: '#0b0c0c',
  borderRadius: '0px',
  fontFamily: 'GDS Transport, arial, sans-serif',
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '30px'
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)'
  }
};

export const GOVUKThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'govuk',
    name: 'GOV.UK Design System',
    description: 'Design system for UK government services, ensuring consistency and accessibility across all government digital services',
    version: '4.0.0',
    documentation: 'https://design-system.service.gov.uk/',
    category: 'government',
    status: 'active',
    features: [
      'WCAG 2.1 AA compliance',
      'Extensive user research backed',
      'Proven government service patterns',
      'Accessibility first approach',
      'Cross-browser compatibility',
      'Mobile-first responsive design'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: govukTheme,
  config: govukConfig
};