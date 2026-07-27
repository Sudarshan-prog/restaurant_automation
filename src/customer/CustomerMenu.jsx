import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronRight } from 'lucide-react';

function CustomerMenu() {
  const { menuItems, cart, setCart } = useRestaurant();
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const todayMenuItems = menuItems.filter(item => item.availableToday !== false);
  const categories = ['All', ...new Set(todayMenuItems.map(item => item.category))];
  const filteredItems = activeCategory === 'All' ? todayMenuItems : todayMenuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <div className="category-scroll">
        {categories.map(cat => (
          <div 
            key={cat} 
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <div className="menu-item-info">
              <h3>
                <span className={`veg-icon ${!item.veg ? 'non-veg-icon' : ''}`}></span>
                {item.name}
              </h3>
              <div className="menu-item-price">${item.price.toFixed(2)}</div>
            </div>
            <button className="add-btn" onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="floating-bottom-bar">
          <div className="cart-summary">
            <span className="items">{cartItemsCount} item{cartItemsCount > 1 ? 's' : ''}</span>
            <span className="total">${cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => navigate('../checkout')}>
            View Cart <ChevronRight size={18} />
          </button>
        </div>
      )}
    </>
  );
}

export default CustomerMenu;
