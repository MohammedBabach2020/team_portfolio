import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {



    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.currentRouteIndex = this.getIndexOfCurrentRoute(router, val.url.replace("/", ""))
        this.nextPage = router.config[this.currentRouteIndex + 1] != undefined ? router.config[this.currentRouteIndex + 1].path : router.config[this.currentRouteIndex].path;
        this.previousPage = this.currentRouteIndex > 0 ? router.config[this.currentRouteIndex - 1].path : router.config[0].path;

      }
    });
  }

  currentRouteIndex: number = 0;
  nextPage: string | undefined = ""; previousPage: string | undefined = "";
  title = 'team-portfolio';

  getIndexOfCurrentRoute(router: Router, currentRoute: string): number {
    var routeIndex = 0;
    for (const route of router.config) {

      if (route.path == currentRoute) {
        break;
      }
      routeIndex++;
    }

    return routeIndex;
  }
}
