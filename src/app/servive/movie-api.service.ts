import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  baseUrl = 'https://api.themoviedb.org/3';
  apikey = '2bf2ed47452a268a6fbdb779c0f0cc89';

  constructor(private http: HttpClient) {}

  //bannerapidata
  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/all/week?api_key=${this.apikey}`
    );
  }

  // trending movies
  trendingMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`
    );
  }
}
