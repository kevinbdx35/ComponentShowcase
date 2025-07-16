import { CompanyData } from '../types/shared';

export const companyData: CompanyData = {
  name: "TechCorp Solutions",
  tagline: "Innovating the future with cutting-edge technology solutions for modern businesses",
  description: "Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals.",
  
  services: [
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations with enterprise-grade security.',
      icon: '☁️',
      tag: 'Popular',
      tagColor: 'blue'
    },
    {
      id: 'ai-analytics',
      title: 'AI & Analytics',
      description: 'Harness the power of artificial intelligence and data analytics for competitive advantage and intelligent automation.',
      icon: '🧠',
      tag: 'Advanced',
      tagColor: 'purple'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business requirements and workflows with full-stack expertise.',
      icon: '💻',
      tag: 'Premium',
      tagColor: 'green'
    }
  ],
  
  employees: [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' },
    { id: 4, name: 'David Kim', email: 'david.kim@techcorp.com', status: 'Active', department: 'Sales' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@techcorp.com', status: 'Inactive', department: 'HR' }
  ],
  
  metrics: [
    {
      id: 'active-users',
      value: '2.4M',
      label: 'Active Users',
      trend: '+12%',
      trendDirection: 'up'
    },
    {
      id: 'revenue',
      value: '$1.2M',
      label: 'Revenue',
      trend: '+8%',
      trendDirection: 'up'
    },
    {
      id: 'projects',
      value: '127',
      label: 'Projects',
      trend: '+15',
      trendDirection: 'up'
    },
    {
      id: 'uptime',
      value: '98.5%',
      label: 'Uptime',
      trend: '+0.3%',
      trendDirection: 'up'
    }
  ],
  
  tabs: [
    {
      label: 'Company Overview',
      content: 'Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals. Our expertise spans cloud computing, AI/ML, and custom software development.'
    },
    {
      label: 'Our Services',
      content: 'We provide comprehensive technology solutions including cloud infrastructure, AI analytics, custom software development, and digital transformation consulting.'
    },
    {
      label: 'Team',
      content: 'We are a diverse team of passionate engineers, designers, and strategists committed to delivering exceptional results for our clients.'
    },
    {
      label: 'Contact',
      content: 'Ready to transform your business? Contact us today to discuss your project requirements and see how we can help you succeed.'
    }
  ],
  
  alerts: [
    {
      id: 'success-alert',
      type: 'success',
      title: 'Operation Successful',
      message: 'Operation completed successfully!',
      dismissible: true
    },
    {
      id: 'warning-alert',
      type: 'warning',
      title: 'Warning',
      message: 'Please check your input data.',
      dismissible: true
    },
    {
      id: 'error-alert',
      type: 'error',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      dismissible: true
    },
    {
      id: 'info-alert',
      type: 'info',
      title: 'Information',
      message: 'Here\'s some helpful information.',
      dismissible: true
    }
  ],
  
  gallery: [
    {
      id: 'workspace',
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop',
      alt: 'Modern office workspace',
      title: 'Modern Workspace',
      description: 'Collaborative open office design'
    },
    {
      id: 'collaboration',
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      alt: 'Team collaboration',
      title: 'Team Collaboration',
      description: 'Innovation through teamwork'
    },
    {
      id: 'technology',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      alt: 'Technology development',
      title: 'Technology Development',
      description: 'Cutting-edge development tools'
    }
  ]
};

export const formCategories = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Cloud Solutions', value: 'cloud' },
  { label: 'AI & Analytics', value: 'ai' },
  { label: 'Custom Development', value: 'development' },
  { label: 'Technical Support', value: 'support' }
];

export const budgetRanges = [
  { label: '$10K - $25K', value: '1' },
  { label: '$25K - $50K', value: '2' },
  { label: '$50K - $100K', value: '3' },
  { label: '$100K - $250K', value: '4' },
  { label: '$250K+', value: '5' }
];

export const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Overview' }
];