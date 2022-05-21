import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderFourComponent } from './header-four/header-four.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { OnepageNavbarComponent } from './onepage-navbar/onepage-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderOneComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    PreloaderComponent,
    FooterComponent,
    OnepageNavbarComponent,
],
imports: [
    CommonModule,
    RouterModule
],
exports: [
  HeaderOneComponent,
  HeaderTwoComponent,
  HeaderThreeComponent,
  HeaderFourComponent,
  PreloaderComponent,
  FooterComponent,
  OnepageNavbarComponent,
],
})
export class LayoutsModule { }
