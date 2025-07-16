import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { TabItem } from '../../types/shared';

interface NavigationTabsProps {
  theme: DesignSystemTheme;
  tabs: TabItem[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ 
  theme, 
  tabs, 
  activeTab, 
  onTabChange 
}) => {
  const { Card, Tabs } = theme;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Card>
        <Tabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={onTabChange} 
        />
      </Card>
    </div>
  );
};