import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {W3CssDropdownsComponent} from './w3schools/dropdowns/w3-css-dropdowns.component';
import {BoxModelComponent} from './basic/box-model/box-model.component';
import {GridComponent} from './basic/grid/grid.component';
import {PositionComponent} from './basic/position/position.component';
import {RoundedCornersComponent} from './w3schools/rounded-corners/rounded-corners.component';
import {FloatObjectComponent} from './studio-meal/float-object/float-object.component';

const routes: Routes = [
  {
    path: 'w3schools',
    children: [
      {path: 'dropdowns', component: W3CssDropdownsComponent},
      {path: 'rounded-corners', component: RoundedCornersComponent}
    ]
  },
  {
    path: 'basics',
    children: [
      {path: 'box-model', component: BoxModelComponent},
      {path: 'grid', component: GridComponent},
      {path: 'position', component: PositionComponent}
    ]
  },
  {
    path: 'studio-meal',
    children: [
      {path: 'float-object', component: FloatObjectComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
