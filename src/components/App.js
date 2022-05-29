
import React from "react";
import "../stylesheets/App.scss";
import Foo from "./Foo";
import { ToastContextProvider } from "../contexts/ToastContext";

function App() {


  return (
    <ToastContextProvider>
      <Foo/>
    </ToastContextProvider>
  );
}

export default App;
