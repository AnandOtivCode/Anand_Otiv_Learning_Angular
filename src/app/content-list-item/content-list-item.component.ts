import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {DeveloperService} from "../Services/developer.service";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent implements OnInit{
   // @Input() ContentListItem!:  {id: number, joinDate: string, name: string, level:number, isOnline?:boolean, isFriend?: boolean};
  developer: User | undefined; //The student to display
  developerList: User[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index


  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private router: Router
  ) {}


  //rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.developerService.getDevelopers().subscribe(users => {
      this.developerList = users;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.developerList.findIndex(user => user.id === id);
          this.developer = this.developerList[this.currentIndex];
        }
      });
    });
  }



  toggleFriendStatus(user: User): void {
    user.isFriend = !user.isFriend;
  }
}
