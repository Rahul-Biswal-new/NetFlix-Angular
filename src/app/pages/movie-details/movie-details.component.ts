import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAPIService } from 'src/app/servive/movie-api.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResult: any;
  getMovieVideoResults:any;
  getMovieCastResults:any;

  constructor(private service:MovieAPIService, private router:ActivatedRoute){}

  ngOnInit(): void {
    let getParamID = this.router.snapshot.paramMap.get('id');
    console.log(getParamID, "movieId#");
    this.getMovie(getParamID);
    this.getVideo(getParamID);
    this.getMovieCast(getParamID);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result, "movieDetails#");
      this.getMovieDetailResult = result;
    });
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result, "getMovieVideo#");
      result.results.forEach((element:any) => {
        if(element.type =='Clip'){
          this.getMovieVideoResults = element.key;
        } 
      })
    });
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result, "getMovieCast#");
      this.getMovieCastResults = result.cast;
    });
  }
}
