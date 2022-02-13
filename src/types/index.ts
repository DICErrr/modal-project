import { COUNTER_TYPES } from '../constants/counter.constants';
import { PRODUCTS } from '../constants/products.constants';

export type Increase = {
  type: typeof COUNTER_TYPES.Increase;
  payload: string;
};

export type Decrease = {
  type: typeof COUNTER_TYPES.Decrease;
  payload: string;
};

export type Default = {
  type: typeof PRODUCTS.Default;
};

export type ProductActionTypes = Increase | Decrease | Default;
