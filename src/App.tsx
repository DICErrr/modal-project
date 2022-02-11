import React, { FC, useState } from 'react';
import classes from './App.module.css';

import Button from './components/Button/Button';

const App: FC = (): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const openModal = (): void => setModalActive(true);

  return (
    <div className={classes.app}>
      <Button type="animated" onClick={openModal}>
        Show Modal
      </Button>
    </div>
  );
};

export default App;
