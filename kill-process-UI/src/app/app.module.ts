import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProcessListModule } from './process-list/process-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProcessListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
