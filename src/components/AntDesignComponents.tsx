import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  Form, 
  Input, 
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
  Typography, 
  Row, 
  Col, 
  Statistic, 
  message,
  Layout,
  Space,
  Divider,
  Tag,
  Timeline,
  Steps,
  Rate,
  Breadcrumb,
  Menu,
  Dropdown,
  Tooltip,
  Popover,
  notification
} from 'antd';
import { 
  CloudOutlined, 
  RobotOutlined, 
  CodeOutlined, 
  SendOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ArrowUpOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  TrophyOutlined,
  HomeOutlined,
  SettingOutlined,
  BellOutlined,
  StarOutlined,
  GlobalOutlined,
  SolutionOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';
import { ThreeChart } from './ThreeChart';
import { AntDesignVisxChart } from './VisxChartVariants';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;

interface FormData {
  name: string;
  email: string;
  message: string;
  category: string;
  newsletter: boolean;
  budget: number;
}

export const AntDesignComponents: React.FC = () => {
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    budget: 3
  });

  const employeeData = [
    { 
      key: '1', 
      name: 'Sarah Chen', 
      email: 'sarah.chen@techcorp.com', 
      status: 'Active', 
      department: 'Engineering',
      avatar: 'SC'
    },
    { 
      key: '2', 
      name: 'Marcus Johnson', 
      email: 'marcus.j@techcorp.com', 
      status: 'Active', 
      department: 'Design',
      avatar: 'MJ'
    },
    { 
      key: '3', 
      name: 'Elena Rodriguez', 
      email: 'elena.r@techcorp.com', 
      status: 'On Leave', 
      department: 'Marketing',
      avatar: 'ER'
    },
    { 
      key: '4', 
      name: 'David Kim', 
      email: 'david.kim@techcorp.com', 
      status: 'Active', 
      department: 'Sales',
      avatar: 'DK'
    },
    { 
      key: '5', 
      name: 'Lisa Thompson', 
      email: 'lisa.t@techcorp.com', 
      status: 'Inactive', 
      department: 'HR',
      avatar: 'LT'
    }
  ];

  const columns = [
    {
      title: 'Employee',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <Space>
          <Avatar style={{ backgroundColor: '#1890ff' }}>{record.avatar}</Avatar>
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text: string) => <Text type="secondary">{text}</Text>
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      render: (text: string) => <Badge color="blue" text={text} />
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const color = status === 'Active' ? 'green' : status === 'On Leave' ? 'orange' : 'red';
        return <Badge color={color} text={status} />;
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Button type="link" size="small">View Profile</Button>
      )
    }
  ];

  const handleSubmit = (values: any) => {
    message.success('Message sent successfully!');
    console.log('Form values:', values);
  };

  const tabItems = [
    {
      key: '1',
      label: 'Company Overview',
      children: (
        <div>
          <Title level={4}>About TechCorp Solutions</Title>
          <Paragraph>
            Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, 
            helping businesses leverage technology to achieve their goals. Our expertise spans cloud 
            computing, AI/ML, and custom software development.
          </Paragraph>
        </div>
      )
    },
    {
      key: '2',
      label: 'Our Services',
      children: (
        <div>
          <Title level={4}>Our Services</Title>
          <ul style={{ lineHeight: '2' }}>
            <li>Cloud Infrastructure & DevOps</li>
            <li>Custom Software Development</li>
            <li>AI & Machine Learning Solutions</li>
            <li>Digital Transformation Consulting</li>
          </ul>
        </div>
      )
    },
    {
      key: '3',
      label: 'Team',
      children: (
        <div>
          <Title level={4}>Our Team</Title>
          <Paragraph>
            We're a diverse team of passionate engineers, designers, and strategists committed to 
            delivering exceptional results for our clients.
          </Paragraph>
        </div>
      )
    },
    {
      key: '4',
      label: 'Contact',
      children: (
        <div>
          <Title level={4}>Get in Touch</Title>
          <Paragraph>
            Ready to transform your business? Contact us today to discuss your project requirements 
            and see how we can help you succeed.
          </Paragraph>
        </div>
      )
    }
  ];

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '2',
      icon: <SolutionOutlined />,
      label: 'Solutions',
      children: [
        {
          key: '2-1',
          label: 'Cloud Infrastructure',
        },
        {
          key: '2-2',
          label: 'AI & Analytics',
        },
        {
          key: '2-3',
          label: 'Custom Development',
        },
      ],
    },
    {
      key: '3',
      icon: <TeamOutlined />,
      label: 'About',
    },
    {
      key: '4',
      icon: <CustomerServiceOutlined />,
      label: 'Contact',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Navigation Header */}
      <Header style={{ 
        position: 'fixed', 
        zIndex: 1000, 
        width: '100%', 
        backgroundColor: '#001529',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            color: '#1890ff', 
            fontSize: '20px', 
            fontWeight: 'bold',
            marginRight: '32px'
          }}>
            TechCorp
          </div>
          <Menu 
            theme="dark" 
            mode="horizontal" 
            defaultSelectedKeys={['1']}
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </div>
        <Space>
          <Badge count={5}>
            <BellOutlined style={{ color: 'white', fontSize: '16px' }} />
          </Badge>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Header>

      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
        color: 'white',
        marginTop: '64px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={1} style={{ 
            color: 'white', 
            marginBottom: '24px',
            fontSize: '48px',
            fontWeight: 700
          }}>
            TechCorp Solutions
          </Title>
          <Paragraph style={{ 
            fontSize: '20px', 
            color: 'rgba(255, 255, 255, 0.85)', 
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Innovating the future with cutting-edge technology solutions for modern businesses
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large" icon={<RocketOutlined />}>
              Get Started
            </Button>
            <Button size="large" ghost icon={<GlobalOutlined />}>
              Learn More
            </Button>
          </Space>
        </div>
      </div>

      <Content style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Breadcrumb */}
          <Breadcrumb style={{ margin: '24px 0' }}>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <SolutionOutlined />
              <span>Solutions</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Overview</Breadcrumb.Item>
          </Breadcrumb>

          {/* Navigation Tabs */}
          <Card style={{ marginBottom: '24px' }}>
            <Tabs 
              defaultActiveKey="1" 
              size="large"
              items={tabItems}
              type="card"
            />
          </Card>

          {/* Services Cards */}
          <div style={{ marginBottom: '24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '16px' }}>
              Our Services
            </Title>
            <Paragraph style={{ textAlign: 'center', marginBottom: '32px', color: '#666' }}>
              Comprehensive technology solutions designed to accelerate your digital transformation
            </Paragraph>
            
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  bordered={false}
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)'
                  }}
                  cover={
                    <div style={{ 
                      padding: '24px', 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)'
                    }}>
                      <CloudOutlined style={{ fontSize: '48px', color: 'white' }} />
                    </div>
                  }
                  actions={[
                    <Button type="primary" icon={<RocketOutlined />}>
                      Learn More
                    </Button>
                  ]}
                >
                  <Card.Meta
                    title={
                      <Space>
                        <Text strong>Cloud Solutions</Text>
                        <Tag color="blue">Popular</Tag>
                      </Space>
                    }
                    description="Scalable cloud infrastructure and migration services to modernize your business operations with enterprise-grade security."
                  />
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  bordered={false}
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)'
                  }}
                  cover={
                    <div style={{ 
                      padding: '24px', 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #722ed1 0%, #eb2f96 100%)'
                    }}>
                      <RobotOutlined style={{ fontSize: '48px', color: 'white' }} />
                    </div>
                  }
                  actions={[
                    <Button type="default" icon={<StarOutlined />}>
                      Explore
                    </Button>
                  ]}
                >
                  <Card.Meta
                    title={
                      <Space>
                        <Text strong>AI & Analytics</Text>
                        <Tag color="purple">Advanced</Tag>
                      </Space>
                    }
                    description="Harness the power of artificial intelligence and data analytics for competitive advantage and intelligent automation."
                  />
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  bordered={false}
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)'
                  }}
                  cover={
                    <div style={{ 
                      padding: '24px', 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #52c41a 0%, #faad14 100%)'
                    }}>
                      <CodeOutlined style={{ fontSize: '48px', color: 'white' }} />
                    </div>
                  }
                  actions={[
                    <Button type="primary" icon={<SendOutlined />} style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>
                      Get Quote
                    </Button>
                  ]}
                >
                  <Card.Meta
                    title={
                      <Space>
                        <Text strong>Custom Development</Text>
                        <Tag color="green">Premium</Tag>
                      </Space>
                    }
                    description="Bespoke software solutions tailored to your unique business requirements and workflows with full-stack expertise."
                  />
                </Card>
              </Col>
            </Row>
          </div>

          {/* Contact Form */}
          <div style={{ marginBottom: '24px' }}>
            <Card 
              title={
                <div style={{ textAlign: 'center' }}>
                  <Title level={2} style={{ marginBottom: '8px' }}>
                    Contact Our Team
                  </Title>
                  <Paragraph style={{ marginBottom: 0, color: '#666' }}>
                    Ready to start your next project? Get in touch with our experts today.
                  </Paragraph>
                </div>
              }
              bordered={false}
              style={{ 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)'
              }}
            >
              <Steps
                current={0}
                size="small"
                style={{ marginBottom: '32px' }}
                items={[
                  { title: 'Contact Info', icon: <UserOutlined /> },
                  { title: 'Project Details', icon: <SolutionOutlined /> },
                  { title: 'Submit', icon: <SendOutlined /> },
                ]}
              />
              
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                style={{ maxWidth: '600px', margin: '0 auto' }}
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Full Name"
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input 
                        prefix={<UserOutlined />}
                        placeholder="Enter your full name" 
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Email Address"
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input 
                        prefix={<MailOutlined />}
                        placeholder="your.email@company.com" 
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Inquiry Type"
                  name="category"
                  initialValue="general"
                >
                  <Select size="large" placeholder="Select inquiry type">
                    <Option value="general">
                      <Space>
                        <CustomerServiceOutlined />
                        General Inquiry
                      </Space>
                    </Option>
                    <Option value="cloud">
                      <Space>
                        <CloudOutlined />
                        Cloud Solutions
                      </Space>
                    </Option>
                    <Option value="ai">
                      <Space>
                        <RobotOutlined />
                        AI & Analytics
                      </Space>
                    </Option>
                    <Option value="development">
                      <Space>
                        <CodeOutlined />
                        Custom Development
                      </Space>
                    </Option>
                    <Option value="support">
                      <Space>
                        <SafetyCertificateOutlined />
                        Technical Support
                      </Space>
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Project Details"
                  name="message"
                  rules={[{ required: true, message: 'Please describe your project' }]}
                >
                  <TextArea 
                    rows={4} 
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Project Budget Range"
                  name="budget"
                  initialValue={3}
                >
                  <Radio.Group size="large">
                    <Space direction="vertical">
                      <Radio value={1}>$10K - $25K</Radio>
                      <Radio value={2}>$25K - $50K</Radio>
                      <Radio value={3}>$50K - $100K</Radio>
                      <Radio value={4}>$100K - $250K</Radio>
                      <Radio value={5}>$250K+</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="Service Rating"
                  name="rating"
                  initialValue={5}
                >
                  <Rate allowHalf defaultValue={5} />
                  <Text style={{ marginLeft: '16px', color: '#666' }}>
                    Rate our expected service quality
                  </Text>
                </Form.Item>

                <Form.Item
                  name="newsletter"
                  valuePropName="checked"
                >
                  <Checkbox>
                    I'd like to receive updates about TechCorp's latest innovations and insights
                  </Checkbox>
                </Form.Item>

                <Divider />

                <Form.Item style={{ textAlign: 'center' }}>
                  <Space>
                    <Button size="large">
                      Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" size="large" icon={<SendOutlined />}>
                      Send Message
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </div>

          {/* Team Table */}
          <div style={{ marginBottom: '48px' }}>
            <Card>
              <Title level={2} style={{ marginBottom: '24px' }}>
                Our Team Directory
              </Title>
              <Table 
                columns={columns} 
                dataSource={employeeData} 
                pagination={false}
                size="middle"
              />
            </Card>
          </div>

          {/* Company Gallery */}
          <div style={{ marginBottom: '48px' }}>
            <Card>
              <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
                Our Work Environment
              </Title>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="Modern office workspace"
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    }
                  >
                    <Card.Meta
                      title="Modern Workspace"
                      description="Collaborative open office design"
                    />
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="Team collaboration"
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    }
                  >
                    <Card.Meta
                      title="Team Collaboration"
                      description="Innovation through teamwork"
                    />
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="Technology development"
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    }
                  >
                    <Card.Meta
                      title="Technology Development"
                      description="Cutting-edge development tools"
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>

          {/* Performance Dashboard */}
          <div style={{ marginBottom: '48px' }}>
            <Card>
              <Title level={2} style={{ marginBottom: '24px' }}>
                Company Performance Analytics
              </Title>
              
              <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
                <Col xs={12} md={6}>
                  <Card>
                    <Statistic
                      title="Active Users"
                      value={2400000}
                      formatter={(value) => `${(Number(value) / 1000000).toFixed(1)}M`}
                      valueStyle={{ color: '#1890ff' }}
                      prefix={<ArrowUpOutlined />}
                      suffix={<Text type="success">+12%</Text>}
                    />
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card>
                    <Statistic
                      title="Revenue"
                      value={1200000}
                      formatter={(value) => `$${(Number(value) / 1000000).toFixed(1)}M`}
                      valueStyle={{ color: '#1890ff' }}
                      prefix={<ArrowUpOutlined />}
                      suffix={<Text type="success">+8%</Text>}
                    />
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card>
                    <Statistic
                      title="Projects"
                      value={127}
                      valueStyle={{ color: '#1890ff' }}
                      prefix={<ArrowUpOutlined />}
                      suffix={<Text type="success">+15 new</Text>}
                    />
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card>
                    <Statistic
                      title="Uptime"
                      value={98.5}
                      precision={1}
                      valueStyle={{ color: '#1890ff' }}
                      prefix={<ArrowUpOutlined />}
                      suffix={<Text type="success">%</Text>}
                    />
                  </Card>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Card title="Revenue Growth (Interactive 3D)">
                    <ThreeChart />
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title="Business Intelligence (visx)">
                    <AntDesignVisxChart width={380} height={250} />
                  </Card>
                </Col>
              </Row>
              
              <Row gutter={24} style={{ marginTop: '24px' }}>
                <Col xs={24} md={12}>
                  <Card title="User Engagement Trend">
                    <Progress percent={75} status="active" />
                    <Progress percent={60} status="active" strokeColor="#52c41a" />
                    <Progress percent={90} status="active" strokeColor="#faad14" />
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>

          {/* Alerts */}
          <div style={{ marginBottom: '48px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert
                message="Success"
                description="Operation completed successfully!"
                type="success"
                showIcon
                closable
              />
              <Alert
                message="Warning"
                description="Please check your input data."
                type="warning"
                showIcon
                closable
              />
              <Alert
                message="Error"
                description="Something went wrong. Please try again."
                type="error"
                showIcon
                closable
              />
              <Alert
                message="Info"
                description="Here's some helpful information."
                type="info"
                showIcon
                closable
              />
            </Space>
          </div>

          {/* Modal */}
          <div style={{ marginBottom: '48px' }}>
            <Button type="primary" onClick={() => setShowModal(true)}>
              Open Modal
            </Button>
            <Modal
              title="Modal Title"
              open={showModal}
              onOk={() => setShowModal(false)}
              onCancel={() => setShowModal(false)}
            >
              <p>This is a modal dialog with some content.</p>
            </Modal>
          </div>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ backgroundColor: '#001529', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Title level={4} style={{ color: '#1890ff' }}>
                TechCorp Solutions
              </Title>
              <Paragraph style={{ color: '#ccc' }}>
                Innovating the future with cutting-edge technology solutions for modern businesses.
              </Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={5} style={{ color: 'white' }}>
                Services
              </Title>
              <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                <li style={{ marginBottom: '8px' }}>Cloud Solutions</li>
                <li style={{ marginBottom: '8px' }}>AI & Analytics</li>
                <li style={{ marginBottom: '8px' }}>Custom Development</li>
                <li style={{ marginBottom: '8px' }}>Consulting</li>
              </ul>
            </Col>
            <Col xs={24} md={8}>
              <Title level={5} style={{ color: 'white' }}>
                Contact
              </Title>
              <Space direction="vertical" style={{ color: '#ccc' }}>
                <Text style={{ color: '#ccc' }}>
                  <MailOutlined /> hello@techcorp.com
                </Text>
                <Text style={{ color: '#ccc' }}>
                  <PhoneOutlined /> +1 (555) 123-4567
                </Text>
                <Text style={{ color: '#ccc' }}>
                  <EnvironmentOutlined /> San Francisco, CA
                </Text>
              </Space>
            </Col>
          </Row>
          <div style={{ 
            borderTop: '1px solid #555', 
            paddingTop: '16px', 
            marginTop: '24px',
            textAlign: 'center', 
            color: '#888' 
          }}>
            © 2024 TechCorp Solutions. All rights reserved.
          </div>
        </div>
      </Footer>
    </Layout>
  );
};