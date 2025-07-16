import React from 'react';
import {
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert as MuiAlert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Avatar,
  Chip,
  LinearProgress,
  Rating,
  Slider,
  Container,
  Grid,
  Stack as MuiStack,
  Typography,
  AppBar,
  Toolbar,
  Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

// Material Design 3 Theme
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#6750a4',
      light: '#9a82db',
      dark: '#4f378a',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#625b71',
      light: '#908a9e',
      dark: '#463f4f',
      contrastText: '#ffffff'
    },
    background: {
      default: '#fef7ff',
      paper: '#ffffff'
    },
    text: {
      primary: '#1c1b1f',
      secondary: '#49454f'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
          padding: '10px 24px',
          fontWeight: 500
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)'
        }
      }
    }
  }
});

// Material UI theme implementation
const MaterialButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  style,
  ...props 
}) => {
  const muiVariant = variant === 'primary' ? 'contained' : 
                     variant === 'secondary' ? 'contained' :
                     variant === 'outline' ? 'outlined' : 'text';
                     
  const color = variant === 'secondary' ? 'secondary' : 'primary';

  return (
    <MuiButton
      variant={muiVariant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      color={color}
      style={style}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

const MaterialCard: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  style, 
  ...props 
}) => {
  return (
    <MuiCard style={style} {...props}>
      <CardContent>
        {title && <Typography variant="h6" gutterBottom>{title}</Typography>}
        {subtitle && <Typography variant="body2" color="text.secondary" gutterBottom>{subtitle}</Typography>}
        {children}
      </CardContent>
    </MuiCard>
  );
};

const MaterialInput: React.FC<InputProps> = ({ 
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
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      error={!!error}
      helperText={error}
      required={required}
      type={type}
      fullWidth
      variant="outlined"
      margin="normal"
      style={style}
      {...props}
    />
  );
};

const MaterialTextarea: React.FC<InputProps> = ({ 
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
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      error={!!error}
      helperText={error}
      required={required}
      multiline
      rows={4}
      fullWidth
      variant="outlined"
      margin="normal"
      style={style}
      {...props}
    />
  );
};

const MaterialSelect: React.FC<SelectProps> = ({ 
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
    <FormControl fullWidth margin="normal" error={!!error} required={required} style={style}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value as string)}
        label={label}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <Typography variant="caption" color="error">{error}</Typography>}
    </FormControl>
  );
};

const MaterialCheckbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          {...props}
        />
      }
      label={label}
      style={style}
    />
  );
};

const MaterialRadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  style, 
  ...props 
}) => {
  return (
    <RadioGroup
      name={name}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      style={style}
      {...props}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

const MaterialTable: React.FC<TableProps> = ({ headers, data, style, ...props }) => (
  <TableContainer component={Paper} style={style} {...props}>
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header, i) => (
            <TableCell key={i}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {Object.values(row).map((cell: any, j) => (
              <TableCell key={j}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const MaterialAlert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  message, 
  dismissible, 
  onDismiss, 
  style, 
  ...props 
}) => {
  const severity = type === 'error' ? 'error' : 
                  type === 'warning' ? 'warning' :
                  type === 'success' ? 'success' : 'info';

  return (
    <MuiAlert 
      severity={severity}
      onClose={dismissible ? onDismiss : undefined}
      style={style}
      {...props}
    >
      {title && <strong>{title}: </strong>}
      {message}
    </MuiAlert>
  );
};

const MaterialModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'medium',
  ...props 
}) => {
  const maxWidth = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      {...props}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

const MaterialTabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, ...props }) => {
  return (
    <Box {...props}>
      <Tabs value={activeTab} onChange={(_, newValue) => onTabChange(newValue)}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ p: 3 }}>
        {tabs[activeTab]?.content}
      </Box>
    </Box>
  );
};

const MaterialBreadcrumb: React.FC<BreadcrumbProps> = ({ items, ...props }) => (
  <Breadcrumbs {...props}>
    {items.map((item, index) => (
      item.href ? (
        <Link key={index} href={item.href}>{item.label}</Link>
      ) : (
        <Typography key={index} color="text.primary">{item.label}</Typography>
      )
    ))}
  </Breadcrumbs>
);

const MaterialAvatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  name, 
  size = 'medium', 
  style, 
  ...props 
}) => {
  const sizeMap = { small: 24, medium: 40, large: 56 };
  
  return (
    <Avatar
      src={src}
      alt={alt}
      style={{ width: sizeMap[size], height: sizeMap[size], ...style }}
      {...props}
    >
      {!src && name ? name.charAt(0).toUpperCase() : ''}
    </Avatar>
  );
};

const MaterialBadge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'primary', 
  variant = 'solid',
  style, 
  ...props 
}) => {
  const chipVariant = variant === 'outline' ? 'outlined' : 'filled';
  
  return (
    <Chip
      label={children}
      color={color as any}
      variant={chipVariant}
      size="small"
      style={style}
      {...props}
    />
  );
};

