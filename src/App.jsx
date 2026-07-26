import React, { useState } from 'react';
import Auth from './Auth';
import Setup from './Setup';
import RestaurantDetails from './RestaurantDetails';
import TablesSetup from './TablesSetup';

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
    </>
  );
}

export default App;
