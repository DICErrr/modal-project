import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TipProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  text: string;
}
