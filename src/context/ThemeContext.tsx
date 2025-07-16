import React, { createContext, useContext } from 'react';
import { DesignSystemTheme, ThemeConfig, ThemeContextValue } from '../types/theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  theme: DesignSystemTheme;
  config: ThemeConfig;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  theme, 
  config, 
  children 
}) => {
  return (
    <ThemeContext.Provider value={{ theme, config }}>
      {children}
    </ThemeContext.Provider>
  );
};