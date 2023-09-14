import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllstudentsService {
  constructor(private httpClient: HttpClient) { }
  getallstudents():Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students")
  }

  // filter Method
  getFilteredallstudents(search:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter="+search);
  }

  // sort Mrthod

  getSortedallstudents(column:any,order:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy="+column+"&order="+order);
  }

  // delete method

  deletestudent(id:any):Observable<any>{
    return this.httpClient.delete("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id)
  }

  // pagination method

  pagedstudent(limit:any,page:any):Observable<any>{
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?limit="+limit+"&page="+page)

  }

  // Poststudents Method

  createstudent(data:any):Observable<any>{ 
    return this.httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data)
  }
  



 



}
