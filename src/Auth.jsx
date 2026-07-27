import React, { useState } from 'react';
import './Auth.css';

function Auth({ onLogin, onSignUp }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  return (
    <div className="auth-page-container">
      <header className="auth-header-bar">
        <div className="auth-brand">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z"></path>
            <path d="M5 16a7 7 0 0 1 14 0"></path>
            <path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"></path>
          </svg>
          <span className="auth-brand-text">
            <span className="text-dark">Table</span><span className="text-primary">Flow</span>
          </span>
        </div>
      </header>

      <div className="auth-split-layout">
        <div className="auth-hero-side">
          <div className="auth-hero-inner">
            <h1 className="auth-title">
              Smarter Operations.<br />
              <span className="text-primary">Better Dining.</span>
            </h1>
            <p className="auth-subtitle">
              All-in-one platform to manage orders, tables,<br />
              inventory, staff and customers —<br />
              beautifully and efficiently.
            </p>

            <div className="auth-features">
              <div className="auth-feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3>Digital Menu</h3>
                <p>Live availability</p>
              </div>
              
              <div className="auth-feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3>Smart Reservations</h3>
                <p>Reduce wait time</p>
              </div>
              
              <div className="auth-feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3>Inventory Tracking</h3>
                <p>Real-time updates</p>
              </div>
              
              <div className="auth-feature">
                <div className="icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3>AI Insights</h3>
                <p>Grow your business</p>
              </div>
            </div>

            <div className="auth-trust">
              <div className="auth-avatars">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" />
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User 3" />
              </div>
              <p>
                Trusted by <span>500+</span> restaurants<br />
                to simplify operations every day.
              </p>
            </div>
          </div>
        </div>

        <div className="auth-form-side">
          <div className="auth-login-box">
            <div className="auth-tabs">
              <button className={`auth-tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)} type="button">Login</button>
              <button className={`auth-tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)} type="button">Sign Up</button>
            </div>
            
            <div className="auth-box-header">
              <h2>{isLogin ? 'Welcome back!' : 'Create an account'}</h2>
              <p>{isLogin ? 'Login to access your dashboard' : 'Sign up to start setting up your restaurant'}</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); isLogin ? (onLogin && onLogin(email)) : (onSignUp && onSignUp(email)); }}>
              <div className="auth-input-group">
                <label htmlFor="email">Email address</label>
                <div className="auth-input-field">
                  <svg className="icon-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input type="email" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
              </div>
              
              <div className="auth-input-group">
                <label htmlFor="password">Password</label>
                <div className="auth-input-field">
                  <svg className="icon-left" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input type="password" id="password" placeholder="Enter your password" />
                  <button type="button" className="icon-right">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </button>
                </div>
              </div>
              
              {isLogin && <a href="#" className="auth-forgot">Forgot password?</a>}
              
              <button type="submit" className="auth-btn-primary">{isLogin ? 'Login' : 'Sign Up'}</button>
              
              <div className="auth-separator">
                <span>or continue with</span>
              </div>
              
              <button type="button" className="auth-btn-google">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              
              <p className="auth-signup-text">
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
