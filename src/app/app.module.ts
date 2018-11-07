import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { W3CssDropdownsComponent } from './w3schools/dropdowns/w3-css-dropdowns.component';

@NgModule({
  declarations: [
    AppComponent,
    W3CssDropdownsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
