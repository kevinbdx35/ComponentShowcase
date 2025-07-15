import React from 'react';

export const MaterialUIComponents: React.FC = () => {
  return (
    <div data-testid="material-ui-components">
      {/* App Bar */}
      <div data-testid="mui-app-bar">
        <div>TechCorp Solutions</div>
      </div>

      {/* Hero Section */}
      <div>
        <h1>TechCorp Solutions</h1>
        <p>Innovating the future with cutting-edge technology solutions for modern businesses</p>
        <button>Get Started</button>
        <button>Learn More</button>
      </div>

      {/* Breadcrumb */}
      <div data-testid="mui-breadcrumbs">
        <span>Home</span>
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
        <div>Contact Information</div>
        <div>Project Details</div>
        <div>Review & Submit</div>
      </div>

      {/* Team Table */}
      <div>
        <h2>Our Team Directory</h2>
        <div>Sarah Chen</div>
        <div>Engineering</div>
        <div>Design</div>
        <div>Marketing</div>
      </div>

      {/* Performance Analytics */}
      <div>
        <h2>Company Performance Analytics</h2>
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
      <div>This is a modal dialog with some content using Material Design 3 principles.</div>

      {/* Gallery */}
      <div>
        <h2>Our Work Environment</h2>
        <div>Modern Workspace</div>
        <div>Team Collaboration</div>
        <div>Technology Development</div>
      </div>

      {/* Footer */}
      <div>
        <div>hello@techcorp.com</div>
        <div>+1 (555) 123-4567</div>
        <div>San Francisco, CA</div>
      </div>
    </div>
  );
};