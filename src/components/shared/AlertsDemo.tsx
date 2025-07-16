import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { AlertItem } from '../../types/shared';

interface AlertsDemoProps {
  theme: DesignSystemTheme;
  alerts: AlertItem[];
}

export const AlertsDemo: React.FC<AlertsDemoProps> = ({ 
  theme, 
  alerts 
}) => {
  const { Heading, Alert, Stack } = theme;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Heading level={2}>System Alerts</Heading>
      </div>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Stack direction="column" spacing={2}>
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              type={alert.type}
              title={alert.title}
              message={alert.message}
              dismissible={alert.dismissible}
            />
          ))}
        </Stack>
      </div>
    </div>
  );
};