import { useState } from 'react';

function Departments({ departments }) {
  return (
    <div>
      {departments.map((department) => {
        return (
          <div key={department.id} style={{}}>
            {department.name}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Creates a sidebar using the input store data.
 * store data should be an array of an Object with following properties -
 * id (integer)
 * source (string)
 * href (string)
 * departments (array of an object)
 *
 * sample of a store -
 * [
 * {
 *    id: '10',
 *    src: './img/G10.jpg',
 *    href: '/G10store',
 *    title: 'G10 Store',
 *    departments: [
 *      { id: '1', name: 'Produce' },
 *      { id: '3', name: 'Frozen' },
 *      { id: '4', name: 'Spices' },
 *      { id: '5', name: 'Snacks' },
 *    ],
 *  },
 *]
 * 1. Create a boolean array of the same size as of stores. Initialize all with False.
 * 2. Create state array isDisplay using this boolean array
 * 3. create a function to set an array item to true whenever a mouse enter to the div
 * 4. Create a function to set an array item to false whenever a mouse exits from the div
 * 5. Use different array item to display or hide the department list
 * @param {Array} stores
 * @returns sidebar of a store category
 */
function Sidebar({ stores }) {
  let initialArrayValue = new Array(stores.length).fill(false);

  // let initialArrayValue = [false, false, false, false, false, false, false]

  const [isDisplay, setIsDisplay] = useState(initialArrayValue);

  function setDisplay(index, value) {
    const isDisplayCopy = [...isDisplay];
    isDisplayCopy[index] = value;
    setIsDisplay(isDisplayCopy);
  }

  return (
    <div style={{ flex: '0.25' }}>
      {stores.map((store, index) => {
        return (
          <div key={store.id}>
            <div
              style={{
                backgroundColor: 'rgb(22, 22, 138)',
                padding: '10px 20px 10px 20px',
                borderRadius: '20px',
                border: '2px solid black',
                fontSize: '15px',
                textAlign: 'center',
                margin: '20px',
                color: 'white',
              }}
              onMouseOver={() => setDisplay(index, true)}
              onMouseOut={() => setDisplay(index, false)}
            >
              {store.title}
            </div>
            {isDisplay[index] && (
              <Departments departments={store.departments} />
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Sidebar;
