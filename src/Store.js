import { useState } from 'react';
import Department from './Department';
import ConfirmationPopUp from './ConfirmationPopUp';

function Store({ name, departments, category, handleclick }) {
  const [isDisplay, setIsDisplay] = useState(false);
  function setDisplay() {
    setIsDisplay(!isDisplay);
  }
  const [userinfo, setUserInfo] = useState({
    items: [],
    response: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { items } = userinfo;
    if (checked) {
      setUserInfo({
        items: [...items, value],
        response: [...items, value],
      });
    } else {
      setUserInfo({
        items: items.filter((e) => e !== value),
        response: items.filter((e) => e !== value),
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', padding: '15px' }}>{name}</h2>
      {isDisplay && (
        <ConfirmationPopUp setDisplay={setDisplay} orders={userinfo.response} />
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          margin: '35px 45px 35px 45px',
        }}
      >
        {departments.map((department) => (
          <Department
            key={department.id}
            name={department.name}
            shoppingItems={department.shoppingItems}
            setDisplay={setDisplay}
            handleChange={handleChange}
          />
        ))}
      </div>
      <button onClick={() => handleclick('Category')}>
        Back to {category}{' '}
      </button>
    </div>
  );
}

export default Store;
