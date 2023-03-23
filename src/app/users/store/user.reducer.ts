import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { usersFetchAPISuccess } from "./user.action";

export const initialState :ReadonlyArray<User>=[];

export const userReducer = createReducer(
    initialState,
    on(usersFetchAPISuccess,(state,{allUsers}) =>{
        return allUsers;
    })
) 
