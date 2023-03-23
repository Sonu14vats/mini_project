import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/store/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
  loggedIn:any;
  constructor(
    private authService: SocialAuthService,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;     
      this.loggedIn = (user != null);
      this.router.navigate(['/users']);
      localStorage.setItem('userDetail', JSON.stringify(this.user));
      this.userService.userValue = this.user;
    });
  }
}
