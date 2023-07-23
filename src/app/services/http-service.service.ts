import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import Api from '../models/urls.model';
import {HttpParams} from "@angular/common/http";

import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMDB } from '../models/imdb.models';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
   private IMDB:Api={
    url:'https://moviesdatabase.p.rapidapi.com',
    headers:{
      'X-RapidAPI-Key': '1db1713fa2msh3146a110883041ap10dbc3jsn118f66e21ea9',
		  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
   };
  private headers=new HttpHeaders(this.IMDB.headers);
  private params=new HttpParams()
  .set( 'year',2000)
  .set('limit',12)
  


  constructor(private http: HttpClient) {}

  getIMDBMovies(){

    return  this.http.get(this.IMDB.url+'/titles',{headers:this.headers,params:this.params})
           .pipe(map((data:any)=>{
            var res:Result[]=[];
            data?.results.forEach((element:any) => {
              let temp:Result={};
              temp.id=element?.id;
              temp.originalTitleText=element?.originalTitleText;
              temp.primaryImage=element?.primaryImage;
              temp.releaseDate=element?.releaseDate;
              temp.releaseYear=element?.releaseYear;
              temp.titleText=element?.titleText;
              temp.titleType=element?.titleType;
              res.push(temp);
            });
            const movies:IMDB={};
            movies.entries=data?.entries;
            movies.next=data?.next;
            movies.page=data?.page;
            movies.result=res;
            return movies;
           }))
  }
}
