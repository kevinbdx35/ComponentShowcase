import React from 'react';
import { Group } from '@visx/group';
import { Bar, Line, LinePath, Circle } from '@visx/shape';
import { scaleLinear, scaleBand, scaleTime } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { LinearGradient } from '@visx/gradient';
import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';

interface DataPoint {
  label: string;
  value: number;
  date?: Date;
}

interface ChartProps {
  width?: number;
  height?: number;
  data?: DataPoint[];
  type?: 'bar' | 'line' | 'area';
}

const defaultData: DataPoint[] = [
  { label: 'Jan', value: 120, date: new Date('2024-01-01') },
  { label: 'Feb', value: 150, date: new Date('2024-02-01') },
  { label: 'Mar', value: 180, date: new Date('2024-03-01') },
  { label: 'Apr', value: 220, date: new Date('2024-04-01') },
  { label: 'May', value: 280, date: new Date('2024-05-01') },
  { label: 'Jun', value: 320, date: new Date('2024-06-01') },
];

// Vanilla CSS Chart
export const VanillaVisxChart: React.FC<ChartProps> = ({
  width = 400,
  height = 300,
  data = defaultData,
  type = 'bar'
}) => {
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

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

  return (
    <div style={{ 
      background: '#ffffff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <svg width={width} height={height}>
        <LinearGradient id="vanilla-gradient" from="#6366f1" to="#8b5cf6" />
        
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={yScale} width={xMax} stroke="#f3f4f6" />
          <GridColumns scale={xScale} height={yMax} stroke="#f3f4f6" />
          
          {data.map((d, i) => {
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(d.value) ?? 0);
            const barX = xScale(d.label) ?? 0;
            const barY = yMax - barHeight;
            
            return (
              <Bar
                key={`vanilla-bar-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="url(#vanilla-gradient)"
                rx={4}
                ry={4}
              />
            );
          })}
          
          <AxisBottom
            top={yMax}
            scale={xScale}
            stroke="#6b7280"
            tickStroke="#6b7280"
            tickLabelProps={{
              fill: '#6b7280',
              fontSize: 12,
              textAnchor: 'middle',
            }}
          />
          
          <AxisLeft
            scale={yScale}
            stroke="#6b7280"
            tickStroke="#6b7280"
            tickLabelProps={{
              fill: '#6b7280',
              fontSize: 12,
              textAnchor: 'end',
            }}
          />
        </Group>
        
        <text
          x={width / 2}
          y={15}
          textAnchor="middle"
          fontSize={14}
          fontWeight="bold"
          fill="#374151"
        >
          Revenue Analytics (Vanilla CSS)
        </text>
      </svg>
    </div>
  );
};

// Material UI Chart
export const MaterialUIVisxChart: React.FC<ChartProps> = ({
  width = 400,
  height = 300,
  data = defaultData,
  type = 'line'
}) => {
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

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

  return (
    <div style={{ 
      background: '#fafafa',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
      border: '1px solid #e0e0e0'
    }}>
      <svg width={width} height={height}>
        <LinearGradient id="material-gradient" from="#1976d2" to="#42a5f5" />
        
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={yScale} width={xMax} stroke="#e0e0e0" strokeOpacity={0.3} />
          
          {/* Line Chart */}
          <LinePath
            data={data}
            x={d => (xScale(d.label) ?? 0) + xScale.bandwidth() / 2}
            y={d => yScale(d.value) ?? 0}
            stroke="#1976d2"
            strokeWidth={3}
            curve={curveMonotoneX}
          />
          
          {/* Points */}
          {data.map((d, i) => (
            <Circle
              key={`material-point-${i}`}
              cx={(xScale(d.label) ?? 0) + xScale.bandwidth() / 2}
              cy={yScale(d.value) ?? 0}
              r={6}
              fill="#1976d2"
              stroke="#ffffff"
              strokeWidth={2}
            />
          ))}
          
          <AxisBottom
            top={yMax}
            scale={xScale}
            stroke="#757575"
            tickStroke="#757575"
            tickLabelProps={{
              fill: '#757575',
              fontSize: 12,
              textAnchor: 'middle',
            }}
          />
          
          <AxisLeft
            scale={yScale}
            stroke="#757575"
            tickStroke="#757575"
            tickLabelProps={{
              fill: '#757575',
              fontSize: 12,
              textAnchor: 'end',
            }}
          />
        </Group>
        
        <text
          x={width / 2}
          y={15}
          textAnchor="middle"
          fontSize={16}
          fontWeight="500"
          fill="#1976d2"
        >
          Performance Metrics (Material UI)
        </text>
      </svg>
    </div>
  );
};

// Ant Design Chart
export const AntDesignVisxChart: React.FC<ChartProps> = ({
  width = 400,
  height = 300,
  data = defaultData,
  type = 'bar'
}) => {
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map(d => d.label),
    padding: 0.3,
  });

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(d => d.value))],
  });

  return (
    <div style={{ 
      background: '#ffffff',
      borderRadius: '6px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      border: '1px solid #d9d9d9'
    }}>
      <svg width={width} height={height}>
        <LinearGradient id="ant-gradient" from="#1890ff" to="#40a9ff" />
        
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={yScale} width={xMax} stroke="#f0f0f0" strokeDasharray="2,2" />
          
          {data.map((d, i) => {
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(d.value) ?? 0);
            const barX = xScale(d.label) ?? 0;
            const barY = yMax - barHeight;
            
            return (
              <Bar
                key={`ant-bar-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="#1890ff"
                rx={2}
                ry={2}
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  (e.target as SVGElement).style.fill = '#40a9ff';
                }}
                onMouseLeave={(e) => {
                  (e.target as SVGElement).style.fill = '#1890ff';
                }}
              />
            );
          })}
          
          <AxisBottom
            top={yMax}
            scale={xScale}
            stroke="#8c8c8c"
            tickStroke="#8c8c8c"
            tickLabelProps={{
              fill: '#8c8c8c',
              fontSize: 12,
              textAnchor: 'middle',
            }}
          />
          
          <AxisLeft
            scale={yScale}
            stroke="#8c8c8c"
            tickStroke="#8c8c8c"
            tickLabelProps={{
              fill: '#8c8c8c',
              fontSize: 12,
              textAnchor: 'end',
            }}
          />
        </Group>
        
        <text
          x={width / 2}
          y={15}
          textAnchor="middle"
          fontSize={14}
          fontWeight="600"
          fill="#262626"
        >
          Business Intelligence (Ant Design)
        </text>
      </svg>
    </div>
  );
};