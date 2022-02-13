import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Mock } from '../../interfaces';

export interface ProductItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  product: Mock;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}
