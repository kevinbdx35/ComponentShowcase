import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ReferenceComponents } from './components/ReferenceComponents';
import { AntDesignComponents } from './components/AntDesignComponents';
// import { MaterialUIComponents } from './components/MaterialUIComponents';
import { USWDSComponents } from './components/USWDSComponents';
import { GOVUKComponents } from './components/GOVUKComponents';
import { DSFRComponents } from './components/DSFRComponents';
import { CanadaComponents } from './components/CanadaComponents';
import { AustralianHealthComponents } from './components/AustralianHealthComponents';
import { GOLDComponents } from './components/GOLDComponents';
import { NZGovtComponents } from './components/NZGovtComponents';
import { BootstrapItaliaComponents } from './components/BootstrapItaliaComponents';
import { SemioticComponents } from './components/SemioticComponents';
// import { MantineComponents } from './components/MantineComponents';
// import { ChakraUIComponents } from './components/ChakraUIComponents';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vanilla" element={<VanillaPage />} />
          {/* <Route path="/material-ui" element={<MaterialUIPage />} /> */}
          <Route path="/ant-design" element={<AntDesignPage />} />
          <Route path="/uswds" element={<USWDSPage />} />
          <Route path="/govuk" element={<GOVUKPage />} />
          <Route path="/dsfr" element={<DSFRPage />} />
          <Route path="/canada" element={<CanadaPage />} />
          <Route path="/australian-health" element={<AustralianHealthPage />} />
          <Route path="/gold" element={<GOLDPage />} />
          <Route path="/nz-govt" element={<NZGovtPage />} />
          <Route path="/bootstrap-italia" element={<BootstrapItaliaPage />} />
          <Route path="/semiotic" element={<SemioticPage />} />
          {/* <Route path="/chakra-ui" element={<ChakraUIPage />} /> */}
          {/* <Route path="/mantine" element={<MantinePage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>UI Design System Comparison</h1>
        <p>Explore and compare different design systems and their component implementations</p>
      </div>

      <div className="home-stats">
        <div className="home-stat-card">
          <div className="home-stat-number">11</div>
          <div className="home-stat-label">Design Systems</div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-number">8</div>
          <div className="home-stat-label">Government Systems</div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-number">100%</div>
          <div className="home-stat-label">Accessible</div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-number">React</div>
          <div className="home-stat-label">Framework</div>
        </div>
      </div>

      <div className="home-categories">
        <div className="home-category-card">
          <h2 className="home-category-title">
            🏛️ Government Design Systems
          </h2>
          <ul className="home-category-list">
            <li><span className="status-indicator active"></span><a href="/uswds" className="home-category-link">U.S. Web Design System</a></li>
            <li><span className="status-indicator active"></span><a href="/govuk" className="home-category-link">GOV.UK Design System</a></li>
            <li><span className="status-indicator active"></span><a href="/dsfr" className="home-category-link">French Government (DSFR)</a></li>
            <li><span className="status-indicator active"></span><a href="/canada" className="home-category-link">Canada.ca Design System</a></li>
            <li><span className="status-indicator active"></span><a href="/australian-health" className="home-category-link">Australian Health Design System</a></li>
            <li><span className="status-indicator active"></span><a href="/gold" className="home-category-link">Australian Government (GOLD)</a></li>
            <li><span className="status-indicator active"></span><a href="/nz-govt" className="home-category-link">New Zealand Government</a></li>
            <li><span className="status-indicator active"></span><a href="/bootstrap-italia" className="home-category-link">Bootstrap Italia</a></li>
          </ul>
        </div>

        <div className="home-category-card">
          <h2 className="home-category-title">
            🎨 UI Libraries & Frameworks
          </h2>
          <ul className="home-category-list">
            <li><span className="status-indicator active"></span><a href="/vanilla" className="home-category-link">Vanilla CSS</a></li>
            <li><span className="status-indicator active"></span><a href="/ant-design" className="home-category-link">Ant Design</a></li>
            <li><span className="status-indicator active"></span><a href="/semiotic" className="home-category-link">Semiotic (Data Visualization)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function VanillaPage() {
  return <ReferenceComponents />;
}

// function MaterialUIPage() {
//   return <MaterialUIComponents />;
// }

function AntDesignPage() {
  return <AntDesignComponents />;
}

function USWDSPage() {
  return <USWDSComponents />;
}

function GOVUKPage() {
  return <GOVUKComponents />;
}

function DSFRPage() {
  return <DSFRComponents />;
}

function CanadaPage() {
  return <CanadaComponents />;
}

function AustralianHealthPage() {
  return <AustralianHealthComponents />;
}

function GOLDPage() {
  return <GOLDComponents />;
}

function NZGovtPage() {
  return <NZGovtComponents />;
}

function BootstrapItaliaPage() {
  return <BootstrapItaliaComponents />;
}

function SemioticPage() {
  return <SemioticComponents />;
}

// function ChakraUIPage() {
//   return <ChakraUIComponents />;
// }

// function MantinePage() {
//   return <MantineComponents />;
// }

export default App;
