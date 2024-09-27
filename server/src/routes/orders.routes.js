import { Router } from 'express';
import {
  createOrderCtrl,
  getOrdersCtrl,
  getOrderByIdCtrl,
  deleteOrderByIdCtrl,
} from '../controllers/order.controller.js';
import {
  createOrderValidation,
  getOrderByIdValidation,
} from '../validations/orders.validations.js';
import { applyValidations } from '../validations/apply.validations.js';
import { validateJwt } from '../middlewares/validateJwt.js';

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get('/', validateJwt, getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post(
  '/',
  validateJwt,
  createOrderValidation,
  applyValidations,
  createOrderCtrl
);

ordersRouter.get(
  '/:id',
  validateJwt,
  getOrderByIdValidation,
  applyValidations,
  getOrderByIdCtrl
);

export { ordersRouter };
