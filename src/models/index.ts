export interface Parameters {
  color: string;
  size: string;
  weight: string;
}

export interface Mock {
  title: string;
  id: string;
  img: string;
  quantity: number;
  price: number;
  totalPrice: number;
  totalDiscountPrice?: number;
  discountPrice?: number;
  parameters?: Parameters;
}
