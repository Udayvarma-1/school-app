import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllstudentsService } from '../allstudents.service';

@Component({
  selector: 'app-createschool',
  templateUrl: './createschool.component.html',
  styleUrls: ['./createschool.component.css']
})
export class CreateschoolComponent {

  // FormGroup Method

  public allstudentsForm:FormGroup = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age:new FormControl("",[Validators.required,Validators.min(5),Validators.max(35)]),
    id:new FormControl(),
    // percentage:new FormControl(),
    class:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),

    // nested FormGroup Method
    address:new FormGroup({
      hno:new FormControl(),
      state:new FormControl("",[Validators.required]),
      pin:new FormControl(),
    }),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),

    // Formarray Mothed

    cards:new FormArray([]),
    marks:new FormArray([]),
  });

  get cardsFormArray(){
    return this.allstudentsForm.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormControl({
        no:new FormControl(),
        exp:new FormControl(),
        cvv:new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
      })
    )
  }
  deletecard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  // formArray method

  get marksFormArray(){
    return this.allstudentsForm.get('marks') as FormArray;
  }
  addstudentmarks(){
    this.marksFormArray.push(
      new FormControl({
        marks:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(),

      })
    )
  }
  deletemarks(i:number){
    this.marksFormArray.removeAt(i);
  }


 
  

 




  // constructor

  constructor(private allstudentsServices:AllstudentsService){}

  submit(){
    console.log(this.allstudentsForm);
    this.allstudentsServices.createstudent(this.allstudentsForm.value).subscribe(
      (data:any)=>{
        alert("user created successfully")
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )

    
  }

}
