// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Cart extends Model {
//     static associate(models) {
//       // define association here
//     }
//   };
//   Cart.init({
//     uniqueCardId: DataTypes.STRING,
//     cartStatus: DataTypes.ENUM
//   }, {
//     sequelize,
//     modelName: 'Cart',
//   });
//   return Cart;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define('Cart', {
        uniqueCartId: DataTypes.STRING,
        cartStatus: { type: DataTypes.ENUM, values: ['Open', 'CheckedOut']}
    }, {});

    Cart.associate = function(models) {
        Cart.hasMany(models.CartItem);
    };

    return Cart;
};
