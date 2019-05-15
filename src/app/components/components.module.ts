import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule {
}
