import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  paymentDetail:PaymentDetail[]=[]

  constructor( public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.service.getPaymentDetail().subscribe((response)=>{
               this.paymentDetail=response
    })
  }

}
