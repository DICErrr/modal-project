import { DetailedHTMLProps, Dispatch, HTMLAttributes } from 'react';

import { Mock } from '../../interfaces';
import { ProductActionTypes } from '../../types';

export interface ProductListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  products: Mock[];
  changeProducts: Dispatch<ProductActionTypes>;
}
