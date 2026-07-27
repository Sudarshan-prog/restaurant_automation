import React, { useState } from 'react';
import './TablesSetup.css';
import { useRestaurant } from './RestaurantContext';

function HardwareSetup({ onBack, onNext }) {
  const { settings, setSettings } = useRestaurant();

  const handleToggle = (device) => {
    setSettings({
      ...settings,
      hardware: {
        ...settings.hardware,
        [device]: !settings.hardware[device]
      }
    });
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
        <div className="nav-actions">
        </div>
      </nav>

      <div className="stepper-container">
        <div className="stepper-line">
          <div className="stepper-line-active" style={{width: '75%'}}></div>
        </div>
        <div className="stepper-steps">
          <div className="step completed">
            <div className="step-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div className="step-label">Basic Info</div>
          </div>
          <div className="step completed">
            <div className="step-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div className="step-label">Restaurant</div>
          </div>
          <div className="step completed">
            <div className="step-circle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div className="step-label">Tables</div>
          </div>
          <div className="step active">
            <div className="step-circle">4</div>
            <div className="step-label">Hardware</div>
          </div>
          <div className="step">
            <div className="step-circle">5</div>
            <div className="step-label">Finish</div>
          </div>
        </div>
      </div>

      <div className="setup-content">
        <div className="setup-left">
          <div className="form-header">
            <h1>Hardware Configuration 🖥️</h1>
            <p>Tell us about the devices you use to manage your restaurant.</p>
          </div>

          <div className="form-container">
            <div className="white-box" style={{ padding: '2rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem', borderBottom: '1px solid #E5E7EB', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Kitchen Display System (TV)</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Do you have a TV or tablet in the kitchen for chefs to view orders?</p>
                  </div>
                </div>
                <div 
                  className={`toggle-switch ${settings.hardware.kitchenTv ? 'active' : ''}`} 
                  onClick={() => handleToggle('kitchenTv')}
                  style={{ width: '48px', height: '24px', backgroundColor: settings.hardware.kitchenTv ? 'var(--primary)' : '#CBD5E1', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s' }}
                >
                  <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: settings.hardware.kitchenTv ? '26px' : '2px', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Cashier POS System (PC)</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Do you have a dedicated PC or tablet at the front desk for billing?</p>
                  </div>
                </div>
                <div 
                  className={`toggle-switch ${settings.hardware.cashierPc ? 'active' : ''}`} 
                  onClick={() => handleToggle('cashierPc')}
                  style={{ width: '48px', height: '24px', backgroundColor: settings.hardware.cashierPc ? 'var(--primary)' : '#CBD5E1', borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s' }}
                >
                  <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: settings.hardware.cashierPc ? '26px' : '2px', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
                </div>
              </div>

            </div>

            <div className="form-actions">
              <button className="btn-secondary" onClick={onBack}>Back</button>
              <button 
                className="btn-primary" 
                onClick={onNext}
                disabled={!settings.hardware.kitchenTv || !settings.hardware.cashierPc}
                style={{ 
                  opacity: (!settings.hardware.kitchenTv || !settings.hardware.cashierPc) ? 0.5 : 1, 
                  cursor: (!settings.hardware.kitchenTv || !settings.hardware.cashierPc) ? 'not-allowed' : 'pointer'
                }}
              >
                Next Step
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="setup-right">
          <div className="info-card" style={{ position: 'sticky', top: '100px' }}>
            <div className="info-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="benefit-text">
                  <h5>Real-time Sync</h5>
                  <p>Orders taken on the floor are instantly sent to the Kitchen TV.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <div className="benefit-text">
                  <h5>Seamless Billing</h5>
                  <p>Cashier PCs track payments, taxes, and tips effortlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardwareSetup;
