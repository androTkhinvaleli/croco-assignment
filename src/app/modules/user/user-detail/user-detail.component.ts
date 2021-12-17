import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { User } from 'src/app/core/interfaces/users.interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor(
    private httpClient: UserService,
    private route: ActivatedRoute,
  ) { }

  id: number= 0;
  userData$: Observable<User> = this.route.paramMap.pipe(
    map(({params}: any) => params.id),
    switchMap((id: string) => this.httpClient.getUserById(id)),
  )
  ngOnInit(): void {
  }

}
