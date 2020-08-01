// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class CartItem extends Model {
//     static associate(models) {
//       // define association here
//     }
//   };
//   CartItem.init({
//     quantity: DataTypes.INTEGER,
//     cardId: DataTypes.INTEGER,
//     productId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'CartItem',
//   });
//   return CartItem;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
    
    const CartItem = sequelize.define('CartItem', {
        quantity: DataTypes.INTEGER,
        cartId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER
    }, {});

    CartItem.associate = function(models) {
        CartItem.belongsTo(models.Cart);
        CartItem.belongsTo(models.Product);
    };

    return CartItem;
};
