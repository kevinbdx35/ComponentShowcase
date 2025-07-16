import React from 'react';
import { DesignSystemTheme } from '../../types/theme';
import { Employee } from '../../types/shared';

interface TeamTableProps {
  theme: DesignSystemTheme;
  employees: Employee[];
}

export const TeamTable: React.FC<TeamTableProps> = ({ 
  theme, 
  employees 
}) => {
  const { Card, Heading, Table, Avatar, Badge, Button, Stack } = theme;

  const tableData = employees.map(employee => ({
    employee: (
      <Stack direction="row" spacing={2} style={{ alignItems: 'center' }}>
        <Avatar name={employee.name} size="medium" />
        <span style={{ fontWeight: 'bold' }}>{employee.name}</span>
      </Stack>
    ),
    email: employee.email,
    department: <Badge color="blue">{employee.department}</Badge>,
    status: (
      <Badge 
        color={
          employee.status === 'Active' ? 'green' :
          employee.status === 'On Leave' ? 'yellow' : 'red'
        }
      >
        {employee.status}
      </Badge>
    ),
    actions: (
      <Button variant="text" size="small">
        View Profile
      </Button>
    )
  }));

  return (
    <div style={{ marginBottom: '3rem' }}>
      <Card>
        <Heading level={2} style={{ marginBottom: '1.5rem' }}>
          Our Team Directory
        </Heading>
        <Table
          headers={['Employee', 'Email', 'Department', 'Status', 'Actions']}
          data={tableData}
        />
      </Card>
    </div>
  );
};