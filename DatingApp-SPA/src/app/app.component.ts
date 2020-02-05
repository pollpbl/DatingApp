import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jwtHelper = new JwtHelperService();

  constructor(private authSeervice: AuthService) {

  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (token) {
      this.authSeervice.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authSeervice.currentUser = user;
      this.authSeervice.changeMemberPhoto(user.photoUrl);
    }
  }

}
