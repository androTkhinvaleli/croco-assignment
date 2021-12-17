import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PostsComponent } from './posts/posts.component';
import { UserItemComponent } from './shared/user-item/user-item.component';
import { PostItemsComponent } from './shared/post-items/post-items.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    PostsComponent,
    UserItemComponent,
    PostItemsComponent,
  ],
  // providers: [ObjectEntriesPipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    UserRoutingModule
  ]
})
export class UserModule { }
