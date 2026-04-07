import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/Dashboard';
import TrackPage from './pages/TrackPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="layout-container">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <main style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/track" element={<TrackPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
