import { Component, OnInit } from '@angular/core';
import {DrugapiService} from '../drugapi.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {

  DrugNames:any;
  constructor(public _DrugapiService:DrugapiService) {

    _DrugapiService.getDrugName().subscribe((data)=>{
        this.DrugNames=data;
        console.log(this.DrugNames);
    },
    (err)=>{console.log(err)});
  }

  ngOnInit(): void {
  }

  alphbet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
          'o','p','q','r','s','t','u','v','w','x','y','z'];

    arr=[];
    medcineName:any;
  compareChar(i){
    for(let name of this.DrugNames){
      this.medcineName=name.medicine_name;
      console.log(this.medcineName);
    }
    console.log("************************");
    if(this.medcineName.charAt(0)===i){
      this.arr.push(this.DrugNames);
      console.log("************************");
      console.log(this.arr);
      return this.arr;
    }
    else {
      return 'not Exist';
    }
  }

}
