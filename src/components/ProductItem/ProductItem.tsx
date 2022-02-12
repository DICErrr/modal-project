import React, { FC, useContext } from 'react';
import classNames from 'classnames';

import classes from './ProductItem.module.css';
import { ProductItemProps } from './ProductItem.props';
import ProductCounter from '../ProductCounter/ProductCounter';
import { AppContext } from '../../context/app.context';
import { addCurrencySymbol } from '../../utils/currency';

const ProductItem: FC<ProductItemProps> = ({ product }): JSX.Element => {
  const { products, setProducts } = useContext(AppContext);

  const decrease = (): void => {
    const newProducts = products
      .map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: --item.quantity,
            totalPrice: product.discountPrice ? product.discountPrice : product.totalPrice - product.price,
            totalDiscountPrice:
              product.discountPrice && product.totalDiscountPrice && product.totalDiscountPrice - product.discountPrice,
          };
        }

        return {
          ...item,
        };
      })
      .filter((item) => item.quantity > 0);

    setProducts && setProducts(newProducts);
  };
  const increase = (): void => {
    const newProducts = products.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: ++item.quantity,
          totalPrice: product.discountPrice ? product.discountPrice : product.price * product.quantity,
          totalDiscountPrice: product.discountPrice && product.discountPrice * product.quantity,
        };
      }

      return {
        ...item,
      };
    });

    setProducts && setProducts(newProducts);
  };

  return (
    <li className={classes.productItemWrapper}>
      <img className={classes.productImage} src={product.img} alt={product.title} />
      <div className={classes.productItem}>
        <h3 className={classes.productTitle}>{product.title}</h3>
        {product.parameters && (
          <div className={classes.productParameters}>
            {product.parameters.color && (
              <div className={classes.productParameter}>Color: {product.parameters.color}</div>
            )}
            {product.parameters.size && <div className={classes.productParameter}>Size: {product.parameters.size}</div>}
            {product.parameters.weight && (
              <div className={classes.productParameter}>Weight: {product.parameters.weight}</div>
            )}
          </div>
        )}
        <div className={classes.productPriceWrapper}>
          <ProductCounter count={product.quantity} increase={increase} decrease={decrease} />
          <div>
            <span
              className={classNames(classes.productPrice, {
                [classes.productDiscountPrice]: product.discountPrice,
              })}
            >
              {addCurrencySymbol(product.totalPrice)}
            </span>
            {product.totalDiscountPrice && (
              <span className={classes.productDiscountPrice}>{addCurrencySymbol(product.totalDiscountPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
