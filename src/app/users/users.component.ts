import { Component, OnInit } from '@angular/core';
import { EmailsignatureApiService } from '../emailsignature-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;
  constructor(private esignatureApiService: EmailsignatureApiService) { }

  ngOnInit() {
    this.esignatureApiService.listUsers().subscribe((data)=>{
      console.log(data);
      this.users = data;
    });
  }

}
