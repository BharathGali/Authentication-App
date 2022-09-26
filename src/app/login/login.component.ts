import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  pass: any;
  constructor(private router: Router, private currentRoute: ActivatedRoute, private service: ApiServiceService) { }

  ngOnInit(): void {
  }

  goToSignUp(): void {
    console.log("here");
    this.router.navigate(['signup']);
  }

  loginUser(): void {
    var formData: any = new FormData();
    formData.append("pass", this.pass);
    formData.append("email", this.email);
    this.service.loginUser(formData).subscribe(response=>{
      if(response == "OK"){
        console.log("success")
      }else{
        console.log("error");
      }
      
    })
    
  }

}
