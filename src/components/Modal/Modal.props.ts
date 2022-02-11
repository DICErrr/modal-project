import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
}
