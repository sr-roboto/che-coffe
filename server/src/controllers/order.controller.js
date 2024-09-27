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

  if (
    coffee !== 'Expresso' ||
    coffee !== 'Americano' ||
    coffee !== 'Cappuccino'
  ) {
    return res.status(400).json({ message: 'Invalid coffee' });
  }

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrderByIdCtrl = (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  const order = getOrderById(id, userId);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.status(200).json(order);
};

export const deleteOrderByIdCtrl = (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  const order = deleteOrderById(id, userId);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.status(200).json(order);
};

export const getOrdersCtrl = (req, res) => {
  const userId = req.user.id;
  const orders = getOrders(userId);

  res.status(200).json(orders);
};
