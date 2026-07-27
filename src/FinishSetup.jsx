import React from 'react';
import './FinishSetup.css';
import restaurantImg from './assets/restaurant.png';
import { useRestaurant } from './RestaurantContext';

function FinishSetup({ onBack, onLaunch }) {
  const { settings, tables } = useRestaurant();

  const floorCount = settings.floorData ? settings.floorData.length : 1;
  const totalTables = tables.length;

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
        <div className="nav-actions">
        </div>
      </nav>

      <div className="stepper-container">
        <div className="stepper-line">
          <div className="stepper-line-active" style={{width: '100%'}}></div>
        </div>
        <div className="stepper-steps">
          <div className="step completed">
            <div className="step-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="step-label">Basic Info</div>
          </div>
          <div className="step completed">
            <div className="step-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="step-label">Restaurant</div>
          </div>
          <div className="step completed">
            <div className="step-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="step-label">Tables</div>
          </div>
          <div className="step completed">
            <div className="step-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="step-label">Hardware</div>
          </div>
          <div className="step active">
            <div className="step-circle">5</div>
            <div className="step-label">Finish</div>
          </div>
        </div>
      </div>

      <div className="setup-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="setup-left" style={{ flex: '1' }}>
          <div className="form-header" style={{ textAlign: 'center' }}>
            <h1>You're All Set! 🎉</h1>
            <p>Review your configuration before launching your dashboard.</p>
          </div>

          <div className="form-container">
            <div className="white-box review-box" style={{ padding: '2rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                
                {/* Basic Info */}
                <div style={{ backgroundColor: '#F9FAFB', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    Basic Info
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Restaurant:</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{settings.name || 'Not provided'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Cuisine:</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', textTransform: 'capitalize', textAlign: 'right' }}>{settings.cuisine || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                {/* Location & Details */}
                <div style={{ backgroundColor: '#F9FAFB', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    Location & Details
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>City:</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{settings.city || 'Not provided'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Open Hours:</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{settings.hours?.open || '09:00'} - {settings.hours?.close || '22:00'}</span>
                    </div>
                  </div>
                </div>

                {/* Floors & Tables */}
                <div style={{ backgroundColor: '#F9FAFB', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    </div>
                    Floors & Tables
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Number of Floors:</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{floorCount} Floors</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Total Tables:</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)', textAlign: 'right' }}>{totalTables} Tables</span>
                    </div>
                  </div>
                </div>

                {/* Hardware */}
                <div style={{ backgroundColor: '#F9FAFB', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#E0E7FF', color: '#4338CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    Hardware Setup
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Kitchen TV (KDS):</span>
                      <span style={{ fontWeight: 600, color: settings.hardware?.kitchenTv ? 'var(--success)' : 'var(--text-muted)', textAlign: 'right' }}>
                        {settings.hardware?.kitchenTv ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Cashier PC:</span>
                      <span style={{ fontWeight: 600, color: settings.hardware?.cashierPc ? 'var(--success)' : 'var(--text-muted)', textAlign: 'right' }}>
                        {settings.hardware?.cashierPc ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>

            <div className="form-actions" style={{ justifyContent: 'center', marginTop: '2rem', gap: '1rem' }}>
              <button className="btn-secondary" onClick={onBack}>Go Back & Edit</button>
              <button className="btn-primary" onClick={onLaunch} style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                Launch Dashboard 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishSetup;
