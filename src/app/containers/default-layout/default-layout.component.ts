import {Component, OnInit} from '@angular/core';
import {navItems} from '../../_nav';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/service/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  email: string;
  isLoggedIn: boolean;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.email = this.authService.getEmail();

  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }


}
