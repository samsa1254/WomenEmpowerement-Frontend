import { Component } from '@angular/core';
import {TokenStorageService} from "./Services/AuthANDUser/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  private authority: string;
  isLoggedIn = false;
  showAdminBoard = false;
  //showModeratorBoard = false;
  username: string;
  password: string ;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
  title = 'Test';
}
