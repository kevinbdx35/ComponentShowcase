// Shared types and interfaces for the design system comparison

export interface FormData {
  name: string;
  email: string;
  message: string;
  category: string;
  newsletter: boolean;
  rating: number;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  department: string;
}

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
  tagColor?: string;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
}

export interface AlertItem {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  dismissible?: boolean;
}

export interface ImageGalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  description: string;
  services: ServiceCard[];
  employees: Employee[];
  metrics: MetricCard[];
  tabs: TabItem[];
  alerts: AlertItem[];
  gallery: ImageGalleryItem[];
}

// Component props interfaces
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export interface CardProps extends ComponentProps {
  title?: string;
  subtitle?: string;
  image?: string;
  actions?: React.ReactNode | React.ReactNode[];
}

export interface InputProps extends ComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
}

export interface SelectProps extends ComponentProps {
  label?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
}

export interface TableProps extends ComponentProps {
  headers: string[];
  data: any[];
  onRowClick?: (row: any) => void;
}

export interface AlertProps extends ComponentProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface TabsProps extends ComponentProps {
  tabs: TabItem[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export interface BreadcrumbProps extends ComponentProps {
  items: Array<{ label: string; href?: string }>;
}

export interface AvatarProps extends ComponentProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  name?: string;
}

export interface BadgeProps extends ComponentProps {
  color?: string;
  variant?: 'solid' | 'outline' | 'subtle';
}

export interface ProgressProps extends ComponentProps {
  value: number;
  max?: number;
  label?: string;
}

export interface RatingProps extends ComponentProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export interface CheckboxProps extends ComponentProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
}

export interface RadioGroupProps extends ComponentProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onChange?: (value: string) => void;
}

export interface SliderProps extends ComponentProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  marks?: Array<{ value: number; label: string }>;
}