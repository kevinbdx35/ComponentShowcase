import React, { useState } from 'react';
import {
  MantineProvider,
  AppShell,
  Header,
  Navbar,
  Text,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Grid,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Table,
  Alert,
  Modal,
  Tabs,
  Progress,
  Badge,
  Avatar,
  Title,
  Divider,
  Breadcrumbs,
  Anchor,
  Burger,
  MediaQuery,
  Drawer,
  ActionIcon,
  Rating,
  Stepper,
  Tooltip,
  Notification,
  Affix,
  Transition,
  Switch,
  Slider,
  LoadingOverlay,
  Paper,
  Image,
  SimpleGrid,
  Spotlight,
  NavLink,
  Timeline,
  ThemeIcon,
  RingProgress,
  Skeleton,
  Blockquote
} from '@mantine/core';
import {
  IconHome,
  IconCloud,
  IconBrain,
  IconCode,
  IconMail,
  IconPhone,
  IconMapPin,
  IconTrendingUp,
  IconBuilding,
  IconHeadphones,
  IconShield,
  IconRocket,
  IconUsers,
  IconSettings,
  IconBell,
  IconStar,
  IconWorld,
  IconMenu2,
  IconX,
  IconPlus,
  IconCheck,
  IconAlertCircle,
  IconInfoCircle,
  IconExclamationMark
} from '@tabler/icons-react';
import { useDisclosure, useToggle } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { ThreeChart } from './ThreeChart';

interface FormData {
  name: string;
  email: string;
  message: string;
  category: string;
  newsletter: boolean;
  budget: number;
  rating: number;
}

