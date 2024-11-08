import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      adminName: ['', [ Validators.required, Validators.minLength(4), Validators.maxLength(20) ]],
      email: ['',[ Validators.required, Validators.email, Validators.maxLength(20) ]],
      password: ['', [ Validators.required, ]],
    });
  }
 
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.log('Form Sumitted Successfully ', this.registerForm.value);
 
    this.router.navigate(['/login']);
   
  }
}