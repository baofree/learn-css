import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W3CssDropdownsComponent } from './w3schools/dropdowns/w3-css-dropdowns.component';
import { BoxModelComponent } from './basic/box-model/box-model.component';
import { GridComponent } from './basic/grid/grid.component';
import { PositionComponent } from './basic/position/position.component';
import { RoundedCornersComponent } from './w3schools/rounded-corners/rounded-corners.component';
import { FloatObjectComponent} from './studio-meal/float-object/float-object.component';
import { LayoutComponent } from './studio-meal/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    W3CssDropdownsComponent,
    BoxModelComponent,
    GridComponent,
    PositionComponent,
    RoundedCornersComponent,
    FloatObjectComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
