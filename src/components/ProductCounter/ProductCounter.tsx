import React, { FC } from 'react';

import { ProductCounterProps } from './ProductCounter.props';
import classes from './ProductCounter.module.css';

const ProductCounter: FC<ProductCounterProps> = ({
  count,
  increase,
  decrease,
}) => {
  return (
    <div className={classes.productCounter}>
      <div
        className={classes.productCounterAction}
        onClick={decrease}
      >
        &#8722;
      </div>
      <div>{count}</div>
      <div
        className={classes.productCounterAction}
        onClick={increase}
      >
        &#43;
      </div>
    </div>
  );
};

export default ProductCounter;
