var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('../swagger/swagger-definition.json');

var brandRouter = require("./brand/brand.router");
var categoryRouter = require("./category/category.router");
var productRouter = require("./product/product.router");
var cartRouter = require("./cart/cart.router");
// var checkoutRouter = require("./checkout/checkout.router");

var register = function(app) {
    /* brand api*/
    app.use('/api/brand', brandRouter);

    /* category api*/
    app.use('/api/category', categoryRouter);

    /* product api*/
    app.use('/api/product', productRouter);

    /* cart api*/
    app.use('/api/cart', cartRouter);

    /* checkout api*/
    // app.use('/api/checkout', checkoutRouter);

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = register;