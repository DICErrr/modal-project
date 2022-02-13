import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductCounterProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}
