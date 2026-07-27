import React from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Plus, Percent, Copy } from 'lucide-react';

function Promotions() {
  const { promotions, setPromotions } = useRestaurant();

  const togglePromo = (id) => {
    setPromotions(promotions.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Promotions Management</h2>
          <p>Create discount codes and track campaign usage.</p>
        </div>
        <button className="btn-primary">
          <Plus size={16} />
          New Promotion
        </button>
      </div>

      <div className="dash-card">
        <table className="dash-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Type</th>
              <th>Value</th>
              <th>Usage</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo) => (
              <tr key={promo.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ padding: '0.25rem 0.5rem', background: 'var(--bg-hover)', borderRadius: '6px', fontFamily: 'monospace', fontWeight: 'bold' }}>
                      {promo.code}
                    </div>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><Copy size={14}/></button>
                  </div>
                </td>
                <td>{promo.type}</td>
                <td className="font-medium">
                  {promo.type === 'Percentage' ? `${promo.value}%` : `$${promo.value}`}
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '100px', height: '6px', background: 'var(--bg-hover)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: 'var(--primary)', width: `${(promo.used/promo.limit)*100}%` }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem' }}>{promo.used}/{promo.limit}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${promo.active ? 'completed' : 'pending'}`}>
                    {promo.active ? 'Active' : 'Expired'}
                  </span>
                </td>
                <td>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={promo.active} 
                      onChange={() => togglePromo(promo.id)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    {promo.active ? 'Deactivate' : 'Activate'}
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Promotions;
