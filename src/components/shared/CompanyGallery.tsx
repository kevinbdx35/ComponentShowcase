import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { ImageGalleryItem } from '../../types/shared';

interface CompanyGalleryProps {
  theme: DesignSystemTheme;
  images: ImageGalleryItem[];
}

export const CompanyGallery: React.FC<CompanyGalleryProps> = ({ 
  theme, 
  images 
}) => {
  const { Card, Heading, Grid } = theme;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Heading level={2}>Our Work Environment</Heading>
        </div>
        
        <Grid columns={3}>
          {images.map((image) => (
            <Card key={image.id}>
              <img 
                src={image.src} 
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0'
                }}
              />
              <div style={{ padding: '1rem' }}>
                <Heading level={5} style={{ marginBottom: '0.5rem' }}>
                  {image.title}
                </Heading>
                <p style={{ margin: 0, color: '#666' }}>
                  {image.description}
                </p>
              </div>
            </Card>
          ))}
        </Grid>
      </Card>
    </div>
  );
};