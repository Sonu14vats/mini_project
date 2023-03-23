import { createAction, props } from "@ngrx/store";
import { User } from "./user";

export const invokeUsersAPI = createAction(
    '[Users API] Invoke Books Fetch API'
  );
  
  export const usersFetchAPISuccess = createAction(
    '[Users API] Fetch API Success',
    props<{ allUsers: User[] }>()
  );