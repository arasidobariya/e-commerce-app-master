import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
import App from './Home';

function Home() {
  const [display, setDisplay] = useState('Login');

  function signupClick() {
    if (display === 'Login') {
      return <Login clickHandler={setDisplay} />;
    } else if (display === 'Signup') {
      return <Signup clickHandler={setDisplay} />;
    } else if (display === 'App') {
      return <App />;
    }
  }
  return <div>{signupClick()}</div>;
}

export default Home;
