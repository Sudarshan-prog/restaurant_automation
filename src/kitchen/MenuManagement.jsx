import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { ToggleLeft, ToggleRight, CheckCircle2, Edit2, Trash2, Plus, X } from 'lucide-react';

function MenuManagement() {
  const { menuItems, setMenuItems } = useRestaurant();
  const [editingItem, setEditingItem] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const toggleAvailability = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, availableToday: item.availableToday === false ? true : false } : item
    ));
  };

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedItem = {
      id: editingItem.id || Date.now(),
      name: formData.get('name'),
      category: formData.get('category'),
      price: parseFloat(formData.get('price')),
      veg: formData.get('veg') === 'true',
      availableToday: editingItem.availableToday !== false,
      popular: editingItem.popular || false
    };

    if (isAdding) {
      setMenuItems([...menuItems, updatedItem]);
      setIsAdding(false);
    } else {
      setMenuItems(menuItems.map(item => item.id === updatedItem.id ? updatedItem : item));
    }
    setEditingItem(null);
  };

  const categories = [...new Set(menuItems.map(i => i.category))];

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Menu Management</h2>
          <p>Edit items, add new dishes, and select what's available for customers today.</p>
        </div>
        <button className="btn-primary" onClick={() => { setIsAdding(true); setEditingItem({}); }}>
          <Plus size={16} /> Add New Item
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {categories.map(cat => (
          <div key={cat} className="dash-card">
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', backgroundColor: '#F9FAFB' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{cat}</h3>
            </div>
            
            <div style={{ padding: '0' }}>
              {menuItems.filter(i => i.category === cat).map((item, idx) => {
                const isAvailable = item.availableToday !== false;
                return (
                  <div key={item.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '1.25rem 1.5rem',
                    borderBottom: idx === menuItems.filter(i => i.category === cat).length - 1 ? 'none' : '1px solid var(--border)',
                    backgroundColor: isAvailable ? 'white' : '#F9FAFB',
                    opacity: isAvailable ? 1 : 0.6
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {item.name}
                        {item.veg ? <span style={{ color: '#16A34A', fontSize: '0.75rem', padding: '0.1rem 0.4rem', border: '1px solid #16A34A', borderRadius: '4px' }}>VEG</span> : <span style={{ color: '#DC2626', fontSize: '0.75rem', padding: '0.1rem 0.4rem', border: '1px solid #DC2626', borderRadius: '4px' }}>NON-VEG</span>}
                        {isAvailable && <CheckCircle2 size={16} color="#10B981" />}
                      </h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>${item.price.toFixed(2)}</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <button 
                        onClick={() => toggleAvailability(item.id)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer',
                          color: isAvailable ? '#10B981' : '#9CA3AF',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: 600
                        }}
                      >
                        {isAvailable ? 'Available' : 'Out of Stock'}
                        {isAvailable ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                      </button>
                      
                      <div style={{ display: 'flex', gap: '0.5rem', borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem' }}>
                        <button onClick={() => { setIsAdding(false); setEditingItem(item); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }} title="Edit">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => deleteItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444' }} title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {menuItems.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>No menu items found. Add some dishes to get started.</p>
          </div>
        )}
      </div>

      {editingItem && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="dash-card" style={{ width: '100%', maxWidth: '500px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0 }}>{isAdding ? 'Add New Item' : 'Edit Menu Item'}</h3>
              <button onClick={() => setEditingItem(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Dish Name</label>
                <input type="text" name="name" defaultValue={editingItem.name || ''} required style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Category</label>
                  <input type="text" name="category" defaultValue={editingItem.category || ''} required placeholder="e.g. Main Course, Starters" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Price ($)</label>
                  <input type="number" name="price" step="0.01" defaultValue={editingItem.price || ''} required style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Dietary Type</label>
                <select name="veg" defaultValue={editingItem.veg ? 'true' : 'false'} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
                  <option value="true">Vegetarian (VEG)</option>
                  <option value="false">Non-Vegetarian (NON-VEG)</option>
                </select>
              </div>
              
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button type="button" onClick={() => setEditingItem(null)} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary">Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuManagement;
