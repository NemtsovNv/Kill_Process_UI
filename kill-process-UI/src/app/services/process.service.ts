import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConsts } from '../app.consts';
import { ProcessInfo } from '../model/interfaces/process.model';

@Injectable()
export class ProcessService {

  constructor(private readonly http: HttpClient) { }

  public getProcessesList() {
    return this.http.get<ProcessInfo[]>(AppConsts.BASE_API_ENDPOINT + AppConsts.GET_PROCESS);
  }

  public stopProcess(id: number) {
    return this.http.post<boolean>(AppConsts.BASE_API_ENDPOINT + AppConsts.GET_PROCESS, id);
  }
}
