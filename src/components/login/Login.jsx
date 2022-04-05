import { useState } from 'react';
function Login(props) {
    const [userInput, setUserInput] = useState("")
    const [passInput, setPassInput] = useState("")
    
    function changeUserHandler(ev){
        setUserInput(ev.target.value)
    }
    function changePassHandler(ev){
        setPassInput(ev.target.value)
    }
    function registerUser(){
        let data = JSON.stringify({userName: userInput, password: passInput});
        console.log(data)
        postUser(props.url +"/login/", data);
    }
    async function postUser(url, data){
        const response = await fetch(
            url,
            {
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
    
        const responseData = await response.json();
        console.log(responseData)
    }
    return (
        <>
        <h2>Registrarse</h2>
        <input type="text" placeholder='Nombre de usuario' onChange={changeUserHandler} />
        <input type="password" placeholder='Contraseña' onChange={changePassHandler} />
        <button onClick={registerUser}>Registrarse</button>
        </>

    );
}
export default Login