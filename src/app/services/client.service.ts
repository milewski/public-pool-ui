import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getClientInfo(address: string) {
    return this.httpClient.get(`${process.env.NG_APP_API_URL}/api/client/${address}`);
  }
  public getClientInfoChart(address: string) {
    return this.httpClient.get(`${process.env.NG_APP_API_URL}/api/client/${address}/chart`) as Observable<any[]>;
  }
}
