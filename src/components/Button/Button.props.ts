import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'primary' | 'animated' | 'cancel';
  children?: ReactNode;
  onClick: () => void;
}
