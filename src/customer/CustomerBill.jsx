import React, { useState, useEffect } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, ArrowLeft, Receipt, CheckCircle } from 'lucide-react';
import './CustomerBill.css';

function CustomerBill() {
  const { settings, orders, bills, setBills } = useRestaurant();
  const { tableId } = useParams();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeBill, setActiveBill] = useState(null);

  useEffect(() => {
    // Check if there is already an active bill for this table session
    const existingBill = bills.find(b => String(b.tableNo) === String(tableId) && (b.status === 'Pending' || b.status === 'Paid'));
    
    if (existingBill) {
      if (existingBill.status === 'Pending') {
        // Recalculate to include any newly added orders since the bill was generated
        const tableOrders = orders.filter(o => String(o.table) === String(tableId));
        
        const combinedItems = [];
        tableOrders.forEach(order => {
          order.items.forEach(item => {
            const existing = combinedItems.find(i => i.name === item.name);
            if (existing) {
              existing.quantity += item.qty;
            } else {
              combinedItems.push({ name: item.name, quantity: item.qty, price: item.price });
            }
          });
        });

        const subtotal = combinedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxAmount = subtotal * ((settings.taxRate || 5) / 100);
        combinedItems.push({ name: `GST (${settings.taxRate || 5}%)`, quantity: 1, price: taxAmount });
        const grandTotal = subtotal + taxAmount;

        // If the amount changed, update the global bills array so the admin sees the new total too!
        if (Math.abs(existingBill.amount - grandTotal) > 0.01) {
          const updatedBill = {
            ...existingBill,
            amount: grandTotal,
            items: combinedItems,
            subtotal: subtotal,
            tax: taxAmount
          };
          setBills(prev => prev.map(b => b.id === existingBill.id ? updatedBill : b));
          setActiveBill(updatedBill);
        } else {
          setActiveBill(existingBill);
        }
      } else {
        // If it's paid, just show it
        setActiveBill(existingBill);
      }
    }
  }, [bills, tableId, orders, settings.taxRate, setBills]);

  const handleGenerateBill = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) return;

    const tableOrders = orders.filter(o => String(o.table) === String(tableId));
    
    // Combine all items
    const combinedItems = [];
    tableOrders.forEach(order => {
      order.items.forEach(item => {
        const existing = combinedItems.find(i => i.name === item.name);
        if (existing) {
          existing.quantity += item.qty;
        } else {
          combinedItems.push({ name: item.name, quantity: item.qty, price: item.price });
        }
      });
    });

    const subtotal = combinedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxAmount = subtotal * ((settings.taxRate || 5) / 100);
    
    // Add Tax as an item for the admin billing view compatibility
    combinedItems.push({ name: `GST (${settings.taxRate || 5}%)`, quantity: 1, price: taxAmount });
    
    const grandTotal = subtotal + taxAmount;

    const newBill = {
      id: `#INV-${2000 + bills.length + 1}`,
      tableNo: tableId,
      customerName: phoneNumber,
      amount: grandTotal,
      date: new Date().toISOString(),
      status: 'Pending',
      items: combinedItems,
      subtotal: subtotal,
      tax: taxAmount,
    };

    setBills([newBill, ...bills]);
    setActiveBill(newBill);
  };

  if (!activeBill) {
    return (
      <div className="bill-generation-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button onClick={() => navigate('../status')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <ArrowLeft size={24} color="var(--text-main)" />
          </button>
          <h2 style={{ margin: 0 }}>Checkout</h2>
        </div>
        
        <div className="dash-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ background: 'var(--bg-hover)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <Receipt size={32} color="var(--primary)" />
          </div>
          <h3 style={{ marginBottom: '1rem' }}>Generate Your Bill</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Please enter your mobile number to generate your digital receipt and proceed to payment.
          </p>
          
          <form onSubmit={handleGenerateBill}>
            <div className="input-group" style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <label>Mobile Number</label>
              <div className="input-field" style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                <Phone size={18} color="var(--text-muted)" style={{ marginRight: '0.5rem' }} />
                <input 
                  type="tel" 
                  value={phoneNumber} 
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                  placeholder="Enter 10-digit number"
                  style={{ border: 'none', outline: 'none', flex: 1, fontSize: '1rem' }}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', justifyContent: 'center' }}>
              Generate Bill
            </button>
          </form>
        </div>
      </div>
    );
  }

  // The Professional Bill View
  return (
    <div className="bill-view-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <button onClick={() => navigate('../status')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ArrowLeft size={24} color="var(--text-main)" />
        </button>
        <h2 style={{ margin: 0 }}>Your Receipt</h2>
      </div>

      <div className="receipt-paper">
        {/* Dynamic Seal */}
        <div className={`receipt-seal ${activeBill.status === 'Paid' ? 'seal-paid' : 'seal-unpaid'}`}>
          {activeBill.status === 'Paid' ? 'PAID' : 'UNPAID'}
        </div>

        <div className="receipt-header">
          <h2>{settings.name || 'TableFlow Restaurant'}</h2>
          <p>{settings.address || '123 Culinary Avenue, Foodville'}</p>
          <p>GST No: {settings.gst || '22AAAAA0000A1Z5'}</p>
          <div className="receipt-divider"></div>
          
          <div className="receipt-meta">
            <div>
              <span>Bill No:</span>
              <strong>{activeBill.id}</strong>
            </div>
            <div>
              <span>Date:</span>
              <strong>{new Date(activeBill.date).toLocaleDateString()}</strong>
            </div>
            <div>
              <span>Table:</span>
              <strong>{activeBill.tableNo}</strong>
            </div>
            <div>
              <span>Customer:</span>
              <strong>{activeBill.customerName}</strong>
            </div>
          </div>
        </div>

        <div className="receipt-divider"></div>

        <div className="receipt-items">
          <div className="receipt-item-header">
            <span style={{ flex: 2 }}>Item</span>
            <span style={{ flex: 1, textAlign: 'center' }}>Qty</span>
            <span style={{ flex: 1, textAlign: 'right' }}>Amount</span>
          </div>
          
          {activeBill.items.filter(i => !i.name.startsWith('GST')).map((item, idx) => (
            <div key={idx} className="receipt-item">
              <span style={{ flex: 2 }}>{item.name}</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{item.quantity}</span>
              <span style={{ flex: 1, textAlign: 'right' }}>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="receipt-divider"></div>

        <div className="receipt-totals">
          <div className="receipt-total-row">
            <span>Subtotal</span>
            <span>${activeBill.subtotal ? activeBill.subtotal.toFixed(2) : (activeBill.amount - activeBill.items.find(i=>i.name.startsWith('GST') || i.name === 'Tax')?.price || 0).toFixed(2)}</span>
          </div>
          <div className="receipt-total-row">
            <span>GST ({settings.taxRate || 5}%)</span>
            <span>${activeBill.tax ? activeBill.tax.toFixed(2) : (activeBill.items.find(i=>i.name.startsWith('GST') || i.name === 'Tax')?.price || 0).toFixed(2)}</span>
          </div>
          <div className="receipt-divider"></div>
          <div className="receipt-total-row grand-total">
            <span>Grand Total</span>
            <span>${activeBill.amount.toFixed(2)}</span>
          </div>
        </div>

        {activeBill.status === 'Pending' && (
          <div className="receipt-footer payment-instructions">
            <p>Please proceed to the cashier to complete your payment.</p>
          </div>
        )}
      </div>

      {activeBill.status === 'Paid' && (
        <div className="post-payment-banner" onClick={() => navigate(`../../signup`)}>
          <div className="banner-icon">
            <CheckCircle size={24} color="#10B981" />
          </div>
          <div className="banner-text">
            <h4>Thank you for visiting!</h4>
            <p>Click here to join our loyalty program and receive exclusive promo codes for your next visit.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerBill;
