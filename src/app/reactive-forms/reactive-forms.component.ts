import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  // public userName: string;
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],

  });

  constructor(private common: CommonService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {  }

  public onSubmit(){
    // console.log('submit form: formData = ' , this.formData.value);
    this.common.submitData(this.formData.value);

  }

}

// userName;
// formdata;
// ngOnInit() {
//    this.formdata = new FormGroup({
//       userName: new FormControl("Tutorialspoint")
//    });
// }
// onClickSubmit(data) {this.userName = data.userName;}
