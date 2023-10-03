function Main({ clickHandler }) {
  const homePageLists = [
    {
      id: '1',
      src: './img/grocery store.jpg',
      title: 'Grocery Store',
      descr:
        'Discover the new FreshCo app with offers, coupons, weekly deals through the flyer, and a shopping',
      link: 'GroceryStore',
    },
    {
      id: '2',
      src: './img/restaurant.jpg',
      title: 'Restaurant',
      descr:
        'You have orders to monitor and staff to manage. There are numbers to crunch, report on, and submit',
      link: 'Restaurant',
    },
    {
      id: '3',
      src: './img/mobilephone.jpg',
      title: 'Mobile Phone',
      descr:
        'Find the best cell phones and smartphones for the way you live. Visit BestBuy.ca to shop for mobil phones by handset, carrier or prepaid networks.',
      link: 'MobilePhone',
    },
    {
      id: '4',
      src: './img/simcard.jpg',
      title: 'Sim Card',
      descr:
        'Are you looking for a SIM card for your phone? Best Buy has a selection of Micro SIM cards, adapters & more. Shop now!',
      link: 'SimCard',
    },
    {
      id: '5',
      src: './img/jwelerystore.jpg',
      title: 'Jwelery Store',
      descr:
        'hop our amazing selection of jewellry online or in store at Peoples Jewellers Brampton, ON, Store 5115. Find unique diamond jewellry and jewellery services',
      link: 'JweleryStore',
    },
  ];
  return (
    <div className='main' style={{ margin: '0.5rem', flex: '0.8' }}>
      {homePageLists.map((list) => {
        return (
          <div
            key={list.id}
            className='list'
            style={{ display: 'flex', gap: '1rem' }}
          >
            <div>
              <img
                onClick={() => clickHandler(list.link)}
                src={list.src}
                width='300'
                height='200'
                style={{ border: '2px solid blue' }}
              />
            </div>
            <div>
              <h2>{list.title}</h2>
              <p>{list.descr}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Main;
