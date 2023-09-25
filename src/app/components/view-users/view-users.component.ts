import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User[] = []

  constructor() {}

  ngOnInit(): void {
    
  }

  stergeUtilizator(user: any) {
    console.log(user)
  }

}
