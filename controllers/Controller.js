const Model = require('../models/Model');

const que1Controller = (req, res) => {
    const { number } = req.body;
    const que1 =  Model. deletedelete(number);
   
    res.json({ que1 });
};



module.exports = { que1Controller };

