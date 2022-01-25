import { createContext } from "react";
import state from "./state";

const Context = createContext(state);

export default Context;