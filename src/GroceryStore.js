import Category from './Category';
import { useState } from 'react';
import Store from './Store';

function GroceryStore() {
  const stores = [
    {
      id: 'G1',
      src: './img/G1.jpg',
      href: '',
      title: 'G1 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },
        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },
        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
    {
      id: 'G2',
      src: './img/G2.jpg',
      href: '/G2store',
      title: 'G2 Store',
      departments: [
        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },
        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
    {
      id: 'G3',
      src: './img/G3.jpg',
      href: '/G3store',
      title: 'G3 Store',
      departments: [
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },
        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },
        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
    {
      id: 'G4',
      src: './img/G4.jpg',
      href: '/G4store',
      title: 'G4 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },
      ],
    },
    {
      id: 'G5',
      src: './img/G5.jpg',
      href: '/G5store',
      title: 'G5 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },
        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },
      ],
    },
    {
      id: 'G6',
      src: './img/G6.jpg',
      href: '/G6store',
      title: 'G6 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },
        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },
        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
      ],
    },
    {
      id: 'G7',
      src: './img/G7.jpg',
      href: '/G7store',
      title: 'G7 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },
        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },

        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
    {
      id: 'G8',
      src: './img/G8.jpg',
      href: '/G8store',
      title: 'G8 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },

        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
    {
      id: 'G9',
      src: './img/G9.jpg',
      href: '/G9store',
      title: 'G9 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },
        {
          id: '2',
          name: 'Dairy',
          shoppingItems: [
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Yogurt' },
            { id: 3, name: 'Cheese ' },
            { id: 4, name: 'Cream' },
            { id: 5, name: 'Paneer' },
            { id: 6, name: 'Tofu' },
          ],
        },

        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
    {
      id: 'G10',
      src: './img/G10.jpg',
      href: '/G10store',
      title: 'G10 Store',
      departments: [
        {
          id: '1',
          name: 'Produce',
          shoppingItems: [
            { id: 1, name: 'Tomatoes' },
            { id: 2, name: 'Cucumber ' },
            { id: 3, name: 'Pepper' },
            { id: 4, name: 'Brocoli' },
            { id: 5, name: 'Lettus' },
          ],
        },

        {
          id: '3',
          name: 'Fruits',
          shoppingItems: [
            { id: 1, name: 'Banana' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Orange ' },
            { id: 4, name: 'Per' },
            { id: 5, name: 'Avocado' },
            { id: 6, name: 'Watermelon' },
            { id: 7, name: 'Plum' },
          ],
        },
        {
          id: '4',
          name: 'Spices',
          shoppingItems: [
            { id: 1, name: 'Chilli Powder' },
            { id: 2, name: 'Salt' },
            { id: 3, name: 'Oragano' },
          ],
        },
        {
          id: '5',
          name: 'Snacks',
          shoppingItems: [
            { id: 1, name: 'Chocolate' },
            { id: 2, name: 'Chips' },
            { id: 3, name: 'Cold-Drinks' },
            { id: 4, name: 'Cookies ' },
          ],
        },
      ],
    },
  ];
  const [contentSection, setContentSection] = useState('Category');
  function renderContentSection() {
    if (contentSection === 'Category') {
      return <Category stores={stores} clickHandler={setContentSection} />;
    } else {
      return stores
        .filter((store) => store.title === contentSection)
        .map((store) => (
          <Store
            name={store.title}
            departments={store.departments}
            category='GroceryStore'
            handleclick={setContentSection}
          />
        ));
    }
  }
  return <div className='grocery store'>{renderContentSection()}</div>;
}
export default GroceryStore;
