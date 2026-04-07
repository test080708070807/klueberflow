import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search shipments, items..." />
        </div>
      </div>
      <div className="header-right">
        <div className="last-sync">
          <span className="sync-dot"></span>
          Live Sync (Google Sheets)
        </div>
        <button className="icon-btn">
          <div className="notification-badge"></div>
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
