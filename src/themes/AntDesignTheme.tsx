import React from 'react';
import {
  Button as AntButton,
  Card as AntCard,
  Input as AntInput,
  Select as AntSelect,
  Form,
  Checkbox as AntCheckbox,
  Radio,
  Table as AntTable,
  Alert as AntAlert,
  Modal as AntModal,
  Tabs as AntTabs,
  Breadcrumb as AntBreadcrumb,
  Avatar as AntAvatar,
  Tag,
  Progress as AntProgress,
  Rate as AntRate,
  Slider as AntSlider,
  Row,
  Col,
  Space,
  Typography,
  Layout,
  ConfigProvider
} from 'antd';
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

const { Text: AntText, Title, Link: AntLink } = Typography;
const { Header: AntHeader, Footer: AntFooter, Content } = Layout;
const { TextArea } = AntInput;

// Ant Design theme configuration
const antTheme = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 6,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
  }
};

// Ant Design component implementations
const AntDesignButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...props 
}) => {
  const antType = variant === 'primary' ? 'primary' : 
                  variant === 'secondary' ? 'default' :
                  variant === 'outline' ? 'default' : 'text';
  
  const antSize = size === 'small' ? 'small' : 
                  size === 'large' ? 'large' : 'middle';

  return (
    <AntButton
      type={antType}
      size={antSize}
      disabled={disabled}
      onClick={onClick}
      htmlType={type}
      style={style}
      {...props}
    >
      {children}
    </AntButton>
  );
};

const AntDesignCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  actions,
  ...props 
}) => {
  // Filter out problematic props
  const cleanProps = { ...props } as any;
  delete cleanProps.actions;
  
  return (
    <AntCard 
      title={title}
      style={style}
      actions={actions ? (Array.isArray(actions) ? actions : [actions]) : undefined}
      {...cleanProps}
    >
      {subtitle && <AntText type="secondary" style={{ display: 'block', marginBottom: '1rem' }}>{subtitle}</AntText>}
      {children}
    </AntCard>
  );
};

const AntDesignInput: React.FC<InputProps> = ({ 
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
    <Form.Item
      label={label}
      validateStatus={error ? 'error' : ''}
      help={error}
      required={required}
      style={{ marginBottom: '1rem' }}
    >
      <AntInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        style={style}
        {...props}
      />
    </Form.Item>
  );
};

const AntDesignTextarea: React.FC<InputProps> = ({ 
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
    <Form.Item
      label={label}
      validateStatus={error ? 'error' : ''}
      help={error}
      required={required}
      style={{ marginBottom: '1rem' }}
    >
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={4}
        style={style}
        {...props}
      />
    </Form.Item>
  );
};

const AntDesignSelect: React.FC<SelectProps> = ({ 
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
    <Form.Item
      label={label}
      validateStatus={error ? 'error' : ''}
      help={error}
      required={required}
      style={{ marginBottom: '1rem' }}
    >
      <AntSelect
        value={value}
        onChange={onChange}
        style={{ width: '100%', ...style }}
        {...props}
      >
        {options.map((option) => (
          <AntSelect.Option key={option.value} value={option.value}>
            {option.label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  );
};

const AntDesignCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <AntCheckbox
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      style={style}
      {...props}
    >
      {label}
    </AntCheckbox>
  );
};

const AntDesignRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <Radio.Group
      name={name}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      style={style}
      {...props}
    >
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

const AntDesignTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => {
  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: Object.keys(data[0] || {})[index],
    key: index
  }));

  const dataSource = data.map((row, index) => ({
    ...row,
    key: index
  }));

  return (
    <AntTable
      columns={columns}
      dataSource={dataSource}
      style={style}
      {...props}
    />
  );
};

const AntDesignAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  dismissible, 
  onDismiss, 
  style, 
  ...props 
}) => {
  const antType = type === 'error' ? 'error' : 
                  type === 'warning' ? 'warning' :
                  type === 'success' ? 'success' : 'info';

  return (
    <AntAlert 
      type={antType}
      message={title}
      description={message}
      closable={dismissible}
      onClose={onDismiss}
      style={style}
      {...props}
    />
  );
};

const AntDesignModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  ...props 
}) => {
  const width = size === 'small' ? 400 : size === 'large' ? 800 : 600;

  return (
    <AntModal 
      open={isOpen} 
      onCancel={onClose}
      title={title}
      width={width}
      footer={null}
      {...props}
    >
      {children}
    </AntModal>
  );
};

const AntDesignTabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, ...props }) => {
  const items = tabs.map((tab, index) => ({
    key: index.toString(),
    label: tab.label,
    children: tab.content
  }));

  return (
    <AntTabs
      activeKey={activeTab.toString()}
      onChange={(key) => onTabChange(parseInt(key))}
      items={items}
      {...props}
    />
  );
};

const AntDesignBreadcrumb: React.FC<BreadcrumbProps> = ({ items, ...props }) => {
  const breadcrumbItems = items.map((item, index) => ({
    title: item.href ? (
      <a href={item.href}>{item.label}</a>
    ) : (
      item.label
    )
  }));

  return (
    <AntBreadcrumb items={breadcrumbItems} {...props} />
  );
};

const AntDesignAvatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  name, 
  size = 'medium', 
  style, 
  ...props 
}) => {
  const antSize = size === 'small' ? 24 : size === 'large' ? 64 : 40;
  
  return (
    <AntAvatar
      src={src}
      alt={alt}
      size={antSize}
      style={style}
      {...props}
    >
      {!src && name ? name.charAt(0).toUpperCase() : ''}
    </AntAvatar>
  );
};

