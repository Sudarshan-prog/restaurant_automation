import React from 'react';
import { Outlet, useSearchParams, useParams } from 'react-router-dom';
import { useRestaurant } from '../RestaurantContext';
import './Customer.css';

function CustomerLayout() {
  const { settings } = useRestaurant();
  const { tableId } = useParams();
  const [searchParams] = useSearchParams();
  
  const tableNum = searchParams.get('table') || tableId || 'Unknown';
  const floorNum = searchParams.get('floor') || '1';

  return (
    <div className="customer-app">
      <header className="customer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="customer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {settings.logo && <img src={settings.logo} alt="Logo" style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'contain' }} />}
          <h1 style={{ margin: 0, fontSize: '1.25rem' }}>{settings.name || 'TableFlow'}</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span className="customer-table-badge" style={{ marginBottom: '2px', background: 'var(--primary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>Table {tableNum}</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Floor {floorNum}</span>
        </div>
      </header>
      
      <main className="customer-main">
        <Outlet />
      </main>

      <footer className="customer-footer" style={{ padding: '2rem 1rem', background: '#F9FAFB', borderTop: '1px solid var(--border)', marginTop: '2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{settings.name}</h3>
        {settings.cuisine && <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'capitalize' }}>{settings.cuisine} Cuisine</p>}
        {settings.description && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', maxWidth: '400px', margin: '0 auto 1rem' }}>{settings.description}</p>}
        {settings.address && (
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {settings.address}{settings.city ? `, ${settings.city}` : ''}
          </p>
        )}
        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '1.5rem' }}>
          Powered by TableFlow OS
        </p>
      </footer>
    </div>
  );
}

export default CustomerLayout;
