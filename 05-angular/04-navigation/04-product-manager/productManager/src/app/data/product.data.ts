import { Product } from '../models';

export const PRODUCTS: Product[] = [
  // {
  //   id: randomId(),
  //   name: 'nice shoes',
  //   price: 99.99,
  //   url: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  // },
  // {
  //   id: randomId(),
  //   name: 'good shoes',
  //   price: 19.99,
  //   url: 'https://images.pexels.com/photos/404168/pexels-photo-404168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  // },
];

function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
