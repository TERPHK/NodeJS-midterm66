const Model = require('../models/Model');

const que1Controller = (req, res) => {
    const { number } = req.body;
    const que1 = Model.multiply(number) +","+ Model.plus(number)+","+ Model.plusplus(number)+","+ Model. deletedelete(number)+","+ Model. per(number) ;
   
    res.json({ que1 });
};

module.exports = { que1Controller };
