import { createContext, FC, ReactNode, useReducer } from "react";
import { Action, AppContextProps, ContextProps, State } from "../lib/Types";
import { initState } from "../lib/constants";

export const Context = createContext<ContextProps>({state: initState, dispatch: () => {}})

const reducer = (state: State, action:Action):State => {
    const {type, payload} = action;
    switch(type){
        case 'COLOR_MODE':
            return {...state, colorMode: payload};
        case 'TRANSITION':
            return {...state, transition: payload};
        default:
            return state;
    }
};

const AppContext:FC<AppContextProps<ReactNode>> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
    <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
  )
}

export default AppContext;