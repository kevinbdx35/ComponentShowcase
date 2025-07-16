import React from 'react';
import {
  Button as EvergreenButton,
  Card as EvergreenCard,
  TextInput,
  Textarea as EvergreenTextarea,
  Select as EvergreenSelect,
  Checkbox as EvergreenCheckbox,
  RadioGroup as EvergreenRadioGroup,
  Table as EvergreenTable,
  Alert as EvergreenAlert,
  SideSheet,
  Tablist,
  Tab as EvergreenTab,
  Pane,
  Avatar as EvergreenAvatar,
  Badge as EvergreenBadge,
  ProgressBar,
  StarIcon,
  Slider as EvergreenSlider,
  majorScale,
  Text as EvergreenText,
  Heading as EvergreenHeading,
  Link as EvergreenLink,
  FormField as EvergreenFormField
} from 'evergreen-ui';
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

// Evergreen component implementations
const EvergreenButtonComponent: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...props 
}) => {
  const appearance = variant === 'primary' ? 'primary' : 
                    variant === 'secondary' ? 'default' :
                    variant === 'outline' ? 'minimal' : 'minimal';
  
  const evergreenSize = size === 'small' ? 'small' : 
                        size === 'large' ? 'large' : 'medium';

  return (
    <EvergreenButton
      appearance={appearance}
      size={evergreenSize}
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={style}
      {...props}
    >
      {children}
    </EvergreenButton>
  );
};

const EvergreenCardComponent: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <EvergreenCard 
      padding={majorScale(2)}
      elevation={1}
      style={style}
      {...props}
    >
      {title && <EvergreenHeading size={600} marginBottom={majorScale(1)}>{title}</EvergreenHeading>}
      {subtitle && <EvergreenText color="muted" marginBottom={majorScale(2)}>{subtitle}</EvergreenText>}
      {children}
    </EvergreenCard>
  );
};

const EvergreenInputComponent: React.FC<InputProps> = ({ 
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
    <EvergreenFormField
      label={label}
      isRequired={required}
      validationMessage={error}
      marginBottom={majorScale(2)}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
        type={type}
        isInvalid={!!error}
        width="100%"
        style={style}
        {...props}
      />
    </EvergreenFormField>
  );
};

const EvergreenTextareaComponent: React.FC<InputProps> = ({ 
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
    <EvergreenFormField
      label={label}
      isRequired={required}
      validationMessage={error}
      marginBottom={majorScale(2)}
    >
      <EvergreenTextarea
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value)}
        isInvalid={!!error}
        width="100%"
        style={style}
        {...props}
      />
    </EvergreenFormField>
  );
};

const EvergreenSelectComponent: React.FC<SelectProps> = ({ 
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
    <EvergreenFormField
      label={label}
      isRequired={required}
      validationMessage={error}
      marginBottom={majorScale(2)}
    >
      <EvergreenSelect
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange?.(e.target.value)}
        isInvalid={!!error}
        width="100%"
        style={style}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </EvergreenSelect>
    </EvergreenFormField>
  );
};

const EvergreenCheckboxComponent: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <EvergreenCheckbox
      label={label}
      checked={checked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.checked)}
      style={style}
      {...props}
    />
  );
};

const EvergreenRadioGroupComponent: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <EvergreenRadioGroup
      name={name}
      value={value}
      options={options}
      onChange={onChange}
      style={style}
      {...props}
    />
  );
};

const EvergreenTableComponent: React.FC<TableProps> = ({ headers, data, style, ...props }) => {
  return (
    <EvergreenTable style={style} {...props}>
      <EvergreenTable.Head>
        {headers.map((header, index) => (
          <EvergreenTable.TextHeaderCell key={index}>
            {header}
          </EvergreenTable.TextHeaderCell>
        ))}
      </EvergreenTable.Head>
      <EvergreenTable.Body>
        {data.map((row, index) => (
          <EvergreenTable.Row key={index}>
            {Object.values(row).map((cell: any, cellIndex) => (
              <EvergreenTable.TextCell key={cellIndex}>
                {cell}
              </EvergreenTable.TextCell>
            ))}
          </EvergreenTable.Row>
        ))}
      </EvergreenTable.Body>
    </EvergreenTable>
  );
};

