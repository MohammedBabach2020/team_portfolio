import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  schemas: [NO_ERRORS_SCHEMA],
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input() memeberImage!: string;
  @Input() memeberName!: string;
  @Input() memeberRole!: string;
  @Input() memeberOverView!: string;
  @Input() memeberSocials!: string[];

}
