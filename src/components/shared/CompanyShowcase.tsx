import React, { useState } from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { FormData } from '../../types/shared';
import { companyData, formCategories, budgetRanges, breadcrumbItems } from '../../data/companyData';
import { HeroSection } from './HeroSection';
import { NavigationTabs } from './NavigationTabs';
import { ServiceCards } from './ServiceCards';
import { ContactForm } from './ContactForm';
import { TeamTable } from './TeamTable';
import { CompanyGallery } from './CompanyGallery';
import { PerformanceDashboard } from './PerformanceDashboard';
import { AlertsDemo } from './AlertsDemo';
import { ModalDemo } from './ModalDemo';
import { CompanyFooter } from './CompanyFooter';

interface CompanyShowcaseProps {
  theme: DesignSystemTheme;
  designSystemName?: string;
}

export const CompanyShowcase: React.FC<CompanyShowcaseProps> = ({ 
  theme, 
  designSystemName = "Design System" 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    rating: 5
  });

  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle form submission
  };

  const {
    Container,
    Header,
    Breadcrumb
  } = theme;

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header with Navigation */}
      <Header title={companyData.name} />
      
      {/* Hero Section */}
      <HeroSection 
        theme={theme}
        title={companyData.name}
        subtitle={companyData.tagline}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs 
          theme={theme}
          tabs={companyData.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Services Section */}
        <ServiceCards 
          theme={theme}
          services={companyData.services}
        />

        {/* Contact Form */}
        <ContactForm 
          theme={theme}
          formData={formData}
          onFormDataChange={setFormData}
          onSubmit={handleFormSubmit}
          categories={formCategories}
          budgetRanges={budgetRanges}
        />

        {/* Team Table */}
        <TeamTable 
          theme={theme}
          employees={companyData.employees}
        />

        {/* Company Gallery */}
        <CompanyGallery 
          theme={theme}
          images={companyData.gallery}
        />

        {/* Performance Dashboard */}
        <PerformanceDashboard 
          theme={theme}
          metrics={companyData.metrics}
        />

        {/* Alerts Demo */}
        <AlertsDemo 
          theme={theme}
          alerts={companyData.alerts}
        />

        {/* Modal Demo */}
        <ModalDemo 
          theme={theme}
          isOpen={showModal}
          onToggle={() => setShowModal(!showModal)}
        />

      </Container>

      {/* Footer */}
      <CompanyFooter theme={theme} />
    </div>
  );
};