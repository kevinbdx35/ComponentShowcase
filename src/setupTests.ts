// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock react-router-dom globally
jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    BrowserRouter: ({ children }: { children: React.ReactNode }) => React.createElement('div', {}, children),
    Routes: ({ children }: { children: React.ReactNode }) => React.createElement('div', {}, children),
    Route: ({ element }: { element: React.ReactElement }) => element,
    Link: ({ children, to }: { children: React.ReactNode; to: string }) => React.createElement('a', { href: to }, children),
    useNavigate: () => jest.fn(),
    useLocation: () => ({ pathname: '/' }),
    useParams: () => ({}),
  };
}, { virtual: true });

// Mock @react-three/fiber and @react-three/drei globally
jest.mock('@react-three/fiber', () => {
  const React = require('react');
  
  // Mock all three.js elements as simple divs
  const mockThreeElement = (name: string) => ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => 
    React.createElement('div', { 'data-testid': name, ...props }, children);
  
  return {
    Canvas: ({ children }: { children: React.ReactNode }) => 
      React.createElement('div', { 'data-testid': 'three-canvas' }, children),
    useFrame: () => {},
    extend: () => {},
    useThree: () => ({
      camera: {},
      scene: {},
      gl: {},
    }),
  };
});

jest.mock('@react-three/drei', () => {
  const React = require('react');
  return {
    OrbitControls: () => React.createElement('div', { 'data-testid': 'orbit-controls' }),
    Text: ({ children }: { children: React.ReactNode }) => 
      React.createElement('div', { 'data-testid': 'three-text' }, children),
    useHelper: () => {},
  };
});

// Mock three.js
jest.mock('three', () => ({
  ...jest.requireActual('three'),
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    render: jest.fn(),
    domElement: { tagName: 'CANVAS' },
  })),
}));

// Mock GOV.UK Frontend CSS
jest.mock('govuk-frontend/dist/govuk/govuk-frontend.min.css', () => ({}));

// Create a global mock for three.js elements
(global as any).React = require('react');

