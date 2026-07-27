import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Save, Store, IndianRupee, Clock } from 'lucide-react';
import ImageUploader from '../ImageUploader';
import './Admin.css';

function Settings() {
  const { settings, setSettings } = useRestaurant();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setSettings({
        ...settings,
        [parent]: { ...settings[parent], [child]: type === 'checkbox' ? checked : value }
      });
    } else {
      setSettings({ ...settings, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="dashboard-content">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1B2533', marginBottom: '0.25rem' }}>Restaurant Settings</h2>
          <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Configure your restaurant profile, taxes, and operating hours.</p>
        </div>
        <button onClick={handleSave} className="btn-primary">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div style={{ maxWidth: '900px' }}>
        {/* Restaurant Profile */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon">
              <Store size={20} />
            </div>
            Restaurant Profile
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="settings-form-group">
              <label className="settings-label">Restaurant Name</label>
              <input type="text" className="settings-input" name="name" value={settings.name || ''} onChange={handleChange} />
            </div>
            <div className="settings-form-group">
              <label className="settings-label">Contact Email</label>
              <input type="email" className="settings-input" name="email" value={settings.email || ''} onChange={handleChange} />
            </div>
          </div>

          <div className="settings-form-group" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <label className="settings-label">Restaurant Logo</label>
            <ImageUploader 
              value={settings.logo} 
              onChange={(dataUrl) => setSettings({ ...settings, logo: dataUrl })} 
            />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="settings-form-group">
              <label className="settings-label">Cuisine Type</label>
              <input type="text" className="settings-input" name="cuisine" value={settings.cuisine || ''} onChange={handleChange} placeholder="e.g. Italian, Chinese" />
            </div>
            <div className="settings-form-group">
              <label className="settings-label">Business Address</label>
              <input type="text" className="settings-input" name="address" value={settings.address || ''} onChange={handleChange} />
            </div>
          </div>
          
          <div className="settings-form-group">
            <label className="settings-label">Short Description</label>
            <textarea className="settings-input" name="description" value={settings.description || ''} onChange={handleChange} style={{ resize: 'vertical', minHeight: '80px' }}></textarea>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="settings-form-group">
              <label className="settings-label">FSSAI License Number</label>
              <input type="text" className="settings-input" name="fssai" value={settings.fssai || '11521014000123'} onChange={handleChange} />
            </div>
            <div className="settings-form-group">
              <label className="settings-label">Contact Phone</label>
              <input type="text" className="settings-input" name="phone" value={settings.phone || '+91 98765 43210'} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Tax & Financials */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon" style={{ backgroundColor: '#F0FDF4', color: '#16A34A' }}>
              <IndianRupee size={20} />
            </div>
            Tax & Financials
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="settings-form-group">
              <label className="settings-label">GST Number</label>
              <input type="text" className="settings-input" name="gst" value={settings.gst || ''} onChange={handleChange} />
            </div>
            <div className="settings-form-group">
              <label className="settings-label">Default Tax Rate (%)</label>
              <input type="number" className="settings-input" name="taxRate" value={settings.taxRate || 5} onChange={handleChange} />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <input type="checkbox" id="auto-tax" defaultChecked style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }} />
            <label htmlFor="auto-tax" style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>Apply tax automatically to all menu items</label>
          </div>
          </div>
        </div>

        {/* Hardware & Devices */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon" style={{ backgroundColor: '#F3E8FF', color: '#9333EA' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            Hardware & Devices
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>Kitchen Display System (TV)</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Enable KDS for chefs to view incoming orders</p>
              </div>
              <div 
                className={`toggle-switch ${settings.hardware?.kitchenTv ? 'active' : ''}`} 
                onClick={() => setSettings({ ...settings, hardware: { ...settings.hardware, kitchenTv: !settings.hardware?.kitchenTv } })}
                style={{ width: '48px', height: '24px', backgroundColor: settings.hardware?.kitchenTv ? 'var(--primary)' : '#CBD5E1', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s' }}
              >
                <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: settings.hardware?.kitchenTv ? '26px' : '2px', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <div>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>Cashier POS System (PC)</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Enable dedicated POS system for front desk</p>
              </div>
              <div 
                className={`toggle-switch ${settings.hardware?.cashierPc ? 'active' : ''}`} 
                onClick={() => setSettings({ ...settings, hardware: { ...settings.hardware, cashierPc: !settings.hardware?.cashierPc } })}
                style={{ width: '48px', height: '24px', backgroundColor: settings.hardware?.cashierPc ? 'var(--primary)' : '#CBD5E1', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s' }}
              >
                <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: settings.hardware?.cashierPc ? '26px' : '2px', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="settings-section">
          <div className="settings-section-header">
            <div className="settings-section-icon" style={{ backgroundColor: '#EFF6FF', color: '#2563EB' }}>
              <Clock size={20} />
            </div>
            Operating Hours
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {daysOfWeek.map((day) => (
              <div key={day} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: day !== 'Sunday' ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '120px', fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-main)' }}>
                  {day}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <div style={{ position: 'relative' }}>
                    <input type="time" className="settings-input" defaultValue="11:00" style={{ width: '150px' }} />
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>to</span>
                  <div style={{ position: 'relative' }}>
                    <input type="time" className="settings-input" defaultValue="23:30" style={{ width: '150px' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id={`open-${day}`} defaultChecked style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }} />
                  <label htmlFor={`open-${day}`} style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 500 }}>Open</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Settings;
