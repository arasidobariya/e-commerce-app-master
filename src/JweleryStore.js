import Content from './Content';
import Sidebar from './Sidebar';
function JweleryStore() {
  const stores = [
    {
      id: '1',
      src: './img/G1.jpg',
      href: '',
      title: 'J1 Store',
      departments: [
        { id: '1', name: 'Ear-rings' },
        { id: '2', name: 'Ring' },
        { id: '3', name: 'Necklace' },
        { id: '4', name: 'Bangles' },
      ],
    },
    {
      id: '2',
      src: './img/G2.jpg',
      href: '',
      title: 'J2 Store',
      departments: [
        { id: '3', name: 'Necklace' },
        { id: '4', name: 'Bangles' },
      ],
    },
    {
      id: '3',
      src: './img/G3.jpg',
      href: '',
      title: 'J3 Store',
      departments: [
        { id: '1', name: 'Ear-rings' },
        { id: '2', name: 'Ring' },
      ],
    },
    {
      id: '4',
      src: './img/G4.jpg',
      href: '',
      title: 'J4 Store',
      departments: [
        { id: '1', name: 'Ear-rings' },

        { id: '3', name: 'Necklace' },
        { id: '4', name: 'Bangles' },
      ],
    },
    {
      id: '5',
      src: './img/G5.jpg',
      href: '',
      title: 'J5 Store',
      departments: [
        { id: '1', name: 'Ear-rings' },
        { id: '2', name: 'Ring' },

        { id: '4', name: 'Bangles' },
      ],
    },
    {
      id: '6',
      src: './img/G6.jpg',
      href: '',
      title: 'J6 Store',
      departments: [{ id: '3', name: 'Necklace' }],
    },
    {
      id: '7',
      src: './img/G7.jpg',
      href: '',
      title: 'J7 Store',
      departments: [
        { id: '2', name: 'Ring' },
        { id: '3', name: 'Necklace' },
      ],
    },
    {
      id: '8',
      src: './img/G8.jpg',
      href: '',
      title: 'J8 Store',
      departments: [
        { id: '1', name: 'Ear-rings' },

        { id: '3', name: 'Necklace' },
        { id: '4', name: 'Bangles' },
      ],
    },
    {
      id: '9',
      src: './img/G9.jpg',
      href: '',
      title: 'J9 Store',
      departments: [
        { id: '1', name: 'Ear-rings' },
        { id: '2', name: 'Ring' },
        { id: '3', name: 'Necklace' },
        { id: '4', name: 'Bangles' },
      ],
    },
  ];

  return (
    <div className='jwelery store' style={{ display: 'flex' }}>
      <Content stores={stores} />
      <Sidebar stores={stores} />
    </div>
  );
}
export default JweleryStore;
