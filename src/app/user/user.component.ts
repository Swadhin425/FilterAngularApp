import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usersData: any ;
  filteredText:any =""
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(users => {
      this.usersData = users.data;
      console.log(this.usersData);
    })
  }

}
