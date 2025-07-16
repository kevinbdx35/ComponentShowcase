import React, { useState } from 'react';
import { CompanyShowcase } from '../components/shared/CompanyShowcase';
import { ThemeProvider } from '../context/ThemeContext';
import { VanillaThemeExport } from '../themes/VanillaTheme';
import { MaterialUIThemeExport } from '../themes/MaterialUITheme';
import { AntDesignThemeExport } from '../themes/AntDesignTheme';
import { EvergreenThemeExport } from '../themes/EvergreenTheme';
import { USWDSThemeExport } from '../themes/USWDSTheme';
import { GOVUKThemeExport } from '../themes/GOVUKTheme';
import { DSFRThemeExport } from '../themes/DSFRTheme';
import { BootstrapItaliaThemeExport } from '../themes/BootstrapItaliaTheme';
import { FluentUIThemeExport } from '../themes/FluentUITheme';

const availableThemes = [
  VanillaThemeExport,
  MaterialUIThemeExport,
  AntDesignThemeExport,
  EvergreenThemeExport,
  USWDSThemeExport,
  GOVUKThemeExport,
  DSFRThemeExport,
  BootstrapItaliaThemeExport,
  FluentUIThemeExport
];

export const ThemeShowcase: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const currentTheme = availableThemes[selectedTheme];

  const ThemeWrapper = currentTheme.wrapper || React.Fragment;

  return (
    <div>
      <div style={{ 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        borderBottom: '1px solid #ddd',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>
          Design System Showcase - New Architecture
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {availableThemes.map((theme, index) => (
            <button
              key={theme.info.id}
              onClick={() => setSelectedTheme(index)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: selectedTheme === index ? '#007bff' : '#fff',
                color: selectedTheme === index ? '#fff' : '#000',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              {theme.info.name}
            </button>
          ))}
        </div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
          <strong>Current:</strong> {currentTheme.info.name} - {currentTheme.info.description}
        </div>
      </div>
      
      <ThemeWrapper>
        <ThemeProvider theme={currentTheme.theme} config={currentTheme.config}>
          <CompanyShowcase />
        </ThemeProvider>
      </ThemeWrapper>
    </div>
  );
};