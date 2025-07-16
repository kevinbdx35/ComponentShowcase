import React, { useState } from 'react';
import {
  Pane,
  Button,
  Text,
  Heading,
  TextInput,
  Textarea,
  SelectMenu,
  Checkbox,
  RadioGroup,
  Table,
  Alert,
  Badge,
  Avatar,
  Dialog,
  Tablist,
  Tab,
  Card,
  Spinner,
  ProgressBar,
  Tooltip,
  Popover,
  Menu,
  Position,
  toaster
} from 'evergreen-ui';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';

interface FormData {
  name: string;
  email: string;
  message: string;
  category: string;
  newsletter: boolean;
  rating: number;
}

interface Employee {
  id: number;
  name: string;
  email: string;
  status: string;
  department: string;
}

export const EvergreenComponents: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    rating: 5
  });

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const employeeData: Employee[] = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@segment.com', status: 'Active', department: 'Engineering' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@segment.com', status: 'Active', department: 'Design' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena.r@segment.com', status: 'On Leave', department: 'Marketing' },
    { id: 4, name: 'David Kim', email: 'david.kim@segment.com', status: 'Active', department: 'Sales' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@segment.com', status: 'Inactive', department: 'Product' }
  ];

  const tabs = ['Company Overview', 'Our Services', 'Team', 'Contact'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toaster.success('Message sent successfully!', {
      description: 'We will get back to you within 24 hours.',
      duration: 5
    });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const categoryOptions = [
    { label: 'General Inquiry', value: 'general' },
    { label: 'Analytics Support', value: 'analytics' },
    { label: 'Data Integration', value: 'integration' },
    { label: 'Customer Success', value: 'success' },
    { label: 'Technical Support', value: 'technical' }
  ];

  const ratingOptions = [
    { label: '$10K - $25K', value: 1 },
    { label: '$25K - $50K', value: 2 },
    { label: '$50K - $100K', value: 3 },
    { label: '$100K - $250K', value: 4 },
    { label: '$250K+', value: 5 }
  ];

  return (
    <Pane background="tint1" minHeight="100vh">
      {/* Hero Section */}
      <Pane
        background="linear-gradient(135deg, #3366FF 0%, #1A4CFF 100%)"
        padding={80}
        textAlign="center"
        color="white"
      >
        <Pane maxWidth={800} margin="0 auto">
          <Heading 
            size={900} 
            color="white" 
            marginBottom={24}
            fontWeight={700}
          >
            Segment Customer Data Platform
          </Heading>
          <Text 
            size={500} 
            color="white" 
            marginBottom={40}
            opacity={0.9}
          >
            Collect, clean, and control your customer data. Build a unified view of your customers across every touchpoint.
          </Text>
          <Pane display="flex" justifyContent="center" gap={16} flexWrap="wrap">
            <Button 
              appearance="primary" 
              size="large"
              height={48}
              paddingX={32}
              background="white"
              color="#3366FF"
              fontWeight={600}
            >
              Start Free Trial
            </Button>
            <Button 
              appearance="minimal" 
              size="large"
              height={48}
              paddingX={32}
              color="white"
              border="2px solid white"
              fontWeight={600}
            >
              View Demo
            </Button>
          </Pane>
        </Pane>
      </Pane>

      <Pane maxWidth={1200} margin="0 auto" padding={32}>
        
        {/* Navigation Tabs */}
        <Pane marginBottom={48}>
          <Card background="white" padding={0} elevation={1}>
            <Tablist marginBottom={0}>
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  id={tab}
                  onSelect={() => setActiveTab(index)}
                  isSelected={activeTab === index}
                  aria-controls={`panel-${tab}`}
                  size={500}
                  paddingY={16}
                  paddingX={24}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
            <Pane padding={32} background="white">
              {activeTab === 0 && (
                <Pane>
                  <Heading size={600} marginBottom={16}>About Segment</Heading>
                  <Text size={400} lineHeight="1.6">
                    Founded in 2011, Segment is the world's leading customer data platform (CDP). 
                    We help businesses collect, clean, and control their customer data to build better customer experiences.
                  </Text>
                </Pane>
              )}
              {activeTab === 1 && (
                <Pane>
                  <Heading size={600} marginBottom={16}>Our Services</Heading>
                  <Text size={400} lineHeight="1.6">
                    • Customer Data Platform<br/>
                    • Real-time Data Collection<br/>
                    • Data Warehouse Integration<br/>
                    • Privacy & Compliance Tools<br/>
                    • Analytics & Insights
                  </Text>
                </Pane>
              )}
              {activeTab === 2 && (
                <Pane>
                  <Heading size={600} marginBottom={16}>Our Team</Heading>
                  <Text size={400} lineHeight="1.6">
                    We're a diverse team of engineers, designers, and data scientists 
                    passionate about helping businesses understand and act on their customer data.
                  </Text>
                </Pane>
              )}
              {activeTab === 3 && (
                <Pane>
                  <Heading size={600} marginBottom={16}>Get in Touch</Heading>
                  <Text size={400} lineHeight="1.6">
                    Ready to transform your customer data strategy? 
                    Contact our team to learn how Segment can help your business grow.
                  </Text>
                </Pane>
              )}
            </Pane>
          </Card>
        </Pane>

        {/* Services Cards */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>
            Our Platform Solutions
          </Heading>
          <Pane display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={24}>
            <Card background="white" padding={24} elevation={1}>
              <Heading size={600} color="#3366FF" marginBottom={16}>
                Data Collection
              </Heading>
              <Text size={400} color="muted" lineHeight="1.6" marginBottom={20}>
                Collect customer data from every touchpoint with our easy-to-implement SDKs and APIs.
              </Text>
              <Button appearance="primary" size="medium">
                Learn More
              </Button>
            </Card>
            <Card background="white" padding={24} elevation={1}>
              <Heading size={600} color="#3366FF" marginBottom={16}>
                Data Warehouse
              </Heading>
              <Text size={400} color="muted" lineHeight="1.6" marginBottom={20}>
                Send clean, structured data to your warehouse with automated transformations.
              </Text>
              <Button appearance="default" size="medium">
                Explore
              </Button>
            </Card>
            <Card background="white" padding={24} elevation={1}>
              <Heading size={600} color="#3366FF" marginBottom={16}>
                Real-time Analytics
              </Heading>
              <Text size={400} color="muted" lineHeight="1.6" marginBottom={20}>
                Get instant insights with real-time data streaming and analytics tools.
              </Text>
              <Button appearance="minimal" intent="success" size="medium">
                Get Started
              </Button>
            </Card>
          </Pane>
        </Pane>

        {/* Contact Form */}
        <Pane marginBottom={48}>
          <Card background="white" padding={40} elevation={1}>
            <Heading size={700} textAlign="center" marginBottom={16}>
              Contact Our Team
            </Heading>
            <Text size={400} color="muted" textAlign="center" marginBottom={32}>
              Ready to start your data journey? Get in touch with our customer success team.
            </Text>
            
            <Pane maxWidth={600} margin="0 auto">
              <form onSubmit={handleSubmit}>
                <Pane display="grid" gridTemplateColumns="1fr 1fr" gap={16} marginBottom={20}>
                  <Pane>
                    <Text size={400} fontWeight={500} marginBottom={8}>Full Name *</Text>
                    <TextInput
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      width="100%"
                    />
                  </Pane>
                  <Pane>
                    <Text size={400} fontWeight={500} marginBottom={8}>Email Address *</Text>
                    <TextInput
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      width="100%"
                    />
                  </Pane>
                </Pane>

                <Pane marginBottom={20}>
                  <Text size={400} fontWeight={500} marginBottom={8}>Inquiry Type</Text>
                  <SelectMenu
                    title="Select inquiry type"
                    options={categoryOptions}
                    selected={formData.category}
                    onSelect={(item) => setFormData({ ...formData, category: item.value as string })}
                  >
                    <Button>
                      {categoryOptions.find(opt => opt.value === formData.category)?.label || 'Select...'}
                    </Button>
                  </SelectMenu>
                </Pane>

                <Pane marginBottom={20}>
                  <Text size={400} fontWeight={500} marginBottom={8}>Project Details</Text>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your data needs, current challenges, and goals..."
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    width="100%"
                  />
                </Pane>

                <Pane marginBottom={20}>
                  <Text size={400} fontWeight={500} marginBottom={12}>Expected Budget Range</Text>
                  <RadioGroup
                    size={16}
                    value={formData.rating}
                    options={ratingOptions}
                    onChange={(value) => setFormData({ ...formData, rating: value })}
                  />
                </Pane>

                <Pane marginBottom={24}>
                  <Checkbox
                    label="I'd like to receive updates about Segment's latest features and insights"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  />
                </Pane>

                <Pane textAlign="center">
                  <Button 
                    type="submit"
                    appearance="primary" 
                    size="large"
                    height={48}
                    paddingX={32}
                    fontWeight={600}
                  >
                    Send Message
                  </Button>
                </Pane>
              </form>
            </Pane>
          </Card>
        </Pane>

        {/* Simple Cards */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>Platform Features</Heading>
          <Pane display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={24}>
            <Card background="white" padding={24} elevation={1}>
              <Heading size={500} marginBottom={12}>Real-time Data</Heading>
              <Text size={400} color="muted">
                Stream data in real-time to power instant personalization and timely customer experiences.
              </Text>
            </Card>
            <Card background="white" padding={24} elevation={1}>
              <Heading size={500} marginBottom={12}>Privacy Controls</Heading>
              <Text size={400} color="muted">
                Built-in privacy controls help you comply with GDPR, CCPA, and other data regulations.
              </Text>
            </Card>
          </Pane>
        </Pane>

        {/* Team Table */}
        <Pane marginBottom={48}>
          <Card background="white" padding={32} elevation={1}>
            <Heading size={700} marginBottom={24}>Our Team Directory</Heading>
            <Table>
              <Table.Head>
                <Table.TextHeaderCell>Employee</Table.TextHeaderCell>
                <Table.TextHeaderCell>Email</Table.TextHeaderCell>
                <Table.TextHeaderCell>Department</Table.TextHeaderCell>
                <Table.TextHeaderCell>Status</Table.TextHeaderCell>
                <Table.TextHeaderCell>Actions</Table.TextHeaderCell>
              </Table.Head>
              <Table.Body>
                {employeeData.map((employee) => (
                  <Table.Row key={employee.id}>
                    <Table.TextCell>
                      <Pane display="flex" alignItems="center" gap={12}>
                        <Avatar 
                          name={employee.name} 
                          size={32}
                          color="blue"
                        />
                        <Text fontWeight={600}>{employee.name}</Text>
                      </Pane>
                    </Table.TextCell>
                    <Table.TextCell>
                      <Text color="muted">{employee.email}</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                      <Badge
                        color={
                          employee.department === 'Engineering' ? 'blue' :
                          employee.department === 'Design' ? 'purple' :
                          employee.department === 'Marketing' ? 'orange' :
                          employee.department === 'Sales' ? 'green' : 'neutral'
                        }
                      >
                        {employee.department}
                      </Badge>
                    </Table.TextCell>
                    <Table.TextCell>
                      <Badge
                        color={
                          employee.status === 'Active' ? 'green' :
                          employee.status === 'On Leave' ? 'yellow' : 'red'
                        }
                      >
                        {employee.status}
                      </Badge>
                    </Table.TextCell>
                    <Table.TextCell>
                      <Button appearance="minimal" size="small">
                        View Profile
                      </Button>
                    </Table.TextCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        </Pane>

        {/* Badges & Avatars */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>Team Roles & Status</Heading>
          <Pane display="flex" justifyContent="center" alignItems="center" gap={16} flexWrap="wrap" marginBottom={24}>
            <Badge color="blue">Lead Engineer</Badge>
            <Badge color="purple">Designer</Badge>
            <Badge color="orange">Marketing</Badge>
            <Badge color="green">Sales</Badge>
            <Badge color="red">Product</Badge>
          </Pane>
          <Pane display="flex" justifyContent="center" alignItems="center" gap={16} flexWrap="wrap">
            <Avatar name="Sarah Chen" size={40} color="blue" />
            <Avatar name="Marcus Johnson" size={40} color="green" />
            <Avatar name="Elena Rodriguez" size={40} color="orange" />
            <Avatar name="David Kim" size={40} color="purple" />
            <Avatar name="Lisa Thompson" size={40} color="red" />
          </Pane>
        </Pane>

        {/* Alerts & Notifications */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>System Alerts</Heading>
          <Pane maxWidth={600} margin="0 auto" display="flex" flexDirection="column" gap={16}>
            <Alert
              intent="success"
              title="Data Pipeline Active"
              marginBottom={12}
            >
              Your data pipeline is running smoothly. All integrations are operational.
            </Alert>
            <Alert
              intent="warning"
              title="Rate Limit Approaching"
              marginBottom={12}
            >
              You're approaching your monthly API rate limit. Consider upgrading your plan.
            </Alert>
            <Alert
              intent="danger"
              title="Integration Error"
              marginBottom={12}
            >
              There's an issue with your Salesforce integration. Please check your credentials.
            </Alert>
            <Alert
              intent="none"
              title="New Feature Available"
              marginBottom={12}
            >
              Real-time audience computation is now available in your workspace.
            </Alert>
          </Pane>
          {showAlert && (
            <Pane
              position="fixed"
              top={20}
              right={20}
              zIndex={1000}
            >
              <Alert
                intent="success"
                title="Message Sent!"
                hasIcon={true}
                onRemove={() => setShowAlert(false)}
              >
                We'll get back to you within 24 hours.
              </Alert>
            </Pane>
          )}
        </Pane>

        {/* Progress Bar */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>Implementation Progress</Heading>
          <Pane maxWidth={400} margin="0 auto">
            <Pane marginBottom={24}>
              <Pane display="flex" justifyContent="space-between" marginBottom={8}>
                <Text size={400} fontWeight={500}>Data Integration</Text>
                <Text size={400} color="muted">75%</Text>
              </Pane>
              <ProgressBar value={75} />
            </Pane>
            <Pane marginBottom={24}>
              <Pane display="flex" justifyContent="space-between" marginBottom={8}>
                <Text size={400} fontWeight={500}>Analytics Setup</Text>
                <Text size={400} color="muted">45%</Text>
              </Pane>
              <ProgressBar value={45} />
            </Pane>
          </Pane>
        </Pane>

        {/* Simple Tabs */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>Technology Stack</Heading>
          <Pane maxWidth={600} margin="0 auto">
            <Pane borderBottom="1px solid #E4E7EB" marginBottom={16}>
              <Pane display="flex" gap={0}>
                <Button
                  appearance="minimal"
                  paddingY={12}
                  paddingX={16}
                  borderBottom="2px solid #3366FF"
                  color="#3366FF"
                  fontWeight={600}
                >
                  Frontend
                </Button>
                <Button
                  appearance="minimal"
                  paddingY={12}
                  paddingX={16}
                  color="#696f8c"
                >
                  Backend
                </Button>
                <Button
                  appearance="minimal"
                  paddingY={12}
                  paddingX={16}
                  color="#696f8c"
                >
                  Database
                </Button>
              </Pane>
            </Pane>
            <Pane paddingY={16}>
              <Text size={400} lineHeight="1.6">
                React, TypeScript, Evergreen UI, and modern web technologies 
                power our customer data platform interface.
              </Text>
            </Pane>
          </Pane>
        </Pane>

        {/* Company Gallery */}
        <Pane marginBottom={48}>
          <Card background="white" padding={32} elevation={1}>
            <Heading size={700} textAlign="center" marginBottom={32}>
              Our Work Environment
            </Heading>
            <Pane display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={24}>
              <Pane position="relative" overflow="hidden" borderRadius={8}>
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop" 
                  alt="Modern office workspace" 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <Pane 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  background="linear-gradient(transparent, rgba(0,0,0,0.7))"
                  padding={32}
                  paddingTop={48}
                  color="white"
                >
                  <Heading size={500} color="white" marginBottom={4}>Modern Workspace</Heading>
                  <Text size={300} color="white" opacity={0.9}>Collaborative office design</Text>
                </Pane>
              </Pane>
              
              <Pane position="relative" overflow="hidden" borderRadius={8}>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop" 
                  alt="Team collaboration" 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <Pane 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  background="linear-gradient(transparent, rgba(0,0,0,0.7))"
                  padding={32}
                  paddingTop={48}
                  color="white"
                >
                  <Heading size={500} color="white" marginBottom={4}>Team Collaboration</Heading>
                  <Text size={300} color="white" opacity={0.9}>Innovation through teamwork</Text>
                </Pane>
              </Pane>
              
              <Pane position="relative" overflow="hidden" borderRadius={8}>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" 
                  alt="Data analytics" 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <Pane 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  background="linear-gradient(transparent, rgba(0,0,0,0.7))"
                  padding={32}
                  paddingTop={48}
                  color="white"
                >
                  <Heading size={500} color="white" marginBottom={4}>Data Analytics</Heading>
                  <Text size={300} color="white" opacity={0.9}>Insights that drive decisions</Text>
                </Pane>
              </Pane>
            </Pane>
          </Card>
        </Pane>

        {/* Performance Dashboard */}
        <Pane marginBottom={48}>
          <Card background="white" padding={32} elevation={1}>
            <Heading size={700} marginBottom={32}>Platform Performance Analytics</Heading>
            
            <Pane display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={24} marginBottom={40}>
              <Pane textAlign="center" padding={24} background="tint1" borderRadius={8}>
                <Heading size={800} color="#3366FF" marginBottom={8}>2.4M</Heading>
                <Text size={400} color="muted" fontWeight={600}>Events Processed</Text>
                <Text size={300} color="green" marginTop={4}>↗ +12% this month</Text>
              </Pane>
              <Pane textAlign="center" padding={24} background="tint1" borderRadius={8}>
                <Heading size={800} color="#3366FF" marginBottom={8}>150</Heading>
                <Text size={400} color="muted" fontWeight={600}>Active Sources</Text>
                <Text size={300} color="green" marginTop={4}>↗ +8% this quarter</Text>
              </Pane>
              <Pane textAlign="center" padding={24} background="tint1" borderRadius={8}>
                <Heading size={800} color="#3366FF" marginBottom={8}>50</Heading>
                <Text size={400} color="muted" fontWeight={600}>Destinations</Text>
                <Text size={300} color="green" marginTop={4}>↗ +15 new this month</Text>
              </Pane>
              <Pane textAlign="center" padding={24} background="tint1" borderRadius={8}>
                <Heading size={800} color="#3366FF" marginBottom={8}>99.9%</Heading>
                <Text size={400} color="muted" fontWeight={600}>Uptime</Text>
                <Text size={300} color="green" marginTop={4}>↗ +0.1% improvement</Text>
              </Pane>
            </Pane>

            <Pane display="grid" gridTemplateColumns="1fr 1fr" gap={32}>
              <Pane>
                <Heading size={600} marginBottom={16}>Data Pipeline Performance (3D)</Heading>
                <Pane border="1px solid #E4E7EB" borderRadius={8} overflow="hidden">
                  <ThreeChart />
                </Pane>
              </Pane>
              
              <Pane>
                <Heading size={600} marginBottom={16}>Real-time Analytics</Heading>
                <VanillaVisxChart width={380} height={250} />
              </Pane>
            </Pane>
          </Card>
        </Pane>

        {/* Modal Demo */}
        <Pane marginBottom={48}>
          <Heading size={700} textAlign="center" marginBottom={32}>Interactive Demo</Heading>
          <Pane textAlign="center">
            <Button 
              appearance="primary" 
              size="large"
              onClick={() => setShowModal(true)}
            >
              Launch Platform Demo
            </Button>
          </Pane>
          
          <Dialog
            isShown={showModal}
            title="Segment Platform Demo"
            onCloseComplete={() => setShowModal(false)}
            confirmLabel="Start Demo"
            cancelLabel="Close"
            onConfirm={() => {
              toaster.success('Demo started!', {
                description: 'Explore our customer data platform.',
                duration: 3
              });
              setShowModal(false);
            }}
          >
            <Pane>
              <Text size={400} marginBottom={16}>
                Experience the power of Segment's customer data platform in action. 
                This demo will show you how to:
              </Text>
              <Text size={400} marginBottom={8}>✓ Collect data from multiple sources</Text>
              <Text size={400} marginBottom={8}>✓ Transform and clean your data</Text>
              <Text size={400} marginBottom={8}>✓ Send data to your favorite tools</Text>
              <Text size={400} marginBottom={8}>✓ Build comprehensive customer profiles</Text>
              <Text size={400} marginBottom={16}>✓ Analyze customer behavior in real-time</Text>
              <Text size={400} color="muted">
                The demo includes sample data and interactive features to help you understand 
                how Segment can transform your customer data strategy.
              </Text>
            </Pane>
          </Dialog>
        </Pane>

      </Pane>
    </Pane>
  );
};