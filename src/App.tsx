import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ReferenceComponents } from './components/ReferenceComponents';
import { AntDesignComponents } from './components/AntDesignComponents';
// import { MaterialUIComponents } from './components/MaterialUIComponents';
import { USWDSComponents } from './components/USWDSComponents';
import { GOVUKComponents } from './components/GOVUKComponents';
// import { MantineComponents } from './components/MantineComponents';
// import { ChakraUIComponents } from './components/ChakraUIComponents';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ 
          padding: '1rem', 
          borderBottom: '1px solid #ccc',
          display: 'flex',
          gap: '1rem'
        }}>
          <Link to="/">Home</Link>
          <Link to="/vanilla">Vanilla CSS</Link>
          {/* <Link to="/material-ui">Material UI</Link> */}
          <Link to="/ant-design">Ant Design</Link>
          <Link to="/uswds">USWDS</Link>
          <Link to="/govuk">GOV.UK</Link>
          {/* <Link to="/chakra-ui">Chakra UI</Link> */}
          {/* <Link to="/mantine">Mantine</Link> */}
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vanilla" element={<VanillaPage />} />
          {/* <Route path="/material-ui" element={<MaterialUIPage />} /> */}
          <Route path="/ant-design" element={<AntDesignPage />} />
          <Route path="/uswds" element={<USWDSPage />} />
          <Route path="/govuk" element={<GOVUKPage />} />
          {/* <Route path="/chakra-ui" element={<ChakraUIPage />} /> */}
          {/* <Route path="/mantine" element={<MantinePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>UI Design System Comparison</h1>
      <p>Naviguez entre les différents design systems pour comparer leurs composants.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
        <h3>🚧 Statut des Design Systems</h3>
        <p>✅ Vanilla CSS - Fonctionnel</p>
        <p>🚧 Material UI - Mise à jour en cours (v7)</p>
        <p>✅ Ant Design - Fonctionnel</p>
        <p>✅ USWDS - Fonctionnel (U.S. Government Design System)</p>
        <p>✅ GOV.UK - Fonctionnel (UK Government Design System)</p>
        <p>🚧 Chakra UI v3 - En cours de développement</p>
        <p>🚧 Mantine v7 - En cours de développement</p>
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

// function ChakraUIPage() {
//   return <ChakraUIComponents />;
// }

// function MantinePage() {
//   return <MantineComponents />;
// }

export default App;
