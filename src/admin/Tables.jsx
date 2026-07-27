import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Plus, Search, Edit2, Trash2, QrCode, X } from 'lucide-react';
import './Admin.css';

function Tables() {
  const { tables, settings, setSettings } = useRestaurant();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTable, setSelectedTable] = useState(null);
  
  const floors = [...new Set(tables.map(t => t.floor))].sort();
  const [selectedFloor, setSelectedFloor] = useState(floors.length > 0 ? floors[0] : 1);

  const totalTables = tables.length;
  const availableCount = tables.filter(t => t.status === 'available').length;
  const occupiedCount = tables.filter(t => t.status === 'occupied').length;
  const reservedCount = tables.filter(t => t.status === 'reserved').length;

  const floorTables = tables.filter(t => t.floor === selectedFloor);
  
  const filteredTables = floorTables.filter(t => 
    t.num.toString().includes(searchTerm) || 
    t.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return <span className="status-badge completed"><span className="dot available" style={{marginRight: '6px', display: 'inline-block'}}></span>Available</span>;
      case 'occupied':
        return <span className="status-badge preparing"><span className="dot occupied" style={{marginRight: '6px', display: 'inline-block'}}></span>Occupied</span>;
      case 'reserved':
        return <span className="status-badge received"><span className="dot" style={{backgroundColor: 'var(--blue)', marginRight: '6px', display: 'inline-block'}}></span>Reserved</span>;
      default:
        return <span className="status-badge cancelled"><span className="dot" style={{backgroundColor: '#9CA3AF', marginRight: '6px', display: 'inline-block'}}></span>Inactive</span>;
    }
  };

  const openQrModal = (table) => {
    setSelectedTable(table);
  };

  const closeQrModal = () => {
    setSelectedTable(null);
  };

  const handleUrlChange = (e) => {
    setSettings({ ...settings, customerPortalUrl: e.target.value });
  };

  // Construct URL for the table's customer portal using the local origin
  const tableUrl = `${window.location.origin}/r/demo/table/${selectedTable?.num || 1}/menu`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tableUrl)}`;

  return (
    <div className="dashboard-content">
      <div className="dashboard-header" style={{ alignItems: 'flex-start' }}>
        <div>
          <h2>Table Management</h2>
          <p>Manage your restaurant floor layout and table configurations.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <button className="btn-primary">
            <Plus size={16} />
            Add Table
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.5rem' }}>Portal URL:</label>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>https://</span>
            <input 
              type="text" 
              value={settings.customerPortalUrl} 
              onChange={handleUrlChange}
              style={{ border: 'none', outline: 'none', fontSize: '0.8125rem', color: 'var(--text-main)', width: '240px' }}
            />
          </div>
        </div>
      </div>

      <div className="summary-cards" style={{ marginBottom: '2rem' }}>
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Total Tables</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>{totalTables}</div>
        </div>
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Available</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>{availableCount}</div>
        </div>
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Occupied</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>{occupiedCount}</div>
        </div>
        <div className="dash-card">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Reserved</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>{reservedCount}</div>
        </div>
      </div>

      <div className="dash-card">
        <div className="card-header" style={{ marginBottom: 0, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginRight: '1rem' }}>Tables by Area</h3>
            <div style={{ display: 'flex', background: '#F3F4F6', padding: '0.25rem', borderRadius: '8px' }}>
              {floors.map(f => (
                <button 
                  key={f}
                  onClick={() => setSelectedFloor(f)}
                  style={{ 
                    padding: '0.5rem 1rem', 
                    borderRadius: '6px', 
                    border: 'none', 
                    background: selectedFloor === f ? 'white' : 'transparent',
                    color: selectedFloor === f ? 'var(--text-main)' : 'var(--text-muted)',
                    fontWeight: selectedFloor === f ? 600 : 500,
                    boxShadow: selectedFloor === f ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Floor {f}
                </button>
              ))}
            </div>
          </div>
          <div className="search-box" style={{ width: '250px', backgroundColor: 'white', border: '1px solid var(--border)' }}>
            <Search size={16} color="#9CA3AF" />
            <input 
              type="text" 
              placeholder="Search tables..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table className="dash-table">
          <thead style={{ backgroundColor: '#F9FAFB' }}>
            <tr>
              <th style={{ paddingLeft: '1.5rem' }}>#</th>
              <th>NAME</th>
              <th>SEATS</th>
              <th>STATUS</th>
              <th>QR CODE</th>
              <th style={{ textAlign: 'right', paddingRight: '1.5rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredTables.map((table, index) => (
              <tr key={table.num}>
                <td style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  {String(index + 1).padStart(2, '0')}
                </td>
                <td className="font-medium">Table {table.num}</td>
                <td>{table.seats || (table.num % 2 === 0 ? '4' : '2')} seats</td>
                <td>{getStatusBadge(table.status)}</td>
                <td>
                  <button 
                    onClick={() => openQrModal(table)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                    title="View QR Code"
                  >
                    <QrCode size={18} />
                  </button>
                </td>
                <td style={{ textAlign: 'right', paddingRight: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><Edit2 size={16} /></button>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredTables.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No tables found on this floor.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* QR Code Modal */}
      {selectedTable && (
        <div className="modal-overlay" onClick={closeQrModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Table {selectedTable.num} (Floor {selectedTable.floor}) — QR Code</h3>
              <button className="modal-close" onClick={closeQrModal}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem', background: 'white' }}>
                <img src={qrCodeUrl} alt={`QR Code for Table ${selectedTable.num}`} style={{ width: '200px', height: '200px' }} />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', textAlign: 'center', wordBreak: 'break-all', marginTop: '1.5rem', background: '#F3F4F6', padding: '0.75rem', borderRadius: '8px', width: '100%' }}>
                {tableUrl}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', width: '100%' }}>
                <button className="btn-secondary" style={{ flex: 1, display: 'flex', justifyContent: 'center' }} onClick={() => {
                  navigator.clipboard.writeText(tableUrl);
                  alert("URL Copied to clipboard!");
                }}>
                  Copy Link
                </button>
                <a href={qrCodeUrl} download={`table-${selectedTable.num}-qr.png`} className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
                  Download QR
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tables;
