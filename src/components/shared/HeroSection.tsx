import React from 'react';
import { DesignSystemTheme } from '../../types/theme';

interface HeroSectionProps {
  theme: DesignSystemTheme;
  title: string;
  subtitle: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  theme, 
  title, 
  subtitle 
}) => {
  const { Hero, Button, Stack } = theme;

  return (
    <Hero 
      title={title}
      subtitle={subtitle}
      actions={
        <Stack direction="row" spacing={2}>
          <Button variant="primary" size="large">
            Get Started
          </Button>
          <Button variant="secondary" size="large">
            Learn More
          </Button>
        </Stack>
      }
    />
  );
};