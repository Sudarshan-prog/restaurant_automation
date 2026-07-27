import React from 'react';
import { Calendar, Download } from 'lucide-react';
import './Admin.css';

function Analytics() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1B2533', marginBottom: '0.25rem' }}>Analytics & Reports</h2>
          <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Deep dive into your restaurant's performance metrics.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-secondary">
            <Calendar size={16} />
            Today
          </button>
          <button className="btn-primary">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="dashboard-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="dash-card">
          <div className="card-header" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>Today's Revenue Trend</h3>
          </div>
          
          <div className="chart-container">
            <svg className="chart-svg" viewBox="0 0 800 250" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[200, 150, 100, 50, 0].map((y, i) => (
                <line key={i} x1="50" y1={y} x2="800" y2={y} className="chart-grid-line" />
              ))}

              {/* Y-Axis Labels */}
              {['₹0', '₹3500', '₹7000', '₹10500', '₹14000'].map((label, i) => (
                <text key={i} x="40" y={200 - (i * 50)} className="chart-axis-label" textAnchor="end" alignmentBaseline="middle">{label}</text>
              ))}

              {/* X-Axis Labels */}
              {['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'].map((label, i) => (
                <text key={i} x={50 + (i * 125)} y="230" className="chart-axis-label" textAnchor="middle">{label}</text>
              ))}

              {/* Animated Chart Line (Smooth Curve) */}
              <path 
                className="chart-line" 
                d="M 50 180 C 100 160, 150 130, 200 100 C 250 70, 280 120, 320 150 C 370 190, 420 170, 480 130 C 530 90, 580 20, 650 30 C 720 40, 780 70, 800 90" 
              />
              
              {/* Animated Gradient Area */}
              <path 
                className="chart-area" 
                d="M 50 180 C 100 160, 150 130, 200 100 C 250 70, 280 120, 320 150 C 370 190, 420 170, 480 130 C 530 90, 580 20, 650 30 C 720 40, 780 70, 800 90 L 800 200 L 50 200 Z" 
              />
            </svg>
          </div>
        </div>

        <div className="dash-card">
          <div className="card-header" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>Sales by Category</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '180px', height: '180px', position: 'relative' }}>
              <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                {/* Beverages (Blue/Gray) - 15% */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#5B687C" strokeWidth="15" strokeDasharray="33 220" strokeDashoffset="0" style={{ animation: 'fadeIn 1s ease-out' }}/>
                
                {/* Desserts (Light Gray) - 20% */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#A9B1BB" strokeWidth="15" strokeDasharray="44 220" strokeDashoffset="-33" style={{ animation: 'fadeIn 1s ease-out 0.2s backwards' }}/>
                
                {/* Main Course (Dark Blue) - 45% */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="var(--primary)" strokeWidth="15" strokeDasharray="99 220" strokeDashoffset="-77" style={{ animation: 'fadeIn 1s ease-out 0.4s backwards' }}/>
                
                {/* Starters (Yellow) - 20% */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#D19E2B" strokeWidth="15" strokeDasharray="44 220" strokeDashoffset="-176" style={{ animation: 'fadeIn 1s ease-out 0.6s backwards' }}/>
              </svg>
              {/* Inner white circle for donut effect */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '50%' }}></div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="legend-item"><span className="dot" style={{ backgroundColor: '#5B687C' }}></span> Beverages</div>
              <div className="legend-item"><span className="dot" style={{ backgroundColor: '#A9B1BB' }}></span> Desserts</div>
              <div className="legend-item"><span className="dot" style={{ backgroundColor: 'var(--primary)' }}></span> Main Course</div>
              <div className="legend-item"><span className="dot" style={{ backgroundColor: '#D19E2B' }}></span> Starters</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Average Order Value (AOV)</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', letterSpacing: '-1px' }}>₹840</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--green)' }}>+12% vs last week</div>
        </div>
        
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Total Footfall</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', letterSpacing: '-1px' }}>142</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--green)' }}>+5% vs last week</div>
        </div>
        
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Table Turnaround Time</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', letterSpacing: '-1px' }}>42m</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red)' }}>+4m vs last week</div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
