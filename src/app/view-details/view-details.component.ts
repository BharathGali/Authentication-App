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
  emailid: any;

  constructor(private route: Router,private service: ApiServiceService) { }

  ngOnInit(): void {
  }
  
  viewDetails(event: { target: { files: (Blob | MediaSource)[]; }; }): void{
    
      // var image = document.getElementById('output');
      this.displayedImage = URL.createObjectURL(event.target.files[0]);
  }  

  viewDetailsPage(): void{
    var formData: any =new FormData();
    formData.append("email",this.emailid);
    this.service.getUserDetails(formData).subscribe(response =>{
      if(response == "OK"){
        console.log("success");
      }else{
        console.log("error");
      }
    });
  }
}

