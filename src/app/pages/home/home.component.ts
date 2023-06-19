import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/servive/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerResults : any=[];
  trendingMovieResults : any=[];


  constructor(private service:MovieAPIService){}

  bannerAPIData:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovies();
  }   


  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.bannerResults = result.results;
    });
  }

  // trendingmovies
  trendingMovies(){
    this.service.trendingMoviesApiData().subscribe((result)=>{
      console.log(result, 'trendingMovies');
      this.trendingMovieResults = result.results;
    });
  }

}
