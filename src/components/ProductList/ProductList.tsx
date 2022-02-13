import React, { FC, useCallback } from 'react';

import classes from './ProductList.module.css';
import { ProductListProps } from './ProductList.props';
import ProductItem from '../ProductItem/ProductItem';
import { COUNTER_TYPES } from '../../constants/counter.constants';

const ProductList: FC<ProductListProps> = ({
  products,
  changeProducts,
}): JSX.Element => {
  const onDecrease = useCallback(
    (id: string): void => {
      changeProducts({ type: COUNTER_TYPES.Decrease, payload: id });
    },
    [changeProducts],
  );

  const onIncrease = useCallback(
    (id: string): void => {
      changeProducts({ type: COUNTER_TYPES.Increase, payload: id });
    },
    [changeProducts],
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