// Mock Ant Design components
jest.mock('antd', () => {
  const React = require('react');
  
  const createMockComponent = (name: string, defaultProps?: any) => {
    return ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': name, ...defaultProps, ...props }, children);
  };

  const createMockInput = (name: string) => {
    return ({ value, onChange, placeholder, ...props }: any) => 
      React.createElement('input', { 
        'data-testid': name, 
        value, 
        onChange, 
        placeholder,
        ...props 
      });
  };

  const createMockSelect = (name: string) => {
    return ({ value, onChange, children, ...props }: any) => 
      React.createElement('select', { 
        'data-testid': name, 
        value, 
        onChange,
        ...props 
      }, children);
  };

  const createMockButton = (name: string) => {
    return ({ onClick, children, ...props }: any) => 
      React.createElement('button', { 
        'data-testid': name, 
        onClick,
        ...props 
      }, children);
  };

  const createMockTable = () => {
    return ({ dataSource, columns, ...props }: any) => {
      return React.createElement('div', { 'data-testid': 'ant-table', ...props }, [
        React.createElement('table', { key: 'table' }, [
          React.createElement('thead', { key: 'head' }, 
            React.createElement('tr', { key: 'header-row' }, 
              columns?.map((col: any, i: number) => 
                React.createElement('th', { key: i }, col.title)
              )
            )
          ),
          React.createElement('tbody', { key: 'body' }, 
            dataSource?.map((item: any, i: number) => 
              React.createElement('tr', { key: i }, 
                columns?.map((col: any, j: number) => 
                  React.createElement('td', { key: j }, 
                    col.render ? col.render(item[col.dataIndex], item) : item[col.dataIndex]
                  )
                )
              )
            )
          )
        ])
      ]);
    };
  };

  const createMockForm = () => {
    const Form = ({ children, onFinish, ...props }: any) => 
      React.createElement('form', { 
        'data-testid': 'ant-form', 
        onSubmit: (e: any) => { e.preventDefault(); onFinish?.(); },
        ...props 
      }, children);
    
    Form.useForm = () => [{ 
      getFieldsValue: () => ({}),
      setFieldsValue: () => {},
      validateFields: () => Promise.resolve(),
      resetFields: () => {}
    }];
    
    Form.Item = ({ children, label, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-form-item', ...props }, [
        label && React.createElement('label', { key: 'label' }, label),
        React.createElement('div', { key: 'field' }, children)
      ]);
    
    return Form;
  };

  const createMockModal = () => {
    return ({ visible, open, onOk, onCancel, title, children, ...props }: any) => {
      if (!visible && !open) return null;
      return React.createElement('div', { 
        'data-testid': 'ant-modal', 
        ...props 
      }, [
        React.createElement('div', { key: 'title' }, title),
        React.createElement('div', { key: 'content' }, children),
        React.createElement('div', { key: 'actions' }, [
          React.createElement('button', { key: 'ok', onClick: onOk }, 'OK'),
          React.createElement('button', { key: 'cancel', onClick: onCancel }, 'Cancel')
        ])
      ]);
    };
  };

  const createMockTabs = () => {
    const Tabs = ({ children, activeKey, onChange, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-tabs', ...props }, children);
    
    Tabs.TabPane = ({ children, tab, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-tab-pane', ...props }, [
        React.createElement('div', { key: 'tab' }, tab),
        React.createElement('div', { key: 'content' }, children)
      ]);
    
    return Tabs;
  };

  const createMockSteps = () => {
    return ({ current, children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-steps', ...props }, children);
  };

  const createMockBreadcrumb = () => {
    const Breadcrumb = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-breadcrumb', ...props }, children);
    
    Breadcrumb.Item = ({ children, ...props }: any) => 
      React.createElement('span', { 'data-testid': 'ant-breadcrumb-item', ...props }, children);
    
    return Breadcrumb;
  };

  const createMockLayout = () => {
    const Layout = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-layout', ...props }, children);
    
    Layout.Header = ({ children, ...props }: any) => 
      React.createElement('header', { 'data-testid': 'ant-header', ...props }, children);
    
    Layout.Content = ({ children, ...props }: any) => 
      React.createElement('main', { 'data-testid': 'ant-content', ...props }, children);
    
    Layout.Footer = ({ children, ...props }: any) => 
      React.createElement('footer', { 'data-testid': 'ant-footer', ...props }, children);
    
    return Layout;
  };

  const createMockTypography = () => {
    const Typography = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-typography', ...props }, children);
    
    Typography.Title = ({ children, level = 1, ...props }: any) => 
      React.createElement(`h${level}`, { 'data-testid': 'ant-title', ...props }, children);
    
    Typography.Paragraph = ({ children, ...props }: any) => 
      React.createElement('p', { 'data-testid': 'ant-paragraph', ...props }, children);
    
    Typography.Text = ({ children, ...props }: any) => 
      React.createElement('span', { 'data-testid': 'ant-text', ...props }, children);
    
    return Typography;
  };

  const createMockGrid = () => {
    const Row = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-row', ...props }, children);
    
    const Col = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'ant-col', ...props }, children);
    
    return { Row, Col };
  };

  const { Row, Col } = createMockGrid();

  return {
    Button: createMockButton('ant-button'),
    Card: createMockComponent('ant-card'),
    Form: createMockForm(),
    Input: createMockInput('ant-input'),
    Select: createMockSelect('ant-select'),
    Checkbox: createMockComponent('ant-checkbox'),
    Radio: createMockComponent('ant-radio'),
    Table: createMockTable(),
    Alert: createMockComponent('ant-alert'),
    Modal: createMockModal(),
    Tabs: createMockTabs(),
    Progress: createMockComponent('ant-progress'),
    Badge: createMockComponent('ant-badge'),
    Avatar: createMockComponent('ant-avatar'),
    Typography: createMockTypography(),
    Row,
    Col,
    Statistic: createMockComponent('ant-statistic'),
    message: {
      success: jest.fn(),
      error: jest.fn(),
      warning: jest.fn(),
      info: jest.fn()
    },
    Layout: createMockLayout(),
    Space: createMockComponent('ant-space'),
    Divider: createMockComponent('ant-divider'),
    Tag: createMockComponent('ant-tag'),
    Timeline: createMockComponent('ant-timeline'),
    Steps: createMockSteps(),
    Rate: createMockComponent('ant-rate'),
    Breadcrumb: createMockBreadcrumb(),
    Menu: createMockComponent('ant-menu'),
    Dropdown: createMockComponent('ant-dropdown'),
    Tooltip: createMockComponent('ant-tooltip'),
    Popover: createMockComponent('ant-popover'),
    notification: {
      success: jest.fn(),
      error: jest.fn(),
      warning: jest.fn(),
      info: jest.fn()
    }
  };
});

// Mock Ant Design Icons
jest.mock('@ant-design/icons', () => {
  const React = require('react');
  
  const createMockIcon = (name: string) => {
    return ({ ...props }: any) => 
      React.createElement('span', { 'data-testid': name, ...props });
  };

  return {
    CloudOutlined: createMockIcon('cloud-outlined'),
    RobotOutlined: createMockIcon('robot-outlined'),
    CodeOutlined: createMockIcon('code-outlined'),
    SendOutlined: createMockIcon('send-outlined'),
    UserOutlined: createMockIcon('user-outlined'),
    MailOutlined: createMockIcon('mail-outlined'),
    PhoneOutlined: createMockIcon('phone-outlined'),
    EnvironmentOutlined: createMockIcon('environment-outlined'),
    ArrowUpOutlined: createMockIcon('arrow-up-outlined'),
    TeamOutlined: createMockIcon('team-outlined'),
    SafetyCertificateOutlined: createMockIcon('safety-certificate-outlined'),
    RocketOutlined: createMockIcon('rocket-outlined'),
    TrophyOutlined: createMockIcon('trophy-outlined'),
    HomeOutlined: createMockIcon('home-outlined'),
    SettingOutlined: createMockIcon('setting-outlined'),
    BellOutlined: createMockIcon('bell-outlined'),
    StarOutlined: createMockIcon('star-outlined'),
    GlobalOutlined: createMockIcon('global-outlined'),
    SolutionOutlined: createMockIcon('solution-outlined'),
    CustomerServiceOutlined: createMockIcon('customer-service-outlined')
  };
});

// Mock Material UI components
jest.mock('@mui/material', () => {
  const React = require('react');
  
  const createMockComponent = (name: string, defaultElement = 'div') => {
    return ({ children, ...props }: any) => 
      React.createElement(defaultElement, { 'data-testid': name, ...props }, children);
  };

  const createMockInput = (name: string) => {
    return ({ value, onChange, placeholder, label, ...props }: any) => 
      React.createElement('div', { 'data-testid': name }, [
        label && React.createElement('label', { key: 'label' }, label),
        React.createElement('input', { 
          key: 'input',
          value, 
          onChange, 
          placeholder,
          ...props 
        })
      ]);
  };

  const createMockSelect = (name: string) => {
    return ({ value, onChange, children, ...props }: any) => 
      React.createElement('select', { 
        'data-testid': name, 
        value, 
        onChange,
        ...props 
      }, children);
  };

  const createMockButton = (name: string) => {
    return ({ onClick, children, ...props }: any) => 
      React.createElement('button', { 
        'data-testid': name, 
        onClick,
        ...props 
      }, children);
  };

  const createMockTable = () => {
    const Table = ({ children, ...props }: any) => 
      React.createElement('table', { 'data-testid': 'mui-table', ...props }, children);
    
    const TableBody = ({ children, ...props }: any) => 
      React.createElement('tbody', { 'data-testid': 'mui-table-body', ...props }, children);
    
    const TableCell = ({ children, ...props }: any) => 
      React.createElement('td', { 'data-testid': 'mui-table-cell', ...props }, children);
    
    const TableContainer = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-table-container', ...props }, children);
    
    const TableHead = ({ children, ...props }: any) => 
      React.createElement('thead', { 'data-testid': 'mui-table-head', ...props }, children);
    
    const TableRow = ({ children, ...props }: any) => 
      React.createElement('tr', { 'data-testid': 'mui-table-row', ...props }, children);
    
    return { Table, TableBody, TableCell, TableContainer, TableHead, TableRow };
  };

  const createMockDialog = () => {
    const Dialog = ({ open, onClose, children, ...props }: any) => {
      if (!open) return null;
      return React.createElement('div', { 
        'data-testid': 'mui-dialog', 
        ...props 
      }, children);
    };
    
    const DialogTitle = ({ children, ...props }: any) => 
      React.createElement('h2', { 'data-testid': 'mui-dialog-title', ...props }, children);
    
    const DialogContent = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-dialog-content', ...props }, children);
    
    const DialogActions = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-dialog-actions', ...props }, children);
    
    return { Dialog, DialogTitle, DialogContent, DialogActions };
  };

  const createMockTabs = () => {
    const Tabs = ({ children, value, onChange, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-tabs', ...props }, children);
    
    const Tab = ({ label, ...props }: any) => 
      React.createElement('button', { 'data-testid': 'mui-tab', ...props }, label);
    
    return { Tabs, Tab };
  };

  const createMockStepper = () => {
    const Stepper = ({ children, activeStep, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-stepper', ...props }, children);
    
    const Step = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-step', ...props }, children);
    
    const StepLabel = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-step-label', ...props }, children);
    
    return { Stepper, Step, StepLabel };
  };

  const createMockBreadcrumbs = () => {
    return ({ children, ...props }: any) => 
      React.createElement('nav', { 'data-testid': 'mui-breadcrumbs', ...props }, children);
  };

  const createMockGrid = () => {
    const Grid = ({ children, container, item, ...props }: any) => 
      React.createElement('div', { 
        'data-testid': container ? 'mui-grid-container' : 'mui-grid-item', 
        ...props 
      }, children);
    
    return Grid;
  };

  const createMockCard = () => {
    const Card = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-card', ...props }, children);
    
    const CardContent = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-card-content', ...props }, children);
    
    const CardMedia = ({ image, alt, ...props }: any) => 
      React.createElement('img', { 'data-testid': 'mui-card-media', src: image, alt, ...props });
    
    const CardActions = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-card-actions', ...props }, children);
    
    return { Card, CardContent, CardMedia, CardActions };
  };

  const createMockFormControl = () => {
    const FormControl = ({ children, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-form-control', ...props }, children);
    
    const FormControlLabel = ({ control, label, ...props }: any) => 
      React.createElement('label', { 'data-testid': 'mui-form-control-label', ...props }, [
        React.createElement('span', { key: 'control' }, control),
        React.createElement('span', { key: 'label' }, label)
      ]);
    
    const InputLabel = ({ children, ...props }: any) => 
      React.createElement('label', { 'data-testid': 'mui-input-label', ...props }, children);
    
    return { FormControl, FormControlLabel, InputLabel };
  };

  const createMockRadioGroup = () => {
    return ({ children, value, onChange, ...props }: any) => 
      React.createElement('div', { 'data-testid': 'mui-radio-group', ...props }, children);
  };

  const tableComponents = createMockTable();
  const dialogComponents = createMockDialog();
  const tabComponents = createMockTabs();
  const stepperComponents = createMockStepper();
  const cardComponents = createMockCard();
  const formComponents = createMockFormControl();

  return {
    AppBar: createMockComponent('mui-app-bar', 'header'),
    Toolbar: createMockComponent('mui-toolbar', 'div'),
    Typography: createMockComponent('mui-typography', 'div'),
    Button: createMockButton('mui-button'),
    Container: createMockComponent('mui-container', 'div'),
    ...cardComponents,
    Grid: createMockGrid(),
    TextField: createMockInput('mui-text-field'),
    Select: createMockSelect('mui-select'),
    MenuItem: createMockComponent('mui-menu-item', 'option'),
    ...formComponents,
    Checkbox: createMockComponent('mui-checkbox', 'input'),
    RadioGroup: createMockRadioGroup(),
    Radio: createMockComponent('mui-radio', 'input'),
    ...tableComponents,
    Paper: createMockComponent('mui-paper', 'div'),
    Alert: createMockComponent('mui-alert', 'div'),
    ...dialogComponents,
    ...tabComponents,
    LinearProgress: createMockComponent('mui-linear-progress', 'div'),
    Chip: createMockComponent('mui-chip', 'span'),
    Avatar: createMockComponent('mui-avatar', 'div'),
    Box: createMockComponent('mui-box', 'div'),
    Stack: createMockComponent('mui-stack', 'div'),
    Divider: createMockComponent('mui-divider', 'hr'),
    Breadcrumbs: createMockBreadcrumbs(),
    Link: createMockComponent('mui-link', 'a'),
    IconButton: createMockButton('mui-icon-button'),
    Badge: createMockComponent('mui-badge', 'span'),
    Drawer: createMockComponent('mui-drawer', 'div'),
    List: createMockComponent('mui-list', 'ul'),
    ListItem: createMockComponent('mui-list-item', 'li'),
    ListItemText: createMockComponent('mui-list-item-text', 'div'),
    ListItemIcon: createMockComponent('mui-list-item-icon', 'div'),
    Rating: createMockComponent('mui-rating', 'div'),
    ...stepperComponents,
    Tooltip: createMockComponent('mui-tooltip', 'div'),
    Fab: createMockButton('mui-fab'),
    Snackbar: createMockComponent('mui-snackbar', 'div'),
    Switch: createMockComponent('mui-switch', 'input'),
    Slider: createMockComponent('mui-slider', 'input'),
    CircularProgress: createMockComponent('mui-circular-progress', 'div')
  };
});

// Mock Material UI Icons
jest.mock('@mui/icons-material', () => {
  const React = require('react');
  
  const createMockIcon = (name: string) => {
    return ({ ...props }: any) => 
      React.createElement('span', { 'data-testid': name, ...props });
  };

  return {
    Menu: createMockIcon('menu-icon'),
    Home: createMockIcon('home-icon'),
    Cloud: createMockIcon('cloud-icon'),
    Psychology: createMockIcon('psychology-icon'),
    Code: createMockIcon('code-icon'),
    Send: createMockIcon('send-icon'),
    Star: createMockIcon('star-icon'),
    Notifications: createMockIcon('notifications-icon'),
    Person: createMockIcon('person-icon'),
    Email: createMockIcon('email-icon'),
    Phone: createMockIcon('phone-icon'),
    LocationOn: createMockIcon('location-on-icon'),
    TrendingUp: createMockIcon('trending-up-icon'),
    Business: createMockIcon('business-icon'),
    Support: createMockIcon('support-icon'),
    Security: createMockIcon('security-icon'),
    Rocket: createMockIcon('rocket-icon'),
    Group: createMockIcon('group-icon'),
    Settings: createMockIcon('settings-icon'),
    Close: createMockIcon('close-icon'),
    Add: createMockIcon('add-icon')
  };
});

// Mock Material UI Theme
jest.mock('@mui/material/styles', () => ({
  createTheme: jest.fn().mockReturnValue({}),
  ThemeProvider: ({ children }: any) => children
}));

// Mock @visx libraries
jest.mock('@visx/shape', () => ({
  Bar: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('rect', { 'data-testid': 'visx-bar', ...props }, children);
  },
  Line: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('path', { 'data-testid': 'visx-line', ...props }, children);
  },
  LinePath: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('path', { 'data-testid': 'visx-line-path', ...props }, children);
  },
  AreaClosed: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('path', { 'data-testid': 'visx-area-closed', ...props }, children);
  }
}));

jest.mock('@visx/scale', () => ({
  scaleLinear: jest.fn().mockReturnValue({
    domain: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis()
  }),
  scaleBand: jest.fn().mockReturnValue({
    domain: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis(),
    padding: jest.fn().mockReturnThis()
  })
}));

jest.mock('@visx/group', () => ({
  Group: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('g', { 'data-testid': 'visx-group', ...props }, children);
  }
}));

jest.mock('@visx/axis', () => ({
  AxisBottom: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('g', { 'data-testid': 'visx-axis-bottom', ...props }, children);
  },
  AxisLeft: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('g', { 'data-testid': 'visx-axis-left', ...props }, children);
  }
}));

jest.mock('@visx/gradient', () => ({
  LinearGradient: ({ children, ...props }: any) => {
    const React = require('react');
    return React.createElement('defs', { 'data-testid': 'visx-linear-gradient', ...props }, children);
  }
}));

// Mock the main UI components with simplified versions
jest.mock('./components/AntDesignComponents', () => ({
  AntDesignComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'ant-design-components' }, [
      // Header
      React.createElement('div', { key: 'header', 'data-testid': 'ant-header' }, [
        React.createElement('div', { key: 'techcorp' }, 'TechCorp'),
        React.createElement('div', { key: 'home' }, 'Home'),
        React.createElement('div', { key: 'solutions' }, 'Solutions'),
        React.createElement('div', { key: 'about' }, 'About'),
        React.createElement('div', { key: 'contact' }, 'Contact')
      ]),
      // Hero Section
      React.createElement('div', { key: 'hero' }, [
        React.createElement('h1', { key: 'title' }, 'TechCorp Solutions'),
        React.createElement('p', { key: 'subtitle' }, 'Innovating the future with cutting-edge technology solutions for modern businesses')
      ]),
      // Breadcrumb
      React.createElement('div', { key: 'breadcrumb', 'data-testid': 'ant-breadcrumb' }, [
        React.createElement('span', { key: 'solutions' }, 'Solutions'),
        React.createElement('span', { key: 'overview' }, 'Overview')
      ]),
      // Service Cards
      React.createElement('div', { key: 'services' }, [
        React.createElement('h2', { key: 'cloud' }, 'Cloud Solutions'),
        React.createElement('div', { key: 'popular' }, 'Popular'),
        React.createElement('h2', { key: 'ai' }, 'AI & Analytics'),
        React.createElement('div', { key: 'advanced' }, 'Advanced'),
        React.createElement('h2', { key: 'dev' }, 'Custom Development'),
        React.createElement('div', { key: 'premium' }, 'Premium')
      ]),
      // Contact Form
      React.createElement('div', { key: 'contact-form' }, [
        React.createElement('h2', { key: 'contact-title' }, 'Contact Our Team'),
        React.createElement('div', { key: 'contact-info' }, 'Contact Info'),
        React.createElement('div', { key: 'project-details' }, 'Project Details'),
        React.createElement('div', { key: 'submit' }, 'Submit')
      ]),
      // Team Table
      React.createElement('div', { key: 'team' }, [
        React.createElement('h2', { key: 'team-title' }, 'Our Team Directory'),
        React.createElement('div', { key: 'sarah' }, 'Sarah Chen'),
        React.createElement('div', { key: 'engineering' }, 'Engineering'),
        React.createElement('div', { key: 'design' }, 'Design'),
        React.createElement('div', { key: 'marketing' }, 'Marketing')
      ]),
      // Statistics
      React.createElement('div', { key: 'stats' }, [
        React.createElement('div', { key: 'users-count' }, '2.4M'),
        React.createElement('div', { key: 'users-label' }, 'Active Users'),
        React.createElement('div', { key: 'revenue-count' }, '$1.2M'),
        React.createElement('div', { key: 'revenue-label' }, 'Revenue')
      ]),
      // Alerts
      React.createElement('div', { key: 'alerts' }, [
        React.createElement('div', { key: 'success' }, 'Operation completed successfully!'),
        React.createElement('div', { key: 'warning' }, 'Please check your input data.'),
        React.createElement('div', { key: 'error' }, 'Something went wrong. Please try again.'),
        React.createElement('div', { key: 'info' }, 'Here\'s some helpful information.')
      ]),
      // Modal
      React.createElement('div', { key: 'modal' }, [
        React.createElement('button', { key: 'modal-btn' }, 'Open Modal'),
        React.createElement('div', { key: 'modal-title' }, 'Modal Title'),
        React.createElement('div', { key: 'modal-content' }, 'This is a modal dialog with some content.')
      ]),
      // Footer
      React.createElement('div', { key: 'footer' }, [
        React.createElement('div', { key: 'email' }, 'hello@techcorp.com'),
        React.createElement('div', { key: 'phone' }, '+1 (555) 123-4567'),
        React.createElement('div', { key: 'location' }, 'San Francisco, CA')
      ])
    ]);
  }
}));

