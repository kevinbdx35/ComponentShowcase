import React from 'react';
import { DesignSystemTheme } from '../../types/theme';

interface ModalDemoProps {
  theme: DesignSystemTheme;
  isOpen: boolean;
  onToggle: () => void;
}

export const ModalDemo: React.FC<ModalDemoProps> = ({ 
  theme, 
  isOpen, 
  onToggle 
}) => {
  const { Button, Modal, Heading, Text, Stack } = theme;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Heading level={2} style={{ marginBottom: '2rem' }}>
          Interactive Demo
        </Heading>
        <Button variant="primary" size="large" onClick={onToggle}>
          Open Modal
        </Button>
      </div>
      
      <Modal 
        isOpen={isOpen} 
        onClose={onToggle}
        title="TechCorp Platform Demo"
      >
        <div style={{ padding: '1rem' }}>
          <Text variant="body" style={{ marginBottom: '1rem' }}>
            Experience the power of TechCorp's platform in action. This demo will show you how to:
          </Text>
          
          <ul style={{ marginBottom: '1rem' }}>
            <li>Manage your cloud infrastructure</li>
            <li>Analyze data with AI-powered insights</li>
            <li>Deploy custom applications</li>
            <li>Monitor performance in real-time</li>
          </ul>
          
          <Text variant="caption">
            The demo includes sample data and interactive features to help you understand 
            how TechCorp can transform your business operations.
          </Text>
          
          <Stack direction="row" spacing={2} style={{ justifyContent: 'flex-end', marginTop: '2rem' }}>
            <Button variant="outline" onClick={onToggle}>
              Close
            </Button>
            <Button variant="primary" onClick={onToggle}>
              Start Demo
            </Button>
          </Stack>
        </div>
      </Modal>
    </div>
  );
};