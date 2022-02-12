import React, { FC } from 'react';

import classes from './InfoBlock.module.css';
import { InfoBlockProps } from './InfoBlock.props';
import { addCurrencySymbol } from '../../utils/currency';

const InfoBlock: FC<InfoBlockProps> = ({ amount }): JSX.Element => {
  return (
    <div className={classes.infoBlock}>
      <h3 className={classes.infoBlockTitle}>
        TOO GOOD TO PASS UP, RIGHT?
      </h3>
      <p className={classes.infoBlockText}>
        Order now and receive
        <span className={classes.infoBlockTag}>
          {addCurrencySymbol(amount.toFixed(2))}
        </span>
        in your Wallet.
      </p>
    </div>
  );
};

export default InfoBlock;
