import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Receipt, Search, Bell, LogOut, Calculator } from 'lucide-react';
import { useRestaurant } from '../RestaurantContext';

function CashierLayout() {
  const { settings } = useRestaurant();
  const cashierName = 'Cashier Desk';

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          {settings.logo ? (
            <img src={settings.logo} alt="Logo" style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'contain', background: '#fff' }} />
          ) : (
            <Calculator size={24} color="#10B981" />
          )}
          <span className="logo-text" style={{ fontSize: '1.1rem', marginLeft: '8px', color: 'var(--text-main)', fontWeight: 600, whiteSpace: 'nowrap' }}>
            {settings.name || 'Cashier Portal'}
          </span>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/cashier/billing" className={({ isActive }) => isActive ? "active" : ""}>
                <Receipt size={18} />
                Billing & Invoices
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-box">
            <Search size={16} />
            <input type="text" placeholder="Search bill ID..." />
          </div>
          
          <div className="top-bar-actions">
            <div className="user-profile-dropdown">
              <div className="avatar" style={{ background: '#10B981' }}>
                C
              </div>
              <span className="user-name">{cashierName}</span>
            </div>
            <Link to="/" className="top-action-btn icon-only-btn relative" title="Logout" style={{ color: '#EF4444', borderLeft: '1px solid var(--border)', paddingLeft: '1rem', marginLeft: '0.5rem', borderRadius: 0 }}>
              <LogOut size={20} />
            </Link>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}

export default CashierLayout;
