const {model} = require('mongoose');
const HoldingSchema = require('../schema/HoldingSchema');

const HoldingsModel = model('holding', HoldingSchema);

module.exports = HoldingsModel;