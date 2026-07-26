import React, { useState } from 'react';
import './TablesSetup.css';
import diningImg from './assets/dining.png';

function TablesSetup({ onBack, onNext }) {
  const [tableTypes, setTableTypes] = useState([
    { id: 1, type: '2 Seater', count: 4, capacity: 2 },
    { id: 2, type: '4 Seater', count: 10, capacity: 4 },
    { id: 3, type: '6 Seater', count: 4, capacity: 6 },
    { id: 4, type: '8 Seater (Premium)', count: 2, capacity: 8, premium: true },
  ]);

  const updateCount = (id, delta) => {
    setTableTypes(types => types.map(t => {
      if (t.id === id) {
        return { ...t, count: Math.max(0, t.count + delta) };
      }
      return t;
    }));
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
          <div className="step active">
            <div className="step-circle">3</div>
            <span className="step-label">Tables</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
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
            <h1>Configure Your Tables 🪑</h1>
            <p>Tell us about your seating capacity and table arrangement.</p>
          </div>

          <div className="form-container">
            <div className="white-box">
              <h3>Table Configuration</h3>
              <div className="form-row">
                <div className="form-group half">
                  <label>Number of Floors</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    <select defaultValue="1 Floor">
                      <option value="1 Floor">1 Floor</option>
                      <option value="2 Floors">2 Floors</option>
                      <option value="3 Floors">3 Floors</option>
                    </select>
                    <svg className="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="form-group half">
                  <label>Total Number of Tables</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="10" width="18" height="4" rx="1" ry="1"></rect>
                      <path d="M6 14v4"></path>
                      <path d="M18 14v4"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10V6"></path>
                      <path d="M14 10V6"></path>
                    </svg>
                    <input type="number" defaultValue={20} />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Seating Capacity</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <input type="number" defaultValue={80} />
                  </div>
                </div>
                <div className="form-group half">
                  <label>Default Seating per Table</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 14v4"></path>
                      <path d="M18 14v4"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10V6"></path>
                      <path d="M14 10V6"></path>
                    </svg>
                    <select defaultValue="4 Seats">
                      <option value="2 Seats">2 Seats</option>
                      <option value="4 Seats">4 Seats</option>
                      <option value="6 Seats">6 Seats</option>
                      <option value="8 Seats">8 Seats</option>
                    </select>
                    <svg className="select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="white-box">
              <div className="box-header-flex">
                <div>
                  <h3>Table Types <span className="optional-text">(Optional)</span></h3>
                  <p className="box-subtitle">Add different types of tables in your restaurant.</p>
                </div>
                <button className="add-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add Table Type
                </button>
              </div>

              <div className="table-types-list">
                <div className="list-header">
                  <div className="col-type">Table Type</div>
                  <div className="col-count">No. of Tables</div>
                  <div className="col-capacity">Seating Capacity</div>
                  <div className="col-action"></div>
                </div>
                
                {tableTypes.map(table => (
                  <div className="list-row" key={table.id}>
                    <div className="col-type">
                      <div className="type-icon-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 14v4"></path>
                          <path d="M18 14v4"></path>
                          <path d="M10 6h4"></path>
                          <path d="M10 10V6"></path>
                          <path d="M14 10V6"></path>
                        </svg>
                      </div>
                      <span className="type-name">
                        {table.type.replace(' (Premium)', '')}
                        {table.premium && <span className="premium-tag">(Premium)</span>}
                      </span>
                    </div>
                    <div className="col-count">
                      <div className="counter-widget">
                        <button className="counter-btn" onClick={() => updateCount(table.id, -1)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                        <span className="count-value">{table.count}</span>
                        <button className="counter-btn" onClick={() => updateCount(table.id, 1)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-capacity">
                      <span className="capacity-text">{table.capacity} Seats</span>
                    </div>
                    <div className="col-action">
                      <button className="more-btn">
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
          <div className="info-card tables-info">
            <div className="info-image-wrapper tables-image-wrapper">
                <img src={diningImg} alt="Dining Illustration" className="info-image" />
            </div>
            
            <div className="info-benefits">
              <div className="info-header-text">
                <h4>Why table configuration matters?</h4>
                <p>Proper table setup helps in better order management, accurate analytics, and improved customer experience.</p>
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
                  <h5>Better Capacity Planning</h5>
                  <p>Helps you understand how many guests you can serve at a time.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Efficient Table Management</h5>
                  <p>Easily manage availability and track table performance.</p>
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
                  <h5>Improved Analytics</h5>
                  <p>Get detailed insights on table-wise occupancy and revenue.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h5>Enhanced Customer Experience</h5>
                  <p>Reduce wait time and provide a seamless dining experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablesSetup;
