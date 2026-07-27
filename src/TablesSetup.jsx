import React, { useState } from 'react';
import './TablesSetup.css';
import diningImg from './assets/dining.png';
import { useRestaurant } from './RestaurantContext';

function TablesSetup({ onBack, onNext }) {
  const { setTables, setSettings } = useRestaurant();
  const [numFloors, setNumFloors] = useState(1);
  const [floorData, setFloorData] = useState([{ id: 1, tables: 20, seatsPerTable: 4 }]);

  const handleFloorsChange = (e) => {
    const count = parseInt(e.target.value);
    setNumFloors(count);
    const newFloorData = [];
    for (let i = 1; i <= count; i++) {
      newFloorData.push(floorData[i - 1] || { id: i, tables: 10, seatsPerTable: 4 });
    }
    setFloorData(newFloorData);
  };

  const handleTableChange = (id, field, val) => {
    setFloorData(fd => fd.map(f => f.id === id ? { ...f, [field]: parseInt(val) || 0 } : f));
  };

  const handleNext = () => {
    // Generate the flat tables array based on floorData
    let flatTables = [];
    let tableNum = 1;
    floorData.forEach(floor => {
      for (let i = 0; i < floor.tables; i++) {
        flatTables.push({
          num: tableNum++,
          floor: floor.id,
          status: 'available',
          seats: floor.seatsPerTable
        });
      }
    });
    setTables(flatTables);
    
    // Also save floor data mapping in settings for easy access
    setSettings(prev => ({ ...prev, floorData }));
    
    onNext();
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
          <div className="stepper-line-active" style={{width: '50%'}}></div>
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
          <div className="step active">
            <div className="step-circle">3</div>
            <div className="step-label">Tables</div>
          </div>
          <div className="step">
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
            <h1>Configure Your Tables 🪑</h1>
            <p>Set up your floors and allocate tables for each area.</p>
          </div>

          <div className="form-container">
            <div className="white-box">
              <h3>Restaurant Layout</h3>
              <div className="form-group">
                <label>How many floors/areas does your restaurant have?</label>
                <div className="select-wrapper select-with-left-icon">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                  </svg>
                  <select value={numFloors} onChange={handleFloorsChange}>
                    <option value="1">1 Floor / Area</option>
                    <option value="2">2 Floors / Areas</option>
                    <option value="3">3 Floors / Areas</option>
                    <option value="4">4 Floors / Areas</option>
                  </select>
                  <svg className="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            <div className="white-box">
              <div className="box-header-flex">
                <div>
                  <h3>Floor Configuration</h3>
                  <p className="box-subtitle">Specify the number of tables for each floor.</p>
                </div>
              </div>

              <div className="table-types-list">
                <div className="list-header">
                  <div className="col-type" style={{ width: '40%' }}>Floor / Area</div>
                  <div className="col-count" style={{ width: '30%' }}>No. of Tables</div>
                  <div className="col-capacity" style={{ width: '30%' }}>Avg Seats/Table</div>
                </div>
                
                {floorData.map(floor => (
                  <div className="list-row" key={floor.id} style={{ alignItems: 'center' }}>
                    <div className="col-type" style={{ width: '40%', fontWeight: 600 }}>
                      Floor {floor.id}
                    </div>
                    <div className="col-count" style={{ width: '30%' }}>
                      <input 
                        type="number" 
                        value={floor.tables} 
                        onChange={(e) => handleTableChange(floor.id, 'tables', e.target.value)}
                        style={{ width: '60px', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #E5E7EB' }}
                      />
                    </div>
                    <div className="col-capacity" style={{ width: '30%' }}>
                      <input 
                        type="number" 
                        value={floor.seatsPerTable} 
                        onChange={(e) => handleTableChange(floor.id, 'seatsPerTable', e.target.value)}
                        style={{ width: '60px', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #E5E7EB' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <button className="btn-secondary" onClick={onBack}>Back</button>
              <button className="btn-primary" onClick={handleNext}>
                Next Step
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="setup-right">
          <div className="info-card" style={{ position: 'sticky', top: '100px' }}>
            <div className="info-image-wrapper">
                <img src={diningImg} alt="Dining Illustration" className="info-image" />
            </div>
            
            <div className="info-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div className="benefit-text">
                  <h5>Visual Floor Plans</h5>
                  <p>Your setup helps us create a digital map of your restaurant.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <div className="benefit-text">
                  <h5>Smart Reservations</h5>
                  <p>We automatically assign tables based on capacity and availability.</p>
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
