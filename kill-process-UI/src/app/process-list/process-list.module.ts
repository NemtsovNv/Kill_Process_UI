import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessItemComponent } from './process-item/process-item.component';
import { ProcessPageComponent } from './process-page/process-page.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        ProcessItemComponent,
        ProcessPageComponent
    ],
    exports: [
      ProcessPageComponent,
      ProcessItemComponent
    ]
  })
  export class ProcessListModule { }