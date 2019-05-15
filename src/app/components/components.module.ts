import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule {
}
