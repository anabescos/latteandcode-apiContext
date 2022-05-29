import React, { createContext, useState } from "react";

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({ children }) {
  const [toasts, setToast] = useState(["hola"]);
  return (
    <ToastContext.Provider value="hola mundo">
      <>
        {children}
        <div className="toast-wrapper">
          {toasts.map((toast) => (
            <div className="toast" key={toast}>
              {toast}
            </div>
          ))}
        </div>
      </>
    </ToastContext.Provider>
  );
}
