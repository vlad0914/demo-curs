import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users = [
    {id: '1', nume: 'Vlad', prenume: 'Popovici', varsta: 29}
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

  stergeUtilizator(userId: number| string) {
    console.log(userId)
  }

}
