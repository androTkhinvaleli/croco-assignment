import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursive-component',
  templateUrl: './recursive-component.component.html',
  styleUrls: ['./recursive-component.component.scss']
})
export class RecursiveComponentComponent implements OnInit {

  constructor() { }

  @Input() obj: any={};

  ngOnInit(): void {
  }

}
