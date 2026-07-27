import React, { createContext, useContext, useState } from 'react';

const RestaurantContext = createContext();

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
};

export const RestaurantProvider = ({ children }) => {
  // Mock Data Initialization
  const [orders, setOrders] = useState([
    { id: '#TF-1248', table: 5, items: [{ name: 'Margherita Pizza', qty: 2 }], amount: 45.50, status: 'Completed', time: '12:30 PM' },
    { id: '#TF-1247', table: 12, items: [{ name: 'Spaghetti Carbonara', qty: 2 }, { name: 'Garlic Bread', qty: 1 }], amount: 89.90, status: 'Completed', time: '12:15 PM' },
    { id: '#TF-1246', table: 3, items: [{ name: 'Caesar Salad', qty: 3 }], amount: 67.30, status: 'Preparing', time: '12:45 PM' },
    { id: '#TF-1245', table: 8, items: [{ name: 'Chocolate Cake', qty: 2 }, { name: 'Coffee', qty: 3 }], amount: 120.00, status: 'Received', time: '12:50 PM' },
  ]);

  const [bills, setBills] = useState([
    {
      id: '#INV-1001',
      tableNo: 3,
      customerName: 'John Doe',
      amount: 45.50,
      date: '2023-10-25T14:30:00Z',
      status: 'Paid',
      items: [{ name: 'Margherita Pizza', quantity: 1, price: 15.00 }, { name: 'Pasta Carbonara', quantity: 1, price: 18.00 }, { name: 'Coke', quantity: 2, price: 3.50 }, { name: 'Tax', quantity: 1, price: 5.50 }]
    },
    {
      id: '#INV-1002',
      tableNo: 5,
      customerName: 'Walk-in',
      amount: 120.00,
      date: '2023-10-25T15:15:00Z',
      status: 'Pending',
      items: [{ name: 'Family Combo', quantity: 1, price: 100.00 }, { name: 'Extra Fries', quantity: 2, price: 5.00 }, { name: 'Tax', quantity: 1, price: 10.00 }]
    },
    {
      id: '#INV-1003',
      tableNo: 1,
      customerName: 'Sarah Smith',
      amount: 32.00,
      date: '2023-10-25T15:45:00Z',
      status: 'Paid',
      items: [{ name: 'Caesar Salad', quantity: 1, price: 12.00 }, { name: 'Grilled Chicken', quantity: 1, price: 18.00 }, { name: 'Tax', quantity: 1, price: 2.00 }]
    }
  ]);

  const [staff, setStaff] = useState([
    { id: 1, name: 'Alex Manager', role: 'Manager', active: true, shift: 'Morning' },
    { id: 2, name: 'Sarah Chef', role: 'Chef', active: true, shift: 'Morning' },
    { id: 3, name: 'Mike Waiter', role: 'Waiter', active: false, shift: 'Evening' },
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, name: 'Tomatoes', category: 'Vegetables', quantity: 15, unit: 'kg', threshold: 10, status: 'Good' },
    { id: 2, name: 'Pizza Dough', category: 'Dough', quantity: 5, unit: 'batches', threshold: 10, status: 'Low' },
    { id: 3, name: 'Cheese (Mozzarella)', category: 'Dairy', quantity: 8, unit: 'kg', threshold: 5, status: 'Good' },
  ]);

  const [promotions, setPromotions] = useState([
    { id: 1, code: 'WELCOME20', type: 'Percentage', value: 20, active: true, limit: 100, used: 45 },
    { id: 2, code: 'FLAT50', type: 'Flat', value: 50, active: false, limit: 50, used: 50 },
  ]);

  const [feedbacks, setFeedbacks] = useState([
    { id: 1, customer: 'John Doe', rating: 5, comment: 'Excellent food and service!', status: 'Resolved' },
    { id: 2, customer: 'Jane Smith', rating: 3, comment: 'Food was good, but table was dirty.', status: 'Open' },
  ]);

  const [settings, setSettings] = useState({
    name: 'The Good Food Restaurant',
    adminEmail: 'admin@gmail.com',
    logo: '',
    cuisine: 'Italian',
    description: 'Serving the best authentic pasta and wood-fired pizzas in town.',
    fssai: '12345678901234',
    gst: '22AAAAA0000A1Z5',
    taxRate: 5,
    hours: { open: '08:00 AM', close: '11:00 PM' },
    customerPortalUrl: 'app.restaurantos.com/r/demo/menu',
    hardware: {
      kitchenTv: true,
      cashierPc: true
    }
  });

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', category: 'Main Course', price: 15, veg: true, popular: true, availableToday: true },
    { id: 2, name: 'Spaghetti Carbonara', category: 'Main Course', price: 20, veg: false, popular: true, availableToday: true },
    { id: 3, name: 'Caesar Salad', category: 'Starters', price: 12, veg: true, popular: false, availableToday: true },
    { id: 4, name: 'Chocolate Cake', category: 'Dessert', price: 8, veg: true, popular: true, availableToday: true },
  ]);

  const [tables, setTables] = useState([
    { num: 1, floor: 1, status: 'available', seats: 2 }, { num: 2, floor: 1, status: 'available', seats: 4 }, 
    { num: 3, floor: 1, status: 'occupied', seats: 4 }, { num: 4, floor: 1, status: 'available', seats: 4 },
    { num: 5, floor: 1, status: 'available', seats: 6 }, { num: 6, floor: 1, status: 'available', seats: 6 }, 
    { num: 7, floor: 2, status: 'available', seats: 2 }, { num: 8, floor: 2, status: 'reserved', seats: 4 },
    { num: 9, floor: 2, status: 'available', seats: 4 }, { num: 10, floor: 2, status: 'available', seats: 8 }
  ]);

  const [cart, setCart] = useState([]);

  // Context value
  const value = {
    orders, setOrders,
    bills, setBills,
    staff, setStaff,
    inventory, setInventory,
    promotions, setPromotions,
    feedbacks, setFeedbacks,
    settings, setSettings,
    menuItems, setMenuItems,
    tables, setTables,
    cart, setCart
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
