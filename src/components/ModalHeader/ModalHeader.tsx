import React, { FC } from 'react';

import classes from './ModalHeader.module.css';
import { ModalHeaderProps } from './ModalHeader.props';
import InfoBlock from '../InfoBlock/InfoBlock';

const ModalHeader: FC<ModalHeaderProps> = ({
  title,
  text,
}): JSX.Element => {
  return (
    <>
      <InfoBlock amount={5} />
      <div className={classes.modalHeader}>
        <h2 className={classes.modalHeaderTitle}>{title}</h2>
        <p className={classes.modalHeaderText}>{text}</p>
      </div>
    </>
  );
};

export default ModalHeader;
