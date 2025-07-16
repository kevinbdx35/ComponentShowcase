import React from 'react';
import { DesignSystemTheme } from '../../types/theme';

interface CompanyFooterProps {
  theme: DesignSystemTheme;
}

export const CompanyFooter: React.FC<CompanyFooterProps> = ({ 
  theme 
}) => {
  const { Footer, Heading, Text, Link, Grid, Stack } = theme;

  return (
    <Footer>
      <div style={{ 
        backgroundColor: '#1a1a1a', 
        color: 'white', 
        padding: '3rem 2rem',
        marginTop: '3rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid columns={3}>
            <div>
              <Heading level={4} style={{ color: '#6750a4', marginBottom: '1rem' }}>
                TechCorp Solutions
              </Heading>
              <Text variant="body" style={{ color: '#ccc' }}>
                Innovating the future with cutting-edge technology solutions for modern businesses.
              </Text>
            </div>
            
            <div>
              <Heading level={5} style={{ color: 'white', marginBottom: '1rem' }}>
                Services
              </Heading>
              <Stack direction="column" spacing={1}>
                <Link href="#" style={{ color: '#ccc' }}>Cloud Solutions</Link>
                <Link href="#" style={{ color: '#ccc' }}>AI & Analytics</Link>
                <Link href="#" style={{ color: '#ccc' }}>Custom Development</Link>
                <Link href="#" style={{ color: '#ccc' }}>Consulting</Link>
              </Stack>
            </div>
            
            <div>
              <Heading level={5} style={{ color: 'white', marginBottom: '1rem' }}>
                Contact
              </Heading>
              <Stack direction="column" spacing={1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📧</span>
                  <Text variant="body" style={{ color: '#ccc' }}>
                    hello@techcorp.com
                  </Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📞</span>
                  <Text variant="body" style={{ color: '#ccc' }}>
                    +1 (555) 123-4567
                  </Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📍</span>
                  <Text variant="body" style={{ color: '#ccc' }}>
                    San Francisco, CA
                  </Text>
                </div>
              </Stack>
            </div>
          </Grid>
          
          <div style={{ 
            borderTop: '1px solid #333', 
            marginTop: '2rem', 
            paddingTop: '1rem', 
            textAlign: 'center' 
          }}>
            <Text variant="caption" style={{ color: '#888' }}>
              © 2024 TechCorp Solutions. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </Footer>
  );
};