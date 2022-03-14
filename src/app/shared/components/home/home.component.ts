import {  Component,  OnInit, ViewChild } from '@angular/core';
 
 
import * as AOS from 'aos';
 
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = 'Angular with Swiper';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(  ) {}
 
  ngOnInit(): void {
    AOS.init({
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      duration: 1500,
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
 
  }
   
}