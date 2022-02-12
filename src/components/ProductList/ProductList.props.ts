import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Mock } from '../../models';

export interface ProductListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  products: Mock[];
}
