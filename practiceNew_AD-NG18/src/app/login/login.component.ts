import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder} from "@angular/forms";
import { Router } from "@angular/router";
 
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
 
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
 
    constructor(private formBuilder:FormBuilder, private router:Router){}
 
    ngOnInit(){
        this.loginForm = this.formBuilder.group ({
            loginid:["aayush"],
            password: []
        });
    }
    onSubmit(){
        console.log(this.loginForm.value);
        const loginid: string = this.loginForm.get("loginid").value;
        const password: string = this.loginForm.get("password").value;
        if(loginid==="aayush" && password==="hello"){
            console.log("Successfull");
            sessionStorage.setItem("loginid","yes");
            this.router.navigate(["/employees"]);
        }
        else{
            console.log("Unsuccessfull");
        }
    }
}
 