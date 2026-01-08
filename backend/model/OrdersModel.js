const {model} = require('mongoose');

const OrderSchema = require('../schema/OrdersSchema');

const OrdersModel = model('order', OrderSchema);

module.exports = OrdersModel;