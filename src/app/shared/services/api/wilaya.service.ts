import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IWilaya } from '../../models/api/iwilaya.model';
 
import { DataHttpService } from './base/data-http.service';

@Injectable({
  providedIn: 'root'
})
export class WilayaService extends DataHttpService<IWilaya, string> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.apiBaseServer.Products}${environment.product.TableWilaya}`);
  }
}