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
import { SmBasicSamdTwoComponent } from './studio-meal/basic-samd-two/sm-basic-samd-two.component';
import { SeTranslucenceBorderComponent } from './secret/translucence-border/se-translucence-border.component';
import { SeMultipleBorderComponent } from './secret/se-multiple-border/se-multiple-border.component';
import { W3BoxShadowComponent } from './w3schools/w3-box-shadow/w3-box-shadow.component';
import { SeBackgroundOriginComponent } from './secret/se-background-origin/se-background-origin.component';
import { SeInnerRoundingComponent } from './secret/se-inner-rounding/se-inner-rounding.component';
import { SeHorizontalStripesComponent } from './secret/se-horizontal-stripes/se-horizontal-stripes.component';
import { SeVerticalStripesComponent } from './secret/se-vertical-stripes/se-vertical-stripes.component';
import { SeDiagonalStripesComponent } from './secret/se-diagonal-stripes/se-diagonal-stripes.component';
import { SeEllipseComponent } from './secret/se-ellipse/se-ellipse.component';
import { SeHalfEllipseComponent } from './secret/se-half-ellipse/se-half-ellipse.component';
import { SeParallelogramsComponent } from './secret/se-parallelograms/se-parallelograms.component';
import { SeNativeModalComponent } from './secret/se-native-modal/se-native-modal.component';
import { SeDimmingBoxShadowComponent } from './secret/se-dimming-box-shadow/se-dimming-box-shadow.component';
import { FbDemo1Component } from './flexbox/fb-demo1/fb-demo1.component';
import { FbDemo2Component } from './flexbox/fb-demo2/fb-demo2.component';
import { FbDemo3Component } from './flexbox/fb-demo3/fb-demo3.component';
import { FbDemo4Component } from './flexbox/fb-demo4/fb-demo4.component';
import { FbDemo5Component } from './flexbox/fb-demo5/fb-demo5.component';
import { NavbarComponent } from './bootstrap/navbar/navbar.component';
import { BtLandingComponent } from './bootstrap/bt-landing/bt-landing.component';
import { BtSidebarComponent } from './bootstrap/bt-sidebar/bt-sidebar.component';

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
    SmBasicSamdComponent,
    SmBasicSamdTwoComponent,
    SeTranslucenceBorderComponent,
    SeMultipleBorderComponent,
    W3BoxShadowComponent,
    SeBackgroundOriginComponent,
    SeInnerRoundingComponent,
    SeHorizontalStripesComponent,
    SeVerticalStripesComponent,
    SeDiagonalStripesComponent,
    SeEllipseComponent,
    SeHalfEllipseComponent,
    SeParallelogramsComponent,
    SeNativeModalComponent,
    SeDimmingBoxShadowComponent,
    FbDemo1Component,
    FbDemo2Component,
    FbDemo3Component,
    FbDemo4Component,
    FbDemo5Component,
    NavbarComponent,
    BtLandingComponent,
    BtSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
