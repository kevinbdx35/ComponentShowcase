import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
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
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  LinearProgress,
  Chip,
  Avatar,
  Box,
  Stack,
  Divider,
  Breadcrumbs,
  Link,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Rating,
  Stepper,
  Step,
  StepLabel,
  Tooltip,
  Fab,
  Snackbar,
  Switch,
  Slider,
  CircularProgress
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Cloud as CloudIcon,
  Psychology as PsychologyIcon,
  Code as CodeIcon,
  Send as SendIcon,
  Star as StarIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
  Support as SupportIcon,
  Security as SecurityIcon,
  Rocket as RocketIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
  Close as CloseIcon,
  Add as AddIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThreeChart } from './ThreeChart';
import { MaterialUIVisxChart } from './VisxChartVariants';

// Material Design 3 Theme (Material You)
const theme = createTheme({
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
    tertiary: {
      main: '#7d5260',
      light: '#a87c89',
      dark: '#5a3644'
    },
    success: {
      main: '#006e26',
      light: '#4da855',
      dark: '#004d1a'
    },
    warning: {
      main: '#7d5260',
      light: '#a87c89',
      dark: '#5a3644'
    },
    error: {
      main: '#ba1a1a',
      light: '#ff5449',
      dark: '#93000a'
    },
    background: {
      default: '#fef7ff',
      paper: '#ffffff'
    },
    surface: {
      main: '#fef7ff',
      light: '#f7f2fa',
      dark: '#f0ebf4'
    },
    text: {
      primary: '#1c1b1f',
      secondary: '#49454f'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 400,
      lineHeight: 1.3
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em'
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em'
    }
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
          fontWeight: 500,
          fontSize: '0.875rem',
          letterSpacing: '0.0125em'
        },
        contained: {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)'
        }
      }
    }
  }
});

interface FormData {
  name: string;
  email: string;
  message: string;
  category: string;
  newsletter: boolean;
  budget: number;
  rating: number;
}

