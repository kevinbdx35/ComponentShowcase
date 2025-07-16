import React, { useState } from 'react';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/dsfr-custom.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  newsletter: boolean;
}

export const DSFRComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'generale',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demande envoyée avec succès!');
    console.log('Form submitted:', formData);
  };

  const servicesData = [
    { 
      id: 1, 
      title: 'Transformation numérique', 
      description: 'Modernisation des services publics et accompagnement dans la transition numérique',
      icon: '💻',
      status: 'Disponible'
    },
    { 
      id: 2, 
      title: 'Accessibilité numérique', 
      description: 'Audit et amélioration de l\'accessibilité selon les standards RGAA',
      icon: '♿',
      status: 'Disponible'
    },
    { 
      id: 3, 
      title: 'Sécurité des données', 
      description: 'Mise en conformité RGPD et sécurisation des systèmes d\'information',
      icon: '🔒',
      status: 'En cours'
    },
    { 
      id: 4, 
      title: 'Innovation publique', 
      description: 'Laboratoire d\'innovation et développement de solutions citoyennes',
      icon: '🚀',
      status: 'Nouveauté'
    }
  ];

  const teamData = [
    { name: 'Marie Dubois', role: 'Directrice technique', email: 'marie.dubois@gouv.fr', department: 'Direction' },
    { name: 'Pierre Martin', role: 'Développeur senior', email: 'pierre.martin@gouv.fr', department: 'Développement' },
    { name: 'Sophie Leroy', role: 'UX Designer', email: 'sophie.leroy@gouv.fr', department: 'Design' },
    { name: 'Thomas Moreau', role: 'Chef de projet', email: 'thomas.moreau@gouv.fr', department: 'Projet' },
    { name: 'Julie Bernard', role: 'Responsable qualité', email: 'julie.bernard@gouv.fr', department: 'Qualité' }
  ];

  const tabs = [
    { id: 'mission', label: 'Notre mission', content: 'Mission de service public' },
    { id: 'services', label: 'Nos services', content: 'Services aux citoyens' },
    { id: 'equipe', label: 'Notre équipe', content: 'Équipe pluridisciplinaire' },
    { id: 'contact', label: 'Contact', content: 'Nous contacter' }
  ];

  const dsfrColors = {
    primary: '#000091',
    secondary: '#6A6AF4',
    background: '#F6F6F6',
    text: '#161616'
  };

  return (
    <div className="dsfr-container">
      {/* Header avec Marianne */}
      <header className="dsfr-header">
        <div className="dsfr-header-body">
          <div className="dsfr-header-brand">
            <div className="dsfr-header-brand-top">
              <div className="dsfr-logo">
                <p className="dsfr-logo-title">
                  République<br />
                  Française
                </p>
              </div>
              <div className="dsfr-header-operator">
                <span className="dsfr-operator-name">Ministère de la Transformation Numérique</span>
              </div>
            </div>
            <div className="dsfr-header-service">
              <h1 className="dsfr-header-service-title">
                Direction Interministérielle du Numérique
              </h1>
              <p className="dsfr-header-service-tagline">
                Service public de la transformation digitale
              </p>
            </div>
          </div>
          <div className="dsfr-header-tools">
            <button className="dsfr-btn dsfr-btn--secondary">
              Se connecter
            </button>
          </div>
        </div>
      </header>

      {/* Bandeau phase */}
      <div className="dsfr-notice dsfr-notice--info">
        <div className="dsfr-notice-body">
          <p className="dsfr-notice-title">
            Version bêta
          </p>
          <p>
            Ce site est en cours de développement. Certaines fonctionnalités peuvent être instables.
          </p>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="dsfr-nav">
        <div className="dsfr-nav-list">
          <a href="#accueil" className="dsfr-nav-link dsfr-nav-link--active">
            Accueil
          </a>
          <a href="#services" className="dsfr-nav-link">
            Services
          </a>
          <a href="#projets" className="dsfr-nav-link">
            Projets
          </a>
          <a href="#ressources" className="dsfr-nav-link">
            Ressources
          </a>
          <a href="#contact" className="dsfr-nav-link">
            Contact
          </a>
        </div>
      </nav>

      {/* Fil d'Ariane */}
      <nav className="dsfr-breadcrumb">
        <div className="dsfr-breadcrumb-list">
          <a href="#" className="dsfr-breadcrumb-link">Accueil</a>
          <a href="#" className="dsfr-breadcrumb-link">Services</a>
          <span className="dsfr-breadcrumb-current">Transformation numérique</span>
        </div>
      </nav>

      {/* Section Hero */}
      <section className="dsfr-hero">
        <div className="dsfr-hero-content">
          <h1 className="dsfr-hero-title">
            Accélérer la transformation numérique du service public
          </h1>
          <p className="dsfr-hero-description">
            La Direction Interministérielle du Numérique accompagne les administrations dans leur 
            modernisation technologique pour un service public plus efficace et accessible.
          </p>
          <div className="dsfr-hero-actions">
            <button className="dsfr-btn dsfr-btn--primary dsfr-btn--lg">
              Découvrir nos services
            </button>
            <button className="dsfr-btn dsfr-btn--secondary dsfr-btn--lg">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      <div className="dsfr-main-content">
        {/* Onglets */}
        <div className="dsfr-tabs">
          <div className="dsfr-tabs-list">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`dsfr-tab ${index === activeTab ? 'dsfr-tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="dsfr-tab-content">
            {activeTab === 0 && (
              <div className="dsfr-tab-panel">
                <h2>Notre mission de service public</h2>
                <p>
                  La Direction Interministérielle du Numérique (DINUM) pilote la transformation 
                  numérique de l'État français. Nous accompagnons les administrations dans leur 
                  modernisation pour offrir aux citoyens des services publics numériques simples, 
                  efficaces et accessibles.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="dsfr-tab-panel">
                <h2>Nos services aux administrations</h2>
                <p>
                  Nous proposons un ensemble de services pour accompagner la transformation numérique : 
                  conseil stratégique, développement d'applications, hébergement cloud, formation des agents, 
                  et mise en conformité avec les standards du numérique public.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="dsfr-tab-panel">
                <h2>Notre équipe pluridisciplinaire</h2>
                <p>
                  Composée d'experts en technologie, design, stratégie et conduite du changement, 
                  notre équipe travaille au quotidien pour moderniser l'administration française 
                  et améliorer l'expérience des usagers.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="dsfr-tab-panel">
                <h2>Nous contacter</h2>
                <p>
                  Pour toute demande d'accompagnement ou d'information sur nos services, 
                  n'hésitez pas à nous contacter. Nos équipes sont à votre disposition pour 
                  étudier vos besoins et vous proposer des solutions adaptées.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Grille des services */}
        <section className="dsfr-services-section">
          <h2 className="dsfr-section-title">Nos domaines d'expertise</h2>
          <div className="dsfr-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="dsfr-card">
                <div className="dsfr-card-header">
                  <div className="dsfr-card-icon">{service.icon}</div>
                  <div className="dsfr-card-status">
                    <span className={`dsfr-badge ${
                      service.status === 'Disponible' ? 'dsfr-badge--success' :
                      service.status === 'En cours' ? 'dsfr-badge--warning' : 'dsfr-badge--info'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <div className="dsfr-card-body">
                  <h3 className="dsfr-card-title">{service.title}</h3>
                  <p className="dsfr-card-description">{service.description}</p>
                </div>
                <div className="dsfr-card-footer">
                  <button className="dsfr-btn dsfr-btn--primary">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className="dsfr-form-section">
          <h2 className="dsfr-section-title">Demande d'accompagnement</h2>
          <form onSubmit={handleSubmit} className="dsfr-form">
            <div className="dsfr-form-group">
              <label className="dsfr-label" htmlFor="name">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                className="dsfr-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="dsfr-form-group">
              <label className="dsfr-label" htmlFor="email">
                Adresse e-mail professionnelle *
              </label>
              <input
                type="email"
                id="email"
                className="dsfr-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="dsfr-form-group">
              <label className="dsfr-label" htmlFor="phone">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                className="dsfr-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="dsfr-form-group">
              <label className="dsfr-label" htmlFor="service">
                Type de demande *
              </label>
              <select
                id="service"
                className="dsfr-select"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                required
              >
                <option value="generale">Demande générale</option>
                <option value="transformation">Transformation numérique</option>
                <option value="accessibilite">Accessibilité</option>
                <option value="securite">Sécurité</option>
                <option value="innovation">Innovation</option>
              </select>
            </div>

            <div className="dsfr-form-group">
              <label className="dsfr-label" htmlFor="message">
                Description de votre projet *
              </label>
              <textarea
                id="message"
                className="dsfr-textarea"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                required
              ></textarea>
            </div>

            <div className="dsfr-form-group">
              <div className="dsfr-checkbox">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="dsfr-checkbox-input"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label className="dsfr-checkbox-label" htmlFor="newsletter">
                  J'accepte de recevoir des informations sur les actualités de la DINUM
                </label>
              </div>
            </div>

            <div className="dsfr-form-actions">
              <button type="submit" className="dsfr-btn dsfr-btn--primary">
                Envoyer la demande
              </button>
              <button type="button" className="dsfr-btn dsfr-btn--secondary">
                Annuler
              </button>
            </div>
          </form>
        </section>

        {/* Tableau des équipes */}
        <section className="dsfr-team-section">
          <h2 className="dsfr-section-title">Notre équipe</h2>
          <div className="dsfr-table-wrapper">
            <table className="dsfr-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Rôle</th>
                  <th>E-mail</th>
                  <th>Département</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((member, index) => (
                  <tr key={index}>
                    <td className="dsfr-table-cell--name">{member.name}</td>
                    <td>{member.role}</td>
                    <td>
                      <a href={`mailto:${member.email}`} className="dsfr-link">
                        {member.email}
                      </a>
                    </td>
                    <td>
                      <span className="dsfr-badge dsfr-badge--info">
                        {member.department}
                      </span>
                    </td>
                    <td>
                      <button className="dsfr-btn dsfr-btn--sm">
                        Contacter
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Graphiques */}
        <section className="dsfr-charts-section">
          <h2 className="dsfr-section-title">Indicateurs de performance</h2>
          
          <div className="dsfr-stats-grid">
            <div className="dsfr-stat-card">
              <div className="dsfr-stat-number">250+</div>
              <div className="dsfr-stat-label">Projets accompagnés</div>
            </div>
            <div className="dsfr-stat-card">
              <div className="dsfr-stat-number">15M</div>
              <div className="dsfr-stat-label">Usagers touchés</div>
            </div>
            <div className="dsfr-stat-card">
              <div className="dsfr-stat-number">95%</div>
              <div className="dsfr-stat-label">Satisfaction client</div>
            </div>
            <div className="dsfr-stat-card">
              <div className="dsfr-stat-number">24/7</div>
              <div className="dsfr-stat-label">Support technique</div>
            </div>
          </div>

          <div className="dsfr-charts-grid">
            <div className="dsfr-chart-container">
              <h3>Évolution des projets (3D)</h3>
              <ThreeChart />
            </div>
            <div className="dsfr-chart-container">
              <h3>Métriques de performance</h3>
              <VisxChart 
                width={400}
                height={300}
                colors={dsfrColors}
                designSystem="DSFR"
              />
            </div>
            <div className="dsfr-chart-container">
              <h3>Indicateurs clés</h3>
              <VanillaVisxChart width={400} height={300} />
            </div>
          </div>
        </section>

        {/* Simple Cards */}
        <section className="dsfr-cards-section">
          <h2 className="dsfr-section-title">Cartes simples</h2>
          <div className="dsfr-grid">
            <div className="dsfr-card">
              <div className="dsfr-card-body">
                <h3 className="dsfr-card-title">Démarche administrative</h3>
                <p className="dsfr-card-description">
                  Consultez les différentes démarches administratives disponibles en ligne.
                </p>
                <button className="dsfr-btn dsfr-btn--primary">Consulter</button>
              </div>
            </div>
            <div className="dsfr-card">
              <div className="dsfr-card-body">
                <h3 className="dsfr-card-title">Aide et support</h3>
                <p className="dsfr-card-description">
                  Trouvez de l'aide et des ressources pour vos questions administratives.
                </p>
                <button className="dsfr-btn dsfr-btn--secondary">En savoir plus</button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Avatars */}
        <section className="dsfr-badges-section">
          <h2 className="dsfr-section-title">Badges et avatars</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dsfr-spacing-4)', flexWrap: 'wrap', marginBottom: 'var(--dsfr-spacing-6)' }}>
            <span className="dsfr-badge dsfr-badge--success">En ligne</span>
            <span className="dsfr-badge dsfr-badge--info">Nouveau</span>
            <span className="dsfr-badge dsfr-badge--warning">Maintenance</span>
            <span className="dsfr-badge dsfr-badge--error">Indisponible</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dsfr-spacing-4)', flexWrap: 'wrap' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--dsfr-blue-france)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              fontWeight: 'bold'
            }}>JD</div>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--dsfr-green-emeraude)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              fontWeight: 'bold'
            }}>ML</div>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--dsfr-red-marianne)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              fontWeight: 'bold'
            }}>AD</div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="dsfr-progress-section">
          <h2 className="dsfr-section-title">Barres de progression</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--dsfr-spacing-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--dsfr-spacing-2)' }}>
                <span>Dématérialisation des services</span>
                <span>75%</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: 'var(--dsfr-grey-200)', 
                borderRadius: 'var(--dsfr-border-radius)',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '75%', 
                  height: '100%', 
                  backgroundColor: 'var(--dsfr-blue-france)', 
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
            <div style={{ marginBottom: 'var(--dsfr-spacing-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--dsfr-spacing-2)' }}>
                <span>Accessibilité numérique</span>
                <span>92%</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: 'var(--dsfr-grey-200)', 
                borderRadius: 'var(--dsfr-border-radius)',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '92%', 
                  height: '100%', 
                  backgroundColor: 'var(--dsfr-green-emeraude)', 
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs simples */}
        <section className="dsfr-tabs-simple-section">
          <h2 className="dsfr-section-title">Onglets simples</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ borderBottom: '1px solid var(--dsfr-grey-300)', marginBottom: 'var(--dsfr-spacing-4)' }}>
              <div style={{ display: 'flex', gap: '0' }}>
                <button style={{ 
                  padding: 'var(--dsfr-spacing-3) var(--dsfr-spacing-4)', 
                  border: 'none', 
                  borderBottom: '2px solid var(--dsfr-blue-france)', 
                  backgroundColor: 'transparent',
                  color: 'var(--dsfr-blue-france)',
                  fontWeight: 'bold'
                }}>
                  Services
                </button>
                <button style={{ 
                  padding: 'var(--dsfr-spacing-3) var(--dsfr-spacing-4)', 
                  border: 'none', 
                  backgroundColor: 'transparent',
                  color: 'var(--dsfr-grey-600)'
                }}>
                  Documentation
                </button>
                <button style={{ 
                  padding: 'var(--dsfr-spacing-3) var(--dsfr-spacing-4)', 
                  border: 'none', 
                  backgroundColor: 'transparent',
                  color: 'var(--dsfr-grey-600)'
                }}>
                  Support
                </button>
              </div>
            </div>
            <div style={{ padding: 'var(--dsfr-spacing-4) 0' }}>
              <p>Contenu de l'onglet Services. Découvrez tous les services numériques disponibles.</p>
            </div>
          </div>
        </section>

        {/* Company Gallery */}
        <section className="dsfr-gallery-section">
          <h2 className="dsfr-section-title">Notre environnement de travail</h2>
          <div className="dsfr-grid">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--dsfr-border-radius-lg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop" 
                alt="Bureaux modernes" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
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
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Espaces de travail</h4>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Bureaux modernes et collaboratifs</p>
              </div>
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--dsfr-border-radius-lg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop" 
                alt="Collaboration équipe" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
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
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Collaboration</h4>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Innovation par l'équipe</p>
              </div>
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--dsfr-border-radius-lg)' }}>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" 
                alt="Développement technologique" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
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
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Développement</h4>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Outils de pointe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alertes */}
        <section className="dsfr-alerts-section">
          <div className="dsfr-alert dsfr-alert--success">
            <p className="dsfr-alert-title">Succès</p>
            <p>Votre demande a été traitée avec succès.</p>
          </div>
          
          <div className="dsfr-alert dsfr-alert--info">
            <p className="dsfr-alert-title">Information</p>
            <p>Nouvelle version du système de design disponible.</p>
          </div>
          
          <div className="dsfr-alert dsfr-alert--warning">
            <p className="dsfr-alert-title">Attention</p>
            <p>Maintenance programmée ce week-end.</p>
          </div>
          
          <div className="dsfr-alert dsfr-alert--error">
            <p className="dsfr-alert-title">Erreur</p>
            <p>Une erreur s'est produite lors du traitement.</p>
          </div>
        </section>

        {/* Modale */}
        <div className="dsfr-modal-section">
          <button 
            className="dsfr-btn dsfr-btn--primary" 
            onClick={() => setModalOpen(true)}
          >
            Ouvrir la modale
          </button>
          
          {modalOpen && (
            <div className="dsfr-modal dsfr-modal--open">
              <div className="dsfr-modal-backdrop" onClick={() => setModalOpen(false)}></div>
              <div className="dsfr-modal-content">
                <div className="dsfr-modal-header">
                  <h3 className="dsfr-modal-title">Confirmation</h3>
                  <button 
                    className="dsfr-modal-close" 
                    onClick={() => setModalOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="dsfr-modal-body">
                  <p>
                    Êtes-vous sûr de vouloir continuer cette action ? Cette opération 
                    ne peut pas être annulée.
                  </p>
                </div>
                <div className="dsfr-modal-footer">
                  <button 
                    className="dsfr-btn dsfr-btn--secondary" 
                    onClick={() => setModalOpen(false)}
                  >
                    Annuler
                  </button>
                  <button 
                    className="dsfr-btn dsfr-btn--primary" 
                    onClick={() => setModalOpen(false)}
                  >
                    Confirmer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="dsfr-footer">
        <div className="dsfr-footer-body">
          <div className="dsfr-footer-brand">
            <div className="dsfr-footer-logo">
              <p className="dsfr-footer-logo-title">
                République<br />
                Française
              </p>
            </div>
            <div className="dsfr-footer-operator">
              <span className="dsfr-footer-operator-name">
                Ministère de la Transformation Numérique
              </span>
            </div>
          </div>
          
          <div className="dsfr-footer-content">
            <div className="dsfr-footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#" className="dsfr-footer-link">Transformation numérique</a></li>
                <li><a href="#" className="dsfr-footer-link">Accessibilité</a></li>
                <li><a href="#" className="dsfr-footer-link">Sécurité</a></li>
                <li><a href="#" className="dsfr-footer-link">Innovation</a></li>
              </ul>
            </div>
            
            <div className="dsfr-footer-links">
              <h4>Ressources</h4>
              <ul>
                <li><a href="#" className="dsfr-footer-link">Documentation</a></li>
                <li><a href="#" className="dsfr-footer-link">Guides pratiques</a></li>
                <li><a href="#" className="dsfr-footer-link">Formations</a></li>
                <li><a href="#" className="dsfr-footer-link">Support</a></li>
              </ul>
            </div>
            
            <div className="dsfr-footer-links">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@dinum.gouv.fr" className="dsfr-footer-link">contact@dinum.gouv.fr</a></li>
                <li><a href="tel:+33140000000" className="dsfr-footer-link">01 40 00 00 00</a></li>
                <li><span className="dsfr-footer-link">20 avenue de Ségur, 75007 Paris</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="dsfr-footer-bottom">
          <div className="dsfr-footer-legal">
            <a href="#" className="dsfr-footer-link">Mentions légales</a>
            <a href="#" className="dsfr-footer-link">Politique de confidentialité</a>
            <a href="#" className="dsfr-footer-link">Accessibilité: partiellement conforme</a>
          </div>
          <div className="dsfr-footer-copyright">
            <p>© République Française 2024 - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
};