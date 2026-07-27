import React, { useState } from 'react';
import './TablesSetup.css';
import axios from 'axios';

function MenuSetup({ onBack, onNext }) {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Starters', items: [{ id: 1, name: '', price: '' }] }
  ]);
  const [loading, setLoading] = useState(false);

  const addCategory = () => {
    setCategories([...categories, { id: Date.now(), name: '', items: [{ id: Date.now(), name: '', price: '' }] }]);
  };

  const addItem = (catId) => {
    setCategories(categories.map(cat => {
      if (cat.id === catId) {
        return { ...cat, items: [...cat.items, { id: Date.now(), name: '', price: '' }] };
      }
      return cat;
    }));
  };

  const updateCategoryName = (catId, name) => {
    setCategories(categories.map(cat => cat.id === catId ? { ...cat, name } : cat));
  };

  const updateItem = (catId, itemId, field, value) => {
    setCategories(categories.map(cat => {
      if (cat.id === catId) {
        return {
          ...cat,
          items: cat.items.map(item => item.id === itemId ? { ...item, [field]: value } : item)
        };
      }
      return cat;
    }));
  };

  const handleNext = async () => {
    setLoading(true);
    try {
      const restaurantId = localStorage.getItem('tableflow_restaurant_id');
      if (!restaurantId) {
        alert("Restaurant ID not found. Please complete previous steps.");
        return;
      }

      for (const cat of categories) {
        if (!cat.name.trim()) continue;
        
        // Save Category
        const catRes = await axios.post(`http://localhost:5000/api/restaurant/${restaurantId}/menu-categories`, { 
          name: cat.name, 
          icon: '🍽️' 
        });
        const savedCatId = catRes.data.category.id;

        // Save Items
        for (const item of cat.items) {
          if (!item.name.trim() || !item.price) continue;
          
          await axios.post(`http://localhost:5000/api/restaurant/${savedCatId}/menu-items`, {
            restaurantId,
            name: item.name,
            price: parseFloat(item.price),
            description: ''
          });
        }
      }
      onNext();
    } catch (error) {
      console.error("Error saving menu:", error);
      alert("Failed to save menu. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="setup-wrapper">
      <nav className="top-nav">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z"></path>
            <path d="M5 16a7 7 0 0 1 14 0"></path>
            <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"></path>
          </svg>
          <span className="logo-text">
            <span className="logo-text-dark">Table</span><span className="logo-text-primary">Flow</span>
          </span>
        </div>
      </nav>

      <div className="stepper-container">
        <div className="stepper-line">
          <div className="stepper-line-active" style={{width: '75%'}}></div>
        </div>
        <div className="stepper-steps">
          <div className="step completed"><div className="step-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="step-label">Basic Info</div></div>
          <div className="step completed"><div className="step-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="step-label">Restaurant</div></div>
          <div className="step completed"><div className="step-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="step-label">Tables</div></div>
          <div className="step active"><div className="step-circle">4</div><div className="step-label">Menu</div></div>
          <div className="step"><div className="step-circle">5</div><div className="step-label">Finish</div></div>
        </div>
      </div>

      <div className="setup-content">
        <div className="setup-left" style={{ width: '100%' }}>
          <div className="form-header">
            <h1>Create Your Menu 🍔</h1>
            <p>Add categories and items to your digital menu.</p>
          </div>

          <div className="form-container">
            {categories.map((cat, index) => (
              <div className="white-box" key={cat.id} style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                <div className="form-group">
                  <label>Category {index + 1} Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Starters, Main Course, Drinks" 
                    value={cat.name} 
                    onChange={e => updateCategoryName(cat.id, e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E5E7EB', marginBottom: '1rem' }}
                  />
                </div>
                
                <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #E5E7EB' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B7280', marginBottom: '0.5rem', display: 'block' }}>Items</label>
                  {cat.items.map((item, itemIdx) => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                      <input 
                        type="text" 
                        placeholder="Item name (e.g. Garlic Bread)" 
                        value={item.name} 
                        onChange={e => updateItem(cat.id, item.id, 'name', e.target.value)}
                        style={{ flex: 2, padding: '0.5rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}
                      />
                      <input 
                        type="number" 
                        placeholder="Price ($)" 
                        value={item.price} 
                        onChange={e => updateItem(cat.id, item.id, 'price', e.target.value)}
                        style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}
                      />
                    </div>
                  ))}
                  <button onClick={() => addItem(cat.id)} style={{ background: 'none', border: 'none', color: '#6366F1', fontWeight: 500, cursor: 'pointer', padding: '0.5rem 0' }}>
                    + Add another item
                  </button>
                </div>
              </div>
            ))}
            
            <button onClick={addCategory} style={{ width: '100%', padding: '1rem', background: '#F3F4F6', border: '2px dashed #D1D5DB', borderRadius: '8px', color: '#4B5563', fontWeight: 600, cursor: 'pointer', marginBottom: '2rem' }}>
              + Add New Category
            </button>

            <div className="form-actions">
              <button className="btn-secondary" onClick={onBack}>Back</button>
              <button className="btn-primary" onClick={handleNext} disabled={loading}>
                {loading ? 'Saving...' : 'Next Step'}
                {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSetup;
