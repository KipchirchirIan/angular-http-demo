import {
  Injectable
} from '@angular/core';
import {
  Observable,
  throwError
} from 'rxjs';
import {
  catchError,
  retry
} from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailsignatureApiService {

  private readonly REST_API_SERVER = "http://localhost:8080/v1";
  private readonly HEROKU_API_SERVER = "http://emailsignaturegen.herokuapp.com/v1";
  token;
  constructor(private httpClient: HttpClient) {}

  /**
   * getAuthToken
   * 
   * This endpoint retrieves a token passed to the authorization header.
   * You'll need it for endpoints that are protected. This token lasts 
   * 4 hours. You can store the token somewhere and auto-generate it if it
   * expires.
   */
  public getAuthToken() {
    // use admin credentials shared with you in the channel
    // NOTE: DO NOT include this part during commits. Store 
    // the values in an untracked file then reference them here.
    var credentials = {
      "username": "admin@mail.com",
      "password": "1234"
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    this.token = this.httpClient.post(`${this.REST_API_SERVER}/tokens`, credentials, httpOptions)
      .subscribe((data) => {
        // console.log(data['access_token']);
        this.token = data['access_token'];
      });

    return this.token;

  }

  /**
   * listUsers
   * 
   * This endpoint lists all users in the system.
   */
  public listUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // If the endpoint does not need authorization, remove the next line
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZiYjE5YTRlLTQyMTEtNGViMi05Yzk0LWVjYzhiOGFjNzFiMCJ9.eyJpc3MiOiJ3d3cuY21zaG9zdGluZy54eXoiLCJqdGkiOiI2YmIxOWE0ZS00MjExLTRlYjItOWM5NC1lY2M4YjhhYzcxYjAiLCJpYXQiOjE2MDE3NDcyMzQsIm5iZiI6MTYwMTc0NzIzNCwiZXhwIjoxNjAxNzYxNjM0LCJ1aWQiOiJ0ZXN0QGNtc2hvc3RpbmcueHl6In0.Vy6Q8KpPllUkapV8FeFVCsUuwdAfrc5mQqEFAIMMW1shvSNq_INuPEVEKVcbm3Mh3QNoPFaQPVdWTLuo4ZKdHqKi5X3kXq3p2wugmicLMtRKrypYttp8UblEY6plHgSkocr0fgZVGcC8xN2cT6jTBPkpSPt4tqyaf1wQUoZG9otG9rUSAU6ozfdpWo7XbDZn5neE1BgCRA15sznNx_u6m-DgbWxkJxSXIYyW8XueikvMYTTsr6zVLQCGcjMbrhqNkA0V_stsxXOg8nDeEY7MnxHStFN9yFfROkbAm1hW7u3BKRGdLaYtkW8emY3dWEAbf4nfr-CLDN1N1LmBMf6taA`,
        // 'Authorization' : `Bearer ${this.token}`
      }),
    };

    return this.httpClient.get(`${this.REST_API_SERVER}/users`, httpOptions);
  }

  /**
   * getUser
   */
  public getUser(userId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.httpClient.get(`${this.REST_API_SERVER}/users/${userId}`, httpOptions);
  }

}
