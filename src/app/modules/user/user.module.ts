import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ObjectEntriesPipe } from 'src/app/utilities/object-entries.pipe';
import { RecursiveComponentComponent } from './utilities/recursive-component/recursive-component.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    ObjectEntriesPipe,
    RecursiveComponentComponent,
    PostsComponent,
  ],
  // providers: [ObjectEntriesPipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    UserRoutingModule
  ]
})
export class UserModule { }
