import { useRef, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import SingIN from './components/SignIn/SingIn';
import SendMessage from './components/SendMessage/SendMessage';
import GetMessages from './components/getMessages/getMessages';

export function App() {
  const [token, setToken]= useState("")
  const host = "https://web-develop-react-express-chat.herokuapp.com"
  
  return (
    <>
      <Login url={host} />
      <SingIN setToken={setToken}/>
      <GetMessages url={host} token={token}/>
      <SendMessage url={host} token={token}/>
    </>

  );
}

export default App;
