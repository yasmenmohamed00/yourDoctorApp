import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugapiService {

  constructor(public _HttpClient:HttpClient) { }

  getDrugName():Observable<any>{
    
    return this._HttpClient.get('https://datadiscovery.nlm.nih.gov/resource/crzr-uvwg.json');
  }
}
