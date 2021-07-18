import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-show-list',
  templateUrl: './button-show-list.component.html',
  styleUrls: ['./button-show-list.component.scss']
})
export class ButtonShowListComponent implements OnInit {

  @Input('status') status!: string;
  @Input('optionChoice') optionChoice!: string;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.status);
    console.log(this.optionChoice);
    if (this.optionChoice === 'moveCuredPeople') {
      console.log('abc');
    }
  }

}
