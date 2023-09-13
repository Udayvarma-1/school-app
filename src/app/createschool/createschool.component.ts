import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createschool',
  templateUrl: './createschool.component.html',
  styleUrls: ['./createschool.component.css']
})
export class CreateschoolComponent {

  // FormGroup Method

  public allstudentsForm:FormGroup = new FormGroup({
    name:new FormControl(),
    id:new FormControl(),
    percentage:new FormControl(),
    class:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),

    // nested FormGroup Method
    address:new FormGroup({
      hno:new FormControl(),
      state:new FormControl(),
      pin:new FormControl(),
    }),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),

    // Formarray Mothed

    cards:new FormArray([])
  });

  get cardsFormArray(){
    return this.allstudentsForm.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormControl({
        no:new FormControl(),
        exp:new FormControl(),
        cvv:new FormControl()
      })
    )
  }
  deletecard(i:number){
    this.cardsFormArray.removeAt(i);
  }






  submit(){
    console.log(this.allstudentsForm)
  }

}
