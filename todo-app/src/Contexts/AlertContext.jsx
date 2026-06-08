import CustomAlert from "@/components/CustomAlert/CustomAlert";
import { createContext, useContext, useState, useMemo } from "react";

const AlertContext = createContext({
  appear: false,
  setAppear: () => {},
});

const AlertValueContext = createContext({
  alertValue: "",
  setAlertValue: () => {},
});

export const AlertProvider = ({ children }) => {
  const [appear, setAppear] = useState(false);
  const [alertValue, setAlertValue] = useState("");

  const appearContextValue = useMemo(() => ({ appear, setAppear }), [appear]);
  const alertValueContextValue = useMemo(
    () => ({ alertValue, setAlertValue }),
    [alertValue],
  );

  return (
    <AlertContext.Provider value={appearContextValue}>
      <AlertValueContext.Provider value={alertValueContextValue}>
        {children}
        {appear ? <CustomAlert /> : null}
      </AlertValueContext.Provider>
    </AlertContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAlert = () => useContext(AlertContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useAlertValue = () => useContext(AlertValueContext);
