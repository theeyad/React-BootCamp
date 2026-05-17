import { createContext } from "react";

export const imageContext = createContext({ imgSize: 0 });

export const placeContext = createContext({
  id: 0,
  name: "",
  description: "",
  imageId: "",
});
