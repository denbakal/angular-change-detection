import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-a',
  templateUrl: './third-a.component.html',
  styleUrls: ['./third-a.component.css']
})
export class ThirdAComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('Checking the Third-A-Component...');
  }

}
