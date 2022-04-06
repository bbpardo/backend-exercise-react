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
        if(response.status != "200"){
            props.setSignedTrue(false);
            props.setSignedIn(true);
            props.setButtonsLog(true);
            }
        const data = await response.json();
        setMessages(data.map(
            (item,idx)=><li key={idx}> Usuario:{item.source} Mensaje: {item.content}</li>
        ))
        return response;
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