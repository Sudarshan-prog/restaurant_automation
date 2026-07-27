import React, { useMemo } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Search, Receipt, DollarSign, Filter, CheckCircle } from 'lucide-react';

function Billing() {
  const { bills, setBills } = useRestaurant();

  const markAsPaid = (id) => {
    setBills(bills.map(bill => 
      bill.id === id ? { ...bill, status: 'Paid' } : bill
    ));
  };

  const { totalRevenue, pendingBills, collectedAmount } = useMemo(() => {
    let revenue = 0;
    let pendingCount = 0;
    let collected = 0;

    bills.forEach(bill => {
      revenue += bill.amount;
      if (bill.status === 'Paid') {
        collected += bill.amount;
      } else {
        pendingCount += 1;
      }
    });

    return { totalRevenue: revenue, pendingBills: pendingCount, collectedAmount: collected };
  }, [bills]);

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Billing & Invoices</h2>
          <p>Track customer payments and manage pending bills.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="search-box" style={{ margin: 0, width: '250px' }}>
            <Search size={18} />
            <input type="text" placeholder="Search Bill ID..." />
          </div>
          <button className="btn-secondary" style={{ height: '40px' }}>
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="summary-cards" style={{ marginBottom: '2rem' }}>
        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-purple">
              <Receipt size={18} color="#6366F1" />
            </div>
            <span className="summary-label">Total Revenue</span>
          </div>
          <div className="summary-value">${totalRevenue.toFixed(2)}</div>
        </div>

        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-green">
              <DollarSign size={18} color="#10B981" />
            </div>
            <span className="summary-label">Collected Amount</span>
          </div>
          <div className="summary-value">${collectedAmount.toFixed(2)}</div>
        </div>

        <div className="dash-card summary-card">
          <div className="summary-header">
            <div className="summary-icon bg-orange">
              <Receipt size={18} color="#F59E0B" />
            </div>
            <span className="summary-label">Pending Bills</span>
          </div>
          <div className="summary-value">{pendingBills}</div>
        </div>
      </div>

      <div className="dash-card">
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Recent Bills</h3>
        </div>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Table No.</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td className="font-medium">{bill.id}</td>
                <td>Table {bill.tableNo}</td>
                <td>{bill.customerName}</td>
                <td className="font-bold">${bill.amount.toFixed(2)}</td>
                <td style={{ color: 'var(--text-muted)' }}>
                  {new Date(bill.date).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                </td>
                <td>
                  <span className={`status-badge ${bill.status === 'Paid' ? 'completed' : 'pending'}`}>
                    {bill.status}
                  </span>
                </td>
                <td>
                  {bill.status === 'Pending' ? (
                    <button 
                      className="btn-primary" 
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                      onClick={() => markAsPaid(bill.id)}
                    >
                      Mark Paid
                    </button>
                  ) : (
                    <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
                      <CheckCircle size={16} /> Paid
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {bills.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No bills generated yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Billing;
