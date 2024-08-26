import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-projects',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  ngOnInit() {

  }
  constructor(@Inject(DOCUMENT) private document: Document) {


    register();
    const swiperEl = document.querySelector('swiper-container');
    const params = {
      modules: [Navigation],
      injectStyles: [
        `
        .swiper-button-next svg path , .swiper-button-prev svg path{
            fill : rgb(240,240,240) ;
        }
        `,
      ],
    };

    if (swiperEl == undefined || swiperEl == null) {
      console.log(swiperEl);

    } else {
      Object.assign(swiperEl, params);
      swiperEl.initialize();


    }



  }

}