export const MaterialUIComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    budget: 50000,
    rating: 5
  });

  const employeeData = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' },
    { id: 4, name: 'David Kim', email: 'david.kim@techcorp.com', status: 'Active', department: 'Sales' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@techcorp.com', status: 'Inactive', department: 'HR' }
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSnackbarOpen(true);
    console.log('Form submitted:', formData);
  };

  const tabContent = [
    {
      label: 'Company Overview',
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>About TechCorp Solutions</Typography>
          <Typography variant="body1" paragraph>
            Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, 
            helping businesses leverage technology to achieve their goals. Our expertise spans cloud 
            computing, AI/ML, and custom software development.
          </Typography>
        </Box>
      )
    },
    {
      label: 'Our Services',
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>Our Services</Typography>
          <List>
            <ListItem>
              <ListItemIcon><CloudIcon /></ListItemIcon>
              <ListItemText primary="Cloud Infrastructure & DevOps" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary="Custom Software Development" />
            </ListItem>
            <ListItem>
              <ListItemIcon><PsychologyIcon /></ListItemIcon>
              <ListItemText primary="AI & Machine Learning Solutions" />
            </ListItem>
            <ListItem>
              <ListItemIcon><BusinessIcon /></ListItemIcon>
              <ListItemText primary="Digital Transformation Consulting" />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      label: 'Team',
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>Our Team</Typography>
          <Typography variant="body1" paragraph>
            We're a diverse team of passionate engineers, designers, and strategists committed to 
            delivering exceptional results for our clients.
          </Typography>
        </Box>
      )
    },
    {
      label: 'Contact',
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>Get in Touch</Typography>
          <Typography variant="body1" paragraph>
            Ready to transform your business? Contact us today to discuss your project requirements 
            and see how we can help you succeed.
          </Typography>
        </Box>
      )
    }
  ];

  const drawerItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Solutions', icon: <BusinessIcon /> },
    { text: 'Team', icon: <GroupIcon /> },
    { text: 'Contact', icon: <SupportIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> }
  ];

  const steps = ['Contact Information', 'Project Details', 'Review & Submit'];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, backgroundColor: 'background.default', minHeight: '100vh' }}>
        {/* App Bar */}
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'primary.main' }} data-testid="mui-header">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
              TechCorp Solutions
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body2" color="inherit">Home</Typography>
              <Typography variant="body2" color="inherit">Solutions</Typography>
              <Typography variant="body2" color="inherit">About</Typography>
              <Typography variant="body2" color="inherit">Contact</Typography>
              <Badge badgeContent={4} color="error">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Badge>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <PersonIcon />
              </Avatar>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {drawerItems.map((item, index) => (
                <ListItem key={item.text} onClick={() => setDrawerOpen(false)} sx={{ cursor: 'pointer' }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #6750a4 0%, #9a82db 100%)',
            color: 'white',
            py: 12,
            mt: 8,
            textAlign: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h1" component="h1" gutterBottom>
              TechCorp Solutions
            </Typography>
            <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }}>
              Innovating the future with cutting-edge technology solutions for modern businesses
            </Typography>
            <Stack direction="row" spacing={3} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<RocketIcon />}
                sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<BusinessIcon />}
                sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'grey.300' } }}
              >
                Learn More
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Breadcrumb */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }} data-testid="mui-breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
              Home
            </Link>
            <Link underline="hover" color="inherit">
              Solutions
            </Link>
            <Typography color="text.primary">Overview</Typography>
          </Breadcrumbs>

          {/* Navigation Tabs */}
          <Card sx={{ mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={(event, newValue) => setActiveTab(newValue)}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              {tabContent.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>
            <CardContent>
              {tabContent[activeTab].content}
            </CardContent>
          </Card>

          {/* Services Cards */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2" component="h2" align="center" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              Comprehensive technology solutions designed to accelerate your digital transformation
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    sx={{
                      height: 140,
                      background: 'linear-gradient(135deg, #6750a4 0%, #36cfc9 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CloudIcon sx={{ fontSize: 60, color: 'white' }} />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="h3" sx={{ flexGrow: 1 }}>
                        Cloud Solutions
                      </Typography>
                      <Chip label="Popular" color="primary" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Scalable cloud infrastructure and migration services to modernize your business 
                      operations with enterprise-grade security.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" startIcon={<RocketIcon />} fullWidth>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    sx={{
                      height: 140,
                      background: 'linear-gradient(135deg, #722ed1 0%, #eb2f96 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PsychologyIcon sx={{ fontSize: 60, color: 'white' }} />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="h3" sx={{ flexGrow: 1 }}>
                        AI & Analytics
                      </Typography>
                      <Chip label="Advanced" color="secondary" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Harness the power of artificial intelligence and data analytics for competitive 
                      advantage and intelligent automation.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" startIcon={<StarIcon />} fullWidth>
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    sx={{
                      height: 140,
                      background: 'linear-gradient(135deg, #52c41a 0%, #faad14 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 60, color: 'white' }} />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="h3" sx={{ flexGrow: 1 }}>
                        Custom Development
                      </Typography>
                      <Chip label="Premium" color="success" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Bespoke software solutions tailored to your unique business requirements and 
                      workflows with full-stack expertise.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" startIcon={<SendIcon />} color="success" fullWidth>
                      Get Quote
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Contact Form */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h2" component="h2" align="center" gutterBottom>
                Contact Our Team
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" paragraph>
                Ready to start your next project? Get in touch with our experts today.
              </Typography>
              
              <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Inquiry Type</InputLabel>
                      <Select
                        value={formData.category}
                        label="Inquiry Type"
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <MenuItem value="general">General Inquiry</MenuItem>
                        <MenuItem value="cloud">Cloud Solutions</MenuItem>
                        <MenuItem value="ai">AI & Analytics</MenuItem>
                        <MenuItem value="development">Custom Development</MenuItem>
                        <MenuItem value="support">Technical Support</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Project Details"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Project Budget Range
                    </Typography>
                    <Slider
                      value={formData.budget}
                      onChange={(e, value) => setFormData({ ...formData, budget: value as number })}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `$${value.toLocaleString()}`}
                      min={10000}
                      max={500000}
                      step={10000}
                      marks={[
                        { value: 10000, label: '$10K' },
                        { value: 100000, label: '$100K' },
                        { value: 500000, label: '$500K' }
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Service Rating
                    </Typography>
                    <Rating
                      value={formData.rating}
                      onChange={(e, value) => setFormData({ ...formData, rating: value || 0 })}
                      size="large"
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Rate our expected service quality
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.newsletter}
                          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                        />
                      }
                      label="I'd like to receive updates about TechCorp's latest innovations and insights"
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button variant="outlined" size="large">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>

          {/* Team Table */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h2" component="h2" gutterBottom>
                Our Team Directory
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employeeData.map((employee) => (
                      <TableRow key={employee.id} hover>
                        <TableCell>
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                              {employee.name.split(' ').map(n => n[0]).join('')}
                            </Avatar>
                            <Typography variant="body1" fontWeight="medium">
                              {employee.name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {employee.email}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip label={employee.department} variant="outlined" size="small" />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={employee.status}
                            color={
                              employee.status === 'Active' ? 'success' :
                              employee.status === 'On Leave' ? 'warning' : 'error'
                            }
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="text" size="small">
                            View Profile
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Company Gallery */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h2" component="h2" align="center" gutterBottom>
                Our Work Environment
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop"
                      alt="Modern office workspace"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Modern Workspace
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Collaborative open office design
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
                      alt="Team collaboration"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Team Collaboration
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Innovation through teamwork
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
                      alt="Technology development"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Technology Development
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Cutting-edge development tools
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Performance Dashboard */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h2" component="h2" gutterBottom>
                Company Performance Analytics
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card variant="outlined">
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" color="primary.main" gutterBottom>
                        2.4M
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        Active Users
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                        +12% this month
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card variant="outlined">
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" color="primary.main" gutterBottom>
                        $1.2M
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        Revenue
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                        +8% this quarter
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card variant="outlined">
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" color="primary.main" gutterBottom>
                        127
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        Projects
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                        +15 new this month
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card variant="outlined">
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" color="primary.main" gutterBottom>
                        98.5%
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        Uptime
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        <TrendingUpIcon sx={{ fontSize: 16, mr: 0.5 }} />
                        +0.3% improvement
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Revenue Growth (Interactive 3D)
                      </Typography>
                      <ThreeChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Performance Metrics (visx)
                      </Typography>
                      <MaterialUIVisxChart width={380} height={250} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        User Engagement Trend
                      </Typography>
                      <Stack spacing={2}>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Monthly Active Users
                          </Typography>
                          <LinearProgress variant="determinate" value={75} sx={{ height: 8 }} />
                        </Box>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Daily Engagement
                          </Typography>
                          <LinearProgress variant="determinate" value={60} color="success" sx={{ height: 8 }} />
                        </Box>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Session Duration
                          </Typography>
                          <LinearProgress variant="determinate" value={90} color="warning" sx={{ height: 8 }} />
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Alert severity="success" onClose={() => {}}>
              Operation completed successfully!
            </Alert>
            <Alert severity="warning" onClose={() => {}}>
              Please check your input data.
            </Alert>
            <Alert severity="error" onClose={() => {}}>
              Something went wrong. Please try again.
            </Alert>
            <Alert severity="info" onClose={() => {}}>
              Here's some helpful information.
            </Alert>
          </Stack>

          {/* Modal Button */}
          <Box sx={{ mb: 4 }}>
            <Button variant="contained" onClick={() => setShowDialog(true)}>
              Open Modal
            </Button>
            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
              <DialogTitle>Modal Title</DialogTitle>
              <DialogContent>
                <Typography>
                  This is a modal dialog with some content using Material Design 3 principles.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setShowDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowDialog(false)} variant="contained">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h5" color="primary.light" gutterBottom>
                  TechCorp Solutions
                </Typography>
                <Typography variant="body2" color="grey.300" paragraph>
                  Innovating the future with cutting-edge technology solutions for modern businesses.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Services
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="grey.300" underline="hover">
                    Cloud Solutions
                  </Link>
                  <Link href="#" color="grey.300" underline="hover">
                    AI & Analytics
                  </Link>
                  <Link href="#" color="grey.300" underline="hover">
                    Custom Development
                  </Link>
                  <Link href="#" color="grey.300" underline="hover">
                    Consulting
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <EmailIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2" color="grey.300">
                      hello@techcorp.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PhoneIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2" color="grey.300">
                      +1 (555) 123-4567
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOnIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2" color="grey.300">
                      San Francisco, CA
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3, bgcolor: 'grey.700' }} />
            <Typography variant="body2" color="grey.500" align="center">
              © 2024 TechCorp Solutions. All rights reserved.
            </Typography>
          </Container>
        </Box>

        {/* Floating Action Button */}
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={() => setSnackbarOpen(true)}
        >
          <AddIcon />
        </Fab>

        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="Message sent successfully!"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setSnackbarOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Box>
    </ThemeProvider>
  );
};