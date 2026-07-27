import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Search, Filter, MoreVertical, Eye, CheckCircle, Clock } from 'lucide-react';

function OrderManagement() {
  const { orders, setOrders } = useRestaurant();
  const [filter, setFilter] = useState('All');

  const filteredOrders = filter === 'All' ? orders : orders.filter(o => o.status === filter);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Order Management</h2>
          <p>Track and manage all customer orders in real-time.</p>
        </div>
        <div className="header-actions" style={{ display: 'flex', gap: '1rem' }}>
          <div className="search-box">
            <Search size={16} />
            <input type="text" placeholder="Search orders..." />
          </div>
          <button className="icon-btn">
            <Filter size={16} />
          </button>
        </div>
      </div>

      <div className="filters-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        {['All', 'Received', 'Preparing', 'Ready', 'Served', 'Completed'].map(status => (
          <button 
            key={status}
            onClick={() => setFilter(status)}
            style={{ 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              border: '1px solid var(--border)',
              background: filter === status ? 'var(--primary)' : 'var(--bg-white)',
              color: filter === status ? 'white' : 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="dash-card">
        <table className="dash-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Table</th>
              <th>Time</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="font-medium">{order.id}</td>
                <td>Table {order.table}</td>
                <td>{order.time}</td>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {order.items.map((item, idx) => (
                      <span key={idx} style={{ fontSize: '0.85rem' }}>{item.qty}x {item.name}</span>
                    ))}
                  </div>
                </td>
                <td className="font-medium">${order.amount.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {order.status === 'Received' && (
                      <button onClick={() => updateOrderStatus(order.id, 'Preparing')} title="Mark Preparing" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#F59E0B' }}>
                        <Clock size={18} />
                      </button>
                    )}
                    {order.status === 'Preparing' && (
                      <button onClick={() => updateOrderStatus(order.id, 'Completed')} title="Mark Completed" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#10B981' }}>
                        <CheckCircle size={18} />
                      </button>
                    )}
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <Eye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement;