const EvergreenAlertComponent: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  dismissible, 
  onDismiss, 
  style, 
  ...props 
}) => {
  const intent = type === 'error' ? 'danger' : 
                 type === 'warning' ? 'warning' :
                 type === 'success' ? 'success' : 'none';

  return (
    <EvergreenAlert 
      intent={intent}
      title={title}
      isRemoveable={dismissible}
      onRemove={onDismiss}
      style={style}
      {...props}
    >
      {message}
    </EvergreenAlert>
  );
};

const EvergreenModalComponent: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  ...props 
}) => {
  const width = size === 'small' ? 400 : size === 'large' ? 800 : 600;

  return (
    <SideSheet 
      isShown={isOpen} 
      onCloseComplete={onClose}
      width={width}
      {...props}
    >
      <Pane padding={majorScale(3)}>
        {title && <EvergreenHeading size={600} marginBottom={majorScale(2)}>{title}</EvergreenHeading>}
        {children}
      </Pane>
    </SideSheet>
  );
};

const EvergreenTabsComponent: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, ...props }) => {
  return (
    <Pane {...props}>
      <Tablist marginBottom={majorScale(2)}>
        {tabs.map((tab, index) => (
          <EvergreenTab
            key={index}
            isSelected={activeTab === index}
            onSelect={() => onTabChange(index)}
          >
            {tab.label}
          </EvergreenTab>
        ))}
      </Tablist>
      <Pane>
        {tabs[activeTab]?.content}
      </Pane>
    </Pane>
  );
};

const EvergreenBreadcrumbComponent: React.FC<BreadcrumbProps> = ({ items, ...props }) => (
  <Pane display="flex" alignItems="center" {...props}>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {item.href ? (
          <EvergreenLink href={item.href}>{item.label}</EvergreenLink>
        ) : (
          <EvergreenText>{item.label}</EvergreenText>
        )}
        {index < items.length - 1 && <EvergreenText marginX={majorScale(1)}>></EvergreenText>}
      </React.Fragment>
    ))}
  </Pane>
);

const EvergreenAvatarComponent: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  name, 
  size = 'medium', 
  style, 
  ...props 
}) => {
  const evergreenSize = size === 'small' ? 24 : size === 'large' ? 56 : 40;
  
  return (
    <EvergreenAvatar
      src={src}
      name={name}
      size={evergreenSize}
      style={style}
      {...props}
    />
  );
};

const EvergreenBadgeComponent: React.FC<BadgeProps> = ({ 
  children, 
  color = 'primary', 
  variant = 'solid',
  style, 
  ...props 
}) => {
  const badgeColor = color === 'primary' ? 'blue' : 
                     color === 'secondary' ? 'neutral' :
                     color === 'success' ? 'green' :
                     color === 'warning' ? 'yellow' :
                     color === 'error' ? 'red' : 'blue';
  
  return (
    <EvergreenBadge
      color={badgeColor}
      style={style}
      {...props}
    >
      {children}
    </EvergreenBadge>
  );
};

const EvergreenProgressComponent: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  label, 
  style, 
  ...props 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <Pane style={style} {...props}>
      {label && <EvergreenText marginBottom={majorScale(1)}>{label}</EvergreenText>}
      <ProgressBar value={percentage} />
    </Pane>
  );
};

const EvergreenRatingComponent: React.FC<RatingProps> = ({ 
  value, 
  max = 5, 
  onChange, 
  readonly = false,
  style, 
  ...props 
}) => {
  return (
    <Pane display="flex" style={style} {...props}>
      {Array.from({ length: max }, (_, i) => (
        <StarIcon
          key={i}
          size={16}
          color={i < value ? 'selected' : 'muted'}
          cursor={readonly ? 'default' : 'pointer'}
          onClick={readonly ? undefined : () => onChange?.(i + 1)}
        />
      ))}
    </Pane>
  );
};

const EvergreenSliderComponent: React.FC<SliderProps> = ({ 
  min = 0, 
  max = 100, 
  step = 1, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <EvergreenSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      style={style}
      {...props}
    />
  );
};

