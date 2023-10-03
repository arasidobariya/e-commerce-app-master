import Content from './Content';
import Sidebar from './Sidebar';
function SimCard() {
  const stores = [
    {
      id: '1',
      src: './img/G1.jpg',
      href: '',
      title: 'Sim Card1',
      departments: [
        { id: '1', name: 'fido' },
        { id: '2', name: 'rogers' },
        { id: '3', name: 'virgin' },
        { id: '4', name: 'freedom' },
      ],
    },
    {
      id: '2',
      src: './img/G2.jpg',
      href: '',
      title: 'Sim Card2',
      departments: [
        { id: '1', name: 'fido' },
        { id: '2', name: 'rogers' },

        { id: '4', name: 'freedom' },
      ],
    },
    {
      id: '3',
      src: './img/G3.jpg',
      href: '',
      title: 'Sim Card3',
      departments: [
        { id: '1', name: 'fido' },
        { id: '2', name: 'rogers' },
        { id: '3', name: 'virgin' },
        { id: '4', name: 'freedom' },
      ],
    },
    {
      id: '4',
      src: './img/G4.jpg',
      href: '',
      title: 'Sim Card4',
      departments: [
        { id: '1', name: 'fido' },
        { id: '2', name: 'rogers' },
      ],
    },
    {
      id: '5',
      src: './img/G5.jpg',
      href: '',
      title: 'Sim Card5',
      departments: [
        { id: '2', name: 'rogers' },
        { id: '3', name: 'virgin' },
        { id: '4', name: 'freedom' },
      ],
    },
    {
      id: '6',
      src: './img/G6.jpg',
      href: '',
      title: 'Sim Card6',
      departments: [{ id: '4', name: 'freedom' }],
    },
    {
      id: '7',
      src: './img/G7.jpg',
      href: '',
      title: 'Sim Card7',
      departments: [
        { id: '1', name: 'fido' },

        { id: '4', name: 'freedom' },
      ],
    },
    {
      id: '8',
      src: './img/G8.jpg',
      href: '',
      title: 'Sim Card8',
      departments: [
        { id: '1', name: 'fido' },

        { id: '3', name: 'virgin' },
        { id: '4', name: 'freedom' },
      ],
    },
  ];

  return (
    <div className='sim card' style={{ display: 'flex' }}>
      <Content stores={stores} />
      <Sidebar stores={stores} />
    </div>
  );
}
export default SimCard;
