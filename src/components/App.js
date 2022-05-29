
import React from "react";
import "../stylesheets/App.scss";
import Foo from "./Foo";
import Bar from "./Bar";
import { ToastContextProvider } from "../contexts/ToastContext";

function App() {


  return (
    <ToastContextProvider>
      <Foo/>
      <Bar/>
    </ToastContextProvider>
  );
}

export default App;
