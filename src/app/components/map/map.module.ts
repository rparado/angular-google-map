import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule, MAP_COMPONENTS } from './map-routing.module';

import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ...MAP_COMPONENTS
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule
  ]
})
export class MapModule { }
