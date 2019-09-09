import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MastekSkillMapPortal';
  user: MsAdalAngular6Service[];

  constructor(private adalSvc: MsAdalAngular6Service, private http: HttpClient) {
    //console.log(this.adalSvc.userInfo);
    var token = this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
   // console.log("Access token " + token);
  });
  
  }
 



  userLogout() {
    this.adalSvc.logout();
  }



}
