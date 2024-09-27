import crypto from 'crypto';

let ordersCollection = [];

// Crear una orden
export const createOrder = (coffee, userId) => {
  try {
    const newOrder = {
      id: crypto.randomUUID().toString(),
      coffee,
      userId,
    };

    ordersCollection.push(newOrder);

    return newOrder;
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

export const getOrders = (userId) => {
  return ordersCollection.filter((coffee) => coffee.userId === userId);
};

// ! FALTA IMPLEMENTAR (NO SE USA EN EL PROYECTO)
export const getOrderById = (id, userId) => {
  return (
    ordersCollection.find(
      (coffee) => coffee.id === id && coffee.userId === userId
    ) || null
  );
};

// ! FALTA IMPLEMENTAR (NO SE USA EN EL PROYECTO)
export const deleteOrderById = (id, userId) => {
  const deletedOrder = ordersCollection.find(
    (coffee) => coffee.id === id && coffee.userId === userId
  );
  ordersCollection = ordersCollection.filter(
    (coffee) => coffee.id !== id && coffee.userId === userId
  );
  return deletedOrder;
};
