import React, { useState } from "react";
import useToastContext from "../hooks/useToastContext";

export default function Bar(){
    const addToast= useToastContext();
    const [text, setText] = useState ('');
    function handleTextChange(event){
        setText(event.target.value);
    }

    return (
    <div>
        <h2>Componente Bar</h2>
        <div>
            <input value={text} onChange={handleTextChange}></input>
            <button onClick={()=> addToast(text)}>Añadir Toast</button>
        </div>
        
    </div>
    )
}