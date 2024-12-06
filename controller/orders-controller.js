const Books = require('../model/books-model')
const Orders = require('../model/orders-model')

exports.getUserOrders = async (req, res) => {
    const userId = req.params.userId;
    try {
      const orders = await Orders.findAll({ where: { userId }, include: Books });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving orders' });
    }
  };

  exports.createOrder = async (req, res) => {
    const { book_id, quantity, userId } = req.body;
  
    try {
      const book = await Books.findByPk(book_id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      const newOrder = await Orders.create({ book_id, quantity, userId });
      res.status(201).json({ message: 'Order created', id: newOrder.id });
    } catch (error) {
      res.status(500).json({ error: 'Error creating order' });
    }
  };
  


  exports.deleteOrder = async (req, res) => {
    const orderId = req.params.id;
  
    try {
      const deleted = await Orders.destroy({ where: { id: orderId } });
      if (deleted) {
        res.status(204).json({
            message: 'Order deleted',
            id: orderId
        });
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting order' });
    }
  };

  exports.updateOrder = async (req, res) => {
    const { quantity } = req.body;
    const orderId = req.params.id;

    const order = await Orders.findByPk(orderId);
    if (!order) {
        return res.status(404).json({ error: "Order not found" });
    }

    order.quantity = quantity;
    await order.save();

    res.json({ message: "Order updated", order });
};
  

