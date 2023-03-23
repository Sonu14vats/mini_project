import { createFeatureSelector } from "@ngrx/store";
import { User } from "./user";

export const selectUsers = createFeatureSelector<User>("userlist")