const evergreenTheme: DesignSystemTheme = {
  Button: EvergreenButtonComponent,
  Card: EvergreenCardComponent,
  Input: EvergreenInputComponent,
  Textarea: EvergreenTextareaComponent,
  Select: EvergreenSelectComponent,
  Checkbox: EvergreenCheckboxComponent,
  RadioGroup: EvergreenRadioGroupComponent,
  Slider: EvergreenSliderComponent,
  Rating: EvergreenRatingComponent,
  Table: EvergreenTableComponent,
  Avatar: EvergreenAvatarComponent,
  Badge: EvergreenBadgeComponent,
  Progress: EvergreenProgressComponent,
  Alert: EvergreenAlertComponent,
  Modal: EvergreenModalComponent,
  Tabs: EvergreenTabsComponent,
  Breadcrumb: EvergreenBreadcrumbComponent,
  Container: ({ children, style, ...props }) => (
    <Pane maxWidth={1200} marginX="auto" paddingX={majorScale(3)} style={style} {...props}>
      {children}
    </Pane>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <Pane display="grid" gridTemplateColumns={`repeat(${columns}, 1fr)`} gap={majorScale(3)} style={style} {...props}>
      {children}
    </Pane>
  ),
  Stack: ({ children, direction = 'column', spacing = 1, style, ...props }) => (
    <Pane 
      display="flex" 
      flexDirection={direction}
      gap={majorScale(spacing)}
      style={style} 
      {...props}
    >
      {children}
    </Pane>
  ),
  Heading: ({ children, level = 1, style, ...props }) => {
    const size = level === 1 ? 900 : 
                 level === 2 ? 700 : 
                 level === 3 ? 600 : 
                 level === 4 ? 500 : 
                 level === 5 ? 400 : 300;
    
    return (
      <EvergreenHeading size={size} style={style} {...props}>
        {children}
      </EvergreenHeading>
    );
  },
  Text: ({ children, variant = 'body', style, ...props }) => {
    const size = variant === 'caption' ? 300 : 
                 variant === 'subtitle' ? 500 : 400;
    
    return (
      <EvergreenText size={size} style={style} {...props}>
        {children}
      </EvergreenText>
    );
  },
  Link: ({ children, href, external, style, ...props }) => (
    <EvergreenLink href={href} target={external ? '_blank' : undefined} style={style} {...props}>
      {children}
    </EvergreenLink>
  ),
  Form: ({ children, onSubmit, ...props }) => (
    <Pane as="form" onSubmit={onSubmit} {...props}>
      {children}
    </Pane>
  ),
  FormField: ({ children, label, error, required, ...props }) => (
    <EvergreenFormField
      label={label}
      isRequired={required}
      validationMessage={error}
      marginBottom={majorScale(2)}
      {...props}
    >
      {children}
    </EvergreenFormField>
  ),
  Header: ({ title, navigation, ...props }) => (
    <Pane 
      background="tint2" 
      paddingY={majorScale(2)} 
      paddingX={majorScale(3)}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <EvergreenHeading size={600}>{title}</EvergreenHeading>
      {navigation}
    </Pane>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <Pane
      background="tint1"
      paddingY={majorScale(8)}
      paddingX={majorScale(3)}
      textAlign="center"
      {...props}
    >
      <Pane maxWidth={1200} marginX="auto">
        <EvergreenHeading size={900} marginBottom={majorScale(2)}>
          {title}
        </EvergreenHeading>
        <EvergreenText size={500} marginBottom={majorScale(4)}>
          {subtitle}
        </EvergreenText>
        {actions}
      </Pane>
    </Pane>
  ),
  Footer: ({ children, ...props }) => (
    <Pane as="footer" {...props}>
      {children}
    </Pane>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <EvergreenCard padding={majorScale(2)} elevation={1} style={style} {...props}>
      {children}
    </EvergreenCard>
  )
};

const evergreenConfig: ThemeConfig = {
  name: 'Evergreen UI',
  primaryColor: '#1070CA',
  secondaryColor: '#696f8c',
  backgroundColor: '#f9f9fb',
  textColor: '#101840',
  borderRadius: '3px',
  fontFamily: 'SF UI Text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px'
  },
  shadows: {
    sm: '0 0 1px rgba(67, 90, 111, 0.3)',
    md: '0 2px 4px rgba(67, 90, 111, 0.47)',
    lg: '0 8px 24px rgba(67, 90, 111, 0.47)'
  }
};

export const EvergreenThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'evergreen',
    name: 'Evergreen UI',
    description: 'React UI framework by Segment with a focus on developer experience and design consistency',
    version: '7.0.0',
    documentation: 'https://evergreen.segment.com/',
    category: 'general',
    status: 'active',
    features: [
      'Modular component architecture',
      'Consistent design language',
      'Excellent TypeScript support',
      'Flexible theming system',
      'Accessibility-first approach',
      'Developer-friendly API'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: evergreenTheme,
  config: evergreenConfig
};