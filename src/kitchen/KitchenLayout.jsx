import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useRestaurant } from '../RestaurantContext';
import { ChefHat, ShoppingBag, Bell, LogOut, Search, ChevronDown, List } from 'lucide-react';

function KitchenLayout() {
  const { settings } = useRestaurant();
  const chefEmail = 'chef@gmail.com';

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          {settings.logo ? (
            <img src={settings.logo} alt="Logo" style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'contain', background: '#fff' }} />
          ) : (
            <ChefHat size={24} color="#EF4444" />
          )}
          <span className="logo-text" style={{ fontSize: '1.1rem', marginLeft: '8px', color: 'var(--text-main)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {settings.name || 'Kitchen Portal'}
          </span>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/kitchen/orders" className={({ isActive }) => isActive ? "active" : ""}>
                <List size={18} />
                Live Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/kitchen/menu" className={({ isActive }) => isActive ? "active" : ""}>
                <ShoppingBag size={18} />
                Today's Menu
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
            <input type="text" placeholder="Search orders..." />
          </div>
          
          <div className="top-bar-actions">
            <div className="user-profile-dropdown">
              <div className="avatar" style={{ background: '#EF4444' }}>
                {chefEmail[0].toUpperCase()}
              </div>
              <span className="user-name">Chef</span>
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

export default KitchenLayout;
