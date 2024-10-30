import { Injectable } from '@angular/core';
//import data
import {userList} from "../Shared/mockDeveloper.data"
import { Observable, of } from "rxjs";
import {User} from "../Shared/Models/user";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
private developers: User[] = userList; //Local copy of users for CRUD Operations

  constructor() { }

  //Returns all developers
  getDevelopers(): Observable<User[]>{
    return of(userList);
  }

  //Adding basic CRUD methods and operations
  //Read
  getDeveloperById(developerID: number): Observable<User | undefined> {
    const developer = this.developers.find(user => user.id === developerID);
    return of(developer);
  }


  //Create: Add User
  addDeveloper(newDeveloper:User) : Observable<User[]>{
    this.developers.push(newDeveloper)
    return of(this.developers);
  }

  //Update an Existing user
  updateDeveloper(updatedDeveloper: User): Observable<User[]> {
    const index = this.developers.findIndex(user => user.id === updatedDeveloper.id);
    if (index !== -1) {
      this.developers[index] = updatedDeveloper;
    }
    return of(this.developers);
  }


  //Delete: Remove a user by ID
  deleteDeveloper(developerID: number): Observable<User[]> {
    this.developers = this.developers.filter(user => user.id !== developerID);
    return of(this.developers);
  }



}
