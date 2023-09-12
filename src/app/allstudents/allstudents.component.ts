import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public students:any = [];

  constructor(private allstudentsService:AllstudentsService){
    allstudentsService.getallstudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }
  
  
  
 
}
