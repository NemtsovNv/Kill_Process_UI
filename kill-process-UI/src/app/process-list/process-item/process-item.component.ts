import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProcessInfo } from '../../model/interfaces/process.model';
import { ProcessService } from '../../services/process.service';

@Component({
  selector: 'process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.scss']
})
export class ProcessItemComponent {
  @Input() public process: ProcessInfo;
  @Input() public index: number;

  @Output() onStopProcess = new EventEmitter<number>();

  public stopProcess(): void {
    this.onStopProcess.emit(this.process.id);
  }
}
