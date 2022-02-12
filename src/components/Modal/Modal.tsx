import React, { FC } from 'react';
import classNames from 'classnames';

import classes from './Modal.module.css';
import { ModalProps } from './Modal.props';
import Button from '../Button/Button';

const Modal: FC<ModalProps> = ({
  active,
  setActive,
  modalHeader,
  modalFooter,
  children,
}): JSX.Element => {
  const stopPropagation = (
    e: React.MouseEvent<HTMLDivElement>,
  ): void => e.stopPropagation();

  const hideModal = (): void => setActive(false);

  return (
    <div
      className={classNames(classes.modal, {
        [classes.active]: active,
      })}
      onClick={hideModal}
    >
      <div
        className={classNames(classes.modalContent, {
          [classes.active]: active,
        })}
        onClick={stopPropagation}
      >
        <div className={classes.modalHeader}>
          <Button type="cancel" onClick={hideModal} />
          {modalHeader}
        </div>
        <div className={classes.modalBody}>{children}</div>
        <div className={classes.modalFooter}>
          {modalFooter}
          <Button type="primary" onClick={hideModal}>
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