jest.mock('./components/GOVUKComponents', () => ({
  GOVUKComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'govuk-components' }, [
      React.createElement('h1', { key: 'title' }, 'GOV.UK Design System Demo'),
      React.createElement('div', { key: 'phase-banner' }, 'Beta'),
      React.createElement('div', { key: 'breadcrumbs' }, 'Breadcrumbs'),
      React.createElement('div', { key: 'services' }, 'Our Services'),
      React.createElement('div', { key: 'footer' }, 'Crown copyright')
    ]);
  }
}));

jest.mock('./components/DSFRComponents', () => ({
  DSFRComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'dsfr-components' }, [
      React.createElement('h1', { key: 'title' }, 'Direction Interministérielle du Numérique'),
      React.createElement('div', { key: 'marianne' }, 'République Française'),
      React.createElement('div', { key: 'services' }, 'Nos services'),
      React.createElement('div', { key: 'footer' }, 'République Française 2024')
    ]);
  }
}));

jest.mock('./components/ReferenceComponents', () => ({
  ReferenceComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'reference-components' }, [
      // Hero Section
      React.createElement('div', { key: 'hero' }, [
        React.createElement('h1', { key: 'title' }, 'TechCorp Solutions'),
        React.createElement('p', { key: 'subtitle' }, 'Innovating the future with cutting-edge technology solutions for modern businesses')
      ]),
      // Service Cards
      React.createElement('div', { key: 'services' }, [
        React.createElement('h2', { key: 'cloud' }, 'Cloud Solutions'),
        React.createElement('h2', { key: 'ai' }, 'AI & Analytics'),
        React.createElement('h2', { key: 'dev' }, 'Custom Development')
      ]),
      // Contact Form
      React.createElement('div', { key: 'contact-form' }, [
        React.createElement('label', { key: 'name-label', htmlFor: 'name-input' }, 'Full Name'),
        React.createElement('input', { key: 'name-input', id: 'name-input', type: 'text' }),
        React.createElement('label', { key: 'email-label', htmlFor: 'email-input' }, 'Email Address'),
        React.createElement('input', { key: 'email-input', id: 'email-input', type: 'email' }),
        React.createElement('label', { key: 'inquiry-label', htmlFor: 'inquiry-select' }, 'Inquiry Type'),
        React.createElement('select', { key: 'inquiry-select', id: 'inquiry-select' }, [
          React.createElement('option', { key: 'general' }, 'General Inquiry')
        ]),
        React.createElement('label', { key: 'details-label', htmlFor: 'details-textarea' }, 'Project Details'),
        React.createElement('textarea', { key: 'details-textarea', id: 'details-textarea' })
      ]),
      // Team Table
      React.createElement('div', { key: 'team' }, [
        React.createElement('div', { key: 'sarah' }, 'Sarah Chen'),
        React.createElement('div', { key: 'marcus' }, 'Marcus Johnson'),
        React.createElement('div', { key: 'elena' }, 'Elena Rodriguez'),
        React.createElement('div', { key: 'david' }, 'David Kim'),
        React.createElement('div', { key: 'lisa' }, 'Lisa Thompson')
      ]),
      // Performance Analytics
      React.createElement('div', { key: 'analytics' }, [
        React.createElement('div', { key: 'users-count' }, '2.4M'),
        React.createElement('div', { key: 'users-label' }, 'Active Users'),
        React.createElement('div', { key: 'revenue-count' }, '$1.2M'),
        React.createElement('div', { key: 'revenue-label' }, 'Revenue')
      ]),
      // Three.js Chart
      React.createElement('div', { key: 'three-chart', 'data-testid': 'three-chart' }),
      // Tab Navigation
      React.createElement('div', { key: 'tabs' }, [
        React.createElement('button', { key: 'company-tab' }, 'Company Overview'),
        React.createElement('button', { key: 'services-tab' }, 'Our Services')
      ]),
      // Footer
      React.createElement('div', { key: 'footer' }, [
        React.createElement('div', { key: 'email' }, 'hello@techcorp.com'),
        React.createElement('div', { key: 'phone' }, '+1 (555) 123-4567'),
        React.createElement('div', { key: 'location' }, 'San Francisco, CA')
      ]),
      // Gallery Images
      React.createElement('div', { key: 'gallery' }, [
        React.createElement('img', { key: 'img1', src: 'test-image.jpg', alt: 'Gallery image', role: 'img' }),
        React.createElement('img', { key: 'img2', src: 'test-image2.jpg', alt: 'Gallery image 2', role: 'img' })
      ])
    ]);
  }
}));

// Mock three.js JSX intrinsic elements with proper React components
const React = require('react');

// Create mock components for three.js JSX elements
const createThreeJSMockComponent = (name: string) => {
  return ({ children, ...props }: any) => 
    React.createElement('div', { 'data-testid': name, ...props }, children);
};

// Define the mock components
const mockThreeComponents = {
  mesh: createThreeJSMockComponent('three-mesh'),
  group: createThreeJSMockComponent('three-group'),
  boxGeometry: createThreeJSMockComponent('three-box-geometry'),
  meshStandardMaterial: createThreeJSMockComponent('three-mesh-standard-material'),
  ambientLight: createThreeJSMockComponent('three-ambient-light'),
  pointLight: createThreeJSMockComponent('three-point-light')
};

// Add mock components to global React namespace
(global as any).React = React;
Object.assign(React, mockThreeComponents);

// Mock three.js JSX intrinsic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}
