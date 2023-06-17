import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/servive/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:any;
  results : any=[];
  title:any;
  arrayLength:any;
  constructor(private service:MovieAPIService){}


  ngOnInit(): void {
    this.bannerData();
  }   


  arrayData(){
    this.arrayLength = this.results.length;
  }
  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.movie = result;
      this.results = result.results;
      // this.title = result.results.title;
    });
  }

}
