import { PaymentDetail } from './../payment-detail.model';
import { Component, OnInit } from '@angular/core';

import { PaymentDetailService } from '../shared/payment-detail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {
  paymentDetail:PaymentDetail= new PaymentDetail();
  cardAddForm:FormGroup;
  constructor(private fromBuilder:FormBuilder, private service: PaymentDetailService) { }
  

  ngOnInit(): void {
     this.cardForm()
  }

  cardForm(){
    this.cardAddForm=this.fromBuilder.group({
      cardOwnerName:["",Validators.required],
      securityCode:["", Validators.compose([Validators.required,Validators.maxLength(3),Validators.minLength(3) ])],
      cardNumber:["", Validators.compose([Validators.required,Validators.maxLength(16),Validators.minLength(16) ])],
      expirationDate:["", Validators.compose([Validators.required,Validators.maxLength(5),Validators.minLength(5) ])],
    })

  }

  submit(){
    if(this.cardAddForm.valid){
      let paymentDetail:PaymentDetail=Object.assign({},this.cardAddForm.value)
      this.service.postPaymentDetail(paymentDetail).subscribe(data=>{
        alert("başarılı");
        this.cardAddForm.reset();
      },error=>{
        alert("başarısız");
      })
    }
  }

  
}
