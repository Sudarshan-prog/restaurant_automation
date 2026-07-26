import React, { useState } from 'react';
import Auth from './Auth';
import Setup from './Setup';
import RestaurantDetails from './RestaurantDetails';
import TablesSetup from './TablesSetup';
import MenuSetup from './MenuSetup';
import FinishSetup from './FinishSetup';
import Dashboard from './Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('auth');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'auth' && <Auth onLogin={() => navigateTo('setup')} />}
      {currentPage === 'setup' && <Setup onNext={() => navigateTo('details')} />}
      {currentPage === 'details' && <RestaurantDetails onBack={() => navigateTo('setup')} onNext={() => navigateTo('tables')} />}
      {currentPage === 'tables' && <TablesSetup onBack={() => navigateTo('details')} onNext={() => navigateTo('menu')} />}
      {currentPage === 'menu' && <MenuSetup onBack={() => navigateTo('tables')} onNext={() => navigateTo('finish')} />}
      {currentPage === 'finish' && <FinishSetup onBack={() => navigateTo('menu')} onLaunch={() => navigateTo('dashboard')} />}
      {currentPage === 'dashboard' && <Dashboard />}
    </>
  );
}

export default App;
