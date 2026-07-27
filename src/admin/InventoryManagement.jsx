import React from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Search, Plus, AlertTriangle } from 'lucide-react';

function InventoryManagement() {
  const { inventory, setInventory } = useRestaurant();

  const handleRestock = (item) => {
    const amount = window.prompt(`How many units of ${item.name} (${item.unit}) are you restocking?`, "20");
    if (amount !== null && !isNaN(amount) && Number(amount) > 0) {
      setInventory(inventory.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + Number(amount), status: 'Good' } : i
      ));
    }
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Inventory Management</h2>
          <p>Track ingredients and get alerted on low stock levels.</p>
        </div>
        <div className="header-actions" style={{ display: 'flex', gap: '1rem' }}>
          <div className="search-box">
            <Search size={16} color="#9CA3AF" />
            <input type="text" placeholder="Search inventory..." />
          </div>
          <button className="btn-primary">
            <Plus size={16} />
            Add Item
          </button>
        </div>
      </div>

      <div className="dash-card">
        <table className="dash-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Current Stock</th>
              <th>Threshold</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} style={{ background: item.quantity <= item.threshold ? 'rgba(239, 68, 68, 0.05)' : 'transparent' }}>
                <td className="font-medium">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {item.quantity <= item.threshold && <AlertTriangle size={16} color="var(--error)" />}
                    {item.name}
                  </div>
                </td>
                <td>{item.category}</td>
                <td><span className="font-medium">{item.quantity}</span> {item.unit}</td>
                <td>{item.threshold} {item.unit}</td>
                <td>
                  <span className={`status-badge ${item.quantity <= item.threshold ? 'error' : 'completed'}`}>
                    {item.quantity <= item.threshold ? 'Low Stock' : 'Good'}
                  </span>
                </td>
                <td>
                  <button 
                    onClick={() => handleRestock(item)}
                    className="text-btn" 
                    style={{ color: 'var(--primary)', padding: '0.25rem 0.5rem', border: '1px solid var(--primary)', borderRadius: '6px' }}
                  >
                    Restock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryManagement;
