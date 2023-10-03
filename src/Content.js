import React from 'react';

function Content({ stores, clickHandler }) {
  return (
    <div
      className='storelist'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 0.25fr)',
        gap: '35px',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        margin: '0.5rem',
        flex: '0.75',
      }}
    >
      {stores.map((store) => {
        return (
          <div key={store.id}>
            <img
              onClick={() => {
                clickHandler(store.title);
              }}
              src={store.src}
              width='150px'
              height='150px'
              style={{ border: '2px solid black', padding: '10px' }}
              alt=''
            />

            <h2
              style={{
                textAlign: 'center',
                border: '2px solid black',
                marginTop: '0',
                padding: '10px',
                backgroundColor: 'rgb(42, 44, 165)',
                color: 'white',
              }}
            >
              {store.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
export default Content;
