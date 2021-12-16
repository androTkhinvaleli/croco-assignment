import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private httpClient: UserService,
    private route: ActivatedRoute,
    // private objectEntries: ObjectEntriesPipe
  ) { }

  id: number= 0;
  userName="";
  posts$: Observable<any> = this.httpClient.getPostsByUserId(this.id);
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = +id;
      this.posts$ = this.httpClient.getPostsByUserId(this.id);
      this.httpClient.getUserById(this.id).subscribe((res) => this.userName = res.name);
    }
  }

}
