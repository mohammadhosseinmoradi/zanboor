import { createContext, useContext } from "react";

type InputGroupContextProps = boolean;

export const InputGroupContext = createContext<InputGroupContextProps>(false);

export function useInputGroupContext() {
  return useContext(InputGroupContext);
}
