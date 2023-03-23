import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { invokeUsersAPI, usersFetchAPISuccess } from "./user.action";
import { UserService } from "./user.service";

@Injectable()
export class UserEffects {
    constructor(private action$: Actions, private userService: UserService) { }

    loadAllUser$ = createEffect(() =>
        this.action$.pipe(
            ofType(invokeUsersAPI),
            switchMap(() => {
                return this.userService
                    .getUsers()
                    .pipe(map((data) => usersFetchAPISuccess({ allUsers: data })));
            })
        ))
}
