// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from 'express-validator';

export const createOrderValidation = [body('coffee').isString()];
export const getOrderByIdValidation = [body('id').isString()];
export const deleteOrderByIdValidation = [body('id').isString()];
