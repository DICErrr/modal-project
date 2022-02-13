import { v4 as uuid } from 'uuid';

import MacBookPro from '../images/macbookPro.jpeg';
import MacBook from '../images/macbookAir.jpeg';
import { Mock } from '../interfaces';

export const mock: Mock[] = [
  {
    title: 'Apple MacBook Air M1',
    id: uuid(),
    img: MacBook,
    quantity: 1,
    price: 1000,
    discountPrice: 999,
    totalDiscountPrice: 999,
    totalPrice: 1000,
    parameters: {
      color: 'Space Gray',
      size: '30cm',
      weight: '1kg',
    },
  },
  {
    title: 'Apple MacBook Pro M1Pro',
    id: uuid(),
    img: MacBookPro,
    quantity: 1,
    price: 2000,
    totalPrice: 2000,
  },
];
