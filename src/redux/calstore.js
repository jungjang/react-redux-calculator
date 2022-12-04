import { createStore } from "redux";
import { calreducer } from "./modules/calreducer";

export const calstore = createStore(calreducer);
