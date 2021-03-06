import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IShopingBasket } from '../../models/api/Basket.model';
 
import { BaseHttpService } from './base/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService extends BaseHttpService<IShopingBasket, string> {


  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.apiBaseServer.Products}${environment.product.Tablebasket}`);
  }
}
