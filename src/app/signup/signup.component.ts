import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uname: string = "";
  pass: string = "";
  email: string = "";
  constructor(private route: Router,private service: ApiServiceService) { }

  ngOnInit(): void {
    console.log("sign");
  }

  goToLogin(): void{
    this.route.navigate(['/login']);
  }

  signUpUser(): void{
      var formData: any = new FormData();
      formData.append("uname", this.uname);
      formData.append("pass", this.pass);
      formData.append("email", this.email);
      this.service.registerUser(formData).subscribe(response =>{
        if(response == "OK"){
          console.log("success");
          this.route.navigate(['/login']);
        }else{
          console.log("error");
        }
      });
  }

}
