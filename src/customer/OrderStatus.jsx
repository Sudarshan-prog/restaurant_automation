import React from 'react';
import { useRestaurant } from '../RestaurantContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, ChefHat, Utensils, Plus, CreditCard, ArrowLeft } from 'lucide-react';

function OrderStatus() {
  const { orders, setOrders } = useRestaurant();
  const navigate = useNavigate();
  const { tableId } = useParams();

  // Find all orders for this table session
  const tableOrders = orders.filter(o => String(o.table) === String(tableId));
  const latestOrder = tableOrders[0];

  if (!latestOrder) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h3>No active orders</h3>
        <button className="primary-btn" onClick={() => navigate('../menu')} style={{ marginTop: '1rem' }}>
          View Menu
        </button>
      </div>
    );
  }

  const steps = [
    { status: 'Received', icon: <Check size={20} />, title: 'Order Received', desc: 'We have received your order.' },
    { status: 'Preparing', icon: <ChefHat size={20} />, title: 'Preparing', desc: 'The kitchen is preparing your food.' },
    { status: 'Ready', icon: <Utensils size={20} />, title: 'Ready', desc: 'Your food is ready to be served.' },
    { status: 'Serving', icon: <Check size={20} />, title: 'Serving', desc: 'Enjoy your meal!' },
  ];

  const getStepStatus = (stepStatus) => {
    if (['Completed', 'Billed', 'Paid'].includes(latestOrder.status)) return 'completed';
    const statuses = ['Received', 'Preparing', 'Ready', 'Serving'];
    const currentIndex = statuses.indexOf(latestOrder.status);
    const stepIndex = statuses.indexOf(stepStatus);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  const handleProceedToPayment = () => {
    // Mark all orders for this table as 'Completed' so they disappear from the Kitchen view
    setOrders(orders.map(o => String(o.table) === String(tableId) ? { ...o, status: 'Completed' } : o));
    navigate('../bill');
  };

  const totalAmount = tableOrders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <button onClick={() => navigate('../menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ArrowLeft size={24} color="var(--text-main)" />
        </button>
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Table {tableId} Session</h2>
      </div>

      <div className="dash-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Latest Order Status ({latestOrder.id})
        </h3>
        <div className="tracker-steps" style={{ marginTop: 0 }}>
          {steps.map((step, index) => {
            const statusClass = getStepStatus(step.status);
            return (
              <div key={index} className={`tracker-step ${statusClass}`}>
                <div className="tracker-icon">
                  {step.icon}
                </div>
                <div className="tracker-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dash-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Items Ordered</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {tableOrders.map(order => (
            <div key={order.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Order {order.id} - {order.time}</div>
              {order.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span>{item.qty}x {item.name}</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              {order.instructions && (
                <div style={{ fontSize: '0.85rem', color: 'var(--warning)', marginTop: '0.25rem', fontStyle: 'italic' }}>
                  Note: {order.instructions}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
          <span>Session Total (incl. tax)</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem' }}>
        <button 
          onClick={() => navigate('../menu')} 
          className="btn-secondary" 
          style={{ width: '100%', padding: '1rem', justifyContent: 'center', fontSize: '1.1rem' }}
        >
          <Plus size={20} /> Order More Items
        </button>
        <button 
          onClick={handleProceedToPayment} 
          className="btn-primary" 
          style={{ width: '100%', padding: '1rem', justifyContent: 'center', fontSize: '1.1rem' }}
        >
          <CreditCard size={20} /> Proceed to Payment
        </button>
      </div>
    </>
  );
}

export default OrderStatus;
