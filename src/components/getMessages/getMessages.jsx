import { useState } from 'react';
import {token} from './../../App'

function GetMessages(props){
    const [messages, setMessages] = useState("")
    async function authGet(url, token) {
        const response = await fetch(
            url,
            { 
                headers: {
                    Authorization: token
                }
            }
        );
        const data = await response.json();
        console.log(data)
        setMessages(JSON.stringify(data))
        return data;
    }
    function updateMessages(url,token){
        console.log(props.token)
        authGet(url +"/messages/",token)
    
    }

    return(
        <>
        <button onClick={()=>{updateMessages(props.url, props.token)}}>Refrescar mensajes</button>
        <p>{messages}</p>
        </>
    )
}
export default GetMessages  