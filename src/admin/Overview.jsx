import React from 'react';
import { useRestaurant } from '../RestaurantContext';
import { TrendingUp, Users, ShoppingBag, Utensils, Clock, ChevronDown } from 'lucide-react';

function Overview() {
  const { orders, tables, menuItems } = useRestaurant();

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
  const activeOrders = orders.filter(o => o.status !== 'Completed').length;
  const occupiedTables = tables.filter(t => t.status === 'occupied').length;

  const topItems = menuItems.filter(item => item.popular);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Welcome back, Alex! 👋</h2>
          <p>Here's what's happening with your restaurant today.</p>
        </div>
        <button className="date-picker-btn">
          <Clock size={16} />
          Today
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="summary-cards">
        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-purple">
              <TrendingUp size={18} color="#6366F1" />
            </div>
            <span className="summary-label">Total Revenue</span>
          </div>
          <div className="summary-value">${totalRevenue.toFixed(2)}</div>
          <div className="summary-change pos">
            <span>+12.5%</span> <span className="from-text">from yesterday</span>
          </div>
        </div>

        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-blue">
              <ShoppingBag size={18} color="#3B82F6" />
            </div>
            <span className="summary-label">Active Orders</span>
          </div>
          <div className="summary-value">{activeOrders}</div>
          <div className="summary-change pos">
            <span>+5</span> <span className="from-text">from last hour</span>
          </div>
        </div>

        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-green">
              <Users size={18} color="#10B981" />
            </div>
            <span className="summary-label">Total Customers</span>
          </div>
          <div className="summary-value">124</div>
          <div className="summary-change pos">
            <span>+18.2%</span> <span className="from-text">from yesterday</span>
          </div>
        </div>

        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-orange">
              <Utensils size={18} color="#F59E0B" />
            </div>
            <span className="summary-label">Occupancy Rate</span>
          </div>
          <div className="summary-value">{Math.round((occupiedTables / tables.length) * 100)}%</div>
          <div className="summary-change neg">
            <span>-2.4%</span> <span className="from-text">from last week</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dash-card recent-orders">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Table</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id}>
                  <td className="font-medium">{order.id}</td>
                  <td>Table {order.table}</td>
                  <td>{order.items.reduce((sum, i) => sum + i.qty, 0)} items</td>
                  <td className="font-medium">${order.amount.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dash-card popular-items">
          <div className="card-header">
            <h3>Popular Items</h3>
            <button className="view-all-btn">Full Menu</button>
          </div>
          <div className="items-list">
            {topItems.map((item, index) => (
              <div className="item-row" key={index}>
                <div className="item-info">
                  <div className="item-emoji">{item.veg ? '🥗' : '🥩'}</div>
                  <div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-orders">Popular</div>
                  </div>
                </div>
                <div className="item-revenue">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="dash-card table-overview">
          <div className="card-header">
            <h3>Table Overview</h3>
            <div className="legend">
              <span className="legend-item"><span className="dot available"></span> Available</span>
              <span className="legend-item"><span className="dot occupied"></span> Occupied</span>
            </div>
          </div>
          <div className="tables-grid">
            {tables.map((table) => (
              <div key={table.num} className={`table-box ${table.status}`}>
                {table.num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
