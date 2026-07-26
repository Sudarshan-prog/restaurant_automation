import React from 'react';
import './Setup.css';
import restaurantImg from './assets/restaurant.png';

function Setup({ onNext }) {
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
          
          <div className="divider-vertical"></div>
          
          <div className="user-profile">
            <div className="avatar-circle">AM</div>
            <span className="user-name">Alex Manager</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </nav>

      <div className="setup-content">
        <div className="setup-left">
          <div className="stepper-container">
            <div className="stepper-line"></div>
            <div className="stepper-steps">
              <div className="step active">
                <div className="step-circle">1</div>
                <div className="step-label">Basic Info</div>
              </div>
              <div className="step">
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
              <h1>Let's set up your restaurant 👋</h1>
              <p>Tell us about your restaurant to get started.</p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label>Restaurant Name</label>
                <div className="input-with-icon">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                    <path d="M2 7h20"></path>
                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                  </svg>
                  <input type="text" placeholder="Enter restaurant name" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Cuisine Type</label>
                  <div className="select-wrapper">
                    <select defaultValue="">
                      <option value="" disabled>Select cuisine type</option>
                      <option value="italian">Italian</option>
                      <option value="chinese">Chinese</option>
                      <option value="mexican">Mexican</option>
                      <option value="indian">Indian</option>
                      <option value="american">American</option>
                    </select>
                    <svg className="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="form-group half">
                  <label>Restaurant Logo <span className="optional">(Optional)</span></label>
                  <div className="upload-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <div className="upload-text-group">
                      <span className="upload-text">Upload logo</span>
                      <span className="upload-subtext">JPG, PNG up to 2MB</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Short Description <span className="optional">(Optional)</span></label>
                <div className="textarea-wrapper">
                  <textarea placeholder="A brief description about your restaurant..."></textarea>
                  <span className="char-count">0 / 200</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary" onClick={onNext}>
                Next 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="setup-right">
          <div className="info-header">
            <div className="info-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"></path>
                <path d="M16 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"></path>
              </svg>
            </div>
            <div className="info-header-text">
              <h4>Why this matters?</h4>
              <p>This information helps us personalize<br/>your experience and setup.</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-image-wrapper">
                <img src={restaurantImg} alt="Restaurant Illustration" className="info-image" />
            </div>
            
            <div className="info-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                    <path d="M2 7h20"></path>
                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Personalized Experience</h5>
                  <p>Get recommendations and insights tailored to your restaurant.</p>
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
                  <h5>Easy Management</h5>
                  <p>All your operations in one place, designed just for you.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Grow Your Business</h5>
                  <p>Make data-driven decisions and delight your customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setup;
