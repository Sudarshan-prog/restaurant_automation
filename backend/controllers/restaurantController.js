const supabase = require('../config/supabaseClient');

// Save Basic Restaurant Info
exports.saveBasicInfo = async (req, res) => {
    try {
        const { userId, name, email, phone, cuisine, address, city } = req.body;
        
        const { data, error } = await supabase
            .from('restaurants')
            .upsert({ 
                user_id: userId, 
                name, 
                email, 
                phone, 
                cuisine, 
                address, 
                city 
            })
            .select()
            .single();

        if (error) throw error;
        res.status(200).json({ message: 'Restaurant info saved', restaurant: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Restaurant
exports.getRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('restaurants')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Save Tables Layout
exports.saveTables = async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const { tables } = req.body; // Array of table objects { table_number, seats }

        // Format for insert
        const tablesToInsert = tables.map(t => ({
            restaurant_id: restaurantId,
            table_number: t.table_number,
            seats: t.seats || 4
        }));

        const { data, error } = await supabase
            .from('tables')
            .insert(tablesToInsert)
            .select();

        if (error) throw error;
        res.status(201).json({ message: 'Tables saved successfully', tables: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Tables
exports.getTables = async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const { data, error } = await supabase
            .from('tables')
            .select('*')
            .eq('restaurant_id', restaurantId);

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add Menu Category
exports.addMenuCategory = async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const { name, icon } = req.body;

        const { data, error } = await supabase
            .from('menu_categories')
            .insert({ restaurant_id: restaurantId, name, icon })
            .select()
            .single();

        if (error) throw error;
        res.status(201).json({ message: 'Category added', category: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add Menu Item
exports.addMenuItem = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { restaurantId, name, price, description } = req.body;

        const { data, error } = await supabase
            .from('menu_items')
            .insert({ 
                category_id: categoryId, 
                restaurant_id: restaurantId, 
                name, 
                price, 
                description 
            })
            .select()
            .single();

        if (error) throw error;
        res.status(201).json({ message: 'Menu item added', item: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
