import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { OverviewComponent } from './overview/overview.component';
import { TeamviewComponent } from './teamview/teamview.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [

  { path: '', component: HeroComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamviewComponent },
];
