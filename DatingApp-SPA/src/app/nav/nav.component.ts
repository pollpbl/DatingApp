import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alerttify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alerttify.success('Logged in successfully');
    }, error => {
      this.alerttify.error('Failed to login');
    });
  }

    loggedIn() {
      const token = localStorage.getItem('token');
      return !!token;
    }

    logout() {
      localStorage.removeItem('token');
      this.alerttify.message('logged out');
    }

}
