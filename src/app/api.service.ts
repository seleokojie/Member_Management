import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError, Observable } from 'rxjs';
import { UserEntity } from './userEntity';

//This service allows our website to connect to our nestjs REST api.  aka the backend
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_SERVER = 'http://localhost:3000'; //CHANGE ON RELEASE?"http://localhost:3000" or http://128.0.0.1:3000?

  constructor(public httpClient: HttpClient) {}

  UserArrayBuffer = [];
  UserSingleBuffer: any;

  public testConnection(): Observable<UserEntity> {
    return this.httpClient.get<UserEntity>(
      `${this.API_SERVER}/user-controller/GetMemberByID?id=3`
    );
  }

  public UpdateMember(user : UserEntity){
    console.log("Attempting to update: " + user.first_name);
    var resultString = this.httpClient.patch<UserEntity>(
      `${this.API_SERVER}/user-controller/UpdateMember`, user
    );
    resultString.subscribe((result) => {
      if (result == null) {
        throw NotFoundError;
      } else {
        console.log(result);
      }
    });
    console.log(resultString);
  }

  public GetMembers(): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(
      `${this.API_SERVER}/user-controller/GetMembers`
    );
  }

  public GetMembersByName(name: string) : Observable<UserEntity[]> {
    return this.httpClient
      .get<UserEntity[]>(
        `${this.API_SERVER}/user-controller/GetMembersByName?name=${name}`
      )
  }

  public GetMemberByID(id: number) {
    return this.httpClient
      .get<UserEntity>(
        `${this.API_SERVER}/user-controller/GetMemberByID?mokjang_id=` + id
      )
  }

  public GetMokjangMembers(mokjang_id: number): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(
      `${this.API_SERVER}/user-controller/GetMokjangMembers?mokjang_id=` +
        mokjang_id
    );
  }

  public GetSarangbangMembers(mokjang_id: number, sarangbang_id: number) : Observable<UserEntity[]> {
    return this.httpClient
      .get<UserEntity[]>(
        `${this.API_SERVER}/user-controller/GetSarangbangMembers?mokjang_id=` +
          mokjang_id +
          '&sarangbang_id=' +
          sarangbang_id
      )
  }

  public CreateUser(user: UserEntity) {
    console.log(
      'Trying to create a user: ' + user.first_name + ' email: ' + user.email
    );
    var resultString: Observable<Object> = this.httpClient.post(
      `${this.API_SERVER}/user-controller/CreateUser`,
      user
    ); //notice its a post request and requires a "body"
    resultString.subscribe((result) => {
      if (result == null) {
        throw NotFoundError;
      } else {
        console.log(result);
      }
    });
    console.log(resultString);
  }
}
