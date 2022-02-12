import React, { createContext, PropsWithChildren } from 'react';

import { Mock } from '../models';

export interface IAppContext {
  products: Mock[];
  setProducts?: (newProducts: Mock[]) => void;
}

export const AppContext = createContext<IAppContext>({ products: [] });

export const AppContextProvider = ({
  products,
  setProducts,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  return <AppContext.Provider value={{ products, setProducts }}>{children}</AppContext.Provider>;
};
