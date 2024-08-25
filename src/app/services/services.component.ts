import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';

interface Service {
  serviceIcon: string;
  serviceName: string;
  serviceContent: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {


  services: Service[] = [


    { serviceIcon: "bi bi-tablet", serviceName: "Web & Mobile Pentesting", serviceContent: "Protect your apps from threats like SQL injection and unauthorized access." },
    { serviceIcon: "bi bi-graph-down", serviceName: "OSINT", serviceContent: "Discover risks from publicly available information." },
    { serviceIcon: "bi bi-wifi", serviceName: "Infrastructure & Network Security", serviceContent: "Secure your IT environment, from servers to wireless networks" },
    { serviceIcon: "bi bi-shield-lock", serviceName: "Credentials Hunting", serviceContent: "Prevent unauthorized access by uncovering exposed credentials" }
  ]
}
