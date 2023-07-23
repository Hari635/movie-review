import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,AfterViewChecked {

  @Input()
  movies:Result []=[];

  constructor() { }
  ngAfterViewChecked(): void {
    console.log(this.movies);
  }

  ngOnInit(): void {
    
  }

}
