import { Dispatch } from "react";
export type Visibility = 'shown' | 'hidden';
type Transition = 'NAVIGATION' | 'HOME' | 'LOADING' | '';
type ColorMode = 'light' | 'dark';

export interface State{
    colorMode: ColorMode,
    transition: {transitionType: Transition, visibility: Visibility},
};

export type Action = 
|   {type: 'COLOR_MODE', payload: ColorMode}   
|   {type: 'TRANSITION', payload: {transitionType: Transition, visibility: Visibility}}

export interface AppContextProps<T>{
    children: T;
};

export interface ContextProps{
    state: State;
    dispatch: Dispatch<Action>;
};