export default interface Product {
  image: string;
  name: string;
  price: number;
  article: string;
  available: boolean;
  category: string;
  quantity?: number;
}