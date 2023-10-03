import Content from './Content';
import Sidebar from './Sidebar';
function MobilePhone() {
  const stores = [
    {
      id: '1',
      src: './img/G1.jpg',
      href: '',
      title: 'M1 Store',
      departments: [
        { id: '1', name: 'Iphone' },
        { id: '2', name: 'google' },
        { id: '3', name: 'Samsung' },
        { id: '4', name: 'LG' },
      ],
    },
    {
      id: '2',
      src: './img/G2.jpg',
      href: '',
      title: 'M2 Store',
      departments: [{ id: '2', name: 'google' }],
    },
    {
      id: '3',
      src: './img/G3.jpg',
      href: '',
      title: 'M3 Store',
      departments: [{ id: '1', name: 'Iphone' }],
    },
    {
      id: '4',
      src: './img/G4.jpg',
      href: '',
      title: 'M4 Store',
      departments: [
        { id: '1', name: 'Iphone' },

        { id: '4', name: 'LG' },
      ],
    },
    {
      id: '5',
      src: './img/G5.jpg',
      href: '',
      title: 'M5 Store',
      departments: [
        { id: '3', name: 'Samsung' },
        { id: '4', name: 'LG' },
      ],
    },
    {
      id: '6',
      src: './img/G6.jpg',
      href: '',
      title: 'M6 Store',
      departments: [
        { id: '1', name: 'Iphone' },
        { id: '2', name: 'google' },
      ],
    },
    {
      id: '7',
      src: './img/G7.jpg',
      href: '',
      title: 'M7 Store',
      departments: [
        { id: '1', name: 'Iphone' },

        { id: '3', name: 'Samsung' },
        { id: '4', name: 'LG' },
      ],
    },
    {
      id: '8',
      src: './img/G8.jpg',
      href: '',
      title: 'M8 Store',
      departments: [
        { id: '2', name: 'google' },
        { id: '3', name: 'Samsung' },
        { id: '4', name: 'LG' },
      ],
    },
    {
      id: '9',
      src: './img/G9.jpg',
      href: '',
      title: 'M9 Store',
      departments: [
        { id: '1', name: 'Iphone' },
        { id: '2', name: 'google' },
        { id: '3', name: 'Samsung' },
      ],
    },
    {
      id: '10',
      src: './img/G10.jpg',
      href: '',
      title: 'M10 Store',
      departments: [
        { id: '1', name: 'Iphone' },
        { id: '2', name: 'google' },

        { id: '4', name: 'LG' },
      ],
    },
  ];

  return (
    <div className='mobile phone' style={{ display: 'flex' }}>
      <Content stores={stores} />
      <Sidebar stores={stores} />
    </div>
  );
}
export default MobilePhone;
