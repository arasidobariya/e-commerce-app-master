import Content from './Content';
import Sidebar from './Sidebar';
function Restaurant() {
  const stores = [
    {
      id: '1',
      src: './img/G1.jpg',
      href: '',
      title: 'Restaurant1',
      departments: [
        { id: '1', name: 'Kesar' },
        { id: '2', name: 'Brar' },
        { id: '3', name: 'Mexican' },
        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '2',
      src: './img/G2.jpg',
      href: '',
      title: 'Restaurant2',
      departments: [
        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '3',
      src: './img/G3.jpg',
      href: '',
      title: 'Restaurant3',
      departments: [
        { id: '1', name: 'Kesar' },

        { id: '3', name: 'Mexican' },

        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '4',
      src: './img/G4.jpg',
      href: '',
      title: 'Restaurant4',
      departments: [
        { id: '2', name: 'Brar' },

        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '5',
      src: './img/G5.jpg',
      href: '',
      title: 'Restaurant5',
      departments: [
        { id: '1', name: 'Kesar' },
        { id: '2', name: 'Brar' },
        { id: '3', name: 'Mexican' },
      ],
    },
    {
      id: '6',
      src: './img/G6.jpg',
      href: '',
      title: 'Restaurant6',
      departments: [
        { id: '1', name: 'Kesar' },
        { id: '2', name: 'Brar' },
        { id: '3', name: 'Mexican' },
        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '7',
      src: './img/G7.jpg',
      href: '',
      title: 'Restaurant7',
      departments: [
        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '8',
      src: './img/G8.jpg',
      href: '',
      title: 'Restaurant8',
      departments: [{ id: '1', name: 'Kesar' }],
    },
    {
      id: '9',
      src: './img/G9.jpg',
      href: '',
      title: 'Restaurant9',
      departments: [
        { id: '1', name: 'Kesar' },
        { id: '2', name: 'Brar' },

        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
    {
      id: '10',
      src: './img/G10.jpg',
      href: '',
      title: 'Restaurant10',
      departments: [
        { id: '1', name: 'Kesar' },
        { id: '2', name: 'Brar' },
        { id: '3', name: 'Mexican' },
        { id: '4', name: 'foods' },
      ],
    },
    {
      id: '11',
      src: './img/G10.jpg',
      href: '',
      title: 'Restaurant11',
      departments: [
        { id: '1', name: 'Kesar' },
        { id: '4', name: 'foods' },
        { id: '5', name: 'R6' },
      ],
    },
  ];

  return (
    <div className='restaurant' style={{ display: 'flex' }}>
      <Content stores={stores} />
      <Sidebar stores={stores} />
    </div>
  );
}
export default Restaurant;
