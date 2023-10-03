function Department({ name, shoppingItems, setDisplay, handleChange }) {
  return (
    <div style={{ border: '2px solid black', padding: '25px' }}>
      <h3>{name}</h3>
      <DepartmentItems items={shoppingItems} handleChange={handleChange} />
      <button
        style={{
          width: '100px',
          height: '30px',
          borderRadius: '10px',
          border: 'solid 2px blue',
          color: 'white',
          backgroundColor: 'rgb(42, 44, 165)',
        }}
        onClick={() => setDisplay(true)}
      >
        Add To Cart
      </button>
    </div>
  );
}

function DepartmentItems({ items, handleChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items &&
        items.map((item) => {
          return (
            <label key={item.id}>
              <input
                type='checkbox'
                value={item.name}
                style={{
                  marginRight: '10px',
                }}
                onChange={handleChange}
              ></input>
              {item.name}
            </label>
          );
        })}
    </div>
  );
}

export default Department;
