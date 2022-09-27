import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  displayedImage: any;
  email: any;
  phone: any;
  password: any;
  fullName: any;

  constructor(private route: Router,private service: ApiServiceService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    this.viewDetailsPage();
  }
  
  viewDetails(event: { target: { files: (Blob | MediaSource)[]; }; }): void{
    
      // var image = document.getElementById('output');
      this.displayedImage = URL.createObjectURL(event.target.files[0]);
  }  

  viewDetailsPage(): void{
    var formData: any =new FormData();
    formData.append("email",this.email);
    this.service.getUserDetails(formData).subscribe(response =>{
      console.log(response);
      this.fullName = response.username;
      this.phone = response.phone;
      this.password = response.password;
      if(response == "OK"){
        console.log("success");
      }
      // else{
      //   console.log("error");
      //   this.route.navigate(['login']);
      // }
      console.log(response.name);
    }, _error => {
      this.route.navigate(['login']);
    });
  }

  signoutUser(): void {

  }

  updateUser(): void {

  }

  deleteUser(): void {
    var formData: any =new FormData();
    formData.append("email",this.email);
    this.service.deleteUser(formData).subscribe(response => {
      if(response == "OK"){
        this.route.navigate(['login']);
      }
    });
  }
}

