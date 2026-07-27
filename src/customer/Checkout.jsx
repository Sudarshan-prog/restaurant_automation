import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

function Checkout() {
  const { cart, setCart, orders, setOrders } = useRestaurant();
  const navigate = useNavigate();
  const { tableId } = useParams();
  const [instructions, setInstructions] = useState('');

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = cartTotal * 0.05;
  const grandTotal = cartTotal + tax;

  const updateQty = (id, delta) => {
    setCart(cart.map(c => {
      if (c.id === id) {
        const newQty = c.qty + delta;
        return newQty > 0 ? { ...c, qty: newQty } : null;
      }
      return c;
    }).filter(Boolean));
  };

  const placeOrder = () => {
    const newOrder = {
      id: `#TF-${1000 + orders.length + 1}`,
      table: tableId || 'Takeaway',
      items: cart,
      amount: grandTotal,
      status: 'Received',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      instructions
    };
    
    setOrders([newOrder, ...orders]);
    setCart([]); // clear cart
    navigate('../status');
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h3>Your cart is empty</h3>
        <button className="primary-btn" onClick={() => navigate('../menu')} style={{ marginTop: '1rem' }}>
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <button onClick={() => navigate('../menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ArrowLeft size={24} color="var(--text-main)" />
        </button>
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Checkout</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '1rem', borderRadius: '12px' }}>
            <div>
              <div style={{ fontWeight: '600' }}>{item.name}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>${(item.price * item.qty).toFixed(2)}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-hover)', padding: '0.25rem', borderRadius: '8px' }}>
              <button onClick={() => updateQty(item.id, -1)} style={{ background: 'white', border: 'none', borderRadius: '6px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Minus size={14}/></button>
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)} style={{ background: 'white', border: 'none', borderRadius: '6px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Plus size={14}/></button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Special Instructions</h3>
        <textarea 
          placeholder="E.g. No onions, extra spicy..." 
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', resize: 'vertical', minHeight: '80px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginTop: '2rem', background: 'white', padding: '1.5rem', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', color: 'var(--text-muted)' }}>
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)' }}>
          <span>Taxes (5%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px dashed var(--border)', fontWeight: '700', fontSize: '1.25rem' }}>
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="floating-bottom-bar" style={{ justifyContent: 'center' }}>
        <button className="primary-btn" style={{ width: '100%', padding: '1rem' }} onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </>
  );
}

export default Checkout;
