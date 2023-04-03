import SliderProductItem from './SliderProductItem';

export default interface Product {
  image: string;
  image_slider: Array<SliderProductItem>;
  name: string;
  price: number;
  article: string;
  available: boolean;
  category: string;
  description: string,
  quantity?: number;
}