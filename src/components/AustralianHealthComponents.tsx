import React, { useState } from 'react';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/australian-health-custom.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  feedbackType: string;
  message: string;
  serviceUsed: string[];
  reasonVisit: string;
  satisfaction: string;
  newsletter: boolean;
  updates: boolean;
}

export const AustralianHealthComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    feedbackType: 'general',
    message: '',
    serviceUsed: [],
    reasonVisit: '',
    satisfaction: '',
    newsletter: false,
    updates: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback. Your submission has been received.');
    console.log('Form submitted:', formData);
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({...formData, serviceUsed: [...formData.serviceUsed, service]});
    } else {
      setFormData({...formData, serviceUsed: formData.serviceUsed.filter(s => s !== service)});
    }
  };

  const servicesData = [
    { 
      id: 1, 
      title: 'Health Information Hub', 
      description: 'Comprehensive health information and resources for patients and healthcare professionals',
      icon: '🏥',
      status: 'Available'
    },
    { 
      id: 2, 
      title: 'My Health Record', 
      description: 'Secure online access to your personal health information and medical history',
      icon: '📋',
      status: 'Active'
    },
    { 
      id: 3, 
      title: 'Aged Care Navigator', 
      description: 'Find and compare aged care services and providers across Australia',
      icon: '👥',
      status: 'Available'
    },
    { 
      id: 4, 
      title: 'Mental Health Support', 
      description: 'Access mental health resources, support services, and crisis intervention',
      icon: '🧠',
      status: 'Priority'
    }
  ];

  const teamData = [
    { 
      name: 'Dr. Sarah Melbourne', 
      role: 'Chief Health Officer', 
      email: 'sarah.melbourne@health.gov.au', 
      department: 'Public Health'
    },
    { 
      name: 'James Wilson', 
      role: 'Digital Health Director', 
      email: 'james.wilson@health.gov.au', 
      department: 'Digital Health'
    },
    { 
      name: 'Rebecca Chen', 
      role: 'UX Research Lead', 
      email: 'rebecca.chen@health.gov.au', 
      department: 'User Experience'
    },
    { 
      name: 'Michael Brown', 
      role: 'Systems Architect', 
      email: 'michael.brown@health.gov.au', 
      department: 'Technology'
    },
    { 
      name: 'Emma Taylor', 
      role: 'Accessibility Specialist', 
      email: 'emma.taylor@health.gov.au', 
      department: 'Accessibility'
    }
  ];

  const tabs = [
    { id: 'about', label: 'About Us', content: 'Department overview' },
    { id: 'services', label: 'Health Services', content: 'Available services' },
    { id: 'team', label: 'Our Team', content: 'Department team' },
    { id: 'contact', label: 'Contact', content: 'Get in touch' }
  ];

  const australianHealthColors = {
    primary: '#014181',
    secondary: '#006fb0',
    background: '#ffffff',
    text: '#313131'
  };

  return (
    <div className="au-container">
      {/* Header with Australian Government branding */}
      <header className="au-header">
        <div className="au-header-brand">
          <div className="au-coat-of-arms">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle fill='%23FFD700' cx='50' cy='50' r='40'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='%23014181' font-size='40'%3E🇦🇺%3C/text%3E%3C/svg%3E" 
              alt="Australian Government Coat of Arms"
              className="au-coat-arms-image"
            />
            <div className="au-brand-text">
              <div className="au-brand-line">Australian Government</div>
              <div className="au-brand-line">Department of Health and Aged Care</div>
            </div>
          </div>
          
          <div className="au-header-tools">
            <button 
              className="au-btn au-btn--secondary au-btn--small"
              onClick={() => window.location.href = '#exit'}
            >
              Quick Exit
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="au-main-nav">
          <button 
            className="au-main-nav__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="au-main-nav__toggle-text">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>
          </button>
          
          <div className={`au-main-nav__content ${menuOpen ? 'au-main-nav__content--open' : ''}`}>
            <ul className="au-main-nav__list">
              <li><a href="#health-info" className="au-main-nav__link">Health Information</a></li>
              <li><a href="#my-health" className="au-main-nav__link">My Health Record</a></li>
              <li><a href="#aged-care" className="au-main-nav__link">Aged Care</a></li>
              <li><a href="#mental-health" className="au-main-nav__link">Mental Health</a></li>
              <li><a href="#about" className="au-main-nav__link">About</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="au-breadcrumb">
        <ol className="au-breadcrumb__list">
          <li className="au-breadcrumb__item">
            <a href="#" className="au-breadcrumb__link">Home</a>
          </li>
          <li className="au-breadcrumb__item">
            <a href="#" className="au-breadcrumb__link">Health Services</a>
          </li>
          <li className="au-breadcrumb__item au-breadcrumb__item--current">
            Digital Health Platform
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="au-hero">
        <div className="au-hero-content">
          <h1 className="au-hero-title">
            Better health outcomes for all Australians
          </h1>
          <p className="au-hero-description">
            The Department of Health and Aged Care leads Australia's health system, 
            working to improve health outcomes and ensure quality care for all Australians.
          </p>
          <div className="au-hero-actions">
            <button className="au-btn au-btn--primary au-btn--large">
              Access Health Services
            </button>
            <button className="au-btn au-btn--secondary au-btn--large">
              Find Care Near You
            </button>
          </div>
        </div>
      </section>

      <div className="au-main-content">
        {/* Navigation Tabs */}
        <div className="au-tabs">
          <div className="au-tabs__list">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`au-tabs__tab ${index === activeTab ? 'au-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="au-tabs__content">
            {activeTab === 0 && (
              <div className="au-tabs__panel">
                <h2>About the Department</h2>
                <p>
                  The Department of Health and Aged Care is responsible for national health policy, 
                  regulation of therapeutic goods, health system funding, and aged care services. 
                  We work to ensure all Australians have access to quality healthcare when they need it.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="au-tabs__panel">
                <h2>Health Services</h2>
                <p>
                  Our comprehensive health services include Medicare, the Pharmaceutical Benefits Scheme, 
                  My Health Record, mental health support, and preventive health programs designed to 
                  keep Australians healthy and well.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="au-tabs__panel">
                <h2>Our Team</h2>
                <p>
                  Our multidisciplinary team includes health professionals, policy experts, 
                  researchers, and digital specialists working together to improve Australia's 
                  health system and deliver better outcomes for patients.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="au-tabs__panel">
                <h2>Contact Us</h2>
                <p>
                  Get in touch with the Department of Health and Aged Care for enquiries about 
                  health services, policies, or to provide feedback on our digital platforms 
                  and services.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <section className="au-services-section">
          <h2 className="au-section-title">Our Health Services</h2>
          <div className="au-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="au-card">
                <div className="au-card__header">
                  <div className="au-card__icon">{service.icon}</div>
                  <div className="au-card__status">
                    <span className={`au-badge ${
                      service.status === 'Available' ? 'au-badge--success' :
                      service.status === 'Active' ? 'au-badge--info' : 
                      service.status === 'Priority' ? 'au-badge--important' : 'au-badge--neutral'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <div className="au-card__body">
                  <h3 className="au-card__title">{service.title}</h3>
                  <p className="au-card__description">{service.description}</p>
                </div>
                <div className="au-card__footer">
                  <button className="au-btn au-btn--primary">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback Form */}
        <section className="au-form-section">
          <h2 className="au-section-title">Provide Feedback</h2>
          <form onSubmit={handleSubmit} className="au-form">
            <div className="au-form-group">
              <label className="au-label" htmlFor="name">
                Full name (mandatory)
              </label>
              <input
                type="text"
                id="name"
                className="au-text-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="au-form-group">
              <label className="au-label" htmlFor="email">
                Email address (mandatory)
              </label>
              <input
                type="email"
                id="email"
                className="au-text-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="au-form-group">
              <label className="au-label" htmlFor="phone">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="au-text-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <fieldset className="au-fieldset">
              <legend className="au-fieldset__legend">
                Type of feedback (mandatory)
              </legend>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="feedback-general"
                  type="radio"
                  name="feedbackType"
                  value="general"
                  checked={formData.feedbackType === 'general'}
                  onChange={(e) => setFormData({...formData, feedbackType: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="feedback-general">
                  General feedback
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="feedback-website"
                  type="radio"
                  name="feedbackType"
                  value="website"
                  checked={formData.feedbackType === 'website'}
                  onChange={(e) => setFormData({...formData, feedbackType: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="feedback-website">
                  Website feedback
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="feedback-service"
                  type="radio"
                  name="feedbackType"
                  value="service"
                  checked={formData.feedbackType === 'service'}
                  onChange={(e) => setFormData({...formData, feedbackType: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="feedback-service">
                  Service feedback
                </label>
              </div>
            </fieldset>

            <fieldset className="au-fieldset">
              <legend className="au-fieldset__legend">
                Which services have you used? (select all that apply)
              </legend>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="service-medicare"
                  type="checkbox"
                  checked={formData.serviceUsed.includes('medicare')}
                  onChange={(e) => handleServiceChange('medicare', e.target.checked)}
                />
                <label className="au-control-input__text" htmlFor="service-medicare">
                  Medicare
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="service-mhr"
                  type="checkbox"
                  checked={formData.serviceUsed.includes('mhr')}
                  onChange={(e) => handleServiceChange('mhr', e.target.checked)}
                />
                <label className="au-control-input__text" htmlFor="service-mhr">
                  My Health Record
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="service-aged-care"
                  type="checkbox"
                  checked={formData.serviceUsed.includes('aged-care')}
                  onChange={(e) => handleServiceChange('aged-care', e.target.checked)}
                />
                <label className="au-control-input__text" htmlFor="service-aged-care">
                  Aged Care services
                </label>
              </div>
            </fieldset>

            <div className="au-form-group">
              <label className="au-label" htmlFor="reason">
                Reason for visit
              </label>
              <select
                id="reason"
                className="au-select"
                value={formData.reasonVisit}
                onChange={(e) => setFormData({...formData, reasonVisit: e.target.value})}
              >
                <option value="">Select a reason</option>
                <option value="health-info">Looking for health information</option>
                <option value="my-health-record">Accessing My Health Record</option>
                <option value="aged-care">Finding aged care services</option>
                <option value="mental-health">Mental health support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="au-form-group">
              <label className="au-label" htmlFor="message">
                Your feedback (mandatory)
              </label>
              <div className="au-hint-text">
                Tell us about your experience or suggestions for improvement
              </div>
              <textarea
                id="message"
                className="au-text-input au-text-input--block"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                maxLength={500}
                required
              ></textarea>
              <div className="au-character-limit">
                {formData.message.length}/500 characters
              </div>
            </div>

            <fieldset className="au-fieldset">
              <legend className="au-fieldset__legend">
                How satisfied are you with our services?
              </legend>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="satisfaction-very"
                  type="radio"
                  name="satisfaction"
                  value="very-satisfied"
                  checked={formData.satisfaction === 'very-satisfied'}
                  onChange={(e) => setFormData({...formData, satisfaction: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="satisfaction-very">
                  Very satisfied
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="satisfaction-satisfied"
                  type="radio"
                  name="satisfaction"
                  value="satisfied"
                  checked={formData.satisfaction === 'satisfied'}
                  onChange={(e) => setFormData({...formData, satisfaction: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="satisfaction-satisfied">
                  Satisfied
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="satisfaction-neutral"
                  type="radio"
                  name="satisfaction"
                  value="neutral"
                  checked={formData.satisfaction === 'neutral'}
                  onChange={(e) => setFormData({...formData, satisfaction: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="satisfaction-neutral">
                  Neutral
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="satisfaction-dissatisfied"
                  type="radio"
                  name="satisfaction"
                  value="dissatisfied"
                  checked={formData.satisfaction === 'dissatisfied'}
                  onChange={(e) => setFormData({...formData, satisfaction: e.target.value})}
                />
                <label className="au-control-input__text" htmlFor="satisfaction-dissatisfied">
                  Dissatisfied
                </label>
              </div>
            </fieldset>

            <fieldset className="au-fieldset">
              <legend className="au-fieldset__legend">
                Communication preferences
              </legend>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label className="au-control-input__text" htmlFor="newsletter">
                  Subscribe to health updates and newsletters
                </label>
              </div>
              <div className="au-control-input">
                <input
                  className="au-control-input__input"
                  id="updates"
                  type="checkbox"
                  checked={formData.updates}
                  onChange={(e) => setFormData({...formData, updates: e.target.checked})}
                />
                <label className="au-control-input__text" htmlFor="updates">
                  Receive important health alerts and updates
                </label>
              </div>
            </fieldset>

            <div className="au-form-actions">
              <button type="submit" className="au-btn au-btn--primary">
                Submit feedback
              </button>
              <button type="button" className="au-btn au-btn--secondary">
                Clear form
              </button>
            </div>
          </form>
        </section>

        {/* Team Table */}
        <section className="au-team-section">
          <h2 className="au-section-title">Our Leadership Team</h2>
          <div className="au-table-wrapper">
            <table className="au-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Email</th>
                  <th scope="col">Department</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((member, index) => (
                  <tr key={index}>
                    <th scope="row" className="au-table-cell--name">{member.name}</th>
                    <td>{member.role}</td>
                    <td>
                      <a href={`mailto:${member.email}`} className="au-link">
                        {member.email}
                      </a>
                    </td>
                    <td>
                      <span className="au-badge au-badge--info">
                        {member.department}
                      </span>
                    </td>
                    <td>
                      <button className="au-btn au-btn--tertiary au-btn--small">
                        Contact
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="au-charts-section">
          <h2 className="au-section-title">Health System Performance</h2>
          
          <div className="au-stats-grid">
            <div className="au-stat-card">
              <div className="au-stat-number">25.7M</div>
              <div className="au-stat-label">Australians served</div>
            </div>
            <div className="au-stat-card">
              <div className="au-stat-number">22.2M</div>
              <div className="au-stat-label">My Health Records</div>
            </div>
            <div className="au-stat-card">
              <div className="au-stat-number">99.5%</div>
              <div className="au-stat-label">System uptime</div>
            </div>
            <div className="au-stat-card">
              <div className="au-stat-number">24/7</div>
              <div className="au-stat-label">Health support</div>
            </div>
          </div>

          <div className="au-charts-grid">
            <div className="au-chart-container">
              <h3>Health Service Usage (3D)</h3>
              <ThreeChart />
            </div>
            <div className="au-chart-container">
              <h3>Patient Satisfaction Metrics</h3>
              <VisxChart 
                width={400}
                height={300}
                colors={australianHealthColors}
                designSystem="Australian Health"
              />
            </div>
            <div className="au-chart-container">
              <h3>Service Performance</h3>
              <VanillaVisxChart width={400} height={300} />
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="au-alerts-section">
          <div className="au-page-alerts au-page-alerts--success">
            <h3>Success</h3>
            <p>Your health record has been updated successfully.</p>
          </div>
          
          <div className="au-page-alerts au-page-alerts--info">
            <h3>Information</h3>
            <p>New COVID-19 health guidelines are now available.</p>
          </div>
          
          <div className="au-page-alerts au-page-alerts--warning">
            <h3>Important</h3>
            <p>System maintenance scheduled for this weekend.</p>
          </div>
          
          <div className="au-page-alerts au-page-alerts--error">
            <h3>Alert</h3>
            <p>Please update your emergency contact information.</p>
          </div>
        </section>

        {/* Modal Demo */}
        <div className="au-modal-section">
          <button 
            className="au-btn au-btn--primary" 
            onClick={() => setModalOpen(true)}
          >
            Open confirmation dialog
          </button>
          
          {modalOpen && (
            <div className="au-modal au-modal--open">
              <div className="au-modal__backdrop" onClick={() => setModalOpen(false)}></div>
              <div className="au-modal__dialog">
                <div className="au-modal__content">
                  <div className="au-modal__header">
                    <h2 className="au-modal__title">Confirm Action</h2>
                    <button 
                      className="au-modal__close" 
                      onClick={() => setModalOpen(false)}
                      aria-label="Close dialog"
                    >
                      ×
                    </button>
                  </div>
                  <div className="au-modal__body">
                    <p>
                      Are you sure you want to proceed with this action? 
                      This will update your health record and cannot be undone.
                    </p>
                  </div>
                  <div className="au-modal__footer">
                    <button 
                      className="au-btn au-btn--secondary" 
                      onClick={() => setModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className="au-btn au-btn--primary" 
                      onClick={() => setModalOpen(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="au-footer">
        <div className="au-footer__end">
          <div className="au-footer__content">
            <div className="au-footer__section">
              <h3 className="au-footer__heading">About Health</h3>
              <ul className="au-footer__list">
                <li><a href="#" className="au-footer__link">About us</a></li>
                <li><a href="#" className="au-footer__link">Careers</a></li>
                <li><a href="#" className="au-footer__link">Publications</a></li>
                <li><a href="#" className="au-footer__link">Research</a></li>
              </ul>
            </div>
            
            <div className="au-footer__section">
              <h3 className="au-footer__heading">Using our websites</h3>
              <ul className="au-footer__list">
                <li><a href="#" className="au-footer__link">Accessibility</a></li>
                <li><a href="#" className="au-footer__link">Copyright</a></li>
                <li><a href="#" className="au-footer__link">Disclaimer</a></li>
                <li><a href="#" className="au-footer__link">Privacy</a></li>
              </ul>
            </div>
            
            <div className="au-footer__section">
              <h3 className="au-footer__heading">Follow us</h3>
              <ul className="au-footer__list">
                <li><a href="#" className="au-footer__link">Social media</a></li>
                <li><a href="#" className="au-footer__link">News and media</a></li>
                <li><a href="#" className="au-footer__link">Subscribe</a></li>
              </ul>
            </div>
            
            <div className="au-footer__section">
              <h3 className="au-footer__heading">Help us improve</h3>
              <p className="au-footer__text">
                Help us improve our website by providing feedback
              </p>
              <button className="au-btn au-btn--secondary au-btn--small">
                Give feedback
              </button>
            </div>
          </div>
          
          <div className="au-footer__bottom">
            <div className="au-footer__legal">
              <p>© Commonwealth of Australia</p>
              <p>
                Department of Health and Aged Care | 
                <a href="#" className="au-footer__link">Contact us</a> |
                <a href="#" className="au-footer__link">Help</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};