import React, { FC, useState } from 'react';

import classes from './App.module.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ProductList from './components/ProductList/ProductList';
import ModalHeader from './components/ModalHeader/ModalHeader';
import Tip from './components/Tip/Tip';
import { useProducts } from './hooks/useProducts';
import { PRODUCTS } from './constants/products.constants';

const App: FC = (): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { products, changeProducts } = useProducts();

  const openModal = (): void => {
    changeProducts({ type: PRODUCTS.Default });
    setModalActive(true);
  };

  return (
    <div className={classes.app}>
      <Button type="animated" onClick={openModal}>
        Show Modal
      </Button>
      <Modal
        setActive={setModalActive}
        modalHeader={
          <ModalHeader
            title="Your shopping cart"
            text="Order now and your order will be shipped for free"
          />
        }
        modalFooter={
          <Tip text="The items in your shopping cart are not reserved for you" />
        }
        active={modalActive}
      >
        <ProductList
          products={products}
          changeProducts={changeProducts}
        />
      </Modal>
    </div>
  );
};

export default App;
