import { Component } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';



interface Team {

  memeberImage: string;

  memeberName: string;

  memeberRole: string;

  memeberOverView: string;

  memeberSocials: string[];
}

@Component({
  selector: 'app-teamview',
  standalone: true,
  imports: [TeamCardComponent],
  templateUrl: './teamview.component.html',
  styleUrl: './teamview.component.css'
})
export class TeamviewComponent {


  teamMembers: Team[] = [

    { memeberImage: "assets/images/mohsine.jpg", memeberName: "Mohssin Kassih", memeberOverView: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt augue sed sapien ornare, sed commodo nulla efficitur. Nulla facilisi.", memeberRole: "Hacker", memeberSocials: ["1"] },
    { memeberImage: "assets/images/mehdi.jpg", memeberName: "Mehdi Chi9lwa", memeberOverView: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt augue sed sapien ornare, sed commodo nulla efficitur. Nulla facilisi.", memeberRole: "Hacker", memeberSocials: ["2"] },
    { memeberImage: "assets/images/khona.webp", memeberName: "Khona Talt", memeberOverView: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt augue sed sapien ornare, sed commodo nulla efficitur. Nulla facilisi.", memeberRole: "Tahouwa Hacker", memeberSocials: ["3"] },
  ]
}
