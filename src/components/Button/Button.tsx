import React, { FC } from 'react';
import classes from './Button.module.css';

import { ButtonProps } from './Button.props';
import classNames from 'classnames';

const Button: FC<ButtonProps> = ({
  type = 'primary',
  onClick,
  children,
}): JSX.Element => (
  <button
    className={classNames(classes.button, {
      [classes.primaryButton]: type === 'primary',
      [classes.animatedButton]: type === 'animated',
      [classes.close]: type === 'cancel',
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
