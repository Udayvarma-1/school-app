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

  public search:any = [];

  public column:any = [];
  public order:any = [];

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

  // filter Method

  getFilteredallstudents(){
    this.allstudentsService.getFilteredallstudents(this.search).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }

  // sort Method

  getSortedallstudents(){
    this.allstudentsService.getSortedallstudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }

  // delete Method
  deletestudent(id:any){
    this.allstudentsService.deletestudent(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }


  
  
  
 
}
