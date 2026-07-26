import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const recentOrders = [
    { id: '#TF-1248', table: 'Table 5', items: 2, amount: '$45.50', status: 'Completed' },
    { id: '#TF-1247', table: 'Table 12', items: 4, amount: '$89.90', status: 'Completed' },
    { id: '#TF-1246', table: 'Table 3', items: 3, amount: '$67.30', status: 'Preparing' },
    { id: '#TF-1245', table: 'Table 8', items: 5, amount: '$120.00', status: 'Received' },
  ];

  const topItems = [
    { name: 'Margherita Pizza', orders: '128 orders', revenue: '$1,920', emoji: '🍕' },
    { name: 'Spaghetti Carbonara', orders: '96 orders', revenue: '$1,440', emoji: '🍝' },
    { name: 'Caesar Salad', orders: '80 orders', revenue: '$1,200', emoji: '🥗' },
    { name: 'Chocolate Cake', orders: '64 orders', revenue: '$960', emoji: '🍰' },
    { name: 'Grilled Salmon', orders: '48 orders', revenue: '$720', emoji: '🐟' },
  ];

  const tables = [
    { num: 1, status: 'available' }, { num: 2, status: 'available' }, { num: 3, status: 'available' }, { num: 4, status: 'available' },
    { num: 5, status: 'occupied' }, { num: 6, status: 'available' }, { num: 7, status: 'available' }, { num: 8, status: 'reserved' },
    { num: 9, status: 'available' }, { num: 10, status: 'available' }, { num: 11, status: 'available' }, { num: 12, status: 'occupied' },
    { num: 13, status: 'available' }, { num: 14, status: 'available' }, { num: 15, status: 'available' }, { num: 16, status: 'available' },
    { num: 17, status: 'available' }, { num: 18, status: 'occupied' }, { num: 19, status: 'available' }, { num: 20, status: 'cleaning' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z"></path>
            <path d="M5 16a7 7 0 0 1 14 0"></path>
            <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"></path>
          </svg>
          <span className="logo-text">
            <span className="logo-text-dark">Table</span><span className="logo-text-primary">Flow</span>
          </span>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              Dashboard
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Orders
              <span className="badge">24</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="4" rx="1" ry="1"></rect><path d="M6 14v4"></path><path d="M18 14v4"></path><path d="M10 6h4"></path><path d="M10 10V6"></path><path d="M14 10V6"></path></svg>
              Tables
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              Menu
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Customers
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Staff
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Reports
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              Settings
            </li>
          </ul>
          
          <div className="sidebar-divider"></div>
          
          <ul>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Integrations
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              Support
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

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search anything..." />
            <span className="shortcut">⌘ K</span>
          </div>
          
          <div className="top-bar-actions">
            <button className="top-action-btn text-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              Need help?
            </button>
            
            <button className="top-action-btn icon-only-btn relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="notification-dot"></span>
            </button>
            
            <div className="user-profile-dropdown">
              <div className="avatar">AM</div>
              <span className="user-name">Alex Manager</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-header">
            <div>
              <h2>Welcome back, Alex! 👋</h2>
              <p>Here's what's happening with your restaurant today.</p>
            </div>
            <button className="date-picker-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              May 12 - May 18, 2024
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>

          <div className="summary-cards">
            <div className="dash-card summary-card">
              <div className="summary-header">
                <div className="summary-icon bg-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <span className="summary-label">Total Revenue</span>
              </div>
              <div className="summary-value">$12,340</div>
              <div className="summary-change pos">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                <span>12.5%</span> <span className="from-text">from last week</span>
              </div>
            </div>

            <div className="dash-card summary-card">
              <div className="summary-header">
                <div className="summary-icon bg-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </div>
                <span className="summary-label">Total Orders</span>
              </div>
              <div className="summary-value">320</div>
              <div className="summary-change pos">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                <span>8.2%</span> <span className="from-text">from last week</span>
              </div>
            </div>

            <div className="dash-card summary-card">
              <div className="summary-header">
                <div className="summary-icon bg-orange">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span className="summary-label">Total Customers</span>
              </div>
              <div className="summary-value">256</div>
              <div className="summary-change pos">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                <span>15.3%</span> <span className="from-text">from last week</span>
              </div>
            </div>

            <div className="dash-card summary-card">
              <div className="summary-header">
                <div className="summary-icon bg-blue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="4" rx="1" ry="1"></rect><path d="M6 14v4"></path><path d="M18 14v4"></path><path d="M10 6h4"></path><path d="M10 10V6"></path><path d="M14 10V6"></path></svg>
                </div>
                <span className="summary-label">Occupied Tables</span>
              </div>
              <div className="summary-value">18 <span className="text-light">/ 20</span></div>
              <div className="summary-change text-blue">
                <span>90%</span> <span className="from-text">Occupancy</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="grid-left">
              <div className="dash-card overview-chart-card">
                <div className="card-header">
                  <h3>Today's Overview</h3>
                  <button className="dropdown-btn">
                    Today
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                </div>
                <div className="chart-legend">
                  <div className="legend-item"><span className="dot orders-dot"></span> Orders</div>
                  <div className="legend-item"><span className="dot revenue-dot"></span> Revenue</div>
                </div>
                <div className="mock-chart-container">
                  {/* SVG Mockup of the line chart */}
                  <svg viewBox="0 0 800 250" className="mock-line-chart">
                    {/* Grid lines */}
                    <path d="M 50 10 L 800 10" stroke="#F3F4F6" strokeWidth="1" />
                    <path d="M 50 60 L 800 60" stroke="#F3F4F6" strokeWidth="1" />
                    <path d="M 50 110 L 800 110" stroke="#F3F4F6" strokeWidth="1" />
                    <path d="M 50 160 L 800 160" stroke="#F3F4F6" strokeWidth="1" />
                    <path d="M 50 210 L 800 210" stroke="#F3F4F6" strokeWidth="1" />
                    
                    {/* Y Axis Left */}
                    <text x="40" y="15" fill="#9CA3AF" fontSize="12" textAnchor="end">80</text>
                    <text x="40" y="65" fill="#9CA3AF" fontSize="12" textAnchor="end">60</text>
                    <text x="40" y="115" fill="#9CA3AF" fontSize="12" textAnchor="end">40</text>
                    <text x="40" y="165" fill="#9CA3AF" fontSize="12" textAnchor="end">20</text>
                    <text x="40" y="215" fill="#9CA3AF" fontSize="12" textAnchor="end">0</text>
                    
                    {/* Y Axis Right */}
                    <text x="810" y="15" fill="#9CA3AF" fontSize="12" textAnchor="start">$4K</text>
                    <text x="810" y="65" fill="#9CA3AF" fontSize="12" textAnchor="start">$3K</text>
                    <text x="810" y="115" fill="#9CA3AF" fontSize="12" textAnchor="start">$2K</text>
                    <text x="810" y="165" fill="#9CA3AF" fontSize="12" textAnchor="start">$1K</text>
                    <text x="810" y="215" fill="#9CA3AF" fontSize="12" textAnchor="start">$0</text>
                    
                    {/* X Axis */}
                    <text x="70" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">12 AM</text>
                    <text x="210" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">4 AM</text>
                    <text x="360" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">8 AM</text>
                    <text x="510" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">12 PM</text>
                    <text x="660" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">4 PM</text>
                    <text x="810" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">8 PM</text>
                    <text x="960" y="240" fill="#9CA3AF" fontSize="12" textAnchor="middle">12 AM</text> {/* Actually right edge is less */}

                    {/* Gradient for area */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                      </linearGradient>
                    </defs>

                    {/* Area under line 1 (Revenue) */}
                    <path d="M 50 210 L 150 210 L 200 190 L 250 180 L 300 140 L 330 140 L 380 110 L 400 115 L 430 90 L 450 90 L 480 60 L 530 60 L 580 40 L 630 30 L 680 45 L 750 35 L 780 40 L 780 210 Z" fill="url(#chartGradient)" />
                    
                    {/* Line 1 (Revenue - Dark Blue) */}
                    <path d="M 50 210 L 150 210 L 200 190 L 250 180 L 300 140 L 330 140 L 380 110 L 400 115 L 430 90 L 450 90 L 480 60 L 530 60 L 580 40 L 630 30 L 680 45 L 750 35 L 780 40" fill="none" stroke="#6366F1" strokeWidth="2.5" />
                    <circle cx="780" cy="40" r="4" fill="#6366F1" />

                    {/* Line 2 (Orders - Light Purple) */}
                    <path d="M 50 210 L 200 210 L 250 190 L 300 180 L 350 160 L 400 160 L 450 120 L 500 125 L 550 100 L 600 110 L 650 90 L 700 80 L 750 90 L 780 85" fill="none" stroke="#A5B4FC" strokeWidth="2.5" />
                    <circle cx="780" cy="85" r="4" fill="#A5B4FC" />
                  </svg>
                </div>
              </div>

              <div className="bottom-left-grid">
                <div className="dash-card recent-orders-card">
                  <div className="card-header">
                    <h3>Recent Orders</h3>
                    <a href="#" className="view-all">View all</a>
                  </div>
                  <div className="orders-list">
                    {recentOrders.map((order, i) => (
                      <div className="order-item" key={i}>
                        <div className={`status-icon ${order.status.toLowerCase()}`}>
                          {order.status === 'Completed' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          )}
                          {order.status === 'Preparing' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          )}
                          {order.status === 'Received' && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                          )}
                        </div>
                        <div className="order-info">
                          <p className="order-id">{order.id}</p>
                          <p className="order-details">{order.table} • {order.items} items</p>
                        </div>
                        <div className="order-price-status">
                          <p className="order-amount">{order.amount}</p>
                          <p className={`order-status-text ${order.status.toLowerCase()}`}>{order.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dash-card table-status-card">
                  <div className="card-header">
                    <h3>Table Status</h3>
                    <a href="#" className="view-all">View all</a>
                  </div>
                  <div className="tables-grid">
                    {tables.map(table => (
                      <div key={table.num} className={`table-box ${table.status}`}>
                        {table.num}
                      </div>
                    ))}
                  </div>
                  <div className="table-legend">
                    <span><span className="dot bg-green"></span> Occupied</span>
                    <span><span className="dot bg-gray"></span> Available</span>
                    <span><span className="dot bg-orange"></span> Reserved</span>
                    <span><span className="dot bg-red"></span> Cleaning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-right">
              <div className="dash-card revenue-card">
                <div className="card-header">
                  <h3>Revenue Overview</h3>
                  <button className="dropdown-btn small">
                    This Week
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                </div>
                <div className="revenue-amount">
                  <h2>$12,340</h2>
                  <div className="badge pos">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    12.5%
                  </div>
                </div>
                
                <div className="mock-bar-chart">
                  <div className="y-axis">
                    <span>$15K</span>
                    <span>$10K</span>
                    <span>$5K</span>
                    <span>$0</span>
                  </div>
                  <div className="bars-container">
                    {/* Bars values: Mon=8k, Tue=6k, Wed=12k, Thu=8k, Fri=13k, Sat=14k, Sun=11k */}
                    <div className="bar-wrapper"><div className="bar" style={{height: '55%'}}></div><span>Mon</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{height: '40%'}}></div><span>Tue</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{height: '80%'}}></div><span>Wed</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{height: '55%'}}></div><span>Thu</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{height: '85%'}}></div><span>Fri</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{height: '95%'}}></div><span>Sat</span></div>
                    <div className="bar-wrapper"><div className="bar" style={{height: '70%'}}></div><span>Sun</span></div>
                  </div>
                </div>
              </div>

              <div className="dash-card top-items-card">
                <div className="card-header">
                  <h3>Top Selling Items</h3>
                  <a href="#" className="view-all">View all</a>
                </div>
                <div className="top-items-list">
                  {topItems.map((item, i) => (
                    <div className="top-item" key={i}>
                      <div className="item-image-mock">
                        <span className="emoji" role="img" aria-label={item.name}>{item.emoji}</span>
                      </div>
                      <div className="item-info">
                        <p className="item-name">{item.name}</p>
                        <p className="item-orders">{item.orders}</p>
                      </div>
                      <div className="item-revenue">{item.revenue}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dash-card quick-actions-card">
                <h3>Quick Actions</h3>
                <div className="actions-grid">
                  <button className="quick-action-btn">
                    <div className="icon-wrapper">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    Add Order
                  </button>
                  <button className="quick-action-btn">
                    <div className="icon-wrapper">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="4" rx="1" ry="1"></rect><path d="M6 14v4"></path><path d="M18 14v4"></path><path d="M10 6h4"></path><path d="M10 10V6"></path><path d="M14 10V6"></path></svg>
                    </div>
                    Reserve Table
                  </button>
                  <button className="quick-action-btn">
                    <div className="icon-wrapper">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    </div>
                    Add Menu Item
                  </button>
                  <button className="quick-action-btn">
                    <div className="icon-wrapper">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    </div>
                    View Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
