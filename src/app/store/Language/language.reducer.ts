import { Action } from './../../../../node_modules/@ngrx/store/src/models.d';
import { createReducer, on } from "@ngrx/store";
import { languageAction } from "./language.action";
import { state } from "@angular/animations";



const initialState = "en"
export const languageReducer = createReducer(initialState,
  on(languageAction,(state,action)=> action.lang )
)
