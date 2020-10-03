import { Component, OnInit } from '@angular/core';
import { EmailsignatureApiService } from '../emailsignature-api.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  token;

  constructor(private eSignatureApiService: EmailsignatureApiService) { }

  ngOnInit() {
    // this.eSignatureApiService.getAuthToken().subscribe((data)=>{
    //   console.log(data['access_token']);
    //   this.token = data['access_token'];
    // });
  }

}
