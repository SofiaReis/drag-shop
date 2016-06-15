import {Product} from './product'

export class Order {
  id: number;
  client_id: number;
  city: string;
  payment: string;
  address: string;
  status: string;
  products: Product[];
  employee: string;

  constructor() {
      //this.content = obj.content;
  }
}