import React from 'react';

export const ReferenceComponents: React.FC = () => {
  return (
    <div data-testid="reference-components">
      {/* Hero Section */}
      <div>
        <h1>TechCorp Solutions</h1>
        <p>Innovating the future with cutting-edge technology solutions for modern businesses</p>
      </div>

      {/* Service Cards */}
      <div>
        <h2>Cloud Solutions</h2>
        <h2>AI & Analytics</h2>
        <h2>Custom Development</h2>
      </div>

      {/* Contact Form */}
      <div>
        <label>Full Name</label>
        <input type="text" />
        <label>Email Address</label>
        <input type="email" />
        <label>Inquiry Type</label>
        <select>
          <option>General Inquiry</option>
        </select>
        <label>Project Details</label>
        <textarea />
      </div>

      {/* Team Table */}
      <div>
        <div>Sarah Chen</div>
        <div>Marcus Johnson</div>
        <div>Elena Rodriguez</div>
        <div>David Kim</div>
        <div>Lisa Thompson</div>
      </div>

      {/* Performance Analytics */}
      <div>
        <div>2.4M</div>
        <div>Active Users</div>
        <div>$1.2M</div>
        <div>Revenue</div>
      </div>

      {/* Three.js Chart */}
      <div data-testid="three-chart"></div>

      {/* Tab Navigation */}
      <div>
        <button>Company Overview</button>
        <button>Our Services</button>
      </div>

      {/* Footer */}
      <div>
        <div>hello@techcorp.com</div>
        <div>+1 (555) 123-4567</div>
        <div>San Francisco, CA</div>
      </div>

      {/* Gallery Images */}
      <div>
        <img src="test-image.jpg" alt="Gallery image" role="img" />
        <img src="test-image2.jpg" alt="Gallery image 2" role="img" />
      </div>
    </div>
  );
};