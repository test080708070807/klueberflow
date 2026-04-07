import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <h1>Klueberflow SCM</h1>
        </Link>
        <nav className="gnb-nav">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>대시보드</NavLink>
          <NavLink to="/track" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>화물 Tracking</NavLink>
          <NavLink to="/safety-stock" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>안전재고</NavLink>
          <NavLink to="/simulation" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>재고시뮬레이션</NavLink>
          <NavLink to="/klueberbot" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>크리버봇</NavLink>
          <NavLink to="/abc-xyz" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>ABC-XYZ</NavLink>
          <NavLink to="/turnover" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>재고회전율</NavLink>
          <NavLink to="/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>설정</NavLink>
        </nav>
      </div>
      
      <div className="header-right">
        <div className="search-box">
          <Search size={14} className="search-icon" />
          <input type="text" placeholder="B/L, 자재코드 품명 검색" />
        </div>
        <div className="last-sync">
          <span className="sync-dot"></span>
          Live Sync
        </div>
        <button className="icon-btn">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile">
          <User size={18} />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
