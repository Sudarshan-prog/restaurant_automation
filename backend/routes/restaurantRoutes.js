const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// All routes here would typically be protected by an auth middleware verifying the Supabase JWT
// For simplicity in this step, we will assume the client sends the user ID or session token

// Basic Info
router.post('/basic-info', restaurantController.saveBasicInfo);
router.get('/:id', restaurantController.getRestaurant);

// Tables
router.post('/:restaurantId/tables', restaurantController.saveTables);
router.get('/:restaurantId/tables', restaurantController.getTables);

// Menu
router.post('/:restaurantId/menu-categories', restaurantController.addMenuCategory);
router.post('/:categoryId/menu-items', restaurantController.addMenuItem);

module.exports = router;
