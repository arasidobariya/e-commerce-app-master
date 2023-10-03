function Header({ clickHandler }) {
  /* const navTag = [
        { id: '1', href: '/GroceryStore', title: 'Grocery Store' },
        { id: '2', href: '/restaurant', title: 'Restaurant' },
        { id: '3', href: '/mobilephone', title: 'Mobile Phone' },
        { id: '4', href: '/sim-card', title: 'Sim Card' },
        { id: '5', href: '/jwelery-store', title: 'Jwelery Store' },
    ] */
  return (
    <nav
      className='nav'
      style={{
        backgroundColor: 'rgb(42, 44, 165)',
        color: 'white',
        display: 'flex',
        gap: '3rem',
        padding: '0.5rem',
        margin: '0',
      }}
    >
      <div
        className='logo'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <img
          id='logoImg'
          style={{ paddingLeft: '1.35rem' }}
          src='./img/ecommerce-logo.jpg'
          width='40px'
          height='40px'
          onClick={() => {
            clickHandler('default');
          }}
        />
        E-Commerce
      </div>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '5rem',
          textAlign: 'center',
          justifyItems: 'center',
          justifyContent: 'center',
          textJustify: 'center',
          padding: '1rem',
        }}
      >
        <li>
          <button
            onClick={() => {
              clickHandler('GroceryStore');
            }}
          >
            Grocery Store
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              clickHandler('Restaurant');
            }}
          >
            Restaurant
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              clickHandler('MobilePhone');
            }}
          >
            Mobile Phone
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              clickHandler('SimCard');
            }}
          >
            Sim Card
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              clickHandler('JweleryStore');
            }}
          >
            Jwelery Store
          </button>
        </li>
      </ul>
      <button
        id='user'
        style={{
          width: '100px',
          height: '30px',
          borderRadius: '10px',
          border: '2px blue',
          color: 'rgb(42, 44, 165)',
          marginTop: '1rem',
          marginLeft: '15rem',
        }}
        onClick={() => {
          clickHandler('Checkout');
        }}
      >
        Checkout
      </button>
    </nav>
  );
}

export default Header;
