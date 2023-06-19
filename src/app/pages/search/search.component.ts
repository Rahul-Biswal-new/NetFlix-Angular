import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup} from '@angular/forms';
import {MovieAPIService} from 'src/app/servive/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // inputname: any= "spiderman";
  
  constructor(private service: MovieAPIService) {}

ngOnInit(): void {
  }

  searchResults: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null),

  });


  submitForm(){
    console.log(this.searchForm.value, "searchForm#");
    this.service.searchMovies(this.searchForm.value).subscribe((result) =>{
      console.log(result, 'searchmovie#');
      this.searchResults = result.results;
    });
  }

}
