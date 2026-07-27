import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, CheckCircle, ArrowLeft } from 'lucide-react';
import { useRestaurant } from '../RestaurantContext';

function CustomerSignup() {
  const navigate = useNavigate();
  const { settings } = useRestaurant();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ padding: '3rem 1.5rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ background: 'var(--bg-hover)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
          <CheckCircle size={40} color="var(--success)" />
        </div>
        <h2 style={{ marginBottom: '1rem' }}>You're all set!</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
          Thank you for joining {settings.name || 'our restaurant'}'s loyalty program! Keep an eye on your inbox/SMS for exclusive promo codes for your next visit.
        </p>
        <button className="btn-secondary" onClick={() => navigate('/')}>
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '500px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 1.5rem 0' }}>
        <ArrowLeft size={24} color="var(--text-main)" />
      </button>

      <div className="dash-card" style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ background: '#FEF2F2', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
          <Gift size={32} color="#EF4444" />
        </div>
        
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Join & Get Rewarded</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.5' }}>
          Sign up to stay in touch with {settings.name || 'us'} and receive special promo codes and offers straight to your phone.
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div className="input-group" style={{ marginBottom: '1.5rem' }}>
            <label>Full Name</label>
            <input type="text" className="input-field" placeholder="E.g. Jane Doe" required style={{ width: '100%', boxSizing: 'border-box' }} />
          </div>
          <div className="input-group" style={{ marginBottom: '1.5rem' }}>
            <label>Mobile Number</label>
            <input type="tel" className="input-field" placeholder="10-digit number" required style={{ width: '100%', boxSizing: 'border-box' }} />
          </div>
          <div className="input-group" style={{ marginBottom: '2rem' }}>
            <label>Email Address (Optional)</label>
            <input type="email" className="input-field" placeholder="jane@example.com" style={{ width: '100%', boxSizing: 'border-box' }} />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', justifyContent: 'center' }}>
            Sign Up for Rewards
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSignup;
