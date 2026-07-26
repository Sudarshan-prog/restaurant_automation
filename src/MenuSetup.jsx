import React, { useState } from 'react';
import './MenuSetup.css';
import menuCardImg from './assets/menu_card.png';

function MenuSetup({ onBack, onNext }) {
  const [selectedMethod, setSelectedMethod] = useState('upload');
  
  const menuCategories = [
    { id: 1, name: 'Beverages', items: 12, icon: 'beverage' },
    { id: 2, name: 'Starters', items: 18, icon: 'bowl' },
    { id: 3, name: 'Main Course', items: 32, icon: 'cloche' },
    { id: 4, name: 'Pizzas', items: 15, icon: 'pizza' },
    { id: 5, name: 'Desserts', items: 10, icon: 'cake' },
  ];

  const renderCategoryIcon = (iconName) => {
    switch(iconName) {
      case 'beverage':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        );
      case 'bowl':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12a10 10 0 0 0 20 0Z"></path>
            <path d="M12 2v2"></path>
            <path d="M8 2.5v2"></path>
            <path d="M16 2.5v2"></path>
            <path d="M2 12h20"></path>
          </svg>
        );
      case 'cloche':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 18h20"></path>
            <path d="M12 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z"></path>
            <path d="M4 18v-2a8 8 0 0 1 16 0v2"></path>
          </svg>
        );
      case 'pizza':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12A10 10 0 0 1 22 12c0 5.5-4.5 10-10 10S2 17.5 2 12z"></path>
            <path d="M22 12L12 2"></path>
            <circle cx="12" cy="14" r="1.5"></circle>
            <circle cx="9" cy="9" r="1.5"></circle>
            <circle cx="15" cy="17" r="1.5"></circle>
          </svg>
        );
      case 'cake':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
            <path d="M2 21h20"></path>
            <path d="M7 8v2"></path>
            <path d="M12 8v2"></path>
            <path d="M17 8v2"></path>
            <path d="M7 4h.01"></path>
            <path d="M12 4h.01"></path>
            <path d="M17 4h.01"></path>
          </svg>
        );
      default:
        return null;
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
        <div className="nav-actions">
          <button className="help-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Need help?
          </button>
          
          <div className="user-profile">
            <div className="avatar">AM</div>
            <span className="user-name">Alex Manager</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </nav>

      <div className="stepper-container">
        <div className="stepper">
          <div className="step completed">
            <div className="step-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="step-label">Basic Info</span>
          </div>
          <div className="step-line completed"></div>
          <div className="step completed">
            <div className="step-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="step-label">Restaurant</span>
          </div>
          <div className="step-line completed"></div>
          <div className="step completed">
            <div className="step-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="step-label">Tables</span>
          </div>
          <div className="step-line completed"></div>
          <div className="step active">
            <div className="step-circle">4</div>
            <span className="step-label">Menu</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">5</div>
            <span className="step-label">Finish</span>
          </div>
        </div>
      </div>

      <div className="setup-content">
        <div className="setup-left">
          <div className="header-section">
            <h1>Add Your Menu 🍲</h1>
            <p>Upload your menu or add items manually. You can always edit it later.</p>
          </div>

          <div className="form-container">
            <div className="white-box">
              <h3 className="box-title">Choose how you want to add your menu</h3>
              <div className="selection-cards">
                
                <div 
                  className={`selection-card ${selectedMethod === 'upload' ? 'active' : ''}`}
                  onClick={() => setSelectedMethod('upload')}
                >
                  <div className="radio-circle">
                    {selectedMethod === 'upload' && <div className="radio-inner"></div>}
                  </div>
                  <div className="card-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <div className="card-content">
                    <h4>Upload Menu File</h4>
                    <p>Upload CSV, Excel or PDF file</p>
                    <span className="recommended-tag">Recommended</span>
                  </div>
                </div>

                <div 
                  className={`selection-card ${selectedMethod === 'manual' ? 'active' : ''}`}
                  onClick={() => setSelectedMethod('manual')}
                >
                  <div className="radio-circle">
                    {selectedMethod === 'manual' && <div className="radio-inner"></div>}
                  </div>
                  <div className="card-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                  <div className="card-content">
                    <h4>Add Manually</h4>
                    <p>Add menu items one by one</p>
                  </div>
                </div>

                <div 
                  className={`selection-card ${selectedMethod === 'copy' ? 'active' : ''}`}
                  onClick={() => setSelectedMethod('copy')}
                >
                  <div className="radio-circle">
                    {selectedMethod === 'copy' && <div className="radio-inner"></div>}
                  </div>
                  <div className="card-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </div>
                  <div className="card-content">
                    <h4>Copy from Existing</h4>
                    <p>Use a template or existing menu</p>
                  </div>
                </div>

              </div>
              
              <div className="upload-section">
                <span className="supported-formats">Supported formats: CSV, Excel (.xlsx, .xls), PDF</span>
                <button className="upload-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  Upload File
                </button>
              </div>
            </div>

            <div className="white-box">
              <div className="box-header-flex">
                <div>
                  <h3>Menu Categories (5)</h3>
                  <p className="box-subtitle">Organize your menu into categories.</p>
                </div>
                <button className="add-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add Category
                </button>
              </div>

              <div className="menu-categories-list">
                {menuCategories.map((cat, index) => (
                  <div className="category-row" key={cat.id}>
                    <div className="cat-icon-name">
                      <div className="cat-icon-wrapper">
                        {renderCategoryIcon(cat.icon)}
                      </div>
                      <span className="cat-name">{cat.name}</span>
                    </div>
                    <div className="cat-items">
                      <span>{cat.items} items</span>
                    </div>
                    <div className="cat-actions">
                      <button className="icon-btn edit-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button className="icon-btn delete-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                      <button className="icon-btn more-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-secondary" onClick={onBack}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back
              </button>
              <button className="btn-primary" onClick={onNext}>
                Next 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="setup-right">
          <div className="info-card menu-info">
            <div className="info-image-wrapper menu-image-wrapper">
                <img src={menuCardImg} alt="Menu Illustration" className="info-image" />
            </div>
            
            <div className="info-benefits">
              <div className="info-header-text">
                <h4>Why a well-organized menu matters?</h4>
                <p>A structured menu helps customers order easily and improves kitchen efficiency.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Better Customer Experience</h5>
                  <p>Easy navigation and clear categories help customers find what they love.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="22" y1="12" x2="18" y2="12"></line>
                    <line x1="6" y1="12" x2="2" y2="12"></line>
                    <line x1="12" y1="6" x2="12" y2="2"></line>
                    <line x1="12" y1="22" x2="12" y2="18"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Increased Efficiency</h5>
                  <p>Well-organized menus reduce order errors and save time.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Higher Sales</h5>
                  <p>Smart menu structure and suggestions can boost your revenue.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Easy Updates</h5>
                  <p>Update prices, availability, and items anytime with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSetup;
