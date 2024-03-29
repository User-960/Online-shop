export interface IProduct {
  image: string
  image_slider: IImageSlider[]
  name: string
  price: number,
  article: string,
  available: boolean,
  category: string,
  description: string
}

interface IImageSlider {
  id: number, 
  name: string, 
  img: string
}


export const productsData: IProduct[] = [
    {
      image: '1.jpg',
      image_slider: [
        { 'id': 1, 'name': 'img1', 'img': '1.jpg' },
        { 'id': 2, 'name': 'img2', 'img': '2.jpg' },
        { 'id': 3, 'name': 'img3', 'img': '3.jpg' },
        { 'id': 4, 'name': 'img4', 'img': '4.jpg' },
        { 'id': 5, 'name': 'img5', 'img': '5.jpg' }
      ],
      'name': 'T-shirt 1',
      'price': 21.233245235,
      'article': 'T1',
      'available': true,
      'category': 'Man',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam temporibus rerum unde similique? Dicta at eligendi, aspernatur omnis in itaque quidem, ex architecto quas ab laudantium exercitationem. Iusto, voluptates.'
    },
    {
      'image': '2.jpg',
      'image_slider': [
        { 'id': 2, 'name': 'img2', 'img': '2.jpg' },
        { 'id': 1, 'name': 'img1', 'img': '1.jpg' },
        { 'id': 3, 'name': 'img3', 'img': '3.jpg' },
        { 'id': 4, 'name': 'img4', 'img': '4.jpg' },
        { 'id': 5, 'name': 'img5', 'img': '5.jpg' }
      ],
      'name': 'T-shirt 2',
      'price': 31.23423,
      'article': 'T2',
      'available': true,
      'category': 'Woman',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam temporibus rerum unde similique? Dicta at eligendi, aspernatur omnis in itaque quidem, ex architecto quas ab laudantium exercitationem. Iusto, voluptates.'
    },
    {
      'image': '3.jpg',
      'image_slider': [
        { 'id': 3, 'name': 'img3', 'img': '3.jpg' },
        { 'id': 1, 'name': 'img1', 'img': '1.jpg' },
        { 'id': 2, 'name': 'img2', 'img': '2.jpg' },
        { 'id': 4, 'name': 'img4', 'img': '4.jpg' },
        { 'id': 5, 'name': 'img5', 'img': '5.jpg' }
      ],
      'name': 'T-shirt 3',
      'price': 42.54645,
      'article': 'T3',
      'available': false,
      'category': 'Woman',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam temporibus rerum unde similique? Dicta at eligendi, aspernatur omnis in itaque quidem, ex architecto quas ab laudantium exercitationem. Iusto, voluptates.'
    },
    {
      'image': '4.jpg',
      'image_slider': [
        { 'id': 4, 'name': 'img4', 'img': '4.jpg' },
        { 'id': 1, 'name': 'img1', 'img': '1.jpg' },
        { 'id': 2, 'name': 'img2', 'img': '2.jpg' },
        { 'id': 3, 'name': 'img3', 'img': '3.jpg' },
        { 'id': 5, 'name': 'img5', 'img': '5.jpg' }
      ],
      'name': 'T-shirt 4',
      'price': 53.9765,
      'article': 'T4',
      'available': true,
      'category': 'Man',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam temporibus rerum unde similique? Dicta at eligendi, aspernatur omnis in itaque quidem, ex architecto quas ab laudantium exercitationem. Iusto, voluptates.'
    },
    {
      'image': '5.jpg',
      'image_slider': [
        { 'id': 5, 'name': 'img5', 'img': '5.jpg' },
        { 'id': 1, 'name': 'img1', 'img': '1.jpg' },
        { 'id': 2, 'name': 'img2', 'img': '2.jpg' },
        { 'id': 3, 'name': 'img3', 'img': '3.jpg' },
        { 'id': 4, 'name': 'img4', 'img': '4.jpg' }
      ],
      'name': 'T-shirt 5',
      'price': 65.1257,
      'article': 'T5',
      'available': false,
      'category': 'Woman',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam temporibus rerum unde similique? Dicta at eligendi, aspernatur omnis in itaque quidem, ex architecto quas ab laudantium exercitationem. Iusto, voluptates.'
    },
    {
      'image': '6.jpeg',
      'image_slider': [
        { 'id': 1, 'name': 'img1', 'img': '6.jpeg' },
        { 'id': 2, 'name': 'img2', 'img': '2.jpg' },
        { 'id': 3, 'name': 'img3', 'img': '3.jpg' },
        { 'id': 4, 'name': 'img4', 'img': '4.jpg' },
        { 'id': 5, 'name': 'img5', 'img': '5.jpg' }
      ],
      'name': 'T-shirt 6',
      'price': 8.65745635,
      'article': 'T6',
      'available': true,
      'category': 'Woman',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam temporibus rerum unde similique? Dicta at eligendi, aspernatur omnis in itaque quidem, ex architecto quas ab laudantium exercitationem. Iusto, voluptates.'
    }
];