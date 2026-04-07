import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Truck, ShieldAlert, BarChart3, Bot, Network, RefreshCw, Settings, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Klueberflow Bear" className="logo-img" />
            <h2>Klueberflow</h2>
          </Link>
          <button className="mobile-close" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">MAIN MENU</p>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <LayoutDashboard size={20} />
            <span>대시보드</span>
          </NavLink>
          <NavLink to="/track" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <Truck size={20} />
            <span>화물 Tracking</span>
          </NavLink>
          <NavLink to="/safety-stock" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <ShieldAlert size={20} />
            <span>안전재고</span>
          </NavLink>
          <NavLink to="/simulation" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <BarChart3 size={20} />
            <span>재고시뮬레이션</span>
          </NavLink>
          <NavLink to="/klueberbot" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <Bot size={20} />
            <span>크리버봇</span>
          </NavLink>
          <NavLink to="/abc-xyz" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <Network size={20} />
            <span>ABC-XYZ</span>
          </NavLink>
          <NavLink to="/turnover" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <RefreshCw size={20} />
            <span>재고회전율</span>
          </NavLink>
          <NavLink to="/settings" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <Settings size={20} />
            <span>설정</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">AD</div>
            <div className="user-info">
              <p className="name">Admin User</p>
              <p className="role">Logistics Manager</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
