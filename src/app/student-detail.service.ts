import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  constructor( private http:HttpClient) { }
  private url:string='./assets/assignment.json';

  displayInfo(){

    return this.http.get(this.url);

  }
}
