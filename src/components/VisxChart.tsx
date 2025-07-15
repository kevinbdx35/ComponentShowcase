import React from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { LinearGradient } from '@visx/gradient';

interface DataPoint {
  label: string;
  value: number;
}

interface VisxChartProps {
  width?: number;
  height?: number;
  data?: DataPoint[];
  colors?: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  designSystem?: string;
}

const defaultData: DataPoint[] = [
  { label: 'Jan', value: 120 },
  { label: 'Feb', value: 150 },
  { label: 'Mar', value: 180 },
  { label: 'Apr', value: 220 },
  { label: 'May', value: 280 },
  { label: 'Jun', value: 320 },
];

const defaultColors = {
  primary: '#6b46c1',
  secondary: '#8b5cf6',
  background: '#ffffff',
  text: '#374151',
};

export const VisxChart: React.FC<VisxChartProps> = ({
  width = 400,
  height = 300,
  data = defaultData,
  colors = defaultColors,
  designSystem = 'default'
}) => {
  // Margins pour les axes
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Échelles
  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map(d => d.label),
    padding: 0.4,
  });

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(d => d.value))],
  });

  // ID unique pour le gradient
  const gradientId = `gradient-${designSystem}`;

  return (
    <div style={{ 
      background: colors.background,
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <svg width={width} height={height}>
        {/* Définition du gradient */}
        <LinearGradient 
          id={gradientId} 
          from={colors.primary} 
          to={colors.secondary} 
        />
        
        {/* Groupe principal avec marges */}
        <Group left={margin.left} top={margin.top}>
          {/* Barres */}
          {data.map((d, i) => {
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(d.value) ?? 0);
            const barX = xScale(d.label) ?? 0;
            const barY = yMax - barHeight;
            
            return (
              <Bar
                key={`bar-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={`url(#${gradientId})`}
                rx={4}
                ry={4}
                style={{
                  transition: 'opacity 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                }}
              />
            );
          })}
          
          {/* Axe des X */}
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickFormat={(d) => d}
            stroke={colors.text}
            tickStroke={colors.text}
            tickLabelProps={{
              fill: colors.text,
              fontSize: 12,
              textAnchor: 'middle',
            }}
          />
          
          {/* Axe des Y */}
          <AxisLeft
            scale={yScale}
            stroke={colors.text}
            tickStroke={colors.text}
            tickLabelProps={{
              fill: colors.text,
              fontSize: 12,
              textAnchor: 'end',
            }}
          />
        </Group>
        
        {/* Titre du graphique */}
        <text
          x={width / 2}
          y={15}
          textAnchor="middle"
          fontSize={14}
          fontWeight="bold"
          fill={colors.text}
        >
          Monthly Revenue ({designSystem})
        </text>
      </svg>
    </div>
  );
};