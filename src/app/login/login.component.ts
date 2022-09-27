import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  pass: any;
  loginFailed: boolean = false;

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private service: ApiServiceService,
    private socialAuthService: SocialAuthService) { }

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
    this.service.loginUser(formData).subscribe(response => {
      if (response == "ok") {
        console.log("success");
        localStorage.setItem("email",this.email);
        this.router.navigate(['details']);
        this.loginFailed = false;
      } else {
        console.log("error");
        this.loginFailed = true;
      }

    }, _error => {
      this.loginFailed = true;
    })

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
