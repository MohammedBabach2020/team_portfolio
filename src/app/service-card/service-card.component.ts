import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input() serviceName!: string;
  @Input() serviceIcon!: string;
  @Input() serviceContent!: string;
}
