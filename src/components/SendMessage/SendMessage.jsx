import { useRef, useState } from 'react';
function SendMessage(props){
    const [textInput, setTextInput] = useState("")
    function changeTextHandler(ev) {
        setTextInput(ev.target.value)
        }
    
    function sendText(){
        let data = JSON.stringify({content: textInput});
        console.log(data)
        postText(props.url +"/message/", data, props.token);
    }
    async function postText(url, data, token){
        const response = await fetch(
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
    
        const responseData = await response.json();
        console.log(responseData)
    }
    return(
        <>
        <textarea name="" id="" cols="30" rows="10"onChange={changeTextHandler}></textarea>
        <button onClick={sendText}>Enviar</button>
        </>
    )
}
export default SendMessage