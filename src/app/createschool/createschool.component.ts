import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    })

  });
  submit(){
    console.log(this.allstudentsForm)
  }

}
