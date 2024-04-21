import { createContext } from "react";

export const defaultAuthValue = [null, () => {}];
export const PushContext = createContext(defaultAuthValue);
