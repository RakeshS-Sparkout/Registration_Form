import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Registration_Form';

  reactiveForm: FormGroup;

  ngOnInit(): void {
    initFlowbite();

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirm: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      course: new FormControl(null, Validators.required),
      interest: new FormControl(null, Validators.required),
      upload: new FormControl(null)
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm.value);
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }

  profileUrl = ''

  onChangeFile(e: any){
    if(e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.profileUrl=event.target.result;
      }
    }
  }

  // passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirm');
  //   if (password && confirmPassword && password.value !== confirmPassword.value) {
  //     return { 'passwordsMismatch': true };
  //   }
  //   return null;
  // }
}
