import React, { FC, useCallback } from 'react';

import classes from './ProductList.module.css';
import { ProductListProps } from './ProductList.props';
import ProductItem from '../ProductItem/ProductItem';

const ProductList: FC<ProductListProps> = ({
  products,
  setProducts,
}): JSX.Element => {
  const decrease = useCallback(
    (id: string): void => {
      const newProducts = products
        .map((product) => {
          const {
            price,
            quantity,
            discountPrice,
            parameters,
            totalPrice,
            totalDiscountPrice,
          } = product;

          const finalProduct = parameters
            ? {
                ...product,
                parameters: {
                  ...parameters,
                },
              }
            : { ...product };

          if (product.id === id) {
            const newQuantity = quantity - 1;
            const productWithNewQuantity = {
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
              ...finalProduct,
              ...productWithNewQuantity,
            };
          }

          return finalProduct;
        })
        .filter((product) => product.quantity > 0);

      setProducts(newProducts);
    },
    [products],
  );
  const increase = useCallback(
    (id: string): void => {
      const newProducts = products.map((product) => {
        const {
          price,
          quantity,
          discountPrice,
          parameters,
          totalPrice,
        } = product;
        const finalProduct = parameters
          ? {
              ...product,
              parameters: {
                ...parameters,
              },
            }
          : { ...product };

        if (product.id === id) {
          const newQuantity = quantity + 1;

          const productWithNewQuantity = {
            quantity: newQuantity,
            totalPrice: discountPrice
              ? totalPrice + price
              : price * newQuantity,
            totalDiscountPrice:
              discountPrice && discountPrice * newQuantity,
          };

          return {
            ...finalProduct,
            ...productWithNewQuantity,
          };
        }

        return finalProduct;
      });

      setProducts(newProducts);
    },
    [products],
  );
  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          increase={increase}
          decrease={decrease}
        />
      ))}
    </ul>
  );
};

export default ProductList;
