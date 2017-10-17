import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-b',
  templateUrl: './third-b.component.html',
  styleUrls: ['./third-b.component.css']
})
export class ThirdBComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('Checking the Third-B-Component...');
  }

}
