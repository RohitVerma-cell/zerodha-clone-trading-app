const {model} = require('mongoose');

const OrderSchema = require('../schema/OrderSchema');

const OrdersModel = model('order', OrderSchema);

module.exports = OrdersModel;