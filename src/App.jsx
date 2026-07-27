import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Auth from './Auth';
import Setup from './Setup';
import RestaurantDetails from './RestaurantDetails';
import TablesSetup from './TablesSetup';
import HardwareSetup from './HardwareSetup';
import FinishSetup from './FinishSetup';
import Dashboard from './Dashboard';
import Overview from './admin/Overview';
import Billing from './admin/Billing';
import StaffManagement from './admin/StaffManagement';
import InventoryManagement from './admin/InventoryManagement';
import Analytics from './admin/Analytics';
import Promotions from './admin/Promotions';
import Feedback from './admin/Feedback';
import Settings from './admin/Settings';
import Tables from './admin/Tables';

import CustomerLayout from './customer/CustomerLayout';
import CustomerMenu from './customer/CustomerMenu';
import Checkout from './customer/Checkout';
import OrderStatus from './customer/OrderStatus';
import CustomerBill from './customer/CustomerBill';
import CustomerSignup from './customer/CustomerSignup';

import KitchenLayout from './kitchen/KitchenLayout';
import KitchenOrders from './kitchen/KitchenOrders';
import MenuManagement from './kitchen/MenuManagement';

import CashierLayout from './cashier/CashierLayout';

// Setup Route Wrappers
function SetupStep1() {
  const navigate = useNavigate();
  return <Setup onNext={() => navigate('/setup/details')} />;
}

function SetupStep2() {
  const navigate = useNavigate();
  return <RestaurantDetails onBack={() => navigate('/setup')} onNext={() => navigate('/setup/tables')} />;
}

function SetupStep3() {
  const navigate = useNavigate();
  return <TablesSetup onBack={() => navigate('/setup/details')} onNext={() => navigate('/setup/menu')} />;
}

function SetupStep4() {
  const navigate = useNavigate();
  return <HardwareSetup onBack={() => navigate('/setup/tables')} onNext={() => navigate('/setup/finish')} />;
}

function SetupStep5() {
  const navigate = useNavigate();
  return <FinishSetup onBack={() => navigate('/setup/menu')} onLaunch={() => navigate('/admin/dashboard')} />;
}

function AuthWrapper() {
  const navigate = useNavigate();
  
  const handleLogin = (email) => {
    if (email === 'chef@gmail.com') {
      navigate('/kitchen');
    } else if (email === 'cashier@gmail.com') {
      navigate('/cashier/billing');
    } else {
      navigate('/admin/dashboard');
    }
  };

  return <Auth onLogin={handleLogin} onSignUp={() => navigate('/setup')} />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<AuthWrapper />} />
        
        {/* Setup Wizard */}
        <Route path="/setup">
          <Route index element={<SetupStep1 />} />
          <Route path="details" element={<SetupStep2 />} />
          <Route path="tables" element={<SetupStep3 />} />
          <Route path="menu" element={<SetupStep4 />} />
          <Route path="finish" element={<SetupStep5 />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Overview />} />
          <Route path="tables" element={<Tables />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="reports" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Kitchen Portal */}
        <Route path="/kitchen" element={<KitchenLayout />}>
          <Route index element={<Navigate to="/kitchen/orders" replace />} />
          <Route path="orders" element={<KitchenOrders />} />
          <Route path="menu" element={<MenuManagement />} />
        </Route>

        {/* Cashier Portal */}
        <Route path="/cashier" element={<CashierLayout />}>
          <Route index element={<Navigate to="/cashier/billing" replace />} />
          <Route path="billing" element={<Billing />} />
        </Route>

        {/* Customer Portal */}
        <Route path="/r/:restaurantId/table/:tableId" element={<CustomerLayout />}>
          <Route index element={<Navigate to="menu" replace />} />
          <Route path="menu" element={<CustomerMenu />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="status" element={<OrderStatus />} />
          <Route path="bill" element={<CustomerBill />} />
        </Route>
        <Route path="/r/:restaurantId/signup" element={<CustomerSignup />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
