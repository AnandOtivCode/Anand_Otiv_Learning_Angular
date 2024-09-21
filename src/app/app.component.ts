import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./sharedModels/user";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Anand-Otiv-Learning-Angular';
  varName='AnandOtiv';
  varMessage='hello';

/*
export interface User {
  id: number,
  joinDate:string,
  name:string,
  level:number
  isAdmin?: boolean
}

 */
  user1 : User = {id: 1, joinDate: "2024-01-03", name: "Haug", level:47, isAdmin: false};
  user2 : User = {id: 2, joinDate: "2024-01-11", name: "Takakki", level:200, isAdmin: true};

  userList:User[] =     [this.user1,this.user2];


//Function that gets called from our onclick. Takes in an
  //arguement ofa variable called user, which is type User and returns void
  toggleAdminStatus(user: User): void {
    user.isAdmin = !user.isAdmin;
  }
}
