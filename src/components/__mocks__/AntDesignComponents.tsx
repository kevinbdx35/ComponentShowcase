import React from 'react';

export const AntDesignComponents: React.FC = () => {
  return (
    <div data-testid="ant-design-components">
      {/* Header */}
      <div data-testid="ant-header">
        <div>TechCorp</div>
        <div>Home</div>
        <div>Solutions</div>
        <div>About</div>
        <div>Contact</div>
      </div>

      {/* Hero Section */}
      <div>
        <h1>TechCorp Solutions</h1>
        <p>Innovating the future with cutting-edge technology solutions for modern businesses</p>
      </div>

      {/* Breadcrumb */}
      <div data-testid="ant-breadcrumb">
        <span>Solutions</span>
        <span>Overview</span>
      </div>

      {/* Service Cards */}
      <div>
        <h2>Cloud Solutions</h2>
        <div>Popular</div>
        <h2>AI & Analytics</h2>
        <div>Advanced</div>
        <h2>Custom Development</h2>
        <div>Premium</div>
      </div>

      {/* Contact Form */}
      <div>
        <h2>Contact Our Team</h2>
        <div>Contact Info</div>
        <div>Project Details</div>
        <div>Submit</div>
      </div>

      {/* Team Table */}
      <div>
        <h2>Our Team Directory</h2>
        <div>Sarah Chen</div>
        <div>Engineering</div>
        <div>Design</div>
        <div>Marketing</div>
      </div>

      {/* Statistics */}
      <div>
        <div>2.4M</div>
        <div>Active Users</div>
        <div>$1.2M</div>
        <div>Revenue</div>
      </div>

      {/* Alerts */}
      <div>Operation completed successfully!</div>
      <div>Please check your input data.</div>
      <div>Something went wrong. Please try again.</div>
      <div>Here's some helpful information.</div>

      {/* Modal */}
      <button>Open Modal</button>
      <div>Modal Title</div>
      <div>This is a modal dialog with some content.</div>

      {/* Footer */}
      <div>
        <div>hello@techcorp.com</div>
        <div>+1 (555) 123-4567</div>
        <div>San Francisco, CA</div>
      </div>
    </div>
  );
};