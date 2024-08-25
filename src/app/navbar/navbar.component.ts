import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  toggle() {

    var hero = document.getElementById("p");

    console.log(hero?.innerText);

  }
}
