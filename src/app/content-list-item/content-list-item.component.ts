import {Component, Input} from '@angular/core';
import {User} from "../sharedModels/user";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() ContentListItem !:  {id: number, joinDate: string, name: string, level:number, isOnline?:boolean, isFriend?: boolean};


  toggleFriendStatus(user: User): void {
    user.isFriend = !user.isFriend;
  }
}
