import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarItem } from '../core/models/navbar/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: INavbarItem[] = [
    { path: ['authors'], caption: 'Authors', enabled: true, visible: true },
    { path: ['books'], caption: 'Books', enabled: true, visible: true },
    { path: ['categories'], caption: 'Categories', enabled: true, visible: true },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(item: INavbarItem): void {
    this.router.navigate(item.path);
  }
}
