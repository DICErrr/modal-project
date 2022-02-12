import React, { FC } from 'react';

import classes from './Tip.module.css';
import { TipProps } from './Tip.props';

const Tip: FC<TipProps> = ({ text }): JSX.Element => {
  return <p className={classes.tip}>{text}</p>;
};

export default Tip;
