import { useEffect, useRef, useState } from 'react';
function SingIN(props){
    const [userInput, setUserInput] = useState("")
    const [passInput, setPassInput] = useState("")
    function changeUserHandler(ev) {
    setUserInput(ev.target.value)
    }
    function changePassHandler(ev) {
        setPassInput(ev.target.value)
    }
    function authToken(id, secret) {
        // En autenticación Basic, usuario y contraseña se separan con ':'
        const authToken = `${id}:${secret}`;
        // Y se codifican en Base64
        const base64token = btoa(authToken); 
        props.setToken(`Basic ${base64token}`)
        
    }
    function signUser() {
        authToken(userInput, passInput);
        props.setSignedTrue(true);
        props.setSignedIn(false);
        props.setButtonsLog(false);
       
    }
        return(
            <>
            <h2>Login</h2>
        <input type="text" placeholder='Nombre de usuario' onChange={changeUserHandler} />
        <input type="password" placeholder='Contraseña' onChange={changePassHandler} />
        <button onClick={signUser} >Login</button>
            </>
    )
}
export default SingIN