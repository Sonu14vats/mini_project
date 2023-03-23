import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserService } from 'src/app/users/store/user.service';
import { invokeUsersAPI } from '../../users/store/user.action';
import { selectUsers } from '../../users/store/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 userDetail:any ;
  constructor(private store:Store,public userService:UserService) {
    this.store.dispatch(invokeUsersAPI());
   }
   users$: any = this.store.pipe(select(selectUsers));
  ngOnInit(): void { 
    // this.userService.userValue = localStorage.getItem('userDetail')
  }
 
}