export const MantineComponents: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [drawerOpened, { toggle: toggleDrawer }] = useToggle();
  const [activeTab, setActiveTab] = useState<string | null>('overview');
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

  const handleSubmit = () => {
    notifications.show({
      title: 'Success!',
      message: 'Your message has been sent successfully.',
      color: 'green',
      icon: <IconCheck size="1rem" />
    });
  };

  const navItems = [
    { icon: IconHome, label: 'Home', href: '/' },
    { icon: IconBuilding, label: 'Solutions', href: '/solutions' },
    { icon: IconUsers, label: 'Team', href: '/team' },
    { icon: IconHeadphones, label: 'Contact', href: '/contact' }
  ];

  const tabData = [
    {
      value: 'overview',
      label: 'Company Overview',
      content: (
        <Stack spacing="md">
          <Title order={3}>About TechCorp Solutions</Title>
          <Text>
            Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, 
            helping businesses leverage technology to achieve their goals. Our expertise spans cloud 
            computing, AI/ML, and custom software development.
          </Text>
        </Stack>
      )
    },
    {
      value: 'services',
      label: 'Our Services',
      content: (
        <Stack spacing="md">
          <Title order={3}>Our Services</Title>
          <Stack spacing="xs">
            <Group>
              <IconCloud size="1rem" />
              <Text>Cloud Infrastructure & DevOps</Text>
            </Group>
            <Group>
              <IconCode size="1rem" />
              <Text>Custom Software Development</Text>
            </Group>
            <Group>
              <IconBrain size="1rem" />
              <Text>AI & Machine Learning Solutions</Text>
            </Group>
            <Group>
              <IconBuilding size="1rem" />
              <Text>Digital Transformation Consulting</Text>
            </Group>
          </Stack>
        </Stack>
      )
    },
    {
      value: 'team',
      label: 'Team',
      content: (
        <Stack spacing="md">
          <Title order={3}>Our Team</Title>
          <Text>
            We're a diverse team of passionate engineers, designers, and strategists committed to 
            delivering exceptional results for our clients.
          </Text>
        </Stack>
      )
    },
    {
      value: 'contact',
      label: 'Contact',
      content: (
        <Stack spacing="md">
          <Title order={3}>Get in Touch</Title>
          <Text>
            Ready to transform your business? Contact us today to discuss your project requirements 
            and see how we can help you succeed.
          </Text>
        </Stack>
      )
    }
  ];

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: 'violet',
        colors: {
          brand: [
            '#f0f4ff',
            '#d9e2ff',
            '#b197fc',
            '#9775fa',
            '#845ef7',
            '#7950f2',
            '#7048e8',
            '#6741d9',
            '#5f3dc4',
            '#512da8'
          ]
        },
        fontFamily: 'Inter, sans-serif',
        headings: {
          fontFamily: 'Inter, sans-serif',
          sizes: {
            h1: { fontSize: '3rem', fontWeight: 700 },
            h2: { fontSize: '2.25rem', fontWeight: 600 },
            h3: { fontSize: '1.75rem', fontWeight: 600 },
            h4: { fontSize: '1.5rem', fontWeight: 500 },
            h5: { fontSize: '1.25rem', fontWeight: 500 }
          }
        },
        radius: { md: 12 },
        shadows: {
          sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
          md: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <AppShell
        padding="md"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!drawerOpened} width={{ sm: 200, lg: 300 }}>
            <Navbar.Section grow>
              <Stack spacing="xs">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    icon={<item.icon size="1rem" />}
                    label={item.label}
                    onClick={() => toggleDrawer()}
                  />
                ))}
              </Stack>
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            <Group position="apart" sx={{ height: '100%' }}>
              <Group>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" />
                </MediaQuery>
                <Title order={2} color="violet">TechCorp Solutions</Title>
              </Group>
              <Group>
                <ActionIcon variant="subtle" color="gray">
                  <IconBell size="1rem" />
                </ActionIcon>
                <Avatar color="violet" radius="xl">
                  <IconUsers size="1rem" />
                </Avatar>
              </Group>
            </Group>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        {/* Hero Section */}
        <Paper
          sx={{
            background: 'linear-gradient(135deg, #7950f2 0%, #9775fa 100%)',
            color: 'white',
            padding: '4rem 2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}
          radius="md"
        >
          <Container size="lg">
            <Title order={1} mb="md">TechCorp Solutions</Title>
            <Text size="lg" mb="xl" color="gray.1">
              Innovating the future with cutting-edge technology solutions for modern businesses
            </Text>
            <Group position="center" spacing="md">
              <Button
                size="lg"
                variant="white"
                color="violet"
                leftIcon={<IconRocket size="1rem" />}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                leftIcon={<IconWorld size="1rem" />}
              >
                Learn More
              </Button>
            </Group>
          </Container>
        </Paper>

        <Container size="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs mb="md">
            <Anchor href="/" color="violet">
              <Group spacing={4}>
                <IconHome size="0.875rem" />
                <Text size="sm">Home</Text>
              </Group>
            </Anchor>
            <Anchor color="violet">
              <Group spacing={4}>
                <IconBuilding size="0.875rem" />
                <Text size="sm">Solutions</Text>
              </Group>
            </Anchor>
            <Text size="sm" color="dimmed">Overview</Text>
          </Breadcrumbs>

          {/* Navigation Tabs */}
          <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
            <Tabs value={activeTab} onTabChange={setActiveTab}>
              <Tabs.List>
                {tabData.map((tab) => (
                  <Tabs.Tab key={tab.value} value={tab.value}>
                    {tab.label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
              
              {tabData.map((tab) => (
                <Tabs.Panel key={tab.value} value={tab.value} pt="xs">
                  {tab.content}
                </Tabs.Panel>
              ))}
            </Tabs>
          </Card>

          {/* Services Cards */}
          <Stack spacing="xl" mb="xl">
            <Stack spacing="md" align="center">
              <Title order={2} ta="center">Our Services</Title>
              <Text ta="center" color="dimmed">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </Text>
            </Stack>
            
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]} spacing="lg">
              <Card shadow="md" padding="xl" radius="md" withBorder>
                <Card.Section>
                  <Paper
                    sx={{
                      background: 'linear-gradient(135deg, #7950f2 0%, #36cfc9 100%)',
                      height: 140,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconCloud size="3rem" color="white" />
                  </Paper>
                </Card.Section>
                
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Cloud Solutions</Text>
                  <Badge color="blue" variant="light">Popular</Badge>
                </Group>
                
                <Text size="sm" color="dimmed">
                  Scalable cloud infrastructure and migration services to modernize your business 
                  operations with enterprise-grade security.
                </Text>
                
                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  Learn More
                </Button>
              </Card>

              <Card shadow="md" padding="xl" radius="md" withBorder>
                <Card.Section>
                  <Paper
                    sx={{
                      background: 'linear-gradient(135deg, #7950f2 0%, #e64980 100%)',
                      height: 140,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconBrain size="3rem" color="white" />
                  </Paper>
                </Card.Section>
                
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>AI & Analytics</Text>
                  <Badge color="violet" variant="light">Advanced</Badge>
                </Group>
                
                <Text size="sm" color="dimmed">
                  Harness the power of artificial intelligence and data analytics for competitive 
                  advantage and intelligent automation.
                </Text>
                
                <Button variant="outline" color="violet" fullWidth mt="md" radius="md">
                  Explore
                </Button>
              </Card>

              <Card shadow="md" padding="xl" radius="md" withBorder>
                <Card.Section>
                  <Paper
                    sx={{
                      background: 'linear-gradient(135deg, #51cf66 0%, #ffd43b 100%)',
                      height: 140,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconCode size="3rem" color="white" />
                  </Paper>
                </Card.Section>
                
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Custom Development</Text>
                  <Badge color="green" variant="light">Premium</Badge>
                </Group>
                
                <Text size="sm" color="dimmed">
                  Bespoke software solutions tailored to your unique business requirements and 
                  workflows with full-stack expertise.
                </Text>
                
                <Button variant="filled" color="green" fullWidth mt="md" radius="md">
                  Get Quote
                </Button>
              </Card>
            </SimpleGrid>
          </Stack>

          {/* Contact Form */}
          <Card shadow="sm" padding="xl" radius="md" withBorder mb="xl">
            <Stack spacing="md">
              <Stack spacing="md" align="center">
                <Title order={2} ta="center">Contact Our Team</Title>
                <Text ta="center" color="dimmed">
                  Ready to start your next project? Get in touch with our experts today.
                </Text>
              </Stack>
              
              <Stepper active={0} breakpoint="sm" mb="xl">
                <Stepper.Step label="Contact Info" description="Basic information">
                  <IconUsers size="1rem" />
                </Stepper.Step>
                <Stepper.Step label="Project Details" description="Tell us about your project">
                  <IconBuilding size="1rem" />
                </Stepper.Step>
                <Stepper.Step label="Submit" description="Review and send">
                  <IconMail size="1rem" />
                </Stepper.Step>
              </Stepper>

              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <Stack spacing="md" maw={600} mx="auto">
                  <Grid>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        radius="md"
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        label="Email Address"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        radius="md"
                      />
                    </Grid.Col>
                  </Grid>

                  <Select
                    label="Inquiry Type"
                    placeholder="Select inquiry type"
                    value={formData.category}
                    onChange={(value) => setFormData({ ...formData, category: value || 'general' })}
                    data={[
                      { value: 'general', label: 'General Inquiry' },
                      { value: 'cloud', label: 'Cloud Solutions' },
                      { value: 'ai', label: 'AI & Analytics' },
                      { value: 'development', label: 'Custom Development' },
                      { value: 'support', label: 'Technical Support' }
                    ]}
                    radius="md"
                  />

                  <Textarea
                    label="Project Details"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    minRows={4}
                    radius="md"
                  />

                  <Stack spacing="xs">
                    <Text size="sm" weight={500}>Project Budget Range</Text>
                    <Slider
                      value={formData.budget}
                      onChange={(value) => setFormData({ ...formData, budget: value })}
                      min={10000}
                      max={500000}
                      step={10000}
                      marks={[
                        { value: 10000, label: '$10K' },
                        { value: 100000, label: '$100K' },
                        { value: 500000, label: '$500K' }
                      ]}
                      labelAlwaysOn
                      label={(value) => `$${value.toLocaleString()}`}
                    />
                  </Stack>

                  <Stack spacing="xs">
                    <Text size="sm" weight={500}>Service Rating</Text>
                    <Group>
                      <Rating
                        value={formData.rating}
                        onChange={(value) => setFormData({ ...formData, rating: value })}
                        size="lg"
                      />
                      <Text size="sm" color="dimmed">
                        Rate our expected service quality
                      </Text>
                    </Group>
                  </Stack>

                  <Checkbox
                    label="I'd like to receive updates about TechCorp's latest innovations and insights"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  />

                  <Divider />

                  <Group position="center" spacing="md">
                    <Button variant="outline" color="gray" radius="md">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      leftIcon={<IconMail size="1rem" />}
                      radius="md"
                      color="violet"
                    >
                      Send Message
                    </Button>
                  </Group>
                </Stack>
              </form>
            </Stack>
          </Card>

          {/* Team Table */}
          <Card shadow="sm" padding="xl" radius="md" withBorder mb="xl">
            <Stack spacing="md">
              <Title order={2} mb="md">Our Team Directory</Title>
              <Table striped highlightOnHover>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <Group spacing="sm">
                          <Avatar color="violet" radius="xl">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          <Text weight={500}>{employee.name}</Text>
                        </Group>
                      </td>
                      <td>
                        <Text size="sm" color="dimmed">{employee.email}</Text>
                      </td>
                      <td>
                        <Badge variant="outline" color="blue">
                          {employee.department}
                        </Badge>
                      </td>
                      <td>
                        <Badge
                          color={
                            employee.status === 'Active' ? 'green' :
                            employee.status === 'On Leave' ? 'orange' : 'red'
                          }
                          variant="light"
                        >
                          {employee.status}
                        </Badge>
                      </td>
                      <td>
                        <Button variant="subtle" size="xs" color="violet">
                          View Profile
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Stack>
          </Card>

          {/* Company Gallery */}
          <Card shadow="sm" padding="xl" radius="md" withBorder mb="xl">
            <Stack spacing="md">
              <Title order={2} ta="center" mb="md">Our Work Environment</Title>
              <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]} spacing="lg">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop"
                      height={200}
                      alt="Modern office workspace"
                    />
                  </Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Modern Workspace</Text>
                  </Group>
                  <Text size="sm" color="dimmed">
                    Collaborative open office design
                  </Text>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
                      height={200}
                      alt="Team collaboration"
                    />
                  </Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Team Collaboration</Text>
                  </Group>
                  <Text size="sm" color="dimmed">
                    Innovation through teamwork
                  </Text>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
                      height={200}
                      alt="Technology development"
                    />
                  </Card.Section>
                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Technology Development</Text>
                  </Group>
                  <Text size="sm" color="dimmed">
                    Cutting-edge development tools
                  </Text>
                </Card>
              </SimpleGrid>
            </Stack>
          </Card>

          {/* Performance Dashboard */}
          <Card shadow="sm" padding="xl" radius="md" withBorder mb="xl">
            <Stack spacing="md">
              <Title order={2} mb="md">Company Performance Analytics</Title>
              
              <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'md', cols: 2 }]} spacing="lg" mb="xl">
                <Paper withBorder p="md" radius="md">
                  <Group position="apart">
                    <Stack spacing={4}>
                      <Text size="xl" weight={700} color="violet">2.4M</Text>
                      <Text size="xs" color="dimmed">Active Users</Text>
                    </Stack>
                    <RingProgress
                      size={80}
                      thickness={8}
                      sections={[{ value: 75, color: 'violet' }]}
                      label={
                        <Group spacing={2} position="center">
                          <IconTrendingUp size="1rem" color="green" />
                          <Text size="xs" color="green">+12%</Text>
                        </Group>
                      }
                    />
                  </Group>
                </Paper>

                <Paper withBorder p="md" radius="md">
                  <Group position="apart">
                    <Stack spacing={4}>
                      <Text size="xl" weight={700} color="violet">$1.2M</Text>
                      <Text size="xs" color="dimmed">Revenue</Text>
                    </Stack>
                    <RingProgress
                      size={80}
                      thickness={8}
                      sections={[{ value: 60, color: 'blue' }]}
                      label={
                        <Group spacing={2} position="center">
                          <IconTrendingUp size="1rem" color="green" />
                          <Text size="xs" color="green">+8%</Text>
                        </Group>
                      }
                    />
                  </Group>
                </Paper>

                <Paper withBorder p="md" radius="md">
                  <Group position="apart">
                    <Stack spacing={4}>
                      <Text size="xl" weight={700} color="violet">127</Text>
                      <Text size="xs" color="dimmed">Projects</Text>
                    </Stack>
                    <RingProgress
                      size={80}
                      thickness={8}
                      sections={[{ value: 90, color: 'green' }]}
                      label={
                        <Group spacing={2} position="center">
                          <IconTrendingUp size="1rem" color="green" />
                          <Text size="xs" color="green">+15 new</Text>
                        </Group>
                      }
                    />
                  </Group>
                </Paper>

                <Paper withBorder p="md" radius="md">
                  <Group position="apart">
                    <Stack spacing={4}>
                      <Text size="xl" weight={700} color="violet">98.5%</Text>
                      <Text size="xs" color="dimmed">Uptime</Text>
                    </Stack>
                    <RingProgress
                      size={80}
                      thickness={8}
                      sections={[{ value: 98.5, color: 'teal' }]}
                      label={
                        <Group spacing={2} position="center">
                          <IconTrendingUp size="1rem" color="green" />
                          <Text size="xs" color="green">+0.3%</Text>
                        </Group>
                      }
                    />
                  </Group>
                </Paper>
              </SimpleGrid>

              <Grid>
                <Grid.Col md={6}>
                  <Paper withBorder p="md" radius="md">
                    <Title order={4} mb="md">Revenue Growth (Interactive 3D)</Title>
                    <ThreeChart />
                  </Paper>
                </Grid.Col>
                <Grid.Col md={6}>
                  <Paper withBorder p="md" radius="md">
                    <Title order={4} mb="md">User Engagement Trend</Title>
                    <Stack spacing="md">
                      <Stack spacing="xs">
                        <Text size="sm">Monthly Active Users</Text>
                        <Progress value={75} color="violet" size="lg" radius="md" />
                      </Stack>
                      <Stack spacing="xs">
                        <Text size="sm">Daily Engagement</Text>
                        <Progress value={60} color="blue" size="lg" radius="md" />
                      </Stack>
                      <Stack spacing="xs">
                        <Text size="sm">Session Duration</Text>
                        <Progress value={90} color="green" size="lg" radius="md" />
                      </Stack>
                    </Stack>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Stack>
          </Card>

          {/* Alerts */}
          <Stack spacing="md" mb="xl">
            <Alert icon={<IconCheck size="1rem" />} title="Success" color="green">
              Operation completed successfully!
            </Alert>
            <Alert icon={<IconExclamationMark size="1rem" />} title="Warning" color="orange">
              Please check your input data.
            </Alert>
            <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red">
              Something went wrong. Please try again.
            </Alert>
            <Alert icon={<IconInfoCircle size="1rem" />} title="Info" color="blue">
              Here's some helpful information.
            </Alert>
          </Stack>

          {/* Modal Button */}
          <Group mb="xl">
            <Button onClick={open} color="violet">
              Open Modal
            </Button>
          </Group>
        </Container>

        {/* Modal */}
        <Modal opened={opened} onClose={close} title="Modal Title" centered>
          <Text>
            This is a modal dialog with some content using Mantine's design system.
          </Text>
          <Group mt="md" position="right">
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close} color="violet">
              Confirm
            </Button>
          </Group>
        </Modal>

        {/* Footer */}
        <Paper
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[8],
            color: 'white',
            padding: theme.spacing.xl,
            marginTop: theme.spacing.xl
          })}
        >
          <Container size="lg">
            <Grid>
              <Grid.Col md={4}>
                <Title order={4} color="violet" mb="md">
                  TechCorp Solutions
                </Title>
                <Text size="sm" color="gray.3">
                  Innovating the future with cutting-edge technology solutions for modern businesses.
                </Text>
              </Grid.Col>
              <Grid.Col md={4}>
                <Title order={5} color="white" mb="md">
                  Services
                </Title>
                <Stack spacing="xs">
                  <Anchor href="#" color="gray.3" size="sm">Cloud Solutions</Anchor>
                  <Anchor href="#" color="gray.3" size="sm">AI & Analytics</Anchor>
                  <Anchor href="#" color="gray.3" size="sm">Custom Development</Anchor>
                  <Anchor href="#" color="gray.3" size="sm">Consulting</Anchor>
                </Stack>
              </Grid.Col>
              <Grid.Col md={4}>
                <Title order={5} color="white" mb="md">
                  Contact
                </Title>
                <Stack spacing="xs">
                  <Group spacing="xs">
                    <IconMail size="1rem" />
                    <Text size="sm" color="gray.3">hello@techcorp.com</Text>
                  </Group>
                  <Group spacing="xs">
                    <IconPhone size="1rem" />
                    <Text size="sm" color="gray.3">+1 (555) 123-4567</Text>
                  </Group>
                  <Group spacing="xs">
                    <IconMapPin size="1rem" />
                    <Text size="sm" color="gray.3">San Francisco, CA</Text>
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
            <Divider my="xl" color="gray.7" />
            <Text ta="center" size="sm" color="gray.5">
              © 2024 TechCorp Solutions. All rights reserved.
            </Text>
          </Container>
        </Paper>

        {/* Floating Action Button */}
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={true}>
            {(transitionStyles) => (
              <ActionIcon
                color="violet"
                size="xl"
                radius="xl"
                variant="filled"
                style={transitionStyles}
                onClick={() => notifications.show({
                  title: 'Notification',
                  message: 'Action button clicked!',
                  color: 'violet'
                })}
              >
                <IconPlus size="1.5rem" />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </AppShell>
    </MantineProvider>
  );
};