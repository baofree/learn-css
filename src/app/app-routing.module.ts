import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {W3CssDropdownsComponent} from './w3schools/dropdowns/w3-css-dropdowns.component';
import {BgBoxModelComponent} from './basic/box-model/bg-box-model.component';
import {BgGridComponent} from './basic/grid/bg-grid.component';
import {BgPositionComponent} from './basic/position/bg-position.component';
import {W3CssRoundedCornersComponent} from './w3schools/rounded-corners/w3-css-rounded-corners.component';
import {SmFloatObjectComponent} from './studio-meal/float-object/sm-float-object.component';
import {SmLayoutComponent} from './studio-meal/layout/sm-layout.component';
import {SmFlexComponent} from './studio-meal/flex/sm-flex.component';
import {GridComponent} from './studio-meal/grid/grid.component';
import {SmBasicSamdComponent} from './studio-meal/basic-samd/sm-basic-samd.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'w3schools',
    children: [
      {path: 'dropdowns', component: W3CssDropdownsComponent},
      {path: 'rounded-corners', component: W3CssRoundedCornersComponent}
    ]
  },
  {
    path: 'basics',
    children: [
      {path: 'box-model', component: BgBoxModelComponent},
      {path: 'grid', component: BgGridComponent},
      {path: 'position', component: BgPositionComponent}
    ]
  },
  {
    path: 'studio-meal',
    children: [
      {path: 'float-object', component: SmFloatObjectComponent},
      {path: 'layout', component: SmLayoutComponent},
      {path: 'flex', component: SmFlexComponent},
      {path: 'grid', component: GridComponent},
      {path: '3d1', component: SmBasicSamdComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
