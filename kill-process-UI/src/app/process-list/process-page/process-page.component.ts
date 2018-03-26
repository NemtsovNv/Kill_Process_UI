import { Component, ViewContainerRef } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { ProcessInfo } from '../../model/interfaces/process.model';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.scss']
})
export class ProcessPageComponent {
  public processes: ProcessInfo[]

  constructor(private readonly processService: ProcessService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    processService.getProcessesList().subscribe(
      (data) => {
        this.processes = data;
      },
      error => {
        if(error.status === 500) {
          this.toastr.error(error.error);
        } else {
          console.log(error);
          this.toastr.error("Something went wrong. Please, contact your administrator");
        }
    });
  }

  public stopProcess(id: number) {
    this.processService.stopProcess(id).subscribe(
      (data) => {
        for(let i = 0; i < this.processes.length; i++) {
          if(this.processes[i].id === id) {
            this.toastr.success(`Process ${this.processes[i].name} was successfully terminated.`);
            this.processes.splice(i, 1);
            break;
          }
        }
      },
      error => {
        if(error.status === 500) {
          this.toastr.error(error.error);
        } else {
          console.log(error);
          this.toastr.error("Something went wrong. Please, contact your administrator");
        }
    });
  }
}
