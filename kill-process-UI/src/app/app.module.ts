import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProcessListModule } from './process-list/process-list.module';
import { ProcessService } from './services/process.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProcessListModule,
    HttpClientModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
