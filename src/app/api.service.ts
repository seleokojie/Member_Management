import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserData } from './userData';

//This service allows our website to connect to our nestjs REST api.  aka the backend
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_SERVER = "http://localhost:3000";//CHANGE ON RELEASE?

  constructor(private httpClient: HttpClient) {}

  public testConnection(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.API_SERVER}/user-controller/GetMemberByID?id=2`);
  }

  public readContacts(){
    return this.httpClient.get<UserData[]>(`${this.API_SERVER}/contacts`);
  }

  public createContact(user: UserData){
    return this.httpClient.post<UserData>(`${this.API_SERVER}/contacts/create`, user);
  }

  public updateContact(user: UserData){
    return this.httpClient.put<UserData>(`${this.API_SERVER}/contacts/${user.memberID}/update`, user);
  }

  public deleteContact(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/contacts/${id}/delete`);
  }


}
