import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/2000/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }
}
