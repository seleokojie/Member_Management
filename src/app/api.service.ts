import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from './userEntity';
import { UserData } from './userData';

//This service allows our website to connect to our nestjs REST api.  aka the backend
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_SERVER = 'http://localhost:3000'; //CHANGE ON RELEASE?"http://localhost:3000" or http://128.0.0.1:3000?

  constructor(private httpClient: HttpClient) {}

  dataSrc = [];

  public testConnection(): Observable<UserEntity> {
    return this.httpClient.get<UserEntity>(
      `${this.API_SERVER}/user-controller/GetMemberByID?id=3`
    );
  }

  public GetMemberByID(id: number): Observable<UserEntity> {
    return this.httpClient.get<UserEntity>(
      `${this.API_SERVER}/user-controller/GetMemberByID?mokjang_id=` + id
    );
  }

  public GetMokjangMembers(mokjang_id: number): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(
      `${this.API_SERVER}/user-controller/GetMokjangMembers?mokjang_id=` +
        mokjang_id
    );
  }

  public GetSarangbangMembers(
    mokjang_id: number,
    sarangbang_id: number
  ): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(
      `${this.API_SERVER}/user-controller/GetSarangbangMembers?mokjang_id=` +
        mokjang_id +
        '&sarangbang_id=' +
        sarangbang_id
    );
  }

  public CreateUser(user: UserEntity) {
    console.log('Trying to create a user: ' + user.first_name);
    var resultString: Observable<Object> = this.httpClient.post(
      `${this.API_SERVER}/user-controller/CreateUser`,
      user
    ); //notice its a post request and requires a "body"
    resultString.subscribe((result) => {
      console.log(result);
    });
    console.log(resultString);
  }

  // public readContacts(){
  //   return this.httpClient.get<UserData[]>(`${this.API_SERVER}/contacts`);
  // }

  // public createContact(user: UserData){
  //   return this.httpClient.post<UserData>(`${this.API_SERVER}/contacts/create`, user);
  // }

  // public updateContact(user: UserData){
  //   return this.httpClient.put<UserData>(`${this.API_SERVER}/contacts/${user.memberID}/update`, user);
  // }

  // public deleteContact(id: number){
  //   return this.httpClient.delete(`${this.API_SERVER}/contacts/${id}/delete`);
  // }
}
