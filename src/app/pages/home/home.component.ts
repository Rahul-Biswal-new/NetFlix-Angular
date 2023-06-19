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
  actionMovieResults : any=[];
  adventureMovieResults : any=[];
  animationMovieResults : any=[];
  comedyMovieResults : any=[];
  documentryMovieResults : any=[];
  scienceFrictionMovieResults : any=[];
  thrillerMovieResults: any=[];




  constructor(private service:MovieAPIService){}

  bannerAPIData:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovies();
    this.actionMovies();
    this.animationMovies();
    this.comedyMovies();
    this.documentaryMovies();
    this.scienceFrictionMovies();
    this.thrillersMovies();
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


  // action movies
  actionMovies(){
    this.service.fetchActionMovies().subscribe((result)=>{
      // console.log(result, 'actionMovies');
      this.actionMovieResults = result.results;
    });
  }


  // action movies
  animationMovies(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResults = result.results;
    });
  }

  // comedy movies
  comedyMovies(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResults = result.results;
    });
  }

  // documentary movies
  documentaryMovies(){
    this.service.fetchDocumentryMovies().subscribe((result)=>{
      this.documentryMovieResults = result.results;
    });
  }



  // science=friction movies
  scienceFrictionMovies(){
    this.service.fetchScienceFrictionMovies().subscribe((result)=>{
      this.scienceFrictionMovieResults = result.results;
    });
  }


   // thrillers movies
   thrillersMovies(){
    this.service.fetchThrillersMovies().subscribe((result)=>{
      this.thrillerMovieResults = result.results;
    });
  }
  


  // adventure movies
  adventureMovies(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieResults = result.results;
    });
  }

}
