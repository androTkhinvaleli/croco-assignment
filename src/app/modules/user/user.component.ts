import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/users.interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getUsers();
  displayedColumns: string[] = ['name'];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
