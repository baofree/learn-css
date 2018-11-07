import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {W3CssDropdownsComponent} from './w3schools/dropdowns/w3-css-dropdowns.component';

const routes: Routes = [
  {
    path: 'w3schools',
    children: [
      {path: 'dropdowns', component: W3CssDropdownsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
