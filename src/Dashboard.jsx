import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useRestaurant } from './RestaurantContext';
import { LayoutDashboard, ShoppingBag, Grid, Utensils, Users, BarChart3, Settings, Bell, Search, HelpCircle, ChevronDown, Percent, MessageSquare, LogOut, Receipt } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const { staff, orders, settings } = useRestaurant();
  
  // Find current active user (mock)
  const adminEmail = settings.adminEmail || 'admin@gmail.com';
  
  const activeOrdersCount = orders.filter(o => o.status !== 'Completed').length;

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          {settings.logo ? (
            <img src={settings.logo} alt="Logo" style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'contain', background: '#fff' }} />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z"></path>
              <path d="M5 16a7 7 0 0 1 14 0"></path>
              <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"></path>
            </svg>
          )}
          <span className="logo-text" style={{ fontSize: '1.1rem', marginLeft: '8px', color: 'var(--text-main)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {settings.name || 'TableFlow'}
          </span>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
                <LayoutDashboard size={18} />
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/tables" className={({ isActive }) => isActive ? "active" : ""}>
                <Grid size={18} />
                Tables
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/staff" className={({ isActive }) => isActive ? "active" : ""}>
                <Users size={18} />
                Staff
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/inventory" className={({ isActive }) => isActive ? "active" : ""}>
                <ShoppingBag size={18} />
                Inventory
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/promotions" className={({ isActive }) => isActive ? "active" : ""}>
                <Percent size={18} />
                Promotions
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/feedback" className={({ isActive }) => isActive ? "active" : ""}>
                <MessageSquare size={18} />
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/reports" className={({ isActive }) => isActive ? "active" : ""}>
                <BarChart3 size={18} />
                Reports & Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "active" : ""}>
                <Settings size={18} />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="pro-upgrade-card">
          <div className="pro-icon">👑</div>
          <h4>Upgrade to Pro</h4>
          <p>Unlock premium features and grow your business.</p>
          <button className="upgrade-btn">Upgrade Now</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-box">
            <Search size={16} />
            <input type="text" placeholder="Search anything..." />
            <span className="shortcut">⌘ K</span>
          </div>
          
          <div className="top-bar-actions">
            <button className="top-action-btn icon-only-btn relative">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            
            <div className="user-profile-dropdown">
              <div className="avatar">
                {adminEmail[0].toUpperCase()}
              </div>
              <span className="user-name">{adminEmail}</span>
              <ChevronDown size={16} />
            </div>
            
            <Link to="/" className="top-action-btn icon-only-btn relative" title="Logout" style={{ color: '#EF4444', borderLeft: '1px solid var(--border)', paddingLeft: '1rem', marginLeft: '0.5rem', borderRadius: 0 }}>
              <LogOut size={20} />
            </Link>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
