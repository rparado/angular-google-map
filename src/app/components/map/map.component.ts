import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  
 constructor(httpClient: HttpClient) { 
    this.apiLoaded = httpClient.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyCgO2TOUAdYjcjiuwYZSJvjanIZas-bUrw", 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
  }

  ngOnInit(): void {
  }

}
