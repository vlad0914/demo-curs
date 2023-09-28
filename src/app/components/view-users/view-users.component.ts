import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User[] = []

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.aducereUtilizatori();
  }

  stergeUtilizator(user: any) {
    this.appService.deleteUser(user.id).subscribe(
      (res: any) => {
       // this.aducereUtilizatori();
       this.users = this.users.filter( el => el.id != user.id )
      }
    )
  }

  aducereUtilizatori() {
    this.appService.getUsers().subscribe(
      (res: any) => this.users = [...res]
    )
  }

}
