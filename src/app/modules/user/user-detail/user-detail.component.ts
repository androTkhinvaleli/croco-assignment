import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
// import { ObjectEntriesPipe } from 'src/utilities/object-entries.pipe';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  // providers: [ObjectEntriesPipe]
})
export class UserDetailComponent implements OnInit {

  constructor(
    private httpClient: UserService,
    private route: ActivatedRoute,
    // private objectEntries: ObjectEntriesPipe
  ) { }

  id: number= 0;
  userData$: Observable<any> = this.httpClient.getUserById(this.id);
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = +id;
      this.userData$ = this.httpClient.getUserById(this.id);
    }
  }

}
