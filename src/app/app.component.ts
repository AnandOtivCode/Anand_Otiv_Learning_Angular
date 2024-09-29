import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {User} from "./sharedModels/user";
import {ContentListComponent} from "./content-list/content-list.component";



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, CommonModule,ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Anand-Otiv-Learning-Angular';
  testvar = "testing"


/*
export interface User {
  id: number,
  joinDate:string,
  name:string,
  level:number
  isAdmin?: boolean
}

 */

  /*Create all the users*/
  user1 : User = {id: 1, joinDate: "2024-01-24", name: "Haug", level:47, isOnline:true, isFriend: false};
  user2 : User = {id: 2, joinDate: "2011-02-12", name: "Takakki", level:200, isOnline:false, isFriend: true};
  user3 : User = {id: 3, joinDate: "2022-06-03", name: "Jeffery", level:47, isOnline:false,isFriend: false};
  user4 : User = {id: 4, joinDate: "2004-02-14", name: "Kyle", level:1, isOnline:true, isFriend: true};
  user5 : User = {id: 5, joinDate: "2023-08-17", name: "Bob", level:47, isOnline:true,isFriend: false};
  user6 : User = {id: 6, joinDate: "2022-04-25", name: "Steve", level:234, isOnline:true, isFriend: true};

  //add all users to the userList Array
  userList:User[] =     [this.user1,this.user2,this.user3,this.user4,this.user5,this.user6];


//Function that gets called from our onclick. Takes in an
  //argument of a variable called user, which is type User and returns void
  toggleFriendStatus(user: User): void {
    user.isFriend = !user.isFriend;
  }
}
