import { createContext } from "react";

export const defaultAuthValue = [null, () => {}];
export const AuthContext = createContext(defaultAuthValue);
