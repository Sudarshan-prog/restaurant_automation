import React, { useState } from 'react';
import Auth from './Auth';
import Setup from './Setup';
import RestaurantDetails from './RestaurantDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('auth');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'auth' && <Auth onLogin={() => navigateTo('setup')} />}
      {currentPage === 'setup' && <Setup onNext={() => navigateTo('details')} />}
      {currentPage === 'details' && <RestaurantDetails onBack={() => navigateTo('setup')} />}
    </>
  );
}

export default App;
