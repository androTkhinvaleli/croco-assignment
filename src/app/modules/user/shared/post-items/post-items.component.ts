import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.scss']
})
export class PostItemsComponent implements OnInit {

  @Input() title='';
  @Input() subTitle='';
  @Input() text='';

  constructor() { }

  ngOnInit(): void {
  }

}