const AntDesignBadge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'primary', 
  variant = 'solid',
  style, 
  ...props 
}) => {
  const tagColor = color === 'primary' ? 'blue' : 
                   color === 'secondary' ? 'default' :
                   color === 'success' ? 'green' :
                   color === 'warning' ? 'gold' :
                   color === 'error' ? 'red' : 'blue';
  
  return (
    <Tag
      color={tagColor}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
};

const AntDesignProgress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  label, 
  style, 
  ...props 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div style={style} {...props}>
      {label && <AntText style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</AntText>}
      <AntProgress percent={percentage} />
    </div>
  );
};

const AntDesignRating: React.FC<RatingProps> = ({ 
  value, 
  max = 5, 
  onChange, 
  readonly = false,
  style, 
  ...props 
}) => {
  return (
    <AntRate
      value={value}
      count={max}
      onChange={onChange}
      disabled={readonly}
      style={style}
      {...props}
    />
  );
};

const AntDesignSlider: React.FC<SliderProps> = ({ 
  min = 0, 
  max = 100, 
  step = 1, 
  value, 
  onChange, 
  marks,
  style, 
  ...props 
}) => {
  // Convert marks array to Ant Design format
  const antMarks = marks ? marks.reduce((acc, mark) => {
    acc[mark.value] = mark.label;
    return acc;
  }, {} as Record<number, string>) : undefined;

  return (
    <AntSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      marks={antMarks}
      style={style}
      {...props}
    />
  );
};

const antDesignTheme: DesignSystemTheme = {
  Button: AntDesignButton,
  Card: AntDesignCard,
  Input: AntDesignInput,
  Textarea: AntDesignTextarea,
  Select: AntDesignSelect,
  Checkbox: AntDesignCheckbox,
  RadioGroup: AntDesignRadioGroup,
  Slider: AntDesignSlider,
  Rating: AntDesignRating,
  Table: AntDesignTable,
  Avatar: AntDesignAvatar,
  Badge: AntDesignBadge,
  Progress: AntDesignProgress,
  Alert: AntDesignAlert,
  Modal: AntDesignModal,
  Tabs: AntDesignTabs,
  Breadcrumb: AntDesignBreadcrumb,
  Container: ({ children, style, ...props }) => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', ...style }} {...props}>
      {children}
    </div>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <Row gutter={[24, 24]} style={style} {...props}>
      {React.Children.map(children, (child, index) => (
        <Col span={24 / columns} key={index}>
          {child}
        </Col>
      ))}
    </Row>
  ),
  Stack: ({ children, direction = 'column', spacing = 1, style, ...props }) => (
    <Space direction={direction === 'row' ? 'horizontal' : 'vertical'} size={spacing * 8} style={style} {...props}>
      {children}
    </Space>
  ),
  Heading: ({ children, level = 1, style, ...props }) => (
    <Title level={level as any} style={style} {...props}>
      {children}
    </Title>
  ),
  Text: ({ children, variant = 'body', style, ...props }) => {
    if (variant === 'caption') {
      return <AntText type="secondary" style={{ fontSize: '12px', ...style }} {...props}>{children}</AntText>;
    }
    if (variant === 'subtitle') {
      return <AntText strong style={style} {...props}>{children}</AntText>;
    }
    return <AntText style={style} {...props}>{children}</AntText>;
  },
  Link: ({ children, href, external, style, ...props }) => (
    <AntLink href={href} target={external ? '_blank' : undefined} style={style} {...props}>
      {children}
    </AntLink>
  ),
  Form: ({ children, onSubmit, ...props }) => (
    <Form onFinish={onSubmit} layout="vertical" {...props}>
      {children}
    </Form>
  ),
  FormField: ({ children, label, error, required, ...props }) => (
    <Form.Item
      label={label}
      validateStatus={error ? 'error' : ''}
      help={error}
      required={required}
      {...props}
    >
      {children}
    </Form.Item>
  ),
  Header: ({ title, navigation, ...props }) => (
    <AntHeader style={{ backgroundColor: '#1890ff', color: 'white', padding: '0 24px' }} {...props}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          {title}
        </Title>
        {navigation}
      </div>
    </AntHeader>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
        color: 'white',
        padding: '4rem 24px',
        textAlign: 'center'
      }}
      {...props}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={1} style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>
          {title}
        </Title>
        <AntText style={{ color: 'white', fontSize: '1.25rem', display: 'block', marginBottom: '2rem' }}>
          {subtitle}
        </AntText>
        {actions}
      </div>
    </div>
  ),
  Footer: ({ children, ...props }) => (
    <AntFooter {...props}>
      {children}
    </AntFooter>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <AntCard style={{ ...style }} {...props}>
      {children}
    </AntCard>
  )
};

const antDesignConfig: ThemeConfig = {
  name: 'Ant Design',
  primaryColor: '#1890ff',
  secondaryColor: '#f0f0f0',
  backgroundColor: '#ffffff',
  textColor: '#000000d9',
  borderRadius: '6px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px'
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.15)',
    md: '0 4px 12px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.15)'
  }
};

const AntDesignWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider theme={antTheme}>
    {children}
  </ConfigProvider>
);

export const AntDesignThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'ant-design',
    name: 'Ant Design',
    description: 'Enterprise design language for web applications with comprehensive React components',
    version: '5.0.0',
    documentation: 'https://ant.design/',
    category: 'enterprise',
    status: 'active',
    features: [
      'Enterprise-focused design language',
      'Comprehensive component library',
      'Excellent TypeScript support',
      'Powerful form handling',
      'Data visualization components',
      'Internationalization support'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: antDesignTheme,
  config: antDesignConfig,
  wrapper: AntDesignWrapper
};