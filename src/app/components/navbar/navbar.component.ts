import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoryList:String[]=[];
  selectedCategory:String="Category";

  constructor() {
   }


  ngOnInit(): void {
    this.categoryList.push("IMDb");
    this.categoryList.push("Show & Series");
    this.categoryList.push("Netflix");
  }

  categoryClick(category:String):void{
    this.selectedCategory=category;
  }

}
