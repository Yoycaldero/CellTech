import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {


  cards: {image:string} []=[

    {
      image: "../../../assets/imagen/banner3.jpg",

    }
  ]
}
