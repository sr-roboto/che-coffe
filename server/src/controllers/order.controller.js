import {
  createOrder,
  getOrders,
  getOrderById,
  deleteOrderById,
} from '../models/order.model.js';

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  const { coffee } = req.body;
  console.log(coffee);

  const order = createOrder(coffee, userId);

  return res.status(201).json(order);
};

export const getOrderByIdCtrl = (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const order = getOrderById(id, userId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteOrderByIdCtrl = (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const order = deleteOrderById(id, userId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getOrdersCtrl = (req, res) => {
  try {
    const userId = req.user.id;
    console.log('usuario', userId);
    const orders = getOrders(userId);

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
