import SliderItem from './Carousel';

export default interface Product {
  image: string;
  image_slider: Array<SliderItem>;
  name: string;
  price: number;
  article: string;
  available: boolean;
  category: string;
  description: string,
  quantity?: number;
}