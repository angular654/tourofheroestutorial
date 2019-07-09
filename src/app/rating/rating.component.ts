import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor() {
  }

  ngOnInit() {
  }

  setRating(rating: number) {
    console.log(rating);
    this.hero.rating = rating;
  }
}
