import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductCounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number;
  increase: () => void;
  decrease: () => void;
}
