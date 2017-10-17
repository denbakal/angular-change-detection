import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent implements OnInit, DoCheck {
  firstName: string;

  constructor() {
    console.log('Initialization the constructor of FirstComponent...');
  }

  ngOnInit() {
    console.log('Initialization the FirstComponent...');
  }

  ngDoCheck(): void {
    console.log('Checking the FirstComponent...');
  }

}
