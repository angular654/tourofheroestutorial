import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { range } from 'rxjs';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input()
  value: number;
  @Output()
  valueChange = new EventEmitter<number>();
  @Input()
  max = 5 ;
  constructor() {
  }

  ngOnInit() {
  }

  setRating(rating: number) {
    this.value = rating;
    this.valueChange.emit(this.value);
  }
  getstars() {
    return new Array(this.max);
  }
}

