import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  public rating: number = 0 ;
  public cropWidth : number = 75;

  @Input('starRating')
  set starRating (val : number){
    this.rating = val;
  }

  @Output() onStarRatingClicked : EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges() : void {
    this.cropWidth = this.rating * 75/5;
  }

  onClick() : void{
    //console.log(`The rating clicked id ${this.rating}`);
    //this.onStarRatingClicked.emit(`The rating clicked id ${this.rating}`);
    this.onStarRatingClicked.emit(this.rating);
  }
}
