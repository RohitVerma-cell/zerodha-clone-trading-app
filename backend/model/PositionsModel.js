const {model} = require('mongoose');

const PositionSchema = require('../schema/PositionsSchema');

const PositionsModel = model('position', PositionSchema);

module.exports = PositionsModel;