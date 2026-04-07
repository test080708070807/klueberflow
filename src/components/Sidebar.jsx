import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Truc, Settings, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2 7 4.08 2.5a5.98 5.98 0 0 0 10.84 0L21 7" />
                <path d="M12 22V14" />
                <path d="M22 7 12 2 2 7v10l10 5 10-5V7Z" />
              </svg>
            </div>
            <h2>LogiTech</h2>
          </div>
          <button className="mobile-close" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">MAIN MENU</p>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/track" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => { if(window.innerWidth <= 768) toggleSidebar(); }}>
            <Package size={20} />
            <span>Shipment Check</span>
          </NavLink>
          <a href="#" className="nav-link disabled" onClick={(e) => e.preventDefault()}>
            <Settings size={20} />
            <span>Settings</span>
          </a>
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
