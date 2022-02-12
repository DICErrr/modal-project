import React, { FC } from 'react';

import classes from './ProductList.module.css';
import { ProductListProps } from './ProductList.props';
import ProductItem from '../ProductItem/ProductItem';

const ProductList: FC<ProductListProps> = ({ products }): JSX.Element => {
  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
