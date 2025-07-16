import React, { useState } from 'react';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/bootstrap-italia-custom.css';

const employeeData = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
  { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' },
  { id: 4, name: 'David Kim', email: 'david.kim@techcorp.com', status: 'Active', department: 'Sales' },
  { id: 5, name: 'Lisa Thompson', email: 'lisa.t@techcorp.com', status: 'Inactive', department: 'HR' }
];

export const BootstrapItaliaComponents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const tabs = ['Panoramica Sistema', 'I Nostri Servizi', 'Il Team', 'Contatti'];

  return (
    <div className="it-container">
      {/* Header */}
      <header className="it-header">
        <div className="it-header-brand">
          <div className="it-logo">
            <div className="it-logo-image">
              🇮🇹
            </div>
            <div className="it-brand-text">
              <div className="it-brand-line">Repubblica Italiana</div>
              <div className="it-brand-line">Bootstrap Italia</div>
            </div>
          </div>
          <div className="it-header-tools">
            <button className="it-btn it-btn--outline it-btn--small">Accedi</button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="it-main-nav">
        <div className="it-main-nav-content">
          <button className="it-main-nav-toggle" aria-label="Apri menu">
            ☰
          </button>
          <ul className="it-main-nav-list">
            <li><a href="#" className="it-main-nav-link">Servizi</a></li>
            <li><a href="#" className="it-main-nav-link">Documenti</a></li>
            <li><a href="#" className="it-main-nav-link">Amministrazione</a></li>
            <li><a href="#" className="it-main-nav-link">Novità</a></li>
            <li><a href="#" className="it-main-nav-link">Come fare per</a></li>
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="it-breadcrumb">
        <ol className="it-breadcrumb-list">
          <li className="it-breadcrumb-item">
            <a href="#" className="it-breadcrumb-link">Home</a>
          </li>
          <li className="it-breadcrumb-item">
            <a href="#" className="it-breadcrumb-link">Design System</a>
          </li>
          <li className="it-breadcrumb-item">
            <span className="it-breadcrumb-current">Bootstrap Italia</span>
          </li>
        </ol>
      </div>

      {/* Hero Section */}
      <section className="it-hero">
        <div className="it-hero-content">
          <h1 className="it-hero-title">Servizi Digitali per i Cittadini</h1>
          <p className="it-hero-description">
            Accedi ai servizi online della Pubblica Amministrazione italiana. Semplice, sicuro e sempre disponibile per tutti i cittadini.
          </p>
          <div className="it-hero-actions">
            <button className="it-btn it-btn--primary it-btn--large">Accedi con SPID</button>
            <button className="it-btn it-btn--outline it-btn--large">Servizi senza autenticazione</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="it-main-content">
        {/* Navigation Tabs */}
        <section style={{ marginBottom: 'var(--it-spacing-3xl)' }}>
          <div style={{ 
            borderBottom: '2px solid var(--it-border)', 
            backgroundColor: 'var(--it-white)', 
            borderRadius: 'var(--it-border-radius) var(--it-border-radius) 0 0',
            boxShadow: 'var(--it-shadow-sm)'
          }}>
            <div style={{ display: 'flex', gap: '0' }}>
              {tabs.map((tab, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{ 
                    padding: 'var(--it-spacing-lg) var(--it-spacing-xl)', 
                    border: 'none', 
                    borderBottom: activeTab === index ? '3px solid var(--it-primary)' : '3px solid transparent',
                    backgroundColor: activeTab === index ? 'var(--it-white)' : 'transparent', 
                    color: activeTab === index ? 'var(--it-primary)' : 'var(--it-text-light)',
                    fontWeight: activeTab === index ? '700' : '500',
                    cursor: 'pointer',
                    fontSize: 'var(--it-font-size-base)',
                    fontFamily: 'var(--it-font-family)',
                    transition: 'all 0.3s ease'
                  }}
                  className="it-btn"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div style={{ 
            padding: 'var(--it-spacing-2xl)', 
            backgroundColor: 'var(--it-white)', 
            borderRadius: '0 0 var(--it-border-radius) var(--it-border-radius)', 
            boxShadow: 'var(--it-shadow)',
            border: 'var(--it-border-width) solid var(--it-border)'
          }}>
            {activeTab === 0 && (
              <div>
                <h3 style={{ color: 'var(--it-primary)', marginBottom: 'var(--it-spacing-md)' }}>
                  Bootstrap Italia - Design System
                </h3>
                <p style={{ lineHeight: 'var(--it-line-height-relaxed)' }}>
                  Bootstrap Italia è il design system ufficiale per i siti web della Pubblica Amministrazione italiana. 
                  Fornisce componenti pronti all'uso, linee guida di design e strumenti di sviluppo per creare 
                  esperienze digitali accessibili e coerenti per tutti i cittadini.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 style={{ color: 'var(--it-primary)', marginBottom: 'var(--it-spacing-md)' }}>
                  I Nostri Servizi
                </h3>
                <ul style={{ lineHeight: 'var(--it-line-height-relaxed)', paddingLeft: 'var(--it-spacing-lg)' }}>
                  <li>Servizi Digitali & Portali Web</li>
                  <li>Supporto Tecnico per Bootstrap Italia</li>
                  <li>Formazione e Consulenza UX/UI</li>
                  <li>Test di Accessibilità WCAG 2.1 AA</li>
                  <li>Ricerca Utenti e Usabilità</li>
                </ul>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 style={{ color: 'var(--it-primary)', marginBottom: 'var(--it-spacing-md)' }}>
                  Il Nostro Team
                </h3>
                <p style={{ lineHeight: 'var(--it-line-height-relaxed)' }}>
                  Il nostro team è composto da designer, sviluppatori e ricercatori esperti nel campo 
                  dell'esperienza utente e della pubblica amministrazione digitale. Collaboriamo per 
                  garantire che Bootstrap Italia rimanga all'avanguardia nelle tecnologie web e 
                  nell'accessibilità digitale.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h3 style={{ color: 'var(--it-primary)', marginBottom: 'var(--it-spacing-md)' }}>
                  Contatti e Supporto
                </h3>
                <p style={{ lineHeight: 'var(--it-line-height-relaxed)' }}>
                  Hai bisogno di supporto per implementare Bootstrap Italia nella tua amministrazione? 
                  Contattaci per ricevere assistenza tecnica, consulenza sui design pattern o per 
                  partecipare alla community degli sviluppatori della PA italiana.
                </p>
              </div>
            )}
          </div>
        </section>
        {/* Services Section */}
        <div className="it-services-section">
          <h2 className="it-section-title">I Nostri Servizi</h2>
          <div className="it-grid">
            <div className="it-card">
              <div className="it-card-header">
                <span className="it-card-icon">🏛️</span>
                <span className="it-badge it-badge--success">Attivo</span>
              </div>
              <div className="it-card-body">
                <h3 className="it-card-title">Servizi Digitali</h3>
                <p className="it-card-description">
                  Accedi ai servizi online della Pubblica Amministrazione con facilità e sicurezza.
                </p>
              </div>
              <div className="it-card-footer">
                <button className="it-btn it-btn--primary">Accedi</button>
              </div>
            </div>

            <div className="it-card">
              <div className="it-card-header">
                <span className="it-card-icon">📋</span>
                <span className="it-badge it-badge--info">Disponibile</span>
              </div>
              <div className="it-card-body">
                <h3 className="it-card-title">Supporto Tecnico</h3>
                <p className="it-card-description">
                  Assistenza per l'implementazione del design system Bootstrap Italia.
                </p>
              </div>
              <div className="it-card-footer">
                <button className="it-btn it-btn--secondary">Contatta</button>
              </div>
            </div>

            <div className="it-card">
              <div className="it-card-header">
                <span className="it-card-icon">🔍</span>
                <span className="it-badge it-badge--warning">Beta</span>
              </div>
              <div className="it-card-body">
                <h3 className="it-card-title">Ricerca Utenti</h3>
                <p className="it-card-description">
                  Servizi di ricerca e test di usabilità per migliorare l'esperienza utente.
                </p>
              </div>
              <div className="it-card-footer">
                <button className="it-btn it-btn--outline">Scopri di più</button>
              </div>
            </div>

            <div className="it-card">
              <div className="it-card-header">
                <span className="it-card-icon">♿</span>
                <span className="it-badge it-badge--success">Certificato</span>
              </div>
              <div className="it-card-body">
                <h3 className="it-card-title">Test di Accessibilità</h3>
                <p className="it-card-description">
                  Verifica della conformità WCAG 2.1 AA per garantire l'accessibilità digitale.
                </p>
              </div>
              <div className="it-card-footer">
                <button className="it-btn it-btn--success">Verifica</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="it-form-section">
          <h2 className="it-section-title">Contattaci</h2>
          <form className="it-form">
            <div className="it-form-group">
              <label htmlFor="it-name" className="it-label">Nome completo</label>
              <input
                type="text"
                id="it-name"
                className="it-text-input"
                placeholder="Inserisci il tuo nome completo"
              />
            </div>

            <div className="it-form-group">
              <label htmlFor="it-email" className="it-label">Email</label>
              <input
                type="email"
                id="it-email"
                className="it-text-input"
                placeholder="nome@esempio.it"
              />
            </div>

            <div className="it-form-group">
              <label htmlFor="it-subject" className="it-label">Oggetto</label>
              <select id="it-subject" className="it-select">
                <option value="">Seleziona un oggetto</option>
                <option value="info">Richiesta informazioni</option>
                <option value="support">Supporto tecnico</option>
                <option value="feedback">Feedback</option>
                <option value="other">Altro</option>
              </select>
            </div>

            <div className="it-form-group">
              <label htmlFor="it-message" className="it-label">Messaggio</label>
              <div className="it-hint-text">Descrivi la tua richiesta in modo dettagliato</div>
              <textarea
                id="it-message"
                className="it-textarea"
                placeholder="Scrivi qui il tuo messaggio..."
                rows={4}
              ></textarea>
              <div className="it-character-limit">0/500 caratteri</div>
            </div>

            <fieldset className="it-fieldset">
              <legend className="it-fieldset-legend">Modalità di contatto preferita</legend>
              <div className="it-control-input">
                <input
                  type="radio"
                  id="it-contact-email"
                  name="contact-method"
                  value="email"
                  className="it-control-input-input"
                />
                <label htmlFor="it-contact-email" className="it-control-input-text">
                  Email
                </label>
              </div>
              <div className="it-control-input">
                <input
                  type="radio"
                  id="it-contact-phone"
                  name="contact-method"
                  value="phone"
                  className="it-control-input-input"
                />
                <label htmlFor="it-contact-phone" className="it-control-input-text">
                  Telefono
                </label>
              </div>
              <div className="it-control-input">
                <input
                  type="radio"
                  id="it-contact-post"
                  name="contact-method"
                  value="post"
                  className="it-control-input-input"
                />
                <label htmlFor="it-contact-post" className="it-control-input-text">
                  Posta tradizionale
                </label>
              </div>
            </fieldset>

            <fieldset className="it-fieldset">
              <legend className="it-fieldset-legend">Servizi di interesse</legend>
              <div className="it-control-input">
                <input
                  type="checkbox"
                  id="it-service-digital"
                  className="it-control-input-input"
                />
                <label htmlFor="it-service-digital" className="it-control-input-text">
                  Servizi digitali
                </label>
              </div>
              <div className="it-control-input">
                <input
                  type="checkbox"
                  id="it-service-design"
                  className="it-control-input-input"
                />
                <label htmlFor="it-service-design" className="it-control-input-text">
                  Supporto design system
                </label>
              </div>
              <div className="it-control-input">
                <input
                  type="checkbox"
                  id="it-service-accessibility"
                  className="it-control-input-input"
                />
                <label htmlFor="it-service-accessibility" className="it-control-input-text">
                  Test di accessibilità
                </label>
              </div>
            </fieldset>

            <div className="it-form-actions">
              <button type="submit" className="it-btn it-btn--primary">Invia richiesta</button>
              <button type="reset" className="it-btn it-btn--outline">Cancella</button>
            </div>
          </form>
        </div>

        {/* Team Section */}
        <div className="it-team-section">
          <h2 className="it-section-title">Il Nostro Team</h2>
          <div className="it-table-wrapper">
            <table className="it-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Ruolo</th>
                  <th>Dipartimento</th>
                  <th>Email</th>
                  <th>Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="it-table-cell--name">Marco Rossi</td>
                  <td>Lead Design System</td>
                  <td>Innovazione Digitale</td>
                  <td><a href="mailto:marco.rossi@gov.it" className="it-link">marco.rossi@gov.it</a></td>
                  <td><span className="it-badge it-badge--success">Attivo</span></td>
                </tr>
                <tr>
                  <td className="it-table-cell--name">Laura Bianchi</td>
                  <td>UX Researcher</td>
                  <td>Esperienza Utente</td>
                  <td><a href="mailto:laura.bianchi@gov.it" className="it-link">laura.bianchi@gov.it</a></td>
                  <td><span className="it-badge it-badge--success">Attivo</span></td>
                </tr>
                <tr>
                  <td className="it-table-cell--name">Giuseppe Verdi</td>
                  <td>Frontend Developer</td>
                  <td>Sviluppo</td>
                  <td><a href="mailto:giuseppe.verdi@gov.it" className="it-link">giuseppe.verdi@gov.it</a></td>
                  <td><span className="it-badge it-badge--info">Disponibile</span></td>
                </tr>
                <tr>
                  <td className="it-table-cell--name">Anna Ferrari</td>
                  <td>Accessibility Expert</td>
                  <td>Qualità</td>
                  <td><a href="mailto:anna.ferrari@gov.it" className="it-link">anna.ferrari@gov.it</a></td>
                  <td><span className="it-badge it-badge--success">Attivo</span></td>
                </tr>
                <tr>
                  <td className="it-table-cell--name">Roberto Marino</td>
                  <td>Product Manager</td>
                  <td>Strategia</td>
                  <td><a href="mailto:roberto.marino@gov.it" className="it-link">roberto.marino@gov.it</a></td>
                  <td><span className="it-badge it-badge--warning">In ferie</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics */}
        <div className="it-stats-section">
          <h2 className="it-section-title">Statistiche Bootstrap Italia</h2>
          <div className="it-stats-grid">
            <div className="it-stat-card">
              <div className="it-stat-number">120+</div>
              <div className="it-stat-label">Amministrazioni</div>
            </div>
            <div className="it-stat-card">
              <div className="it-stat-number">45</div>
              <div className="it-stat-label">Componenti rilasciati</div>
            </div>
            <div className="it-stat-card">
              <div className="it-stat-number">98%</div>
              <div className="it-stat-label">Conformità WCAG</div>
            </div>
            <div className="it-stat-card">
              <div className="it-stat-number">2.5M</div>
              <div className="it-stat-label">Utenti mensili</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="it-charts-section">
          <h2 className="it-section-title">Metriche delle Performance</h2>
          <div className="it-charts-grid">
            <div className="it-chart-container">
              <h3>Utilizzo dei Componenti</h3>
              <VisxChart />
            </div>
            <div className="it-chart-container">
              <h3>Modello 3D delle Performance</h3>
              <ThreeChart />
            </div>
            <div className="it-chart-container">
              <h3>Adozione nel Tempo</h3>
              <VanillaVisxChart />
            </div>
          </div>
        </div>

        {/* Simple Cards */}
        <div className="it-simple-cards-section">
          <h2 className="it-section-title">Schede Semplici</h2>
          <div className="it-grid">
            <div className="it-card">
              <div className="it-card-body">
                <h3 className="it-card-title">Servizi Online</h3>
                <p className="it-card-description">
                  Accedi ai servizi digitali della Pubblica Amministrazione italiana.
                </p>
                <button className="it-btn it-btn--primary">Accedi</button>
              </div>
            </div>
            <div className="it-card">
              <div className="it-card-body">
                <h3 className="it-card-title">Documenti</h3>
                <p className="it-card-description">
                  Scarica e gestisci i tuoi documenti amministrativi.
                </p>
                <button className="it-btn it-btn--secondary">Gestisci</button>
              </div>
            </div>
          </div>
        </div>

        {/* Badges & Avatars */}
        <div className="it-badges-section">
          <h2 className="it-section-title">Badge e Avatar</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <span className="it-badge it-badge--success">Attivo</span>
            <span className="it-badge it-badge--info">Nuovo</span>
            <span className="it-badge it-badge--warning">Manutenzione</span>
            <span className="it-badge it-badge--error">Offline</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--it-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              fontWeight: 'bold'
            }}>GM</div>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--it-success)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              fontWeight: 'bold'
            }}>LB</div>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--it-error)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              fontWeight: 'bold'
            }}>AF</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="it-progress-section">
          <h2 className="it-section-title">Barre di Avanzamento</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Digitalizzazione servizi</span>
                <span>78%</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: 'var(--it-grey-200)', 
                borderRadius: 'var(--it-border-radius)',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '78%', 
                  height: '100%', 
                  backgroundColor: 'var(--it-primary)', 
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Accessibilità WCAG</span>
                <span>94%</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: 'var(--it-grey-200)', 
                borderRadius: 'var(--it-border-radius)',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '94%', 
                  height: '100%', 
                  backgroundColor: 'var(--it-success)', 
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs simples */}
        <div className="it-tabs-simple-section">
          <h2 className="it-section-title">Schede Semplici</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ borderBottom: '1px solid var(--it-border)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0' }}>
                <button style={{ 
                  padding: '0.75rem 1.5rem', 
                  border: 'none', 
                  borderBottom: '2px solid var(--it-primary)', 
                  backgroundColor: 'transparent',
                  color: 'var(--it-primary)',
                  fontWeight: 'bold'
                }}>
                  Servizi
                </button>
                <button style={{ 
                  padding: '0.75rem 1.5rem', 
                  border: 'none', 
                  backgroundColor: 'transparent',
                  color: 'var(--it-text-light)'
                }}>
                  Documenti
                </button>
                <button style={{ 
                  padding: '0.75rem 1.5rem', 
                  border: 'none', 
                  backgroundColor: 'transparent',
                  color: 'var(--it-text-light)'
                }}>
                  Supporto
                </button>
              </div>
            </div>
            <div style={{ padding: '1rem 0' }}>
              <p>Contenuto della scheda Servizi. Esplora tutti i servizi digitali disponibili.</p>
            </div>
          </div>
        </div>

        {/* Company Gallery */}
        <div className="it-gallery-section">
          <h2 className="it-section-title">Il Nostro Ambiente di Lavoro</h2>
          <div className="it-grid">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--it-border-radius)' }}>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=250&fit=crop" 
                alt="Uffici moderni" 
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
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Spazi di Lavoro</h4>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Uffici moderni e collaborativi</p>
              </div>
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--it-border-radius)' }}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop" 
                alt="Collaborazione team" 
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
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Collaborazione</h4>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Innovazione attraverso il team</p>
              </div>
            </div>
            
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--it-border-radius)' }}>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" 
                alt="Sviluppo tecnologico" 
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
                <h4 style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Sviluppo</h4>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>Strumenti all'avanguardia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="it-alerts-section">
          <h2 className="it-section-title">Avvisi di Sistema</h2>
          
          <div className="it-alert it-alert--success">
            <h3>Successo</h3>
            <p>Bootstrap Italia è stato aggiornato con successo alla versione più recente.</p>
          </div>

          <div className="it-alert it-alert--info">
            <h3>Informazione</h3>
            <p>Nuovi componenti disponibili nella libreria Bootstrap Italia. Consulta la documentazione per maggiori dettagli.</p>
          </div>

          <div className="it-alert it-alert--warning">
            <h3>Attenzione</h3>
            <p>Manutenzione programmata del sistema prevista per domenica dalle 02:00 alle 06:00.</p>
          </div>

          <div className="it-alert it-alert--error">
            <h3>Errore</h3>
            <p>Alcuni servizi potrebbero essere temporaneamente non disponibili. Il team tecnico sta lavorando per risolvere il problema.</p>
          </div>
        </div>

        {/* Modal Section */}
        <div className="it-modal-section">
          <h2 className="it-section-title">Finestra Modale</h2>
          <button onClick={openModal} className="it-btn it-btn--primary">
            Apri finestra informazioni
          </button>
        </div>
      </main>

      {/* Modal */}
      <div className={`it-modal ${isModalOpen ? 'it-modal--open' : ''}`}>
        <div className="it-modal-backdrop" onClick={closeModal}></div>
        <div className="it-modal-dialog">
          <div className="it-modal-content">
            <div className="it-modal-header">
              <h2 className="it-modal-title">Informazioni Bootstrap Italia</h2>
              <button 
                onClick={closeModal} 
                className="it-modal-close"
                aria-label="Chiudi finestra"
              >
                ✕
              </button>
            </div>
            <div className="it-modal-body">
              <p>
                Bootstrap Italia è il kit di design e sviluppo dedicato alla creazione di siti web e applicazioni digitali per la Pubblica Amministrazione italiana.
              </p>
              <p>
                Basato su Bootstrap 5, fornisce componenti pronti all'uso che rispettano le linee guida di design e i principi di accessibilità richiesti dalle PA italiane.
              </p>
              <ul>
                <li>✅ Conformità WCAG 2.1 AA</li>
                <li>✅ Design responsive</li>
                <li>✅ Componenti accessibili</li>
                <li>✅ Documentazione completa</li>
              </ul>
            </div>
            <div className="it-modal-footer">
              <button onClick={closeModal} className="it-btn it-btn--primary">
                Compreso
              </button>
              <button onClick={closeModal} className="it-btn it-btn--outline">
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="it-footer">
        <div className="it-footer-end">
          <div className="it-footer-content">
            <div>
              <h3 className="it-footer-heading">Bootstrap Italia</h3>
              <p className="it-footer-text">
                Il design system ufficiale per i siti web della Pubblica Amministrazione italiana.
              </p>
              <ul className="it-footer-list">
                <li><a href="#" className="it-footer-link">Documentazione</a></li>
                <li><a href="#" className="it-footer-link">Componenti</a></li>
                <li><a href="#" className="it-footer-link">Esempi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="it-footer-heading">Risorse</h3>
              <ul className="it-footer-list">
                <li><a href="#" className="it-footer-link">Linee guida design</a></li>
                <li><a href="#" className="it-footer-link">Toolkit sviluppatori</a></li>
                <li><a href="#" className="it-footer-link">Comunità</a></li>
                <li><a href="#" className="it-footer-link">Supporto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="it-footer-heading">Governo</h3>
              <ul className="it-footer-list">
                <li><a href="#" className="it-footer-link">Designers Italia</a></li>
                <li><a href="#" className="it-footer-link">Agenzia per l'Italia Digitale</a></li>
                <li><a href="#" className="it-footer-link">Dipartimento Trasformazione Digitale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="it-footer-heading">Contatti</h3>
              <p className="it-footer-text">
                Per supporto tecnico e informazioni sul design system Bootstrap Italia.
              </p>
              <ul className="it-footer-list">
                <li><a href="mailto:design@gov.it" className="it-footer-link">design@gov.it</a></li>
                <li><a href="#" className="it-footer-link">Forum della community</a></li>
              </ul>
            </div>
          </div>
          <div className="it-footer-bottom">
            <div className="it-footer-legal">
              <p>© 2024 Repubblica Italiana - Tutti i diritti riservati</p>
              <p>
                <a href="#" className="it-footer-link">Privacy Policy</a> | 
                <a href="#" className="it-footer-link">Note legali</a> | 
                <a href="#" className="it-footer-link">Accessibilità</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};