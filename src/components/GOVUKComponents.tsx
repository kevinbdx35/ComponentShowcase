import React, { useState } from 'react';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/govuk-custom.css';

export const GOVUKComponents: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    rating: 5,
    agree: false
  });

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const departmentData = [
    { id: 1, name: 'Sarah Williams', email: 'sarah.williams@digital.cabinet-office.gov.uk', status: 'Active', department: 'Digital Service' },
    { id: 2, name: 'James Thompson', email: 'james.thompson@hmrc.gov.uk', status: 'Active', department: 'HMRC' },
    { id: 3, name: 'Emma Davies', email: 'emma.davies@dwp.gov.uk', status: 'On Leave', department: 'DWP' },
    { id: 4, name: 'Michael Brown', email: 'michael.brown@homeoffice.gov.uk', status: 'Active', department: 'Home Office' },
    { id: 5, name: 'Rachel Johnson', email: 'rachel.johnson@nhs.uk', status: 'Active', department: 'NHS Digital' }
  ];

  const tabs = ['About this service', 'Eligibility', 'How to apply', 'Contact us'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="govuk-width-container" style={{ backgroundColor: '#f3f2f1', minHeight: '100vh' }}>
      {/* GOV.UK Header */}
      <header className="govuk-header" role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a href="#" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <svg
                  role="presentation"
                  focusable="false"
                  className="govuk-header__logotype-crown"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 97"
                  height="30"
                  width="36"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 8.9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 8.9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 8.9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6l2.3-4.8 2.3 4.8s6.6 7.2 8 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z"
                  />
                </svg>
                <span className="govuk-header__logotype-text">
                  GOV.UK
                </span>
              </span>
            </a>
          </div>
          <div className="govuk-header__content">
            <a href="#" className="govuk-header__link govuk-header__link--service-name">
              TechCorp Solutions
            </a>
          </div>
        </div>
      </header>

      <div className="govuk-width-container">
        <div className="govuk-phase-banner">
          <p className="govuk-phase-banner__content">
            <strong className="govuk-tag govuk-phase-banner__content__tag">
              beta
            </strong>
            <span className="govuk-phase-banner__text">
              This is a new service – your{' '}
              <a className="govuk-link" href="#">
                feedback
              </a>{' '}
              will help us to improve it.
            </span>
          </p>
        </div>

        <div className="govuk-breadcrumbs">
          <ol className="govuk-breadcrumbs__list">
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="#">Home</a>
            </li>
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="#">Services</a>
            </li>
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="#">Technology Solutions</a>
            </li>
          </ol>
        </div>

        <main className="govuk-main-wrapper" id="main-content" role="main">
          {/* Hero Section */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-xl">Apply for a provisional driving licence</h1>
              <p className="govuk-body-l">
                You need a provisional driving licence to take lessons or practice.
              </p>
              <div className="govuk-inset-text">
                Most people can start learning to drive when they're 17.
              </div>
              <a href="#start" role="button" draggable="false" className="govuk-button govuk-button--start">
                Start now
                <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" role="presentation" focusable="false">
                  <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
                </svg>
              </a>
            </div>
            <div className="govuk-grid-column-one-third">
              <div className="govuk-panel govuk-panel--related">
                <h2 className="govuk-heading-m">Related content</h2>
                <ul className="govuk-list">
                  <li><a className="govuk-link" href="#">Driving lessons and learning to drive</a></li>
                  <li><a className="govuk-link" href="#">Book your theory test</a></li>
                  <li><a className="govuk-link" href="#">Book your driving test</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="govuk-grid-row" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <div className="govuk-grid-column-full">
              <div className="govuk-tabs" data-module="govuk-tabs">
                <h2 className="govuk-tabs__title">
                  Contents
                </h2>
                <ul className="govuk-tabs__list">
                  {tabs.map((tab, index) => (
                    <li key={index} className="govuk-tabs__list-item">
                      <a 
                        className={`govuk-tabs__tab ${activeTab === index ? 'govuk-tabs__tab--selected' : ''}`}
                        href={`#tab-${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(index);
                        }}
                      >
                        {tab}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="govuk-tabs__panel" id={`tab-${activeTab}`}>
                  {activeTab === 0 && (
                    <div>
                      <h3 className="govuk-heading-m">About this service</h3>
                      <p className="govuk-body">
                        This service allows you to apply for your first provisional driving licence online. 
                        You'll need to provide personal details, address information, and pay the application fee.
                      </p>
                      <p className="govuk-body">
                        The service is available 24 hours a day, 7 days a week.
                      </p>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div>
                      <h3 className="govuk-heading-m">Eligibility</h3>
                      <p className="govuk-body">You can apply for a provisional driving licence if you:</p>
                      <ul className="govuk-list govuk-list--bullet">
                        <li>are a resident of Great Britain</li>
                        <li>meet the minimum age requirement</li>
                        <li>meet the minimum eyesight requirement</li>
                        <li>are not prevented from driving for medical or other reasons</li>
                        <li>have lived in the UK for at least 185 days in the last 12 months before your application</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div>
                      <h3 className="govuk-heading-m">How to apply</h3>
                      <p className="govuk-body">
                        You can apply online or by post. Online applications are usually processed within 1 week.
                      </p>
                      <p className="govuk-body">You'll need:</p>
                      <ul className="govuk-list govuk-list--bullet">
                        <li>identity documents (for example your passport)</li>
                        <li>addresses where you've lived for the last 3 years</li>
                        <li>your National Insurance number</li>
                        <li>to pay £34 by debit or credit card</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div>
                      <h3 className="govuk-heading-m">Contact us</h3>
                      <p className="govuk-body">
                        If you need help with your application, you can contact DVLA.
                      </p>
                      <div className="govuk-contact">
                        <p className="govuk-contact__title">DVLA</p>
                        <p className="govuk-contact__detail">Telephone: 0300 790 6801</p>
                        <p className="govuk-contact__detail">Monday to Friday, 8am to 7pm</p>
                        <p className="govuk-contact__detail">Saturday, 8am to 2pm</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="govuk-grid-row" id="services">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Popular services</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">Driving licence</h3>
                      <ul className="govuk-summary-card__actions">
                        <li className="govuk-summary-card__action">
                          <a className="govuk-link" href="#">Apply<span className="govuk-visually-hidden"> for driving licence</span></a>
                        </li>
                      </ul>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Apply for your first provisional driving licence</p>
                      <strong className="govuk-tag govuk-tag--blue">Most popular</strong>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">Passport</h3>
                      <ul className="govuk-summary-card__actions">
                        <li className="govuk-summary-card__action">
                          <a className="govuk-link" href="#">Apply<span className="govuk-visually-hidden"> for passport</span></a>
                        </li>
                      </ul>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Apply for or renew your British passport</p>
                      <strong className="govuk-tag govuk-tag--green">Available</strong>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">Universal Credit</h3>
                      <ul className="govuk-summary-card__actions">
                        <li className="govuk-summary-card__action">
                          <a className="govuk-link" href="#">Apply<span className="govuk-visually-hidden"> for Universal Credit</span></a>
                        </li>
                      </ul>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Apply for Universal Credit to help with living costs</p>
                      <strong className="govuk-tag govuk-tag--purple">Benefits</strong>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">Vehicle tax</h3>
                      <ul className="govuk-summary-card__actions">
                        <li className="govuk-summary-card__action">
                          <a className="govuk-link" href="#">Pay<span className="govuk-visually-hidden"> vehicle tax</span></a>
                        </li>
                      </ul>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Tax your vehicle and get a tax disc</p>
                      <strong className="govuk-tag govuk-tag--yellow">DVLA</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alert Section */}
          {showAlert && (
            <div className="govuk-notification-banner govuk-notification-banner--success" role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
              <div className="govuk-notification-banner__header">
                <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
                  Success
                </h2>
              </div>
              <div className="govuk-notification-banner__content">
                <p className="govuk-notification-banner__heading">
                  Your message has been sent successfully!
                </p>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <form onSubmit={handleSubmit} className="govuk-form">
                <fieldset className="govuk-fieldset">
                  <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                    <h2 className="govuk-fieldset__heading">Contact DVLA</h2>
                  </legend>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="name">
                      Full name
                    </label>
                    <input
                      className="govuk-input"
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="govuk-input"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="category">
                      What do you need help with?
                    </label>
                    <select
                      className="govuk-select"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="general">General enquiry</option>
                      <option value="licence">Driving licence</option>
                      <option value="vehicle">Vehicle registration</option>
                      <option value="medical">Medical enquiry</option>
                    </select>
                  </div>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="message">
                      Tell us more about your enquiry
                    </label>
                    <div className="govuk-hint">
                      Do not include personal information like your driving licence number or National Insurance number
                    </div>
                    <textarea
                      className="govuk-textarea"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <fieldset className="govuk-fieldset">
                    <legend className="govuk-fieldset__legend">
                      How would you prefer us to reply?
                    </legend>
                    <div className="govuk-radios govuk-radios--small">
                      <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="contact-email" name="contact" type="radio" value="email" />
                        <label className="govuk-label govuk-radios__label" htmlFor="contact-email">
                          Email
                        </label>
                      </div>
                      <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="contact-phone" name="contact" type="radio" value="phone" />
                        <label className="govuk-label govuk-radios__label" htmlFor="contact-phone">
                          Phone
                        </label>
                      </div>
                      <div className="govuk-radios__item">
                        <input className="govuk-radios__input" id="contact-post" name="contact" type="radio" value="post" />
                        <label className="govuk-label govuk-radios__label" htmlFor="contact-post">
                          Post
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div className="govuk-checkboxes">
                    <div className="govuk-checkboxes__item">
                      <input
                        className="govuk-checkboxes__input"
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                      />
                      <label className="govuk-label govuk-checkboxes__label" htmlFor="newsletter">
                        Send me emails about DVLA services
                      </label>
                    </div>
                    <div className="govuk-checkboxes__item">
                      <input
                        className="govuk-checkboxes__input"
                        id="agree"
                        name="agree"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={handleInputChange}
                      />
                      <label className="govuk-label govuk-checkboxes__label" htmlFor="agree">
                        I agree to the <a className="govuk-link" href="#">terms and conditions</a>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="govuk-button" data-module="govuk-button">
                    Send enquiry
                  </button>
                </fieldset>
              </form>
            </div>
          </div>

          {/* Basic Cards */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Before you start</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-half">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">What you need</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Identity documents, addresses for the last 3 years, and your National Insurance number.</p>
                      <a className="govuk-link" href="#">Check what documents you need</a>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-half">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">Fees</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">£34 for online applications. £43 if you apply by post.</p>
                      <a className="govuk-link" href="#">Check other ways to pay</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Table */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Government departments</h2>
              <p className="govuk-body">Contact details for departments that use this design system.</p>
              <table className="govuk-table">
                <thead className="govuk-table__head">
                  <tr className="govuk-table__row">
                    <th scope="col" className="govuk-table__header">Contact</th>
                    <th scope="col" className="govuk-table__header">Email</th>
                    <th scope="col" className="govuk-table__header">Department</th>
                    <th scope="col" className="govuk-table__header">Status</th>
                  </tr>
                </thead>
                <tbody className="govuk-table__body">
                  {departmentData.map((department) => (
                    <tr key={department.id} className="govuk-table__row">
                      <td className="govuk-table__cell">{department.name}</td>
                      <td className="govuk-table__cell">{department.email}</td>
                      <td className="govuk-table__cell">{department.department}</td>
                      <td className="govuk-table__cell">
                        <strong className={`govuk-tag ${
                          department.status === 'Active' ? 'govuk-tag--green' : 
                          department.status === 'On Leave' ? 'govuk-tag--yellow' : 
                          'govuk-tag--red'
                        }`}>
                          {department.status}
                        </strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alerts Section */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Service updates</h2>
              
              <div className="govuk-notification-banner govuk-notification-banner--success" role="alert">
                <div className="govuk-notification-banner__header">
                  <h2 className="govuk-notification-banner__title">Success</h2>
                </div>
                <div className="govuk-notification-banner__content">
                  <p className="govuk-notification-banner__heading">Your application has been submitted</p>
                  <p className="govuk-body">We've sent you a confirmation email.</p>
                </div>
              </div>

              <div className="govuk-inset-text">
                You can track your application progress using your reference number.
              </div>

              <div className="govuk-warning-text">
                <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
                <strong className="govuk-warning-text__text">
                  <span className="govuk-warning-text__assistive">Warning</span>
                  The service will be unavailable from 6pm on Friday to 6am on Monday for maintenance.
                </strong>
              </div>

              <div className="govuk-error-summary" role="alert">
                <h2 className="govuk-error-summary__title">There is a problem</h2>
                <div className="govuk-error-summary__body">
                  <p>Some online services are currently unavailable. You can still apply by post.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badges and Avatars */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Team Roles & Status</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-quarter">
                  <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #b1b4b6', borderRadius: '4px' }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      backgroundColor: '#1d70b8', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      margin: '0 auto 1rem'
                    }}>
                      SC
                    </div>
                    <h3 className="govuk-heading-s">Sarah Chen</h3>
                    <strong className="govuk-tag govuk-tag--blue">Lead Engineer</strong>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #b1b4b6', borderRadius: '4px' }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      backgroundColor: '#00703c', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      margin: '0 auto 1rem'
                    }}>
                      MJ
                    </div>
                    <h3 className="govuk-heading-s">Marcus Johnson</h3>
                    <strong className="govuk-tag govuk-tag--green">Designer</strong>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #b1b4b6', borderRadius: '4px' }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      backgroundColor: '#f47738', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      margin: '0 auto 1rem'
                    }}>
                      ER
                    </div>
                    <h3 className="govuk-heading-s">Elena Rodriguez</h3>
                    <strong className="govuk-tag govuk-tag--orange">Marketing</strong>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #b1b4b6', borderRadius: '4px' }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      backgroundColor: '#6f72af', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      margin: '0 auto 1rem'
                    }}>
                      DK
                    </div>
                    <h3 className="govuk-heading-s">David Kim</h3>
                    <strong className="govuk-tag govuk-tag--purple">Sales</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Project Progress</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-half">
                  <h3 className="govuk-heading-m">Cloud Migration</h3>
                  <div style={{ backgroundColor: '#f3f2f1', height: '20px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                    <div style={{ backgroundColor: '#00703c', height: '100%', width: '75%', borderRadius: '10px' }}></div>
                  </div>
                  <p className="govuk-body">75% Complete - On track for Q4 delivery</p>
                </div>
                <div className="govuk-grid-column-one-half">
                  <h3 className="govuk-heading-m">AI Implementation</h3>
                  <div style={{ backgroundColor: '#f3f2f1', height: '20px', borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem' }}>
                    <div style={{ backgroundColor: '#1d70b8', height: '100%', width: '45%', borderRadius: '10px' }}></div>
                  </div>
                  <p className="govuk-body">45% Complete - Ahead of schedule</p>
                </div>
              </div>
            </div>
          </div>

          {/* Static Tabs */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Technology Stack</h2>
              <div className="govuk-tabs" data-module="govuk-tabs">
                <ul className="govuk-tabs__list">
                  <li className="govuk-tabs__list-item">
                    <a className="govuk-tabs__tab govuk-tabs__tab--selected" href="#frontend">
                      Frontend
                    </a>
                  </li>
                  <li className="govuk-tabs__list-item">
                    <a className="govuk-tabs__tab" href="#backend">
                      Backend
                    </a>
                  </li>
                  <li className="govuk-tabs__list-item">
                    <a className="govuk-tabs__tab" href="#database">
                      Database
                    </a>
                  </li>
                </ul>
                <div className="govuk-tabs__panel" id="frontend">
                  <h3 className="govuk-heading-m">Frontend Technologies</h3>
                  <ul className="govuk-list govuk-list--bullet">
                    <li>React 18 with TypeScript</li>
                    <li>Next.js for SSR and routing</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Framer Motion for animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Company Gallery */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Company Gallery</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-third">
                  <div style={{ backgroundColor: '#f3f2f1', height: '200px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#626a6e', fontSize: '1.125rem' }}>Office Space</span>
                  </div>
                  <h3 className="govuk-heading-s">Modern Workspace</h3>
                  <p className="govuk-body">Our collaborative open-plan office designed for innovation and creativity.</p>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div style={{ backgroundColor: '#f3f2f1', height: '200px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#626a6e', fontSize: '1.125rem' }}>Team Meeting</span>
                  </div>
                  <h3 className="govuk-heading-s">Collaboration</h3>
                  <p className="govuk-body">Daily standups and sprint planning sessions that drive our agile development process.</p>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div style={{ backgroundColor: '#f3f2f1', height: '200px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#626a6e', fontSize: '1.125rem' }}>Tech Setup</span>
                  </div>
                  <h3 className="govuk-heading-s">Technology</h3>
                  <p className="govuk-body">State-of-the-art development environment with the latest tools and technologies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Dashboard */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Performance Dashboard</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">2.4M</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Active Users</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">$1.2M</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Revenue</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">127</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Projects</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">98.5%</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="govuk-grid-row" style={{ marginTop: '2rem' }}>
                <div className="govuk-grid-column-one-half">
                  <h3 className="govuk-heading-m">Performance Analytics</h3>
                  <div style={{ height: '300px', backgroundColor: '#f3f2f1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ThreeChart />
                  </div>
                </div>
                <div className="govuk-grid-column-one-half">
                  <h3 className="govuk-heading-m">Revenue Trends</h3>
                  <div style={{ height: '300px', backgroundColor: '#f3f2f1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <VanillaVisxChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="govuk-modal" style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              zIndex: 1000
            }}>
              <div className="govuk-panel govuk-panel--confirmation" style={{ 
                backgroundColor: 'white', 
                maxWidth: '500px', 
                margin: '20px' 
              }}>
                <h3 className="govuk-panel__title">Confirm Action</h3>
                <div className="govuk-panel__body">
                  <p className="govuk-body">Are you sure you want to proceed with this action? This will update your account settings and preferences.</p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                    <button 
                      className="govuk-button"
                      onClick={() => setShowModal(false)}
                    >
                      Confirm
                    </button>
                    <button 
                      className="govuk-button govuk-button--secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <button 
              className="govuk-button govuk-button--secondary" 
              onClick={() => setShowModal(true)}
            >
              Open Modal
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="govuk-footer" role="contentinfo">
          <div className="govuk-width-container">
            <div className="govuk-footer__meta">
              <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                <h2 className="govuk-visually-hidden">Support links</h2>
                <ul className="govuk-footer__inline-list">
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="#">Contact: hello@techcorp.com</a>
                  </li>
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="#">Phone: +1 (555) 123-4567</a>
                  </li>
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="#">Address: San Francisco, CA</a>
                  </li>
                </ul>
              </div>
              <div className="govuk-footer__meta-item">
                <a className="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
                  © Crown copyright
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};