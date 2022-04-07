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
        console.log(response)
        if(!response.ok){
            alert("Usuario o contraseña incorrecta")
            props.setSignedTrue(false);
            props.setSignedIn(true);
            props.setButtonsLog(true);
            }
        const data = await response.json();
        setMessages(data.map(
                (item, idx)=>{
                    /*fetch(props.url+"/users/")
                    .then((response)=> response.json());
                    .then((datausers)=> {
                        const nameusers = datausers.find( items=> items.name === item)
                        return nameusers
                    });*/
                    return <li key={idx}> Usuario:{item.id} Mensaje: {item.content}</li>
                }
            )
        )
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