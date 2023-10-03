import './App.css';
import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';
import Main from './Main';
import React from 'react';
import GroceryStore from './GroceryStore';
import MobilePhone from './MobilePhone';
import Restaurant from './Restaurant';
import SimCard from './SimCard';
import JweleryStore from './JweleryStore';
import Checkout from './Checkout';

function App() {
  const [mainSection, setSection] = useState('Main');

  function renderMainSection() {
    switch (mainSection) {
      case 'GroceryStore':
        return <GroceryStore />;
      case 'Restaurant':
        return <Restaurant />;
      case 'MobilePhone':
        return <MobilePhone />;
      case 'SimCard':
        return <SimCard />;
      case 'JweleryStore':
        return <JweleryStore />;
      case 'Checkout':
        return <Checkout />;
      default:
        return <Main clickHandler={setSection} />;
    }
  }
  return (
    <div
      className='App'
      style={{ dispaly: 'grid', gridTemplateRows: '0.1fr 1fr 0.1fr' }}
    >
      <Header clickHandler={setSection} />

      {renderMainSection()}

      <Footer />
    </div>
  );
}

export default App;
