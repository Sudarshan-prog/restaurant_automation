import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Check, Clock, Utensils, AlertCircle } from 'lucide-react';

function KitchenOrders() {
  const { orders, setOrders } = useRestaurant();
  
  // Filter out Billed, Paid, or legacy Completed orders so they disappear from Kitchen
  const activeOrders = orders.filter(o => !['Billed', 'Paid', 'Completed'].includes(o.status));
  
  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const statusColors = {
    'Received': { bg: '#FEF2F2', color: '#EF4444' }, // Red
    'Preparing': { bg: '#FFFBEB', color: '#F59E0B' }, // Orange
    'Ready': { bg: '#ECFDF5', color: '#10B981' }, // Green
    'Serving': { bg: '#F3F4F6', color: '#6B7280' }, // Gray
    'Completed': { bg: '#F3F4F6', color: '#6B7280' }, // Gray (legacy)
    'Billed': { bg: '#F3F4F6', color: '#6B7280' }, // Gray
    'Paid': { bg: '#F3F4F6', color: '#6B7280' } // Gray
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Live Orders</h2>
          <p>Manage and prepare active kitchen orders.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {activeOrders.map(order => (
          <div key={order.id} className="dash-card" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: statusColors[order.status]?.color || '#9CA3AF' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem' }}>{order.id}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Table: <strong>{order.table}</strong> • {order.time}</span>
              </div>
              <div style={{ 
                padding: '0.25rem 0.75rem', 
                borderRadius: '9999px', 
                fontSize: '0.75rem', 
                fontWeight: 600,
                backgroundColor: statusColors[order.status]?.bg || '#F3F4F6',
                color: statusColors[order.status]?.color || '#9CA3AF'
              }}>
                {order.status}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {order.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span><strong style={{ marginRight: '0.5rem' }}>{item.qty}x</strong> {item.name}</span>
                </div>
              ))}
            </div>

            {order.instructions && (
              <div style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#FEF2F2', borderRadius: '8px', color: '#B91C1C', fontSize: '0.85rem', marginBottom: '1rem' }}>
                <AlertCircle size={16} />
                <span>{order.instructions}</span>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {order.status === 'Received' && (
                <button onClick={() => updateStatus(order.id, 'Preparing')} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <Utensils size={16} /> Start Preparing
                </button>
              )}
              {order.status === 'Preparing' && (
                <button onClick={() => updateStatus(order.id, 'Ready')} className="btn-primary" style={{ flex: 1, justifyContent: 'center', backgroundColor: '#10B981' }}>
                  <Check size={16} /> Mark as Ready
                </button>
              )}
              {order.status === 'Ready' && (
                <button onClick={() => updateStatus(order.id, 'Serving')} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  <Check size={16} /> Serve to Table
                </button>
              )}
              {order.status === 'Serving' && (
                <button disabled className="btn-secondary" style={{ flex: 1, justifyContent: 'center', opacity: 0.5, cursor: 'not-allowed' }}>
                  <Check size={16} /> Serving (Waiting for Payment)
                </button>
              )}
            </div>
          </div>
        ))}

        {activeOrders.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            <Utensils size={48} color="#D1D5DB" style={{ margin: '0 auto 1rem auto', display: 'block' }} />
            <h3>No Active Orders</h3>
            <p>The kitchen is clear. Take a break!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default KitchenOrders;