const MaterialProgress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  label, 
  style, 
  ...props 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <Box style={style} {...props}>
      {label && <Typography variant="body2" gutterBottom>{label}</Typography>}
      <LinearProgress variant="determinate" value={percentage} />
    </Box>
  );
};

const MaterialRating: React.FC<RatingProps> = ({ 
  value, 
  max = 5, 
  onChange, 
  readonly = false,
  style, 
  ...props 
}) => {
  return (
    <Rating
      value={value}
      max={max}
      onChange={(_, newValue) => onChange?.(newValue || 0)}
      readOnly={readonly}
      style={style}
      {...props}
    />
  );
};

const MaterialSlider: React.FC<SliderProps> = ({ 
  min = 0, 
  max = 100, 
  step = 1, 
  value, 
  onChange, 
  marks,
  style, 
  ...props 
}) => {
  return (
    <Slider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(_, newValue) => onChange?.(newValue as number)}
      marks={marks}
      valueLabelDisplay="auto"
      style={style}
      {...props}
    />
  );
};

const materialTheme: DesignSystemTheme = {
  Button: MaterialButton,
  Card: MaterialCard,
  Input: MaterialInput,
  Textarea: MaterialTextarea,
  Select: MaterialSelect,
  Checkbox: MaterialCheckbox,
  RadioGroup: MaterialRadioGroup,
  Slider: MaterialSlider,
  Rating: MaterialRating,
  Table: MaterialTable,
  Avatar: MaterialAvatar,
  Badge: MaterialBadge,
  Progress: MaterialProgress,
  Alert: MaterialAlert,
  Modal: MaterialModal,
  Tabs: MaterialTabs,
  Breadcrumb: MaterialBreadcrumb,
  Container: ({ children, style, ...props }) => (
    <Container maxWidth="lg" style={style} {...props}>{children}</Container>
  ),
  Grid: ({ children, columns = 1, style, ...props }) => (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '24px', ...style }} {...props}>
      {children}
    </div>
  ),
  Stack: ({ children, direction = 'column', spacing = 1, style, ...props }) => (
    <MuiStack direction={direction} spacing={spacing} style={style} {...props}>
      {children}
    </MuiStack>
  ),
  Heading: ({ children, level = 1, style, ...props }) => (
    <Typography variant={`h${level}` as any} style={style} {...props}>
      {children}
    </Typography>
  ),
  Text: ({ children, variant = 'body', style, ...props }) => {
    const muiVariant = variant === 'body' ? 'body1' : 
                      variant === 'caption' ? 'caption' : 'subtitle1';
    return (
      <Typography variant={muiVariant} style={style} {...props}>
        {children}
      </Typography>
    );
  },
  Link: ({ children, href, external, style, ...props }) => (
    <Link href={href} target={external ? '_blank' : undefined} style={style} {...props}>
      {children}
    </Link>
  ),
  Form: ({ children, onSubmit, ...props }) => (
    <Box component="form" onSubmit={onSubmit} {...props}>
      {children}
    </Box>
  ),
  FormField: ({ children, label, error, required, ...props }) => (
    <Box {...props}>
      {children}
    </Box>
  ),
  Header: ({ title, navigation, ...props }) => (
    <AppBar position="static" {...props}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {navigation}
      </Toolbar>
    </AppBar>
  ),
  Hero: ({ title, subtitle, actions, ...props }) => (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6750a4 0%, #9a82db 100%)',
        color: 'white',
        py: 8,
        textAlign: 'center'
      }}
      {...props}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom>{title}</Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>{subtitle}</Typography>
        {actions}
      </Container>
    </Box>
  ),
  Footer: ({ children, ...props }) => (
    <Box component="footer" {...props}>
      {children}
    </Box>
  ),
  ChartContainer: ({ children, style, ...props }) => (
    <Paper sx={{ p: 2, ...style }} {...props}>
      {children}
    </Paper>
  )
};

const materialConfig: ThemeConfig = {
  name: 'Material UI',
  primaryColor: '#6750a4',
  secondaryColor: '#625b71',
  backgroundColor: '#fef7ff',
  textColor: '#1c1b1f',
  borderRadius: '16px',
  fontFamily: 'Roboto, Arial, sans-serif',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
    md: '0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)',
    lg: '0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px 4px rgba(0, 0, 0, 0.15)'
  }
};

const MaterialUIWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={muiTheme}>
    {children}
  </ThemeProvider>
);

export const MaterialUIThemeExport: DesignSystemThemeExport = {
  info: {
    id: 'material-ui',
    name: 'Material UI',
    description: 'Material Design 3 (Material You) implementation with React components',
    version: '5.0.0',
    documentation: 'https://mui.com/',
    category: 'general',
    status: 'active',
    features: [
      'Material Design 3 compliance',
      'Comprehensive component library',
      'Advanced theming system',
      'Excellent TypeScript support',
      'Wide community adoption'
    ],
    accessibility: {
      wcag: '2.1 AA',
      screenReader: true,
      keyboard: true,
      colorContrast: true
    }
  },
  theme: materialTheme,
  config: materialConfig,
  wrapper: MaterialUIWrapper
};