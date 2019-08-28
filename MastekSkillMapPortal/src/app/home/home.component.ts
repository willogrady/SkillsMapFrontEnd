import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile:any;
  manager: any;

  constructor(private userSvc: MsAdalAngular6Service, private http: HttpClient, private empSvc: EmployeeService) {     

  }

  userLogout() {
    this.userSvc.logout();
  }
  

 ngOnInit() {
   this.empSvc.callGraphAPI().subscribe(
     res => { console.log(this.profile = res)}
   )

   //load manager details
   this.empSvc.getManagerDetails().subscribe(
     res => {console.log(this.manager = res)}
   )


  }

}
