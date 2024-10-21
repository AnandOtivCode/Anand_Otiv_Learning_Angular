import {Component, OnInit} from '@angular/core';
import {User} from "../sharedModels/user";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {DeveloperService} from "../servies/developer.service";


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, NgForOf, NgIf],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'joinDate', 'name', 'level', 'isOnline', 'isFriend'];
  userList: User[] = [];


  constructor(private developerService: DeveloperService) {

  }

  // /*Create all the users*/
  // user1 : User = {id: 1, joinDate: "2024-01-24", name: "Haug", level:47, isOnline:true, isFriend: false};
  // user2 : User = {id: 2, joinDate: "2011-02-12", name: "Takakki", level:200, isOnline:false, isFriend: true};
  // user3 : User = {id: 3, joinDate: "2022-06-03", name: "Jeffery", level:47, isOnline:false,isFriend: false};
  // user4 : User = {id: 4, joinDate: "2004-02-14", name: "Kyle", level:1, isOnline:true, isFriend: true};
  // user5 : User = {id: 5, joinDate: "2023-08-17", name: "Bob", level:47, isOnline:true,isFriend: false};
  // user6 : User = {id: 6, joinDate: "2022-04-25", name: "Steve", level:234, isOnline:true, isFriend: true};
  //
  // //add all users to the userList Array
  // userList:User[] =     [this.user1,this.user2,this.user3,this.user4,this.user5,this.user6];

  ngOnInit() {
    this.developerService.getDevelopers().subscribe({
      next: (data: User[]) => this.userList = data,
      error: err => console.error("Error fetching Developers", err),
      complete: () => console.log("Developer data fetch complete!")
    })





  }
}
