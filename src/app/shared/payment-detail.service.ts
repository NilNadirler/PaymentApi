import { PaymentDetail } from './../payment-detail.model';

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  apiUrl= environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  postPaymentDetail(paymentdetail:PaymentDetail):Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+"PaymentDetails",paymentdetail)
  }

  getPaymentDetail():Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+"PaymentDetails")
  }


}
