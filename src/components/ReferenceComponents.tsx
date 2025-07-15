import React, { useState } from 'react';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';

export const ReferenceComponents: React.FC = () => {
  const [formData, setFormData] = useState({
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

  const employeeData = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' },
    { id: 4, name: 'David Kim', email: 'david.kim@techcorp.com', status: 'Active', department: 'Sales' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@techcorp.com', status: 'Inactive', department: 'HR' }
  ];

  const tabs = ['Company Overview', 'Our Services', 'Team', 'Contact'];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <header style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>TechCorp Solutions</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Innovating the future with cutting-edge technology solutions for modern businesses
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.1rem', 
              backgroundColor: 'white', 
              color: '#667eea', 
              border: 'none', 
              borderRadius: '8px',
              fontWeight: 'bold'
            }}>
              Get Started
            </button>
            <button style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.1rem', 
              backgroundColor: 'transparent', 
              color: 'white', 
              border: '2px solid white', 
              borderRadius: '8px'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </header>

      <div style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Navigation Tabs */}
        <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <div style={{ borderBottom: '2px solid #e9ecef', backgroundColor: 'white', borderRadius: '8px 8px 0 0' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              {tabs.map((tab, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{ 
                    padding: '1rem 2rem', 
                    border: 'none', 
                    borderBottom: activeTab === index ? '3px solid #667eea' : '3px solid transparent',
                    backgroundColor: activeTab === index ? 'white' : 'transparent', 
                    color: activeTab === index ? '#667eea' : '#6c757d',
                    fontWeight: activeTab === index ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '0 0 8px 8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {activeTab === 0 && (
              <div>
                <h3>About TechCorp Solutions</h3>
                <p>Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals. Our expertise spans cloud computing, AI/ML, and custom software development.</p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3>Our Services</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>Cloud Infrastructure & DevOps</li>
                  <li>Custom Software Development</li>
                  <li>AI & Machine Learning Solutions</li>
                  <li>Digital Transformation Consulting</li>
                </ul>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3>Our Team</h3>
                <p>We're a diverse team of passionate engineers, designers, and strategists committed to delivering exceptional results for our clients.</p>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h3>Get in Touch</h3>
                <p>Ready to transform your business? Contact us today to discuss your project requirements and see how we can help you succeed.</p>
              </div>
            )}
          </div>
        </section>

        {/* Services Cards */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'white', border: '1px solid #e9ecef', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Cloud Solutions</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', marginBottom: '1.5rem' }}>Scalable cloud infrastructure and migration services to modernize your business operations.</p>
              <button style={{ 
                backgroundColor: '#667eea', 
                color: 'white', 
                border: 'none', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
            <div style={{ backgroundColor: 'white', border: '1px solid #e9ecef', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>AI & Analytics</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', marginBottom: '1.5rem' }}>Harness the power of artificial intelligence and data analytics for competitive advantage.</p>
              <button style={{ 
                backgroundColor: 'transparent', 
                color: '#667eea', 
                border: '2px solid #667eea', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Explore
              </button>
            </div>
            <div style={{ backgroundColor: 'white', border: '1px solid #e9ecef', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Custom Development</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', marginBottom: '1.5rem' }}>Bespoke software solutions tailored to your unique business requirements and workflows.</p>
              <button style={{ 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Get Quote
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Contact Our Team</h2>
            <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '3rem' }}>
              Ready to start your next project? Get in touch with our experts today.
            </p>
            
            <form style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '2px solid #e9ecef', 
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '2px solid #e9ecef', 
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Inquiry Type</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '2px solid #e9ecef', 
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="ai">AI & Analytics</option>
                  <option value="development">Custom Development</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Project Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '2px solid #e9ecef', 
                    borderRadius: '6px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold', color: '#333' }}>Project Budget Range</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {[
                    { value: 1, label: '$10K - $25K' },
                    { value: 2, label: '$25K - $50K' },
                    { value: 3, label: '$50K - $100K' },
                    { value: 4, label: '$100K - $250K' },
                    { value: 5, label: '$250K+' }
                  ].map((option) => (
                    <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="budget"
                        value={option.value}
                        checked={formData.rating === option.value}
                        onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                        style={{ transform: 'scale(1.2)' }}
                      />
                      <span style={{ color: '#333' }}>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <span style={{ color: '#333' }}>I'd like to receive updates about TechCorp's latest innovations and insights</span>
                </label>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  type="submit"
                  onClick={() => setShowAlert(true)}
                  style={{ 
                    backgroundColor: '#667eea', 
                    color: 'white', 
                    border: 'none', 
                    padding: '1rem 3rem', 
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

      {/* Cards */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3>Card Title 1</h3>
            <p>This is a sample card with some content to demonstrate layout and styling.</p>
            <button>Action</button>
          </div>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3>Card Title 2</h3>
            <p>Another card with different content to show consistency across components.</p>
            <button>Action</button>
          </div>
        </div>
      </section>

        {/* Team Table */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Our Team Directory</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#667eea', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Employee</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Email</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Department</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee, index) => (
                    <tr key={employee.id} style={{ 
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            backgroundColor: '#667eea', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            color: 'white',
                            fontWeight: 'bold'
                          }}>
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span style={{ fontWeight: 'bold', color: '#333' }}>{employee.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '1rem', color: '#6c757d' }}>{employee.email}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '20px',
                          backgroundColor: '#e3f2fd',
                          color: '#1976d2',
                          fontSize: '0.875rem',
                          fontWeight: 'bold'
                        }}>
                          {employee.department}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ 
                          padding: '0.5rem 1rem', 
                          borderRadius: '6px',
                          backgroundColor: 
                            employee.status === 'Active' ? '#d4edda' : 
                            employee.status === 'On Leave' ? '#fff3cd' : '#f8d7da',
                          color: 
                            employee.status === 'Active' ? '#155724' : 
                            employee.status === 'On Leave' ? '#856404' : '#721c24',
                          fontWeight: 'bold',
                          fontSize: '0.875rem'
                        }}>
                          {employee.status}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <button style={{ 
                          padding: '0.5rem 1rem', 
                          backgroundColor: 'transparent', 
                          color: '#667eea', 
                          border: '1px solid #667eea', 
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.875rem'
                        }}>
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      {/* Alerts and Notifications */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Alerts & Notifications</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <div style={{ padding: '1rem', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', borderRadius: '4px' }}>
            Success: Operation completed successfully!
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeaa7', borderRadius: '4px' }}>
            Warning: Please check your input data.
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
            Error: Something went wrong. Please try again.
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#d1ecf1', color: '#0c5460', border: '1px solid #bee5eb', borderRadius: '4px' }}>
            Info: Here's some helpful information.
          </div>
        </div>
        <button 
          onClick={() => setShowAlert(!showAlert)}
          style={{ marginTop: '1rem' }}
        >
          Toggle Alert
        </button>
        {showAlert && (
          <div style={{ 
            position: 'fixed', 
            top: '20px', 
            right: '20px', 
            padding: '1rem', 
            backgroundColor: '#28a745', 
            color: 'white', 
            borderRadius: '4px',
            zIndex: 1000
          }}>
            Toast notification!
            <button 
              onClick={() => setShowAlert(false)}
              style={{ marginLeft: '1rem', background: 'transparent', border: '1px solid white', color: 'white' }}
            >
              ×
            </button>
          </div>
        )}
      </section>

      {/* Badges and Avatars */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Badges & Avatars</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ padding: '0.25rem 0.5rem', backgroundColor: '#007bff', color: 'white', borderRadius: '12px', fontSize: '0.875rem' }}>
            Primary
          </span>
          <span style={{ padding: '0.25rem 0.5rem', backgroundColor: '#28a745', color: 'white', borderRadius: '12px', fontSize: '0.875rem' }}>
            Success
          </span>
          <span style={{ padding: '0.25rem 0.5rem', backgroundColor: '#dc3545', color: 'white', borderRadius: '12px', fontSize: '0.875rem' }}>
            Danger
          </span>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#6c757d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            JD
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            JS
          </div>
        </div>
      </section>

      {/* Modal */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Modal</h2>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        
        {showModal && (
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.5)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '8px', 
              maxWidth: '500px', 
              width: '90%' 
            }}>
              <h3>Modal Title</h3>
              <p>This is a modal dialog with some content.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button onClick={() => setShowModal(false)} style={{ backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Progress Bar */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Progress Bar</h2>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '0.5rem' }}>Progress: 65%</div>
          <div style={{ width: '100%', height: '20px', backgroundColor: '#e9ecef', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', backgroundColor: '#007bff', transition: 'width 0.3s ease' }}></div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Tabs</h2>
        <div style={{ borderBottom: '1px solid #ddd' }}>
          <div style={{ display: 'flex', gap: '0' }}>
            <button style={{ padding: '0.75rem 1rem', border: 'none', borderBottom: '2px solid #007bff', backgroundColor: 'transparent' }}>
              Tab 1
            </button>
            <button style={{ padding: '0.75rem 1rem', border: 'none', backgroundColor: 'transparent', color: '#6c757d' }}>
              Tab 2
            </button>
            <button style={{ padding: '0.75rem 1rem', border: 'none', backgroundColor: 'transparent', color: '#6c757d' }}>
              Tab 3
            </button>
          </div>
        </div>
        <div style={{ padding: '1rem 0' }}>
          <p>Content for the active tab goes here.</p>
        </div>
      </section>

        {/* Company Gallery */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Our Work Environment</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop" 
                  alt="Modern office workspace" 
                  style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '0', 
                  left: '0', 
                  right: '0', 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '2rem 1rem 1rem',
                  color: 'white'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Modern Workspace</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Collaborative open office design</p>
                </div>
              </div>
              
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop" 
                  alt="Team collaboration" 
                  style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '0', 
                  left: '0', 
                  right: '0', 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '2rem 1rem 1rem',
                  color: 'white'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Team Collaboration</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Innovation through teamwork</p>
                </div>
              </div>
              
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" 
                  alt="Technology development" 
                  style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '0', 
                  left: '0', 
                  right: '0', 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '2rem 1rem 1rem',
                  color: 'white'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Technology Development</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Cutting-edge development tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Company Performance Analytics</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '0.5rem' }}>2.4M</div>
                <div style={{ color: '#6c757d', fontWeight: 'bold' }}>Active Users</div>
                <div style={{ color: '#28a745', fontSize: '0.875rem', marginTop: '0.5rem' }}>↗ +12% this month</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '0.5rem' }}>$1.2M</div>
                <div style={{ color: '#6c757d', fontWeight: 'bold' }}>Revenue</div>
                <div style={{ color: '#28a745', fontSize: '0.875rem', marginTop: '0.5rem' }}>↗ +8% this quarter</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '0.5rem' }}>127</div>
                <div style={{ color: '#6c757d', fontWeight: 'bold' }}>Projects</div>
                <div style={{ color: '#28a745', fontSize: '0.875rem', marginTop: '0.5rem' }}>↗ +15 new this month</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '0.5rem' }}>98.5%</div>
                <div style={{ color: '#6c757d', fontWeight: 'bold' }}>Uptime</div>
                <div style={{ color: '#28a745', fontSize: '0.875rem', marginTop: '0.5rem' }}>↗ +0.3% improvement</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#333' }}>Revenue Growth (Interactive 3D)</h3>
                <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', overflow: 'hidden' }}>
                  <ThreeChart />
                </div>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#333' }}>Revenue Analytics (visx)</h3>
                <VanillaVisxChart width={380} height={250} />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#333' }}>Performance Metrics (visx Line)</h3>
                <VanillaVisxChart width={380} height={250} type="line" />
              </div>
              
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#333' }}>User Engagement Trend</h3>
                <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8f9fa' }}>
                  <svg width="100%" height="200" viewBox="0 0 400 200" style={{ borderRadius: '4px' }}>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#667eea" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,150 100,120 150,80 200,100 250,60 300,90 350,40 350,180 50,180"
                      fill="url(#gradient)"
                    />
                    <polyline
                      points="50,150 100,120 150,80 200,100 250,60 300,90 350,40"
                      fill="none"
                      stroke="#667eea"
                      strokeWidth="3"
                    />
                    {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
                      <circle key={i} cx={x} cy={[150, 120, 80, 100, 60, 90, 40][i]} r="5" fill="#667eea" />
                    ))}
                    <text x="200" y="195" textAnchor="middle" fill="#6c757d" fontSize="12">
                      Last 7 months
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ 
          backgroundColor: '#333', 
          color: 'white', 
          padding: '3rem 2rem 2rem', 
          borderRadius: '12px 12px 0 0',
          marginTop: '4rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>TechCorp Solutions</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                  Innovating the future with cutting-edge technology solutions for modern businesses.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem' }}>Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Cloud Solutions</li>
                  <li style={{ marginBottom: '0.5rem' }}>AI & Analytics</li>
                  <li style={{ marginBottom: '0.5rem' }}>Custom Development</li>
                  <li style={{ marginBottom: '0.5rem' }}>Consulting</li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
                <div style={{ color: '#ccc' }}>
                  <p>📧 hello@techcorp.com</p>
                  <p>📞 +1 (555) 123-4567</p>
                  <p>📍 San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #555', paddingTop: '1rem', textAlign: 'center', color: '#888' }}>
              © 2024 TechCorp Solutions. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};