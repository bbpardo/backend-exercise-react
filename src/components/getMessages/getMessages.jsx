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
            props.setUpdateMessage(false)
            props.setButtonsLog(true);
            props.setToken("");
            props.setSignedTrue(false);
            props.setLoad(false)
        }
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }
        props.setLoad(false)
        fetch(props.url+"/users/")
            .then((response)=> response.json())
            .then((datausers)=> {
                setMessages(data.map(
                    (item, idx)=>{
                    const d = new Date(item.time);
                    let h = addZero(d.getHours());
                    let m = addZero(d.getMinutes());
                    let s = addZero(d.getSeconds());
                    let time = (h+1) + ":" + m + ":" + s;
                        const user = datausers.find( items=> items.id === item.source)
                        return (
                        <p key={idx}>{time} | {user.name} : {item.content}</p>)
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