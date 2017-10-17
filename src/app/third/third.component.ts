import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit, DoCheck {

  constructor() {
    console.log('Initialization the constructor of ThirdComponent...');
  }

  ngOnInit() {
    console.log('Initialization the ThirdComponent...');
  }

  ngDoCheck(): void {
    console.log('Checking the ThirdComponent...');
  }

}
