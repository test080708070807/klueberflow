import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/Dashboard';
import TrackPage from './pages/TrackPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <div className="layout-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/safety-stock" element={<PlaceholderPage title="안전재고" />} />
            <Route path="/simulation" element={<PlaceholderPage title="재고시뮬레이션" />} />
            <Route path="/klueberbot" element={<PlaceholderPage title="크리버봇" />} />
            <Route path="/abc-xyz" element={<PlaceholderPage title="ABC-XYZ" />} />
            <Route path="/turnover" element={<PlaceholderPage title="재고회전율" />} />
            <Route path="/settings" element={<PlaceholderPage title="설정" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
