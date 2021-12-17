import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() name: string = ''; 
  @Input() reverse = false;
  @Input() orange = false;

  @HostBinding('class.reverse') get isReverse() {
    return this.reverse;
  }

  
  @HostBinding('class.orange') get isOrange() {
    return this.orange;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
