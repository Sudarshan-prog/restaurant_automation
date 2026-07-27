import React from 'react';
import './RestaurantDetails.css';
import mapAddressImg from './assets/map_address.png';
import { useRestaurant } from './RestaurantContext';

function RestaurantDetails({ onBack, onNext }) {
  const { settings, setSettings } = useRestaurant();

  const handleChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
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

      <div className="setup-content setup-content-basic">
        <div className="setup-left">
          <div className="stepper-container-left">
            <div className="stepper-line">
              <div className="stepper-line-active" style={{width: '25%'}}></div>
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
              <div className="step active">
                <div className="step-circle">2</div>
                <div className="step-label">Restaurant</div>
              </div>
              <div className="step">
                <div className="step-circle">3</div>
                <div className="step-label">Tables</div>
              </div>
              <div className="step">
                <div className="step-circle">4</div>
                <div className="step-label">Menu</div>
              </div>
              <div className="step">
                <div className="step-circle">5</div>
                <div className="step-label">Finish</div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <div className="form-header">
              <h1>Restaurant Details 🏪</h1>
              <p>Provide your restaurant's location and operating details.</p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label>Address</label>
                <div className="input-with-icon">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <input type="text" placeholder="Enter full address" value={settings.address || ''} onChange={e => handleChange('address', e.target.value)} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>City</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                    <input type="text" placeholder="e.g. New York" value={settings.city || ''} onChange={e => handleChange('city', e.target.value)} />
                  </div>
                </div>
                <div className="form-group half">
                  <label>State / Province</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                      <line x1="9" y1="3" x2="9" y2="18"></line>
                      <line x1="15" y1="6" x2="15" y2="21"></line>
                    </svg>
                    <input type="text" placeholder="Enter state / province" />
                  </div>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Country</label>
                  <div className="select-wrapper select-with-left-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <select defaultValue="">
                      <option value="" disabled>Select country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="in">India</option>
                    </select>
                    <svg className="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="form-group half">
                  <label>PIN / Postal Code</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"></path>
                      <path d="M4 10h16"></path>
                      <circle cx="12" cy="14" r="2"></circle>
                    </svg>
                    <input type="text" placeholder="Enter PIN / Postal code" />
                  </div>
                </div>
              </div>

              <div className="section-subheader">
                <svg className="subheader-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <label>Operating Hours</label>
              </div>

              <div className="grey-box">
                <div className="time-group">
                  <label>
                    <span className="emoji">☀️</span> Open Time
                  </label>
                  <div className="select-wrapper">
                    <select defaultValue="08:00 AM">
                      <option value="07:00 AM">07:00 AM</option>
                      <option value="08:00 AM">08:00 AM</option>
                      <option value="09:00 AM">09:00 AM</option>
                    </select>
                    <svg className="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="time-separator">
                  <div className="horizontal-line"></div>
                </div>
                <div className="time-group">
                  <label>
                    <span className="emoji">🌙</span> Close Time
                  </label>
                  <div className="select-wrapper">
                    <select defaultValue="11:00 PM">
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="12:00 AM">12:00 AM</option>
                    </select>
                    <svg className="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{marginTop: '0.5rem'}}>
                <label>Contact Details</label>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <div className="input-with-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <input type="text" placeholder="Enter contact number" />
                  </div>
                </div>
                <div className="form-group half">
                  <div className="input-with-icon">
                    <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                      <polyline points="2 4 12 12 22 4"></polyline>
                    </svg>
                    <input type="email" placeholder="Enter contact email" />
                  </div>
                </div>
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
          <div className="info-box-detached">
            <div className="info-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"></path>
                <path d="M16 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"></path>
              </svg>
            </div>
            <div className="info-header-text">
              <h4>Why we need this?</h4>
              <p>These details help us configure your restaurant, generate QR codes and provide a personalized experience for you and your customers.</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-image-wrapper">
                <img src={mapAddressImg} alt="Map Illustration" className="info-image" />
            </div>
            
            <div className="info-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Location Based Services</h5>
                  <p>Helps customers find and trust your restaurant.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Accurate Order & Reservation Handling</h5>
                  <p>Ensures smooth operations during business hours.</p>
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
                  <h5>Better Customer Communication</h5>
                  <p>We can reach you with important updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
