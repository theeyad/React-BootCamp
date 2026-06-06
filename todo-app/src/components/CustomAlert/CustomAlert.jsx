import { useEffect } from "react";
import {  useAlert, useAlertValue } from "@/Contexts/AlertContext";
import "./CustomAlert.css";

export default function CustomAlert() {
  const { appear, setAppear } = useAlert();
  const { alertValue } = useAlertValue();

  useEffect(() => {
    if (appear) {
      // Set timer to hide after 3000ms
      const timer = setTimeout(() => {
        setAppear(false);
      }, 3000);

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, [appear, setAppear, alertValue]);

  return !appear ? null : (
    <div className="alert absolute bottom-0 left-0">{alertValue}</div>
  );
}
