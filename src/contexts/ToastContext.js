import React, { createContext, useCallback, useEffect, useState } from "react";

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({ children }) {
  const [toasts, setToast] = useState(["hola"]);
  useEffect(
    function () {
      if (toasts.length > 0) {
        const timer = setTimeout(function () {
          setToast((toasts) => toasts.slice(1));
        }, 3000);
        return () => clearTimeout(timer);
      }
    },
    [toasts.length, setToast]
  );
  const addToast = useCallback(
    function (text) {
      setToast((toasts) => [...toasts, text]);
    },
    [setToast]
  );
  return (
    <ToastContext.Provider value={addToast}>
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
