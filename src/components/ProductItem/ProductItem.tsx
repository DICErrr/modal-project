import React, { FC } from 'react';
import classNames from 'classnames';

import classes from './ProductItem.module.css';
import { ProductItemProps } from './ProductItem.props';
import ProductCounter from '../ProductCounter/ProductCounter';
import { addCurrencySymbol } from '../../utils/currency';

const ProductItem: FC<ProductItemProps> = ({
  product,
  onIncrease,
  onDecrease,
}): JSX.Element => {
  const {
    img,
    quantity,
    title,
    parameters,
    totalDiscountPrice,
    id,
    totalPrice,
    discountPrice,
  } = product;

  return (
    <li className={classes.productItemWrapper}>
      <img className={classes.productImage} src={img} alt={title} />
      <div className={classes.productItem}>
        <h3 className={classes.productTitle}>{title}</h3>
        {parameters && (
          <div className={classes.productParameters}>
            {parameters.color && (
              <div className={classes.productParameter}>
                Color: {parameters.color}
              </div>
            )}
            {parameters.size && (
              <div className={classes.productParameter}>
                Size: {parameters.size}
              </div>
            )}
            {parameters.weight && (
              <div className={classes.productParameter}>
                Weight: {parameters.weight}
              </div>
            )}
          </div>
        )}
        <div className={classes.productPriceWrapper}>
          <ProductCounter
            count={quantity}
            onIncrease={() => onIncrease(id)}
            onDecrease={() => onDecrease(id)}
          />
          <div>
            <span
              className={classNames(classes.productPrice, {
                [classes.productDiscountPrice]: discountPrice,
              })}
            >
              {addCurrencySymbol(totalPrice)}
            </span>
            {totalDiscountPrice && (
              <span className={classes.productDiscountPrice}>
                {addCurrencySymbol(totalDiscountPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
