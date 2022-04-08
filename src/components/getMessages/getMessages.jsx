import { useEffect, useState } from 'react';

function GetMessages(props){
    const [messages, setMessages] = useState("");
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
        if(!response.ok){
            alert("Usuario o contraseña incorrecta")
            props.setSignedTrue(false);
            props.setSignedIn(true);
            props.setButtonsLog(true);
            
        }
        fetch(props.url+"/users/")
            .then((response)=> response.json())
            .then((datausers)=> {
                setMessages(data.map(
                    (item, idx)=>{
                        const user = datausers.find( items=> items.id === item.source)
                        return (
                        <li key={idx}> Usuario:{user.name} Mensaje: {item.content}</li>)
                    }))
                
            });

        
        
        
    }
    function updateMessages(){  
     authGet(props.url +"/messages/",props.token)
     
    }
    useEffect(
        ()=>{setTimeout(updateMessages, 1000)},
    )

    return(
        <>
        <ul>{messages}</ul>
        </>
    )
}
export default GetMessages  