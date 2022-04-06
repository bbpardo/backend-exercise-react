import { useRef, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import SingIN from './components/SignIn/SingIn';
import SendMessage from './components/SendMessage/SendMessage';
import GetMessages from './components/getMessages/getMessages';

export function App() {
  const [token, setToken]= useState("")
  const host = "https://web-develop-react-express-chat.herokuapp.com"
  const [loggedIn, setLoggegIn]= useState(false);
  const [signedIn, setSignedIn]= useState(false);
  const [signedTrue, setSignedTrue]= useState(false);
  const [buttonsLog, setButtonsLog]= useState(true)
  function loggedInHandler(){
    setLoggegIn(true);
    setSignedIn(false)
  }
  function SingInHandler(){
    setSignedIn(true);
    setLoggegIn(false)
  }
  function closeSeason(){
    setButtonsLog(true);
    setSignedTrue(false);
    setToken("");
  }
  return (
    <>
    { buttonsLog && <button type='submit' onClick={loggedInHandler}>Registrarse</button>}
    { buttonsLog && <button type='submit' onClick={SingInHandler}>Iniciar sesion</button>}
    { ! buttonsLog && <button type='submit' onClick={closeSeason}>Cerrar Sesion</button>}
    { loggedIn && <Login url={host}/>}
    { signedIn && <SingIN setButtonsLog={setButtonsLog} setSignedIn={setSignedIn} setSignedTrue={setSignedTrue} setToken={setToken} />} 
    { signedTrue && <GetMessages setButtonsLog={setButtonsLog} setSignedIn={setSignedIn} setSignedTrue={setSignedTrue} url={host} token={token} />} 
    { signedTrue && <SendMessage url={host} token={token} />} 
    </>

  );
}

export default App;
