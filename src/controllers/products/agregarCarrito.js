const { Product } = require("../../db.js");

const agregarCarrito = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.update({ carrito: true}, { where: { id: id } });
        const productAdd = await Product.findByPk(id);
        res.send(productAdd);
        
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { agregarCarrito };