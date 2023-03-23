const { DataTypes } = require("sequelize");

const Product = (sequelize) => {
    sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            //allowNull: false
        },
        description: {
            type: DataTypes.STRING(500)
        },
        image: {
            type: DataTypes.STRING(1000)
        },
        price: {
            type: DataTypes.INTEGER, // hasta un maximo de 9999.99
            //allowNull: false
        },
        type: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        carrito: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        comment: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        rating: {
            type: DataTypes.DECIMAL(3, 2),
            defaultValue: 5.0,
        },
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        timestamps: false
    }
)}

module.exports = Product;