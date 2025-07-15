import React, { useState } from 'react';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/canada-custom.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  language: 'en' | 'fr';
  newsletter: boolean;
}

export const CanadaComponents: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'fr'>('en');
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general',
    language: 'en',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(currentLanguage === 'en' ? 'Request submitted successfully!' : 'Demande soumise avec succès!');
    console.log('Form submitted:', formData);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'fr' : 'en');
  };

  const servicesData = [
    { 
      id: 1, 
      title: currentLanguage === 'en' ? 'Digital Services' : 'Services numériques', 
      description: currentLanguage === 'en' 
        ? 'Government digital transformation and online service delivery' 
        : 'Transformation numérique gouvernementale et prestation de services en ligne',
      icon: '💻',
      status: currentLanguage === 'en' ? 'Available' : 'Disponible'
    },
    { 
      id: 2, 
      title: currentLanguage === 'en' ? 'Accessibility Services' : 'Services d\'accessibilité', 
      description: currentLanguage === 'en'
        ? 'Web accessibility compliance and inclusive design solutions'
        : 'Conformité à l\'accessibilité Web et solutions de conception inclusive',
      icon: '♿',
      status: currentLanguage === 'en' ? 'Available' : 'Disponible'
    },
    { 
      id: 3, 
      title: currentLanguage === 'en' ? 'Bilingual Support' : 'Support bilingue', 
      description: currentLanguage === 'en'
        ? 'Official languages compliance and bilingual content management'
        : 'Conformité aux langues officielles et gestion de contenu bilingue',
      icon: '🇨🇦',
      status: currentLanguage === 'en' ? 'Active' : 'Actif'
    },
    { 
      id: 4, 
      title: currentLanguage === 'en' ? 'Open Government' : 'Gouvernement ouvert', 
      description: currentLanguage === 'en'
        ? 'Transparency initiatives and open data platform development'
        : 'Initiatives de transparence et développement de plateformes de données ouvertes',
      icon: '🔓',
      status: currentLanguage === 'en' ? 'Featured' : 'En vedette'
    }
  ];

  const teamData = [
    { 
      name: 'Sarah Wilson', 
      role: currentLanguage === 'en' ? 'Digital Director' : 'Directrice numérique', 
      email: 'sarah.wilson@canada.ca', 
      department: currentLanguage === 'en' ? 'Digital Transformation' : 'Transformation numérique'
    },
    { 
      name: 'Jean Tremblay', 
      role: currentLanguage === 'en' ? 'Senior Developer' : 'Développeur principal', 
      email: 'jean.tremblay@canada.ca', 
      department: currentLanguage === 'en' ? 'Development' : 'Développement'
    },
    { 
      name: 'Maria Rodriguez', 
      role: currentLanguage === 'en' ? 'UX Designer' : 'Conceptrice UX', 
      email: 'maria.rodriguez@canada.ca', 
      department: currentLanguage === 'en' ? 'Design' : 'Conception'
    },
    { 
      name: 'Robert Chen', 
      role: currentLanguage === 'en' ? 'Project Manager' : 'Gestionnaire de projet', 
      email: 'robert.chen@canada.ca', 
      department: currentLanguage === 'en' ? 'Project Management' : 'Gestion de projet'
    },
    { 
      name: 'Lisa Thompson', 
      role: currentLanguage === 'en' ? 'Quality Assurance' : 'Assurance qualité', 
      email: 'lisa.thompson@canada.ca', 
      department: currentLanguage === 'en' ? 'Quality' : 'Qualité'
    }
  ];

  const tabs = [
    { 
      id: 'about', 
      label: currentLanguage === 'en' ? 'About Us' : 'À propos de nous', 
      content: currentLanguage === 'en' ? 'Government services' : 'Services gouvernementaux'
    },
    { 
      id: 'services', 
      label: currentLanguage === 'en' ? 'Our Services' : 'Nos services', 
      content: currentLanguage === 'en' ? 'Citizen services' : 'Services aux citoyens'
    },
    { 
      id: 'team', 
      label: currentLanguage === 'en' ? 'Our Team' : 'Notre équipe', 
      content: currentLanguage === 'en' ? 'Dedicated team' : 'Équipe dévouée'
    },
    { 
      id: 'contact', 
      label: currentLanguage === 'en' ? 'Contact' : 'Contact', 
      content: currentLanguage === 'en' ? 'Get in touch' : 'Nous contacter'
    }
  ];

  const canadaColors = {
    primary: '#26374a',
    secondary: '#335075',
    background: '#f5f5f5',
    text: '#333333'
  };

  return (
    <div className="canada-container">
      {/* Header with Government of Canada branding */}
      <header className="canada-header">
        <div className="canada-header-top">
          <div className="canada-header-brand">
            <div className="canada-signature">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 147 60'%3E%3Cpath fill='%23ff0000' d='M73.5 22.5l-4.5 4.5v15l4.5 4.5h6l4.5-4.5v-15l-4.5-4.5h-6z'/%3E%3C/svg%3E" 
                alt="Government of Canada"
                className="canada-flag"
              />
              <div className="canada-signature-text">
                <div className="canada-title">
                  {currentLanguage === 'en' ? 'Government of Canada' : 'Gouvernement du Canada'}
                </div>
                <div className="canada-subtitle">
                  {currentLanguage === 'en' ? 'Gouvernement du Canada' : 'Government of Canada'}
                </div>
              </div>
            </div>
            <div className="canada-service-title">
              <h1>
                {currentLanguage === 'en' 
                  ? 'Digital Transformation Office' 
                  : 'Bureau de transformation numérique'}
              </h1>
              <p>
                {currentLanguage === 'en'
                  ? 'Improving digital government services for Canadians'
                  : 'Améliorer les services gouvernementaux numériques pour les Canadiens'}
              </p>
            </div>
          </div>
          
          <div className="canada-header-tools">
            <button 
              className="canada-language-toggle"
              onClick={toggleLanguage}
            >
              {currentLanguage === 'en' ? 'Français' : 'English'}
            </button>
            <button className="canada-btn canada-btn--secondary">
              {currentLanguage === 'en' ? 'Sign in' : 'Ouvrir une session'}
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="canada-breadcrumb">
        <div className="canada-breadcrumb-list">
          <a href="#" className="canada-breadcrumb-link">
            {currentLanguage === 'en' ? 'Canada.ca' : 'Canada.ca'}
          </a>
          <a href="#" className="canada-breadcrumb-link">
            {currentLanguage === 'en' ? 'Government' : 'Gouvernement'}
          </a>
          <span className="canada-breadcrumb-current">
            {currentLanguage === 'en' ? 'Digital services' : 'Services numériques'}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="canada-hero">
        <div className="canada-hero-content">
          <h1 className="canada-hero-title">
            {currentLanguage === 'en'
              ? 'Delivering better digital services for Canadians'
              : 'Offrir de meilleurs services numériques aux Canadiens'}
          </h1>
          <p className="canada-hero-description">
            {currentLanguage === 'en'
              ? 'The Digital Transformation Office works with federal departments to improve how government delivers digital services to Canadians.'
              : 'Le Bureau de transformation numérique travaille avec les ministères fédéraux pour améliorer la façon dont le gouvernement offre des services numériques aux Canadiens.'}
          </p>
          <div className="canada-hero-actions">
            <button className="canada-btn canada-btn--super">
              {currentLanguage === 'en' ? 'Start your application' : 'Commencer votre demande'}
            </button>
            <button className="canada-btn canada-btn--secondary">
              {currentLanguage === 'en' ? 'Learn more' : 'En savoir plus'}
            </button>
          </div>
        </div>
      </section>

      <div className="canada-main-content">
        {/* Navigation Tabs */}
        <div className="canada-tabs">
          <div className="canada-tabs-list">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`canada-tab ${index === activeTab ? 'canada-tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="canada-tab-content">
            {activeTab === 0 && (
              <div className="canada-tab-panel">
                <h2>{currentLanguage === 'en' ? 'About our mission' : 'À propos de notre mission'}</h2>
                <p>
                  {currentLanguage === 'en'
                    ? 'The Digital Transformation Office (DTO) is dedicated to improving how the Government of Canada delivers digital services. We work collaboratively with departments and agencies to ensure Canadians can easily access government services online.'
                    : 'Le Bureau de transformation numérique (BTN) se consacre à améliorer la façon dont le gouvernement du Canada offre des services numériques. Nous travaillons en collaboration avec les ministères et organismes pour que les Canadiens puissent facilement accéder aux services gouvernementaux en ligne.'}
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="canada-tab-panel">
                <h2>{currentLanguage === 'en' ? 'Our services to departments' : 'Nos services aux ministères'}</h2>
                <p>
                  {currentLanguage === 'en'
                    ? 'We provide guidance, tools, and support to help federal departments create user-centered digital services that meet the Canada.ca design standards and accessibility requirements.'
                    : 'Nous fournissons des conseils, des outils et du soutien pour aider les ministères fédéraux à créer des services numériques centrés sur l\'utilisateur qui respectent les normes de conception de Canada.ca et les exigences d\'accessibilité.'}
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="canada-tab-panel">
                <h2>{currentLanguage === 'en' ? 'Our multidisciplinary team' : 'Notre équipe multidisciplinaire'}</h2>
                <p>
                  {currentLanguage === 'en'
                    ? 'Our team includes user experience designers, developers, content strategists, and policy experts who work together to improve government digital services.'
                    : 'Notre équipe comprend des concepteurs d\'expérience utilisateur, des développeurs, des stratèges de contenu et des experts en politiques qui travaillent ensemble pour améliorer les services numériques gouvernementaux.'}
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="canada-tab-panel">
                <h2>{currentLanguage === 'en' ? 'Get in touch' : 'Nous contacter'}</h2>
                <p>
                  {currentLanguage === 'en'
                    ? 'Contact us for guidance on digital service delivery, user research, or Canada.ca design standards implementation.'
                    : 'Contactez-nous pour obtenir des conseils sur la prestation de services numériques, la recherche sur les utilisateurs ou la mise en œuvre des normes de conception de Canada.ca.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <section className="canada-services-section">
          <h2 className="canada-section-title">
            {currentLanguage === 'en' ? 'Our areas of expertise' : 'Nos domaines d\'expertise'}
          </h2>
          <div className="canada-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="canada-card">
                <div className="canada-card-header">
                  <div className="canada-card-icon">{service.icon}</div>
                  <div className="canada-card-status">
                    <span className={`canada-badge ${
                      service.status === 'Available' || service.status === 'Disponible' ? 'canada-badge--success' :
                      service.status === 'Active' || service.status === 'Actif' ? 'canada-badge--info' : 
                      'canada-badge--featured'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <div className="canada-card-body">
                  <h3 className="canada-card-title">{service.title}</h3>
                  <p className="canada-card-description">{service.description}</p>
                </div>
                <div className="canada-card-footer">
                  <button className="canada-btn canada-btn--primary">
                    {currentLanguage === 'en' ? 'Learn more' : 'En savoir plus'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="canada-form-section">
          <h2 className="canada-section-title">
            {currentLanguage === 'en' ? 'Request support' : 'Demander du soutien'}
          </h2>
          <form onSubmit={handleSubmit} className="canada-form">
            <div className="canada-form-group">
              <label className="canada-label" htmlFor="name">
                {currentLanguage === 'en' ? 'Full name' : 'Nom complet'} *
              </label>
              <input
                type="text"
                id="name"
                className="canada-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="canada-form-group">
              <label className="canada-label" htmlFor="email">
                {currentLanguage === 'en' ? 'Government email address' : 'Adresse courriel gouvernementale'} *
              </label>
              <input
                type="email"
                id="email"
                className="canada-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="canada-form-group">
              <label className="canada-label" htmlFor="phone">
                {currentLanguage === 'en' ? 'Phone number' : 'Numéro de téléphone'}
              </label>
              <input
                type="tel"
                id="phone"
                className="canada-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="canada-form-group">
              <label className="canada-label" htmlFor="service">
                {currentLanguage === 'en' ? 'Type of request' : 'Type de demande'} *
              </label>
              <select
                id="service"
                className="canada-select"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                required
              >
                <option value="general">
                  {currentLanguage === 'en' ? 'General inquiry' : 'Demande générale'}
                </option>
                <option value="digital">
                  {currentLanguage === 'en' ? 'Digital services' : 'Services numériques'}
                </option>
                <option value="accessibility">
                  {currentLanguage === 'en' ? 'Accessibility' : 'Accessibilité'}
                </option>
                <option value="design">
                  {currentLanguage === 'en' ? 'Design system' : 'Système de design'}
                </option>
                <option value="support">
                  {currentLanguage === 'en' ? 'Technical support' : 'Support technique'}
                </option>
              </select>
            </div>

            <div className="canada-form-group">
              <label className="canada-label" htmlFor="message">
                {currentLanguage === 'en' ? 'Project description' : 'Description du projet'} *
              </label>
              <textarea
                id="message"
                className="canada-textarea"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder={currentLanguage === 'en' 
                  ? 'Describe your project, needs, and timeline...'
                  : 'Décrivez votre projet, vos besoins et votre calendrier...'}
                required
              ></textarea>
            </div>

            <div className="canada-form-group">
              <div className="canada-checkbox">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="canada-checkbox-input"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label className="canada-checkbox-label" htmlFor="newsletter">
                  {currentLanguage === 'en'
                    ? 'I would like to receive updates about digital government initiatives'
                    : 'J\'aimerais recevoir des mises à jour sur les initiatives de gouvernement numérique'}
                </label>
              </div>
            </div>

            <div className="canada-form-actions">
              <button type="submit" className="canada-btn canada-btn--primary">
                {currentLanguage === 'en' ? 'Submit request' : 'Soumettre la demande'}
              </button>
              <button type="button" className="canada-btn canada-btn--secondary">
                {currentLanguage === 'en' ? 'Cancel' : 'Annuler'}
              </button>
            </div>
          </form>
        </section>

        {/* Team Table */}
        <section className="canada-team-section">
          <h2 className="canada-section-title">
            {currentLanguage === 'en' ? 'Our team directory' : 'Annuaire de notre équipe'}
          </h2>
          <div className="canada-table-wrapper">
            <table className="canada-table">
              <thead>
                <tr>
                  <th>{currentLanguage === 'en' ? 'Name' : 'Nom'}</th>
                  <th>{currentLanguage === 'en' ? 'Role' : 'Rôle'}</th>
                  <th>{currentLanguage === 'en' ? 'Email' : 'Courriel'}</th>
                  <th>{currentLanguage === 'en' ? 'Department' : 'Ministère'}</th>
                  <th>{currentLanguage === 'en' ? 'Actions' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((member, index) => (
                  <tr key={index}>
                    <td className="canada-table-cell--name">{member.name}</td>
                    <td>{member.role}</td>
                    <td>
                      <a href={`mailto:${member.email}`} className="canada-link">
                        {member.email}
                      </a>
                    </td>
                    <td>
                      <span className="canada-badge canada-badge--info">
                        {member.department}
                      </span>
                    </td>
                    <td>
                      <button className="canada-btn canada-btn--link">
                        {currentLanguage === 'en' ? 'Contact' : 'Contacter'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="canada-charts-section">
          <h2 className="canada-section-title">
            {currentLanguage === 'en' ? 'Performance indicators' : 'Indicateurs de performance'}
          </h2>
          
          <div className="canada-stats-grid">
            <div className="canada-stat-card">
              <div className="canada-stat-number">150+</div>
              <div className="canada-stat-label">
                {currentLanguage === 'en' ? 'Projects delivered' : 'Projets livrés'}
              </div>
            </div>
            <div className="canada-stat-card">
              <div className="canada-stat-number">38M</div>
              <div className="canada-stat-label">
                {currentLanguage === 'en' ? 'Canadians served' : 'Canadiens servis'}
              </div>
            </div>
            <div className="canada-stat-card">
              <div className="canada-stat-number">98%</div>
              <div className="canada-stat-label">
                {currentLanguage === 'en' ? 'Accessibility compliance' : 'Conformité accessibilité'}
              </div>
            </div>
            <div className="canada-stat-card">
              <div className="canada-stat-number">24/7</div>
              <div className="canada-stat-label">
                {currentLanguage === 'en' ? 'Service availability' : 'Disponibilité service'}
              </div>
            </div>
          </div>

          <div className="canada-charts-grid">
            <div className="canada-chart-container">
              <h3>{currentLanguage === 'en' ? 'Service usage (3D)' : 'Utilisation des services (3D)'}</h3>
              <ThreeChart />
            </div>
            <div className="canada-chart-container">
              <h3>{currentLanguage === 'en' ? 'Performance metrics' : 'Métriques de performance'}</h3>
              <VisxChart 
                width={400}
                height={300}
                colors={canadaColors}
                designSystem="Canada.ca"
              />
            </div>
            <div className="canada-chart-container">
              <h3>{currentLanguage === 'en' ? 'User satisfaction' : 'Satisfaction des utilisateurs'}</h3>
              <VanillaVisxChart width={400} height={300} />
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="canada-alerts-section">
          <div className="canada-alert canada-alert--success">
            <h3 className="canada-alert-title">
              {currentLanguage === 'en' ? 'Success' : 'Succès'}
            </h3>
            <p>
              {currentLanguage === 'en' 
                ? 'Your request has been processed successfully.'
                : 'Votre demande a été traitée avec succès.'}
            </p>
          </div>
          
          <div className="canada-alert canada-alert--info">
            <h3 className="canada-alert-title">
              {currentLanguage === 'en' ? 'Information' : 'Information'}
            </h3>
            <p>
              {currentLanguage === 'en'
                ? 'New accessibility guidelines are now available.'
                : 'De nouvelles directives d\'accessibilité sont maintenant disponibles.'}
            </p>
          </div>
          
          <div className="canada-alert canada-alert--warning">
            <h3 className="canada-alert-title">
              {currentLanguage === 'en' ? 'Warning' : 'Avertissement'}
            </h3>
            <p>
              {currentLanguage === 'en'
                ? 'Scheduled maintenance this weekend.'
                : 'Maintenance prévue cette fin de semaine.'}
            </p>
          </div>
          
          <div className="canada-alert canada-alert--danger">
            <h3 className="canada-alert-title">
              {currentLanguage === 'en' ? 'Important' : 'Important'}
            </h3>
            <p>
              {currentLanguage === 'en'
                ? 'Action required: Please update your security settings.'
                : 'Action requise : Veuillez mettre à jour vos paramètres de sécurité.'}
            </p>
          </div>
        </section>

        {/* Modal Demo */}
        <div className="canada-modal-section">
          <button 
            className="canada-btn canada-btn--primary" 
            onClick={() => setModalOpen(true)}
          >
            {currentLanguage === 'en' ? 'Open dialog' : 'Ouvrir le dialogue'}
          </button>
          
          {modalOpen && (
            <div className="canada-modal canada-modal--open">
              <div className="canada-modal-backdrop" onClick={() => setModalOpen(false)}></div>
              <div className="canada-modal-content">
                <div className="canada-modal-header">
                  <h3 className="canada-modal-title">
                    {currentLanguage === 'en' ? 'Confirmation' : 'Confirmation'}
                  </h3>
                  <button 
                    className="canada-modal-close" 
                    onClick={() => setModalOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="canada-modal-body">
                  <p>
                    {currentLanguage === 'en'
                      ? 'Are you sure you want to continue with this action? This operation cannot be undone.'
                      : 'Êtes-vous sûr de vouloir continuer cette action ? Cette opération ne peut pas être annulée.'}
                  </p>
                </div>
                <div className="canada-modal-footer">
                  <button 
                    className="canada-btn canada-btn--secondary" 
                    onClick={() => setModalOpen(false)}
                  >
                    {currentLanguage === 'en' ? 'Cancel' : 'Annuler'}
                  </button>
                  <button 
                    className="canada-btn canada-btn--primary" 
                    onClick={() => setModalOpen(false)}
                  >
                    {currentLanguage === 'en' ? 'Confirm' : 'Confirmer'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="canada-footer">
        <div className="canada-footer-body">
          <div className="canada-footer-brand">
            <div className="canada-footer-signature">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 147 60'%3E%3Cpath fill='%23ff0000' d='M73.5 22.5l-4.5 4.5v15l4.5 4.5h6l4.5-4.5v-15l-4.5-4.5h-6z'/%3E%3C/svg%3E" 
                alt="Symbol of the Government of Canada"
                className="canada-footer-flag"
              />
              <div className="canada-footer-text">
                {currentLanguage === 'en' ? 'Government of Canada' : 'Gouvernement du Canada'}
              </div>
            </div>
          </div>
          
          <div className="canada-footer-content">
            <div className="canada-footer-links">
              <h4>{currentLanguage === 'en' ? 'Government' : 'Gouvernement'}</h4>
              <ul>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'Contact government' : 'Contactez le gouvernement'}
                  </a>
                </li>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'Departments and agencies' : 'Ministères et organismes'}
                  </a>
                </li>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'Public service and military' : 'Service public et militaire'}
                  </a>
                </li>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'News' : 'Nouvelles'}
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="canada-footer-links">
              <h4>{currentLanguage === 'en' ? 'About government' : 'À propos du gouvernement'}</h4>
              <ul>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'Government system' : 'Système de gouvernement'}
                  </a>
                </li>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'How government works' : 'Comment le gouvernement fonctionne'}
                  </a>
                </li>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'Prime Minister' : 'Premier ministre'}
                  </a>
                </li>
                <li>
                  <a href="#" className="canada-footer-link">
                    {currentLanguage === 'en' ? 'Transparency' : 'Transparence'}
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="canada-footer-links">
              <h4>{currentLanguage === 'en' ? 'Contact' : 'Contact'}</h4>
              <ul>
                <li>
                  <a href="mailto:dto-btn@tbs-sct.gc.ca" className="canada-footer-link">
                    dto-btn@tbs-sct.gc.ca
                  </a>
                </li>
                <li>
                  <a href="tel:+18009622623" className="canada-footer-link">
                    1-800-962-2623
                  </a>
                </li>
                <li>
                  <span className="canada-footer-link">
                    {currentLanguage === 'en' 
                      ? '90 Elgin Street, Ottawa, ON'
                      : '90, rue Elgin, Ottawa, ON'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="canada-footer-bottom">
          <div className="canada-footer-legal">
            <a href="#" className="canada-footer-link">
              {currentLanguage === 'en' ? 'Social media' : 'Médias sociaux'}
            </a>
            <a href="#" className="canada-footer-link">
              {currentLanguage === 'en' ? 'Mobile applications' : 'Applications mobiles'}
            </a>
            <a href="#" className="canada-footer-link">
              {currentLanguage === 'en' ? 'About Canada.ca' : 'À propos de Canada.ca'}
            </a>
            <a href="#" className="canada-footer-link">
              {currentLanguage === 'en' ? 'Terms and conditions' : 'Avis'}
            </a>
            <a href="#" className="canada-footer-link">
              {currentLanguage === 'en' ? 'Privacy' : 'Confidentialité'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};