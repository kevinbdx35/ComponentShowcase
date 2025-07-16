import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { ServiceCard } from '../../types/shared';

interface ServiceCardsProps {
  theme: DesignSystemTheme;
  services: ServiceCard[];
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ 
  theme, 
  services 
}) => {
  const { Heading, Text, Grid, Card, Button, Badge, Stack } = theme;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Heading level={2}>Our Services</Heading>
        <Text variant="subtitle">
          Comprehensive technology solutions designed to accelerate your digital transformation
        </Text>
      </div>
      
      <Grid columns={3}>
        {services.map((service) => (
          <Card key={service.id}>
            <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3rem' }}>
              {service.icon}
            </div>
            
            <Stack direction="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <Heading level={4}>{service.title}</Heading>
              {service.tag && (
                <Badge color={service.tagColor}>{service.tag}</Badge>
              )}
            </Stack>
            
            <Text variant="body" style={{ marginBottom: '1.5rem' }}>
              {service.description}
            </Text>
            
            <Button variant="primary" style={{ width: '100%' }}>
              Learn More
            </Button>
          </Card>
        ))}
      </Grid>
    </div>
  );
};