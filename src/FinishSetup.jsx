import React from 'react';
import './FinishSetup.css';
import restaurantImg from './assets/restaurant.png';

function FinishSetup({ onBack, onLaunch }) {
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
          <div className="step completed">
            <div className="step-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="step-label">Menu</span>
          </div>
          <div className="step-line completed"></div>
          <div className="step active">
            <div className="step-circle">5</div>
            <span className="step-label">Finish</span>
          </div>
        </div>
      </div>

      <div className="setup-content">
        <div className="setup-left">
          <div className="header-section">
            <h1>You're All Set! 🎉</h1>
            <p>Review your details below and launch your restaurant setup.</p>
          </div>

          <div className="form-container">
            <div className="white-box review-box">
              <div className="box-header-flex">
                <h3>Review Your Details</h3>
                <button className="edit-details-btn" onClick={onBack}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit Details
                </button>
              </div>

              <div className="review-list">
                <div className="review-item">
                  <div className="review-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M9 21V9"></path>
                    </svg>
                  </div>
                  <div className="review-content">
                    <h4>Restaurant</h4>
                    <div className="review-details">
                      <p className="main-detail">The Good Food Restaurant</p>
                      <p className="sub-detail">Italian Cuisine</p>
                    </div>
                  </div>
                  <div className="review-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="review-item">
                  <div className="review-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="review-content">
                    <h4>Location</h4>
                    <div className="review-details">
                      <p className="main-detail">123 Food Street, Downtown</p>
                      <p className="sub-detail">New York, NY 10001, USA</p>
                    </div>
                  </div>
                  <div className="review-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="review-item">
                  <div className="review-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="10" width="18" height="4" rx="1" ry="1"></rect>
                      <path d="M6 14v4"></path>
                      <path d="M18 14v4"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10V6"></path>
                      <path d="M14 10V6"></path>
                    </svg>
                  </div>
                  <div className="review-content">
                    <h4>Tables</h4>
                    <div className="review-details">
                      <p className="main-detail">1 Floor • 20 Tables</p>
                      <p className="sub-detail">Total Capacity: 80 Seats</p>
                    </div>
                  </div>
                  <div className="review-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="review-item">
                  <div className="review-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div className="review-content">
                    <h4>Menu</h4>
                    <div className="review-details">
                      <p className="main-detail">5 Categories</p>
                      <p className="sub-detail">87 Items</p>
                    </div>
                  </div>
                  <div className="review-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-box-detached secure-box">
              <div className="info-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="info-header-text">
                <h4>Your data is secure and backed up</h4>
                <p>You can always update these details from your dashboard settings.</p>
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
              <button className="btn-primary" onClick={onLaunch}>
                Launch Dashboard 🚀
              </button>
            </div>
          </div>
        </div>

        <div className="setup-right">
          <div className="info-card finish-info">
            <div className="info-image-wrapper finish-image-wrapper">
                <img src={restaurantImg} alt="Restaurant Illustration" className="info-image" />
            </div>
            
            <div className="info-benefits">
              <div className="info-header-text">
                <h4>Ready to grow your restaurant?</h4>
                <p>Your setup is complete. Start managing your tables, menu, and orders like a pro.</p>
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
                  <h5>Streamlined Operations</h5>
                  <p>Manage tables, orders, and menu in one place.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Happy Customers</h5>
                  <p>Faster service and better experience leads to happy customers.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Increased Revenue</h5>
                  <p>Optimize your operations and boost your restaurant's revenue.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Save Time</h5>
                  <p>Automate tasks and focus on what matters most.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishSetup;
