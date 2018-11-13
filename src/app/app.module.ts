import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W3CssDropdownsComponent } from './w3schools/dropdowns/w3-css-dropdowns.component';
import { BgBoxModelComponent } from './basic/box-model/bg-box-model.component';
import { BgGridComponent } from './basic/grid/bg-grid.component';
import { BgPositionComponent } from './basic/position/bg-position.component';
import { W3CssRoundedCornersComponent } from './w3schools/rounded-corners/w3-css-rounded-corners.component';
import { SmFloatObjectComponent} from './studio-meal/float-object/sm-float-object.component';
import { SmLayoutComponent } from './studio-meal/layout/sm-layout.component';
import { SmFlexComponent } from './studio-meal/flex/sm-flex.component';
import {GridComponent} from './studio-meal/grid/grid.component';
import { HomeComponent } from './home/home.component';
import { SmBasicSamdComponent } from './studio-meal/basic-samd/sm-basic-samd.component';

@NgModule({
  declarations: [
    AppComponent,
    W3CssDropdownsComponent,
    BgBoxModelComponent,
    BgGridComponent,
    BgPositionComponent,
    W3CssRoundedCornersComponent,
    SmFloatObjectComponent,
    SmLayoutComponent,
    SmFlexComponent,
    GridComponent,
    HomeComponent,
    SmBasicSamdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
