import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: MsAdalAngular6Service[];

  constructor(private userSvc: MsAdalAngular6Service) { 
    this.user = [];
  }

  userLogout() {
    this.userSvc.logout();
  }


  

 ngOnInit() {
    console.log("hey " + this.userSvc.LoggedInUserEmail);
    console.log("hey user info" + this.userSvc.userInfo.profile)
    console.log("hey user info" + this.userSvc.LoggedInUserName)






  }

}
