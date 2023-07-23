import { Component, OnInit } from '@angular/core';
import { IMDB } from 'src/app/models/imdb.models';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  
  moviesDetail:IMDB={}
  constructor(private http:HttpServiceService,
             private loadingService: LoaderService) { }

  ngOnInit(): void {
    this.loadingService.loading=true;
     this.http.getIMDBMovies().subscribe(
      (res:IMDB)=>{
        this.moviesDetail=res;
        this.loadingService.loading=false
      }
     );
  }

}
