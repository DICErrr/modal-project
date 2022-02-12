import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Mock } from '../../models';

export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  product: Mock;
}
