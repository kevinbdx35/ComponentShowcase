import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { MetricCard } from '../../types/shared';
import { ThreeChart } from '../ThreeChart';
import { VanillaVisxChart } from '../VisxChartVariants';

interface PerformanceDashboardProps {
  theme: DesignSystemTheme;
  metrics: MetricCard[];
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  theme, 
  metrics 
}) => {
  const { Card, Heading, Grid, Text, ChartContainer } = theme;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Card>
        <Heading level={2} style={{ marginBottom: '2rem' }}>
          Company Performance Analytics
        </Heading>
        
        {/* Metrics Grid */}
        <Grid columns={4} style={{ marginBottom: '2rem' }}>
          {metrics.map((metric) => (
            <Card key={metric.id}>
              <div style={{ textAlign: 'center' }}>
                <Heading level={3} style={{ color: '#6750a4', marginBottom: '0.5rem' }}>
                  {metric.value}
                </Heading>
                <Text variant="body" style={{ fontWeight: 'bold' }}>
                  {metric.label}
                </Text>
                {metric.trend && (
                  <Text 
                    variant="caption" 
                    style={{ 
                      color: metric.trendDirection === 'up' ? '#22c55e' : '#ef4444',
                      marginTop: '0.25rem' 
                    }}
                  >
                    {metric.trendDirection === 'up' ? '↗' : '↓'} {metric.trend}
                  </Text>
                )}
              </div>
            </Card>
          ))}
        </Grid>
        
        {/* Charts Grid */}
        <Grid columns={2}>
          <Card>
            <Heading level={4} style={{ marginBottom: '1rem' }}>
              Revenue Growth (Interactive 3D)
            </Heading>
            <ChartContainer>
              <ThreeChart />
            </ChartContainer>
          </Card>
          
          <Card>
            <Heading level={4} style={{ marginBottom: '1rem' }}>
              Performance Metrics (visx)
            </Heading>
            <ChartContainer>
              <VanillaVisxChart width={380} height={250} />
            </ChartContainer>
          </Card>
        </Grid>
      </Card>
    </div>
  );
};