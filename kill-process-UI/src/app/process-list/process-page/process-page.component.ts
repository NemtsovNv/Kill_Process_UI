import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { ProcessInfo } from '../../model/interfaces/process.model';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.scss']
})
export class ProcessPageComponent implements OnInit {
  public processes: ProcessInfo[]

  constructor(
    private readonly processService: ProcessService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
    ) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.processService.getProcessesList().subscribe(
      data => {
        this.processes = data;
      },
      error => this.handleError(error)
    );
  }

  public stopProcess(id: number) {
    this.processService.stopProcess(id).subscribe(
      data => {
        let index = this.processes.findIndex(x => x.id == id);

        if(index > -1) {
          this.toastr.success(`Process ${this.processes[index].name} was successfully terminated.`);
          this.processes.splice(index, 1);
        } else {
          this.toastr.error(`Element with index ${index} is missing in list. Please, update page and try again later.`);
        }
      },
      error => this.handleError(error)
    );
  }

  private handleError(error) {
    if(error.status === 500) {
      this.toastr.error(error.error);
    } else {
      console.log(error);
      this.toastr.error("Something went wrong. Please, contact your administrator");
    }
  }
}
