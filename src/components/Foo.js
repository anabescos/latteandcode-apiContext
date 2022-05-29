import React from "react";
import useToastContext from "../hooks/useToastContext";

export default function Foo(){
    const value= useToastContext();
    return (
    <div>
        <h2>Componente Foo</h2>
        <p>Valor del contexto {value}</p>
    </div>
    )
}