function ConfirmationPopUp({ orders, setDisplay }) {
  return (
    <div
      style={{
        textAlign: 'center',
        border: '2px solid blue',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ backgroundColor: 'blue', color: 'white' }}>
        <h2>Confirmation</h2>
      </div>
      <p style={{ fontWeight: 'bolder' }}>
        You have succeefully placed orders for following items:{' '}
      </p>

      <ul style={{ marginTop: '5px', display: 'inlineBlock' }}>
        {orders.map((order) => {
          return <li key={order}>{order}</li>;
        })}
      </ul>

      <button
        style={{
          border: '2 px solid white',
          backgroundColor: 'blue',
          color: 'white',
          height: '30px',
          width: '60px',
          borderRadius: '5px',
          margin: '10px',
          padding: '7px',
        }}
        onClick={() => setDisplay(false)}
      >
        Close
      </button>
    </div>
  );
}
export default ConfirmationPopUp;
