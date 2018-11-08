import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {W3CssDropdownsComponent} from './w3schools/dropdowns/w3-css-dropdowns.component';
import {BoxModelComponent} from './basic/box-model/box-model.component';
import {GridComponent} from './basic/grid/grid.component';

const routes: Routes = [
  {
    path: 'w3schools',
    children: [
      {path: 'dropdowns', component: W3CssDropdownsComponent}
    ]
  },
  {
    path: 'basics',
    children: [
      {path: 'box-model', component: BoxModelComponent},
      {path: 'grid', component: GridComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
