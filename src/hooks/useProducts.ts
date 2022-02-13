import { useReducer } from 'react';

import { Mock, Products } from '../interfaces';
import { COUNTER_TYPES } from '../constants/counter.constants';
import { mock } from '../mock/mock';
import { PRODUCTS } from '../constants/products.constants';
import { ProductActionTypes } from '../types';

const reducer = (state: Mock[], action: ProductActionTypes) => {
  switch (action.type) {
    case COUNTER_TYPES.Increase:
      return state.map((product) => {
        if (product.id === action.payload) {
          const newQuantity = product.quantity + 1;

          const totalPrice = product.discountPrice
            ? product.totalPrice + product.price
            : product.price * newQuantity;

          const totalDiscountPrice =
            product.discountPrice &&
            product.discountPrice * newQuantity;

          return {
            ...product,
            quantity: newQuantity,
            totalPrice: totalPrice,
            totalDiscountPrice: totalDiscountPrice,
          };
        }

        return product;
      });

    case COUNTER_TYPES.Decrease:
      return state
        .map((product) => {
          if (product.id === action.payload) {
            const newQuantity = product.quantity - 1;

            const totalPrice = product.discountPrice
              ? product.totalPrice - product.price
              : product.totalPrice - product.price;

            const totalDiscountPrice =
              product.discountPrice &&
              product.totalDiscountPrice &&
              product.totalDiscountPrice - product.discountPrice;

            return {
              ...product,
              quantity: newQuantity,
              totalPrice: totalPrice,
              totalDiscountPrice: totalDiscountPrice,
            };
          }

          return product;
        })
        .filter((product) => product.quantity > 0);

    case PRODUCTS.Default:
      return mock;

    default:
      return state;
  }
};

export const useProducts = (): Products => {
  const [state, dispatch] = useReducer(reducer, mock);
  return {
    products: state,
    changeProducts: dispatch,
  };
};
