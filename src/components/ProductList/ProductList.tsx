import React, { FC, useCallback } from 'react';

import classes from './ProductList.module.css';
import { ProductListProps } from './ProductList.props';
import ProductItem from '../ProductItem/ProductItem';
import { Mock } from '../../models';
import { COUNTER_TYPES } from '../../constants/counter.constants';

const ProductList: FC<ProductListProps> = ({
  products,
  setProducts,
}): JSX.Element => {
  const getNewProducts = useCallback(
    (id: string, type: COUNTER_TYPES): Mock[] => {
      let newQuantity;
      let productWithNewQuantity;
      let isFinalProductWithParams;
      return products.map((product) => {
        const {
          price,
          quantity,
          discountPrice,
          parameters,
          totalPrice,
          totalDiscountPrice,
        } = product;

        isFinalProductWithParams = parameters
          ? {
              ...product,
              parameters: {
                ...parameters,
              },
            }
          : { ...product };

        if (product.id === id && type === COUNTER_TYPES.Decrease) {
          newQuantity = quantity - 1;

          productWithNewQuantity = {
            quantity: newQuantity,
            totalPrice: discountPrice
              ? totalPrice - price
              : totalPrice - price,
            totalDiscountPrice:
              discountPrice &&
              totalDiscountPrice &&
              totalDiscountPrice - discountPrice,
          };

          return {
            ...isFinalProductWithParams,
            ...productWithNewQuantity,
          };
        } else if (
          product.id === id &&
          type === COUNTER_TYPES.Increase
        ) {
          newQuantity = quantity + 1;

          productWithNewQuantity = {
            quantity: newQuantity,
            totalPrice: discountPrice
              ? totalPrice + price
              : price * newQuantity,
            totalDiscountPrice:
              discountPrice && discountPrice * newQuantity,
          };

          return {
            ...isFinalProductWithParams,
            ...productWithNewQuantity,
          };
        }

        return isFinalProductWithParams;
      });
    },
    [products],
  );

  const onDecrease = useCallback(
    (id: string): void => {
      const newProducts = getNewProducts(
        id,
        COUNTER_TYPES.Decrease,
      ).filter((product) => product.quantity > 0);

      setProducts(newProducts);
    },
    [getNewProducts, setProducts],
  );
  const onIncrease = useCallback(
    (id: string): void => {
      const newProducts = getNewProducts(id, COUNTER_TYPES.Increase);

      setProducts(newProducts);
    },
    [getNewProducts, setProducts],
  );

  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </ul>
  );
};

export default ProductList;
