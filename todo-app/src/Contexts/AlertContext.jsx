import { createContext } from "react";

export const AlertContext = createContext({ appear: false, setAppear: () => {} });
