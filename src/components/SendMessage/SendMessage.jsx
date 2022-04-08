import { useState } from 'react';
function SendMessage(props){
    const [textInput, setTextInput] = useState("")
    function changeTextHandler(ev) {
        setTextInput(ev.target.value)
        }
    
    function sendText(){
        let data = JSON.stringify({content: textInput});
        postText(props.url +"/message/", data, props.token);
        setTextInput("")
        
    }
    async function postText(url, data, token){
        await fetch(
            url,
            {
                method: 'POST',
                body: data,
                headers: 
                {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            }
        );
    }
    return(
        <>
        <textarea name="" id="" cols="30" rows="10" placeholder='Escribe aqui...' onChange={changeTextHandler} value={textInput}></textarea>
        <button onClick={sendText}>Enviar</button>
        </>
    )
}
export default SendMessage